import { NextResponse } from "next/server";
import { CONTACT_TOPICS } from "@/lib/contact";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  website?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOPICS: readonly string[] = CONTACT_TOPICS;

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = data.name?.trim();
  const company = data.company?.trim();
  const email = data.email?.trim();
  const subject = data.subject?.trim();
  const message = data.message?.trim();

  if (!name || !company || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, company, email, topic, and message are required." },
      { status: 400 },
    );
  }

  if (!TOPICS.includes(subject)) {
    return NextResponse.json(
      { error: "Please select a valid topic." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const enquiry = {
    name,
    company,
    email,
    website: data.website?.trim() || null,
    subject,
    message,
  };

  // Deliver the enquiry by email when Resend is configured (no SDK dependency —
  // uses the Resend REST API). If the env is not set, fall back to a server log
  // so the form never blocks. Set RESEND_API_KEY, CONTACT_TO_EMAIL and
  // CONTACT_FROM_EMAIL (a verified sender) to enable real delivery.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (apiKey && to && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `New enquiry — ${subject} — ${company}`,
          text: [
            `Name: ${name}`,
            `Company: ${company}`,
            `Email: ${email}`,
            `Website: ${enquiry.website ?? "—"}`,
            `Topic: ${subject}`,
            "",
            message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("[contact] email send failed", res.status, enquiry);
      }
    } catch (err) {
      console.error("[contact] email send error", err, enquiry);
    }
  } else {
    console.log("[contact] new enquiry (email not configured)", enquiry);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
