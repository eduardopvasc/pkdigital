import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  website?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOPICS = [
  "Social Media Strategy",
  "Content & Creative",
  "Community Management",
  "Organic Growth",
  "Analytics & Reporting",
  "General Inquiry",
];

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

  // No email/CRM provider is wired up yet. Log the enquiry server-side and
  // acknowledge. Swap this for an email send (e.g. Resend) or DB write later.
  console.log("[contact] new enquiry", {
    name,
    company,
    email,
    website: data.website?.trim() || null,
    subject,
    message,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
