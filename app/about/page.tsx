"use client";

import {
  Nav,
  Footer,
  Kicker,
  PrimaryButton,
  TextLink,
  Reveal,
  SectionHead,
  PageHero,
  useReduce,
} from "@/components/site";

const BELIEFS = [
  {
    title: "Audience is an asset, not a campaign.",
    copy: "Built deliberately, an owned audience compounds into authority, demand and durable growth. We build for the asset, not the one-off spike.",
  },
  {
    title: "Strategy comes before content.",
    copy: "Output is only as good as the positioning behind it. We decide how a brand should be perceived and distributed before we build anything.",
  },
  {
    title: "Distribution beats volume.",
    copy: "Most brands don't have a content problem — they have a distribution problem. We engineer reach, not just more output.",
  },
  {
    title: "What is not measured cannot compound.",
    copy: "We tie work to goals that matter to the business and feed results back into the system — so growth gets sharper every cycle.",
  },
];

const SERVE = [
  {
    title: "Founders & creators",
    copy: "Operators turning a personal audience into a durable, compounding growth asset.",
  },
  {
    title: "Modern brands",
    copy: "Brands that depend on positioning and distribution to reach the right audience.",
  },
  {
    title: "High-growth companies",
    copy: "Companies that want a senior growth function without building one internally.",
  },
  {
    title: "Organizations",
    copy: "Organizations that need a credible, well-positioned public presence run with rigor.",
  },
];

const COMPANY = [
  { label: "Brand", value: "NOREN Agency" },
  { label: "Operated by", value: "PK DIGITAL LLC" },
  {
    label: "Business address",
    value:
      "2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL 33062, United States",
  },
  { label: "Phone", value: "+1 (954) 676-1050", href: "tel:+19546761050" },
  {
    label: "Email",
    value: "contact@norenagency.com",
    href: "mailto:contact@norenagency.com",
  },
  {
    label: "Business hours",
    value: "Monday–Friday, 9:00 AM – 6:00 PM EST",
  },
];

export default function AboutPage() {
  const reduce = useReduce();
  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="About"
          title="A strategic growth agency built like a firm."
          lead="NOREN Agency exists to give modern brands, founders and creators a senior, strategy-led growth function — run with the rigor of any other part of the business."
        />

        {/* What we believe */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="What we believe"
            title="A point of view on growth."
            lead="Our work starts from a few convictions. They shape every strategy we build and every engagement we take on."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {BELIEFS.map((b) => (
              <Reveal key={b.title} reduce={reduce} className="bg-surface p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {b.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="border-y border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal reduce={reduce} className="md:col-span-6">
                <Kicker>How we work</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                  Every engagement runs through the same system.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Every engagement runs on the NOREN Framework™ and a disciplined
                  four-stage process — Discovery, Strategy, Infrastructure,
                  Optimization. It is how we stay consistent across very
                  different brands.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  <TextLink href="/framework">Explore the framework</TextLink>
                  <TextLink href="/approach">See our process</TextLink>
                </div>
              </Reveal>
              <Reveal reduce={reduce} className="md:col-span-6">
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {[
                    ["01", "Discovery"],
                    ["02", "Strategy"],
                    ["03", "Infrastructure"],
                    ["04", "Optimization"],
                  ].map(([n, name]) => (
                    <div key={name} className="bg-surface-2 p-8">
                      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent">
                        {n}
                      </span>
                      <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="Who we serve"
            title="We work best with a specific kind of partner."
            lead="Focus is deliberate. We partner with operators for whom audience and distribution are a genuine growth lever — not an afterthought."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SERVE.map((s) => (
              <Reveal key={s.title} reduce={reduce} className="bg-surface p-8">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How we operate */}
        <section className="border-y border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <Reveal reduce={reduce} className="md:col-span-5">
                <Kicker>How we operate</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                  Built as a company, run as a partner.
                </h2>
              </Reveal>
              <Reveal reduce={reduce} className="space-y-5 md:col-span-7">
                <p className="text-[15px] leading-relaxed text-muted">
                  NOREN Agency is structured as a company, not a side project. We
                  operate to a defined process, keep a clear scope for every
                  engagement, and treat each brand as a long-term partnership
                  rather than a series of disconnected deliverables.
                </p>
                <p className="text-[15px] leading-relaxed text-muted">
                  That means predictable communication, a single point of
                  contact, and a reporting cadence you can rely on. The
                  framework keeps our work consistent; the partnership model
                  keeps us accountable to the outcomes that matter to you.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Company information */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead reduce={reduce} kicker="Company information" title="The details." />
          <Reveal reduce={reduce} className="mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line">
            <dl>
              {COMPANY.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-2 px-6 py-6 sm:grid-cols-3 sm:gap-6 md:px-8 ${
                    i !== 0 ? "border-t border-line" : ""
                  }`}
                >
                  <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] text-white sm:col-span-2">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors hover:text-white"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal reduce={reduce} className="mt-12">
            <TextLink href="/company-information">Full company information</TextLink>
          </Reveal>
          <Reveal reduce={reduce} className="mt-8">
            <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
