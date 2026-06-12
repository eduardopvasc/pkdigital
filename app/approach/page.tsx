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

/* Deep detail for each phase: what happens / what you see / what comes out. */
const PHASE_DETAIL: Record<
  string,
  { happens: string; see: string; output: string }
> = {
  Audit: {
    happens:
      "We review your current presence, audience, competitors, and past performance, and interview your team to understand the business behind the brand.",
    see: "A working session and a written diagnosis of where the brand stands today — what is working, what is not, and why.",
    output:
      "A baseline: clear picture of the account, the audience, the competitive set, and the gaps worth closing first.",
  },
  Architect: {
    happens:
      "We translate the diagnosis into a strategy — brand positioning for social, content pillars, channel roles, and a roadmap for the months ahead.",
    see: "A strategy document you can read, question, and sign off on before any content is produced.",
    output:
      "A content and channel strategy: pillars, formats, cadence, and the goals each will be measured against.",
  },
  Activate: {
    happens:
      "We produce on-brand content, publish on a consistent cadence, and manage community interactions day to day.",
    see: "A live content calendar, work in progress, and a single point of contact who keeps the cadence steady.",
    output:
      "A consistent, recognizable presence across the channels that matter — produced and managed end to end.",
  },
  Amplify: {
    happens:
      "We measure against the goals set in Architect, report on a regular cycle, and reallocate effort toward what is working.",
    see: "A recurring report and review where we walk through results and decide the next cycle together.",
    output:
      "Compounding improvement: a presence that gets sharper and more effective the longer we run it.",
  },
};

const TIMELINE = [
  {
    label: "Before we start",
    title: "Discovery & proposal",
    copy: "A discovery call, a short consultation, and a tailored proposal. Once it is signed, onboarding begins.",
  },
  {
    label: "Weeks 1–2",
    title: "Audit",
    copy: "We get access, review everything, and deliver the diagnosis. You see exactly where the brand stands.",
  },
  {
    label: "Weeks 3–4",
    title: "Architect",
    copy: "We build and present the strategy. Nothing goes live until it is approved.",
  },
  {
    label: "Month 2 onward",
    title: "Activate",
    copy: "Production and publishing begin at an agreed cadence, with community managed in parallel.",
  },
  {
    label: "Ongoing",
    title: "Amplify",
    copy: "A recurring reporting and review cycle drives optimization and sustainable, compounding growth.",
  },
];

const FAQ = [
  {
    q: "Do I have to commit to all four phases?",
    a: "The framework is designed to run as a sequence — the later phases depend on the earlier ones. Most partnerships begin with Audit and Architect, then move into an ongoing Activate and Amplify retainer. We will be clear about scope in the proposal.",
  },
  {
    q: "How long before we see results?",
    a: "Audit and Architect typically take the first few weeks. Meaningful, measurable change from consistent activation builds over months, not days — social compounds, and we set expectations honestly rather than promising overnight outcomes.",
  },
  {
    q: "Do you focus on organic growth?",
    a: "Yes. Our work is built around strategy-led, organic growth — content, community, and consistency. We grow audiences sustainably rather than relying on shortcuts.",
  },
  {
    q: "Who owns the content you produce?",
    a: "Deliverables produced under an engagement pass to you, your brand, on the terms set out in the agreement. The specifics live in the statement of work and our Terms of Service.",
  },
  {
    q: "How is the engagement structured?",
    a: "As a monthly retainer partnership, scoped to your brand. We do not publish package pricing because we build each engagement around the business in front of us. Pricing is shared in the proposal.",
  },
];

function PhaseDeepDive({ reduce }: { reduce: boolean }) {
  return (
    <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
      {PHASES.map((p) => {
        const d = PHASE_DETAIL[p.name];
        return (
          <Reveal key={p.name} reduce={reduce} className="bg-[#0B0C0E] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-white">
                  {p.n}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#F2F1EE]">
                  {p.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#9A9DA6]">
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
                    <h4 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#6E7079]">
                      {col.label}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-[#9A9DA6]">
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
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-[#F2F1EE]">
          {q}
        </span>
        <span
          className={`shrink-0 text-white transition-transform duration-300 ${
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
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#9A9DA6]">
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
          kicker="How we work"
          title="The PK Framework"
          lead="Social media managed with rigor — a repeatable, four-phase system that takes a brand from diagnosis to compounding growth."
        />

        {/* Overview */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
          <SectionHead
            reduce={reduce}
            kicker="Overview"
            title="Four phases, in sequence."
            lead="Each phase builds on the one before it. The order is the point: we diagnose before we design, and design before we publish."
          />
          <div className="mt-16 grid gap-px overflow-hidden border-t border-white/15 md:grid-cols-4">
            {PHASES.map((p) => (
              <Reveal
                key={p.name}
                reduce={reduce}
                className="border-l border-white/10 py-8 pl-6 pr-4 first:border-l-0 md:border-l-0 md:pl-0 md:pr-8"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-white">
                  {p.n}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#F2F1EE]">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#9A9DA6]">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Deep dive */}
        <section className="border-y border-white/10 bg-[#0E1014]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="In detail"
              title="What each phase actually involves."
              lead="For every phase: what we do, what you see along the way, and what you are left with at the end."
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
          <div className="mt-16 border-l border-white/15">
            {TIMELINE.map((t) => (
              <Reveal key={t.title} reduce={reduce} className="relative pl-8 pb-12 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[4.5px] rounded-full bg-white"
                  aria-hidden
                />
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#6E7079]">
                  {t.label}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-[#F2F1EE]">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#9A9DA6]">
                  {t.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How a partnership works */}
        <section className="border-y border-white/10 bg-[#0E1014]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal reduce={reduce} className="md:col-span-6">
                <Kicker>The partnership</Kicker>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2F1EE]">
                  A retainer relationship, not a one-off project.
                </h2>
              </Reveal>
              <Reveal reduce={reduce} className="space-y-5 md:col-span-6">
                <p className="text-[15px] leading-relaxed text-[#9A9DA6]">
                  Social rewards consistency, so we work as an ongoing partner
                  rather than a project shop. Each month follows a steady rhythm:
                  produce and publish, manage community, measure, and review.
                </p>
                <p className="text-[15px] leading-relaxed text-[#9A9DA6]">
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
          <SectionHead reduce={reduce} kicker="Questions" title="About the framework." />
          <Reveal reduce={reduce} className="mt-12 max-w-3xl">
            {FAQ.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-8 md:py-32">
            <Reveal reduce={reduce} className="mx-auto max-w-2xl">
              <div className="flex justify-center">
                <Kicker>Get started</Kicker>
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#F2F1EE]">
                See how the framework fits your brand.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#9A9DA6]">
                Start with a discovery call. We will tell you which phase your
                brand needs first.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/contact">Book a Discovery Call</PrimaryButton>
                <GhostButton href="/#services">View our services</GhostButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
