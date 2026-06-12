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
    title: "Social is a growth channel, not a chore.",
    copy: "Treated seriously, social compounds into brand recognition and authority. Treated as a chore, it produces motion without progress. We build for the first.",
  },
  {
    title: "Strategy comes before content.",
    copy: "A post is only as good as the thinking behind it. We decide what a brand should stand for on social before we decide what it should publish.",
  },
  {
    title: "Consistency beats intensity.",
    copy: "Sporadic bursts of effort rarely build anything. A steady, recognizable presence does. We are built to sustain a cadence, not to chase a moment.",
  },
  {
    title: "What is not measured cannot be defended.",
    copy: "We tie work to goals that matter to the business, and report against them — so social earns its place rather than relying on faith.",
  },
];

const SERVE = [
  {
    title: "Brands & businesses",
    copy: "Brands and businesses that depend on a credible, consistent presence across the channels their audience uses.",
  },
  {
    title: "Companies",
    copy: "Established companies that want a senior social function without building and managing one internally.",
  },
  {
    title: "Founders & professionals",
    copy: "Founders and professionals establishing authority and a clear voice in their field.",
  },
  {
    title: "Organizations",
    copy: "Organizations that know social matters but lack the time or in-house team to run it with the rigor it deserves.",
  },
];

const COMPANY = [
  { label: "Legal entity", value: "PK DIGITAL LLC" },
  {
    label: "Business address",
    value: "2335 E. Atlantic Blvd STE 200, Pompano Beach, FL 33062, United States",
  },
  {
    label: "Business hours",
    value: "Monday–Friday, 9:00 AM – 6:00 PM EST",
  },
  { label: "Contact", value: "contact@pkdigitalllc.com", href: "mailto:contact@pkdigitalllc.com" },
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
          title="A social media agency built like a firm."
          lead="PK Digital exists to give modern brands a senior, strategy-led social function — run with the rigor of any other part of the business."
        />

        {/* What we believe */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="What we believe"
            title="A point of view on social media."
            lead="Our work starts from a few convictions. They shape every strategy we build and every engagement we take on."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {BELIEFS.map((b) => (
              <Reveal key={b.title} reduce={reduce} className="bg-[#0B0C0E] p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-[#F2F1EE]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#9A9DA6]">
                  {b.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="border-y border-white/10 bg-[#0E1014]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal reduce={reduce} className="md:col-span-6">
                <Kicker>How we work</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2F1EE]">
                  Every engagement runs through the same system.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#9A9DA6]">
                  The PK Framework takes a brand from diagnosis to compounding
                  growth in four phases — Audit, Architect, Activate, Amplify.
                  It is how we stay consistent across very different brands.
                </p>
                <div className="mt-8">
                  <TextLink href="/approach">Explore the framework</TextLink>
                </div>
              </Reveal>
              <Reveal reduce={reduce} className="md:col-span-6">
                <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {[
                    ["01", "Audit"],
                    ["02", "Architect"],
                    ["03", "Activate"],
                    ["04", "Amplify"],
                  ].map(([n, name]) => (
                    <div key={name} className="bg-[#0E1014] p-8">
                      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-white">
                        {n}
                      </span>
                      <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[#F2F1EE]">
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
            title="We work best with a specific kind of brand."
            lead="Focus is deliberate. We partner with businesses for which social is a genuine growth lever — not an afterthought."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVE.map((s) => (
              <Reveal key={s.title} reduce={reduce} className="bg-[#0B0C0E] p-8">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#F2F1EE]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A9DA6]">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How we operate */}
        <section className="border-y border-white/10 bg-[#0E1014]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <Reveal reduce={reduce} className="md:col-span-5">
                <Kicker>How we operate</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2F1EE]">
                  Built as a company, run as a partner.
                </h2>
              </Reveal>
              <Reveal reduce={reduce} className="space-y-5 md:col-span-7">
                <p className="text-[15px] leading-relaxed text-[#9A9DA6]">
                  PK Digital is structured as a company, not a side project. We
                  operate to a defined process, keep a clear scope for every
                  engagement, and treat each brand as a long-term partnership
                  rather than a series of disconnected deliverables.
                </p>
                <p className="text-[15px] leading-relaxed text-[#9A9DA6]">
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
          <Reveal reduce={reduce} className="mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
            <dl>
              {COMPANY.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-2 px-6 py-6 sm:grid-cols-3 sm:gap-6 md:px-8 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#6E7079]">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] text-[#F2F1EE] sm:col-span-2">
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
            <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
