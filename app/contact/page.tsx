"use client";

import { useState } from "react";
import {
  Nav,
  Footer,
  Reveal,
  PageHero,
  CompanyInfo,
  useReduce,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/components/site";
import { IconMail, IconPhone, IconRoute } from "@/components/icons";
import { CONTACT_TOPICS } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your name" },
  { name: "company", label: "Company / Website", type: "text", required: true, placeholder: "Company or website" },
  { name: "email", label: "Work Email", type: "email", required: true, placeholder: "you@company.com" },
  { name: "website", label: "Website", type: "url", required: false, placeholder: "https://" },
] as const;

const TOPICS = CONTACT_TOPICS;

const labelCls =
  "font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint";
const inputCls =
  "mt-3 w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-[15px] text-white placeholder:text-faint transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20";

export default function ContactPage() {
  const reduce = useReduce();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    website: "",
    subject: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit() {
    if (
      !form.name ||
      !form.company ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        website: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Contact"
          title="Let's talk about your growth."
          lead="Tell us where you are and where you want to take your audience. We read every message and reply to qualified enquiries within two business days."
        />

        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Form */}
            <Reveal reduce={reduce} className="md:col-span-7">
              {status === "success" ? (
                <div className="panel rounded-2xl border border-line bg-surface p-8 md:p-10">
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-normal tracking-[0.01em] text-white">
                    Thank you — your message is in.
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    We will review it and get back to you within two business
                    days. If it is urgent, email us directly at {CONTACT_EMAIL}.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {FIELDS.map((f) => (
                      <div key={f.name}>
                        <label htmlFor={f.name} className={labelCls}>
                          {f.label}
                          {f.required ? " *" : ""}
                        </label>
                        <input
                          id={f.name}
                          type={f.type}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={form[f.name as keyof typeof form]}
                          onChange={(e) => update(f.name, e.target.value)}
                          className={inputCls}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Topic dropdown */}
                  <div>
                    <label htmlFor="subject" className={labelCls}>
                      What is this about? *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className={`${inputCls} appearance-none pr-11 ${
                          form.subject ? "text-white" : "text-faint"
                        }`}
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {TOPICS.map((t) => (
                          <option
                            key={t}
                            value={t}
                            className="bg-surface text-white"
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                      <span
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                        aria-hidden
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your brand, your goals, and what you are looking for."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#E0876F]">
                      Please complete the required fields and try again. If the
                      problem persists, email {CONTACT_EMAIL}.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black transition-colors duration-300 hover:bg-white/90 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {status === "submitting" ? "Sending…" : "Request a Proposal"}
                    {status !== "submitting" && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>
                </div>
              )}
            </Reveal>

            {/* Sidebar */}
            <Reveal reduce={reduce} className="md:col-span-5">
              <div className="space-y-10 md:border-l md:border-line md:pl-12">
                <div>
                  <h3 className={`${labelCls} flex items-center gap-2`}>
                    <IconMail className="h-3.5 w-3.5 text-muted" />
                    Direct
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-3 block font-[family-name:var(--font-display)] text-2xl font-normal tracking-[0.01em] text-white transition-colors hover:text-muted"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-4 text-sm text-faint">
                    Typical response time: within two business days.
                  </p>
                </div>

                <div>
                  <h3 className={`${labelCls} flex items-center gap-2`}>
                    <IconPhone className="h-3.5 w-3.5 text-muted" />
                    Phone
                  </h3>
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="mt-3 block font-[family-name:var(--font-display)] text-2xl font-normal tracking-[0.01em] text-white transition-colors hover:text-muted"
                  >
                    {CONTACT_PHONE}
                  </a>
                  <p className="mt-4 text-sm text-faint">
                    Monday–Friday, 9:00 AM – 6:00 PM EST.
                  </p>
                </div>

                <div>
                  <h3 className={`${labelCls} flex items-center gap-2`}>
                    <IconRoute className="h-3.5 w-3.5 text-muted" />
                    How it works
                  </h3>
                  <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
                    <li className="flex gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-accent">
                        01
                      </span>
                      Strategy call to understand your business and goals.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-accent">
                        02
                      </span>
                      A short consultation to shape the approach.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-accent">
                        03
                      </span>
                      A tailored proposal — scope, structure, and engagement
                      model.
                    </li>
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CompanyInfo reduce={reduce} />
      </main>
      <Footer />
    </>
  );
}
