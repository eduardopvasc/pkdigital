"use client";

import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  SectionHead,
  CTA,
  FRAMEWORK,
  useReduce,
} from "@/components/site";
import {
  IconTarget,
  IconLayers,
  IconRoute,
  IconUserCheck,
  IconBarChart,
} from "@/components/icons";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

const PILLAR_ICONS: Record<string, Ico> = {
  Positioning: IconTarget,
  "Content Infrastructure": IconLayers,
  "Distribution Engine": IconRoute,
  "Audience Development": IconUserCheck,
  "Growth Intelligence": IconBarChart,
};

const PILLAR_OUTPUT: Record<string, string> = {
  Positioning:
    "A clear position, narrative and message the market can recognize.",
  "Content Infrastructure":
    "Workflows, formats and systems that publish consistently at scale.",
  "Distribution Engine":
    "A defined set of channels and mechanisms that expand reach.",
  "Audience Development":
    "An owned audience and community built on trust, not rented attention.",
  "Growth Intelligence":
    "A measurement and feedback loop that makes every cycle sharper.",
};

export default function FrameworkPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="The method"
          title="The NOREN Framework™"
          lead="Our proprietary methodology for building growth infrastructure — five connected pillars that take a brand from how it is positioned to how it compounds."
        />

        {/* Pillars */}
        {FRAMEWORK.map((p, i) => {
          const Icon = PILLAR_ICONS[p.name];
          return (
            <section
              key={p.n}
              className={`scroll-mt-24 border-b border-line ${
                i % 2 === 1 ? "surface-soft" : ""
              }`}
            >
              <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
                <div className="grid gap-10 md:grid-cols-12 md:items-start">
                  <Reveal reduce={reduce} className="md:col-span-5">
                    <span className="font-display text-outline-accent block text-[clamp(4rem,10vw,8rem)] leading-[0.8]">
                      {p.n}
                    </span>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </div>
                      <h2 className="display-md">{p.name}</h2>
                    </div>
                  </Reveal>

                  <Reveal reduce={reduce} className="md:col-span-7 md:pt-4">
                    <p className="text-lg leading-relaxed text-muted md:text-xl">
                      {p.copy}
                    </p>
                    <div className="mt-8 border-t border-line pt-6">
                      <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-accent-strong">
                        What it produces
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {PILLAR_OUTPUT[p.name]}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}

        {/* How it fits together */}
        <section className="glow-soft border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="One system"
              title="Built to compound, not to be done once."
              lead="The pillars are sequential but never finished — positioning sharpens distribution, distribution feeds audience, and growth intelligence loops back into every layer. Run together, they become an infrastructure your growth can stand on."
            />
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Build Your Growth Infrastructure"
          lead="Start with a strategy call. We'll identify where your audience system is leaking attention, trust or distribution."
          primaryHref="/contact"
          primaryLabel="Book a Strategy Call"
          secondaryHref="/services"
          secondaryLabel="View our services"
        />
      </main>
      <Footer />
    </>
  );
}
