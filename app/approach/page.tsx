"use client";

import { useState } from "react";
import {
  Nav,
  Footer,
  Kicker,
  PrimaryButton,
  GhostButton,
  Reveal,
  SectionHead,
  PageHero,
  useReduce,
  PHASES,
} from "@/components/site";

/* Deep detail for each stage: what happens / what you see / what comes out. */
const PHASE_DETAIL: Record<
  string,
  { happens: string; see: string; output: string }
> = {
  Discovery: {
    happens:
      "We run a growth assessment — your current positioning, audience, distribution, and past performance — and interview your team to understand the business behind the brand.",
    see: "A working session and a written diagnosis of where attention, trust and distribution are leaking today.",
    output:
      "A baseline: a clear picture of your audience, your market position, and the gaps worth closing first.",
  },
  Strategy: {
    happens:
      "We translate the diagnosis into market positioning and a growth roadmap — narrative, content pillars, channel roles, and the systems each will run on.",
    see: "A strategy document you can read, question, and sign off on before anything is built.",
    output:
      "A positioning and growth strategy: pillars, a distribution plan, cadence, and the goals each will be measured against.",
  },
  Infrastructure: {
    happens:
      "We build the content systems and distribution channels — the workflows, formats, and mechanisms that let the brand publish and reach consistently at scale.",
    see: "Live systems, work in progress, and a single point of contact who keeps the cadence steady.",
    output:
      "A working growth infrastructure — content operations and distribution running end to end.",
  },
  Optimization: {
    happens:
      "We measure against the goals set in Strategy, report on a regular cycle, and reallocate effort toward what compounds.",
    see: "A scheduled report and review where we walk through results and decide the next cycle together.",
    output:
      "Compounding improvement: an audience system that gets sharper and more effective the longer we run it.",
  },
};

const TIMELINE = [
  {
    label: "Before we start",
    title: "Strategy call & proposal",
    copy: "A strategy call, a short consultation, and a tailored proposal. Once it is signed, onboarding begins.",
  },
  {
    label: "Weeks 1–2",
    title: "Discovery",
    copy: "We get access, run the growth assessment, and deliver the diagnosis. You see exactly where the system is leaking.",
  },
  {
    label: "Weeks 3–4",
    title: "Strategy",
    copy: "We build and present positioning and the growth roadmap. Nothing is built until it is approved.",
  },
  {
    label: "Month 2 onward",
    title: "Infrastructure",
    copy: "Content systems and distribution channels go live at an agreed cadence.",
  },
  {
    label: "Ongoing",
    title: "Optimization",
    copy: "A scheduled reporting and review cycle drives iteration and sustainable, compounding growth.",
  },
];

const FAQ = [
  {
    q: "Do I have to commit to all four stages?",
    a: "The process is designed to run as a sequence — the later stages depend on the earlier ones. Most partnerships begin with Discovery and Strategy, then move into an ongoing Infrastructure and Optimization engagement. We will be clear about scope in the proposal.",
  },
  {
    q: "How long before we see results?",
    a: "Discovery and Strategy typically take the first few weeks. Meaningful, measurable change builds over months, not days — audience growth compounds, and we set expectations honestly rather than promising overnight outcomes.",
  },
  {
    q: "Do you focus on organic growth?",
    a: "Yes. Our work is built around strategy-led, organic growth — positioning, content infrastructure, distribution, and community. We grow audiences sustainably rather than relying on shortcuts.",
  },
  {
    q: "Who owns the work you produce?",
    a: "Deliverables produced under an engagement pass to you, your brand, on the terms set out in the agreement. The specifics live in the statement of work and our Terms of Service.",
  },
  {
    q: "How is the engagement structured?",
    a: "As a structured engagement, scoped to your business. Engagement tiers are published on our plans page; for custom scopes or tailored pricing, we build the engagement around the business in front of us and share it in a private proposal.",
  },
];

function PhaseDeepDive({ reduce }: { reduce: boolean }) {
  return (
    <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
      {PHASES.map((p) => {
        const d = PHASE_DETAIL[p.name];
        return (
          <Reveal key={p.name} reduce={reduce} className="bg-surface p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-accent">
                  {p.n}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {p.copy}
                </p>
              </div>
              <div className="grid gap-6 md:col-span-8 md:grid-cols-3">
                {[
                  { label: "What happens", text: d.happens },
                  { label: "What you see", text: d.see },
                  { label: "What comes out", text: d.output },
                ].map((col) => (
                  <div key={col.label}>
                    <h4 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                      {col.label}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {col.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
          {q}
        </span>
        <span
          className={`shrink-0 text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ApproachPage() {
  const reduce = useReduce();
  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="The engagement"
          title="How We Work"
          lead="Growth run with rigor — a repeatable, four-stage engagement that takes a brand from diagnosis to compounding growth. For the methodology itself, see the NOREN Framework™."
        />

        {/* Overview */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="Overview"
            title="Four stages, in sequence."
            lead="Each stage builds on the one before it. The order is the point: we diagnose before we design, and design before we build."
          />
          <div className="mt-16 grid gap-px overflow-hidden border-t border-line-strong md:grid-cols-4">
            {PHASES.map((p) => (
              <Reveal
                key={p.name}
                reduce={reduce}
                className="border-l border-line py-8 pl-6 pr-4 first:border-l-0 md:border-l-0 md:pl-0 md:pr-8"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-accent">
                  {p.n}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Deep dive */}
        <section className="border-y border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="In detail"
              title="What each stage actually involves."
              lead="For every stage: what we do, what you see along the way, and what you are left with at the end."
            />
            <PhaseDeepDive reduce={reduce} />
          </div>
        </section>

        {/* Onboarding timeline */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="Onboarding"
            title="What the first months look like."
            lead="An indicative sequence — exact timing depends on scope, which we agree on before we begin."
          />
          <div className="mt-16 border-l border-line-strong">
            {TIMELINE.map((t) => (
              <Reveal key={t.title} reduce={reduce} className="relative pl-8 pb-12 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[4.5px] rotate-45 bg-accent"
                  aria-hidden
                />
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                  {t.label}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-white">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {t.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How a partnership works */}
        <section className="border-y border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal reduce={reduce} className="md:col-span-6">
                <Kicker>The partnership</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                  A strategic partnership, not a one-off project.
                </h2>
              </Reveal>
              <Reveal reduce={reduce} className="space-y-5 md:col-span-6">
                <p className="text-[15px] leading-relaxed text-muted">
                  Audience growth rewards consistency, so we work as an ongoing
                  partner rather than a project shop. The engagement follows a
                  steady rhythm: build, distribute, develop the audience, measure,
                  and review.
                </p>
                <p className="text-[15px] leading-relaxed text-muted">
                  You get a single point of contact, a predictable reporting
                  cycle, and a strategy that adapts as we learn. Scope is set in
                  the statement of work and reviewed as the partnership grows.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead reduce={reduce} kicker="Questions" title="About the process." />
          <Reveal reduce={reduce} className="mt-12 max-w-3xl">
            {FAQ.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </section>

        {/* CTA */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-8 md:py-32">
            <Reveal reduce={reduce} className="mx-auto max-w-2xl">
              <div className="flex justify-center">
                <Kicker>Get started</Kicker>
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                See how the process fits your brand.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Start with a strategy call. We will tell you which stage your
                brand needs first.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
                <GhostButton href="/framework">Explore the Framework</GhostButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
