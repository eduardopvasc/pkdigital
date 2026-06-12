"use client";

import Link from "next/link";
import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  SectionHead,
  PrimaryButton,
  CTA,
  BUSINESS_ADDRESS,
  REGISTERED_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  useReduce,
} from "@/components/site";

type Row = {
  label: string;
  lines: string[];
  href?: string;
  note?: string;
};

const ROWS: Row[] = [
  { label: "Legal entity", lines: ["PK DIGITAL LLC"] },
  {
    label: "Entity type",
    lines: ["Limited liability company (LLC)"],
    note: "Registered in the State of New Mexico, United States.",
  },
  {
    label: "Business address",
    lines: BUSINESS_ADDRESS,
    note: "Our primary operating address and the address used for correspondence.",
  },
  {
    label: "Registered address",
    lines: REGISTERED_ADDRESS,
    note: "Our registered office for legal and corporate purposes.",
  },
  {
    label: "Phone",
    lines: [CONTACT_PHONE],
    href: CONTACT_PHONE_HREF,
  },
  {
    label: "Email",
    lines: [CONTACT_EMAIL],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Business hours",
    lines: ["Monday–Friday", "9:00 AM – 6:00 PM EST"],
  },
];

export default function CompanyInformationPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Company information"
          title="A registered, contactable company."
          lead="PK Digital is operated by PK DIGITAL LLC, a registered US company. The same details appear consistently across the site — no anonymity, no ambiguity."
        />

        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="The details"
            title="Corporate details, in full."
          />
          <Reveal
            reduce={reduce}
            className="mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line"
          >
            <dl>
              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-2 px-6 py-7 sm:grid-cols-3 sm:gap-6 md:px-8 ${
                    i !== 0 ? "border-t border-line" : ""
                  }`}
                >
                  <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] text-white sm:col-span-2">
                    {row.lines.map((line) =>
                      row.href ? (
                        <a
                          key={line}
                          href={row.href}
                          className="block transition-colors hover:text-muted"
                        >
                          {line}
                        </a>
                      ) : (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ),
                    )}
                    {row.note ? (
                      <span className="mt-2 block text-[13px] leading-relaxed text-faint">
                        {row.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal reduce={reduce} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
            <Link
              href="/terms"
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
            >
              Read our legal terms →
            </Link>
          </Reveal>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get in touch"
          title="Talk to a real company."
          lead="Reach a monitored corporate inbox. We reply to qualified enquiries within two business days."
          primaryHref="/contact"
          primaryLabel="Contact us"
          secondaryHref="/services"
          secondaryLabel="View our services"
        />
      </main>
      <Footer />
    </>
  );
}
