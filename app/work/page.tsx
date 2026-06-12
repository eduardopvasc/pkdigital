"use client";

import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  CapabilityCard,
  CompanyInfo,
  CTA,
  CAPABILITIES,
  useReduce,
} from "@/components/site";

export default function WorkPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Our work"
          title="What we produce."
          lead="The formats and systems we deliver across an engagement — content systems, short-form video, channel architecture, creative direction, community, and reporting. Examples of the work itself, not client projects."
        />

        <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-8 md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <CapabilityCard
                key={c.slug}
                capability={c}
                reduce={reduce}
                index={i}
              />
            ))}
          </div>

          {/* Honest framing */}
          <Reveal reduce={reduce} className="mt-16">
            <div className="rounded-2xl border border-line bg-surface/40 p-6 md:p-8">
              <p className="max-w-3xl text-sm leading-relaxed text-faint">
                <span className="text-muted">A note on this page.</span> The
                examples above illustrate the formats and systems we produce and
                how the work is structured. They are not client case studies,
                and no results or metrics are claimed. Specific client work is
                shared privately, under NDA, during a proposal.
              </p>
            </div>
          </Reveal>
        </section>

        <CompanyInfo reduce={reduce} />

        <CTA
          reduce={reduce}
          kicker="Work with us"
          title="Let's build your social presence."
          lead="Tell us about your brand and goals. We'll show you how we'd approach the work, in a tailored proposal."
          primaryHref="/contact"
          primaryLabel="Request a Proposal"
          secondaryHref="/approach"
          secondaryLabel="See the framework"
        />
      </main>
      <Footer />
    </>
  );
}
