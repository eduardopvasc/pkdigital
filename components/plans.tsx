/**
 * Shared pricing UI for NOREN — used by both the /plans page and the homepage
 * pricing section so the tiers, prices, features and CTAs never drift apart.
 *
 * Copy is intentionally neutral about billing cadence: NOREN tiers are framed
 * as service engagement tiers (compatible with a one-time checkout), with no
 * "monthly", "per month", "billed monthly" or "retainer" language.
 */

import Link from "next/link";
import { Reveal } from "@/components/site";
import { IconCheck, IconLock } from "@/components/icons";
import {
  checkoutUrlFor,
  CHECKOUT_PROVIDER,
  CHECKOUT_DISCLOSURE,
} from "@/lib/site-config";

export type Plan = {
  name: string;
  price: string;
  for: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Foundation",
    price: "169",
    for: "For brands establishing their first structured, accountable growth system.",
    features: [
      "Growth positioning review",
      "Acquisition channel planning",
      "CRM and retention basics",
      "Performance overview",
      "Strategic resource access",
      "Flexible engagement",
    ],
  },
  {
    name: "Growth",
    price: "229",
    for: "For brands ready to tighten execution and scale output with consistency.",
    featured: true,
    badge: "Most popular",
    features: [
      "Everything in Foundation",
      "Paid acquisition guidance",
      "CRM workflow planning",
      "Content infrastructure support",
      "Strategy review",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "398",
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

export const PLAN_NOTES = [
  "Pricing in GBP",
  "Service engagement tiers",
  "Scope varies by tier",
  "Custom structures on request",
];

export const PRICING_NOTE =
  "Prices are listed in GBP and reflect Noren service engagement tiers. Paid media spend, third-party tools, and custom implementation costs are excluded. For custom scopes, alternative structures, or tailored pricing, contact Noren Agency for a private proposal.";

export function PlanCard({ plan, reduce }: { plan: Plan; reduce: boolean }) {
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
          Engagement tier
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

        <a
          href={checkoutUrlFor(plan.name.toLowerCase())}
          target="_blank"
          rel="noopener noreferrer"
          className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 ${
            featured
              ? "btn-glow bg-white text-black hover:bg-white/90"
              : "btn-ghost border border-line bg-white/[0.02] text-white hover:border-accent/45 hover:bg-white/[0.05]"
          }`}
        >
          Get {plan.name}
          <span
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              featured ? "" : "text-accent"
            }`}
          >
            →
          </span>
        </a>
        <p className="mt-3 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint">
          Secure checkout · {CHECKOUT_PROVIDER}
        </p>
        <Link
          href="/contact"
          className="mt-3 block text-center text-[12.5px] text-muted underline-offset-2 transition-colors hover:text-white"
        >
          Questions first? Talk to us
        </Link>
      </div>
    </Reveal>
  );
}

/**
 * Full pricing body: tier chips → 4-card grid → note → custom-structure block.
 * The section heading (title/subtitle) is supplied by the page that renders
 * this, so /plans and the homepage can frame it differently while sharing the
 * exact same cards, prices and copy.
 */
export function PricingPlans({ reduce }: { reduce: boolean }) {
  return (
    <>
      {/* Tier chips */}
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

      <Reveal reduce={reduce} className="mt-10">
        <p className="mx-auto flex max-w-xl items-center justify-center gap-2 rounded-full border border-line bg-white/[0.02] px-5 py-3 text-center font-[family-name:var(--font-mono)] text-[11px] leading-relaxed tracking-[0.04em] text-muted">
          <IconLock className="h-3.5 w-3.5 shrink-0 text-accent-strong" />
          {CHECKOUT_DISCLOSURE}
        </p>
      </Reveal>

      <Reveal reduce={reduce} className="mt-6">
        <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-mono)] text-[11px] leading-relaxed tracking-[0.04em] text-faint">
          {PRICING_NOTE}
        </p>
      </Reveal>

      {/* Custom structure block — secondary CTA */}
      <Reveal reduce={reduce} className="mt-12">
        <div className="ticks mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface/60 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-white">
              Need a custom structure?
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
              For brands with different budgets, channel priorities, or execution
              needs, Noren can structure a custom growth engagement.
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
    </>
  );
}
