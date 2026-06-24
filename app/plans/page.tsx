"use client";

import Link from "next/link";
import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  CTA,
  useReduce,
} from "@/components/site";
import { IconCheck } from "@/components/icons";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  for: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Foundation",
    price: "169",
    cadence: "/ month",
    for: "For brands establishing their first structured, accountable growth system.",
    features: [
      "Growth positioning review",
      "Acquisition channel planning",
      "CRM and retention basics",
      "Monthly performance overview",
      "Strategic resource access",
      "Cancel anytime",
    ],
  },
  {
    name: "Growth",
    price: "229",
    cadence: "/ month",
    for: "For brands ready to tighten execution and scale output with consistency.",
    featured: true,
    badge: "Most popular",
    features: [
      "Everything in Foundation",
      "Paid acquisition guidance",
      "CRM workflow planning",
      "Content infrastructure support",
      "Monthly strategy review",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "398",
    cadence: "/ month",
    for: "For operators who need deeper structure across acquisition, conversion and retention.",
    features: [
      "Everything in Growth",
      "Multi-channel growth planning",
      "Conversion and funnel review",
      "Advanced CRM and retention systems",
      "Bi-weekly strategy review",
      "Performance-led execution roadmap",
    ],
  },
  {
    name: "Operator",
    price: "458",
    cadence: "/ month",
    for: "For brands that want a complete, senior-led growth operating layer.",
    features: [
      "Everything in Scale",
      "Full growth system mapping",
      "Acquisition and retention infrastructure",
      "Advanced reporting structure",
      "Weekly optimization review",
      "Custom execution priorities",
    ],
  },
];

const PLAN_NOTES = [
  "Monthly retainer · GBP",
  "Digital service retainers",
  "Scope & cadence vary by tier",
  "Custom structures on request",
];

function PlanCard({ plan, reduce }: { plan: Plan; reduce: boolean }) {
  const featured = Boolean(plan.featured);
  return (
    <Reveal reduce={reduce} className="h-full">
      <div
        className={`panel relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 md:p-8 ${
          featured
            ? "border-accent/45 bg-elevated shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9),0_0_90px_-30px_rgba(147,168,199,0.35)]"
            : "border-line bg-surface"
        }`}
      >
        {/* Featured tier — cold accent hairline along the top edge. */}
        {featured ? (
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            aria-hidden
          />
        ) : null}

        {plan.badge ? (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-bg">
            {plan.badge}
          </span>
        ) : null}

        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-faint">
          Monthly retainer
        </span>
        <h2 className="display-md mt-3">{plan.name}</h2>
        <p className="mt-3 min-h-[3.25rem] text-[14px] leading-relaxed text-muted">
          {plan.for}
        </p>

        <div className="mt-7 flex items-baseline gap-1">
          <span className="font-display text-2xl leading-none text-accent-strong">
            £
          </span>
          <span className="font-display text-[3.25rem] leading-none tracking-[-0.03em] text-white">
            {plan.price}
          </span>
          <span className="ml-1 text-sm text-muted">{plan.cadence}</span>
        </div>

        <ul className="mt-8 flex-1 space-y-3.5">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[14.5px] leading-relaxed text-muted"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-accent-strong">
                <IconCheck className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 ${
            featured
              ? "btn-glow bg-white text-black hover:bg-white/90"
              : "btn-ghost border border-line bg-white/[0.02] text-white hover:border-accent/45 hover:bg-white/[0.05]"
          }`}
        >
          Choose {plan.name}
          <span
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              featured ? "" : "text-accent"
            }`}
          >
            →
          </span>
        </Link>
      </div>
    </Reveal>
  );
}

export default function PlansPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Plans"
          title="Simple plans for structured growth."
          lead="Transparent monthly access for brands that want clearer strategy, stronger execution, and scalable growth systems."
        />

        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            {/* Premium retainer micro-note */}
            <Reveal reduce={reduce} className="mb-14">
              <div className="flex flex-wrap justify-center gap-2.5">
                {PLAN_NOTES.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.18em] text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {n}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PLANS.map((p) => (
                <PlanCard key={p.name} plan={p} reduce={reduce} />
              ))}
            </div>

            <Reveal reduce={reduce} className="mt-12">
              <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-mono)] text-[11px] leading-relaxed tracking-[0.04em] text-faint">
                All plans are monthly digital service retainers billed in GBP.
                Scope, channel mix, and delivery cadence vary by tier. Prices
                exclude paid media spend, third-party tools, and custom
                implementation. Custom structures are available on request.
              </p>
            </Reveal>

            {/* Custom structure block */}
            <Reveal reduce={reduce} className="mt-12">
              <div className="ticks mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface/60 p-8 md:flex-row md:items-center md:p-10">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-white">
                    Need a custom structure?
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                    For brands with different budgets, channel priorities, or
                    execution needs, Noren can structure a custom monthly
                    engagement.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-glow group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black transition-colors duration-300 hover:bg-white/90"
                >
                  Request a custom proposal
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Build Your Growth Infrastructure"
          lead="Start with a strategy call. We'll recommend the plan that fits where your brand is today."
          primaryHref="/contact"
          primaryLabel="Book a Strategy Call"
          secondaryHref="/framework"
          secondaryLabel="Explore the Framework"
        />
      </main>
      <Footer />
    </>
  );
}
