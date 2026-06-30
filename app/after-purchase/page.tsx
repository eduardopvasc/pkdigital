"use client";

import {
  Nav,
  Footer,
  PageHero,
  SectionHead,
  Reveal,
  CTA,
  useReduce,
} from "@/components/site";
import {
  IconUserCheck,
  IconRoute,
  IconCalendar,
  IconDocument,
  IconBarChart,
  IconChat,
} from "@/components/icons";
import { CHECKOUT_PROVIDER } from "@/lib/site-config";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

const TIMELINE: { when: string; title: string; copy: string }[] = [
  {
    when: "Immediately",
    title: "Payment confirmed & access provisioned",
    copy: `Once checkout completes through ${CHECKOUT_PROVIDER}, your private client workspace is provisioned and your sign-in is issued.`,
  },
  {
    when: "Within 24 hours",
    title: "Welcome & onboarding opened",
    copy: "You receive your workspace login and a short intake (onboarding) so we can confirm scope and gather the access we need.",
  },
  {
    when: "Days 1–3",
    title: "Kickoff scheduled",
    copy: "We review your intake, confirm priorities, and book your kickoff working session with your strategist.",
  },
  {
    when: "Week 1–2",
    title: "First deliverables begin",
    copy: "Strategy and the first deliverables move into your workspace, where you can review and sign off before anything is built.",
  },
  {
    when: "Ongoing",
    title: "Delivery, reporting & review",
    copy: "Deliverables, reporting, and review sessions continue on an agreed cadence — all tracked in your workspace.",
  },
];

const WHAT: { icon: Ico; title: string; copy: string }[] = [
  {
    icon: IconUserCheck,
    title: "Client portal access",
    copy: "A private workspace at norenagency.com/portal with your engagement, resources, and support in one place.",
  },
  {
    icon: IconRoute,
    title: "Structured onboarding",
    copy: "A short intake that sets your scope and priorities, saved to your workspace as you go.",
  },
  {
    icon: IconCalendar,
    title: "Kickoff session",
    copy: "A working call with your strategist to align on goals, scope, and the first moves.",
  },
  {
    icon: IconDocument,
    title: "Deliverables",
    copy: "Strategy briefs, content plans, growth roadmaps, and implementation docs delivered into the workspace.",
  },
  {
    icon: IconBarChart,
    title: "Reporting & reviews",
    copy: "A regular reporting and review rhythm that turns performance into the next decisions.",
  },
  {
    icon: IconChat,
    title: "Direct support",
    copy: "A direct line to your strategist for questions, requests, and reviews throughout the engagement.",
  },
];

export default function AfterPurchasePage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="After purchase"
          title="What happens after you check out."
          lead="Exactly what to expect once payment completes — access, onboarding, kickoff, deliverables, reporting, and support, with a clear timeline."
        />

        {/* Timeline */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="The timeline"
              title="From payment to delivery."
              lead="An indicative sequence — exact timing depends on scope, confirmed during onboarding."
            />
            <div className="mt-16 border-l border-line-strong">
              {TIMELINE.map((t) => (
                <Reveal
                  key={t.title}
                  reduce={reduce}
                  className="relative pb-12 pl-8 last:pb-0"
                >
                  <span
                    className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[4.5px] rotate-45 bg-accent"
                    aria-hidden
                  />
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                    {t.when}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {t.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="What you receive"
              title="Everything your engagement runs on."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {WHAT.map((w) => (
                <Reveal key={w.title} reduce={reduce} className="bg-surface p-7 md:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                    {w.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="See it for yourself"
          title="Preview the work and the workspace."
          lead="Browse sample deliverables, or review how the whole journey fits together."
          primaryHref="/sample-deliverables"
          primaryLabel="View sample deliverables"
          secondaryHref="/how-it-works"
          secondaryLabel="See how it works"
        />
      </main>
      <Footer />
    </>
  );
}
