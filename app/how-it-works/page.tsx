"use client";

import {
  Nav,
  Footer,
  PageHero,
  SectionHead,
  Kicker,
  Reveal,
  PrimaryButton,
  GhostButton,
  CTA,
  useReduce,
} from "@/components/site";
import {
  IconCompass,
  IconLayers,
  IconCheck,
  IconLock,
  IconUserCheck,
  IconRoute,
  IconBarChart,
} from "@/components/icons";
import {
  CHECKOUT_URL,
  CHECKOUT_PROVIDER,
  CHECKOUT_DISCLOSURE,
} from "@/lib/site-config";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

/* Linear funnel — the one-glance flow Whop asked to see. */
const FUNNEL: { label: string; sub: string }[] = [
  { label: "Traffic", sub: "Search · social · referral" },
  { label: "norenagency.com", sub: "Services, framework, plans" },
  { label: "Plans", sub: "Choose an engagement tier" },
  { label: `${CHECKOUT_PROVIDER} checkout`, sub: "Secure payment" },
  { label: "Client portal", sub: "norenagency.com/portal" },
  { label: "Service delivery", sub: "Onboarding → deliverables" },
];

/* Detailed journey */
const JOURNEY: { icon: Ico; n: string; title: string; copy: string; where: string }[] = [
  {
    icon: IconCompass,
    n: "01",
    title: "Discover NOREN",
    copy: "Prospective clients find us through search, referrals, and social, and land on the public site to understand what we do.",
    where: "Traffic → norenagency.com",
  },
  {
    icon: IconLayers,
    n: "02",
    title: "Explore the offer",
    copy: "They review our services, the NOREN Framework, deliverables, and sample work to decide if it fits their growth goals.",
    where: "/services · /framework · /sample-deliverables",
  },
  {
    icon: IconCheck,
    n: "03",
    title: "Choose an engagement tier",
    copy: "Transparent tiers are listed in GBP on the Plans page. The client selects the tier that matches their stage and scope.",
    where: "/plans",
  },
  {
    icon: IconLock,
    n: "04",
    title: "Secure checkout via " + CHECKOUT_PROVIDER,
    copy: "The plan CTA sends the client to our secure checkout to complete a one-time engagement purchase. " + CHECKOUT_DISCLOSURE,
    where: "Whop checkout",
  },
  {
    icon: IconUserCheck,
    n: "05",
    title: "Client portal access",
    copy: "After payment, the client receives private workspace access where onboarding, status, deliverables, and support live together.",
    where: "norenagency.com/portal",
  },
  {
    icon: IconRoute,
    n: "06",
    title: "Onboarding & kickoff",
    copy: "The client completes a short intake; we confirm scope, gather access, and schedule kickoff to begin the engagement.",
    where: "Portal · /after-purchase",
  },
  {
    icon: IconBarChart,
    n: "07",
    title: "Service delivery",
    copy: "Deliverables, reporting, and reviews are produced and made available in the workspace on an agreed cadence.",
    where: "Portal → deliverables & reporting",
  },
];

export default function HowItWorksPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="How it works"
          title="From first visit to delivered work."
          lead="The complete client journey — how prospects find NOREN, choose a plan, pay securely through Whop, and receive the engagement inside their private workspace."
        />

        {/* ---------------- Funnel diagram ---------------- */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
            <Reveal reduce={reduce}>
              <Kicker>The funnel, at a glance</Kicker>
            </Reveal>
            <Reveal reduce={reduce} className="mt-10">
              <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
                {FUNNEL.map((node, i) => (
                  <li key={node.label} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-0">
                    <div className="relative flex-1 rounded-xl border border-line bg-surface px-4 py-4 text-center lg:w-full">
                      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-accent-strong">
                        Step {i + 1}
                      </span>
                      <div className="mt-2 font-[family-name:var(--font-display)] text-[15px] font-medium text-white">
                        {node.label}
                      </div>
                      <div className="mt-1 text-[12px] leading-snug text-muted">
                        {node.sub}
                      </div>
                    </div>
                    {i < FUNNEL.length - 1 ? (
                      <span
                        className="shrink-0 text-accent/60 lg:rotate-0 lg:px-1"
                        aria-hidden
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal reduce={reduce} className="mt-8">
              <p className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] text-faint">
                <IconLock className="h-3.5 w-3.5 text-accent-strong" />
                {CHECKOUT_DISCLOSURE}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Detailed journey ---------------- */}
        <section className="border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="Step by step"
              title="The client journey in full."
              lead="Each stage is a real step in how an engagement is acquired and delivered — nothing hidden, nothing off-platform."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
              {JOURNEY.map((s) => (
                <Reveal key={s.n} reduce={reduce} className="bg-surface p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-outline-accent text-[2.5rem] leading-none">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="display-md mt-6 text-[1.35rem]">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {s.copy}
                  </p>
                  <p className="mt-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-faint">
                    {s.where}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Inline CTA → plans/checkout ---------------- */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-16 text-center md:px-8 md:py-24">
            <Reveal reduce={reduce} className="mx-auto max-w-2xl">
              <h2 className="display-lg">Ready to start?</h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:text-base">
                Choose a plan to continue to secure checkout, or see exactly what
                you receive after purchase.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/plans">View plans</PrimaryButton>
                <GhostButton href="/after-purchase">What happens after purchase</GhostButton>
              </div>
              <p className="mt-7 flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-[11px] text-faint">
                <IconLock className="h-3.5 w-3.5 text-accent-strong" />
                Secure checkout ·{" "}
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 transition-colors hover:text-white"
                >
                  {CHECKOUT_PROVIDER}
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Questions first?"
          title="Not sure which tier fits?"
          lead="Tell us where you are and we’ll point you to the right starting point before you check out."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/sample-deliverables"
          secondaryLabel="See sample deliverables"
        />
      </main>
      <Footer />
    </>
  );
}
