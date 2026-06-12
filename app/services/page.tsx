"use client";

import Link from "next/link";
import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  SectionHead,
  CompanyInfo,
  CTA,
  SERVICES,
  useReduce,
} from "@/components/site";
import { IconCheck } from "@/components/icons";

export default function ServicesPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Services"
          title="A complete social media function."
          lead="Five disciplines, delivered as one accountable partnership — from strategy and content through to community, growth, and reporting. Each is scoped to your brand in a written proposal."
        />

        {/* Quick index */}
        <section className="border-b border-line bg-surface">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-3 px-6 py-8 md:px-8">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-line bg-white/[0.02] px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-accent/45 hover:text-accent-strong"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Service sections */}
        {SERVICES.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 border-b border-line ${
              i % 2 === 1 ? "surface-soft" : ""
            }`}
          >
            <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
              <div className="grid gap-12 md:grid-cols-12">
                <Reveal reduce={reduce} className="md:col-span-5">
                  <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display-lg mt-4">{s.name}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">
                    {s.tagline}
                  </p>
                </Reveal>

                <Reveal reduce={reduce} className="md:col-span-7">
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    {s.description}
                  </p>

                  <h3 className="mt-10 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-faint">
                    What it includes
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-accent-strong">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
                    >
                      <span className="h-px w-6 bg-accent/60 transition-all duration-300 group-hover:w-9 group-hover:bg-accent" />
                      Discuss {s.name}
                      <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}

        {/* How services are scoped */}
        <section className="glow-soft border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="How we engage"
              title="One retainer, scoped to your brand."
              lead="Services are delivered together as a monthly retainer, defined in a written statement of work — with a clear cadence, agreed deliverables, and a single senior point of contact. We don't publish package pricing; each engagement is scoped to the work involved and shared in a tailored proposal."
            />
          </div>
        </section>

        <CompanyInfo reduce={reduce} />

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Tell us where you want social to go."
          lead="Start with a discovery call. We'll recommend where to begin and exactly how we'd run it."
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
