"use client";

import { useState } from "react";
import Link from "next/link";
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
  IconTarget,
  IconUserCheck,
  IconChat,
  IconTrendingUp,
  IconCompass,
  IconLock,
  IconCheck,
  IconDocument,
  IconLayers,
  IconRoute,
  IconBarChart,
} from "@/components/icons";
import {
  CHECKOUT_PROVIDER,
  CHECKOUT_DOMAIN,
} from "@/lib/site-config";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

const DISCOVERY: { icon: Ico; title: string; copy: string }[] = [
  { icon: IconTarget, title: "Search", copy: "Prospects searching for a structured growth or advisory partner." },
  { icon: IconUserCheck, title: "Referrals", copy: "Introductions from past clients, partners, and our network." },
  { icon: IconChat, title: "Social content", copy: "Our published content and presence across relevant platforms." },
  { icon: IconTrendingUp, title: "Paid advertising", copy: "Targeted campaigns that bring the right audience to the site." },
  { icon: IconCompass, title: "Direct visits", copy: "People who know the brand and come straight to norenagency.com." },
];

const CONFIRMATION = ["Order confirmation", "Welcome email", "Client workspace invitation"];

const ONBOARDING: { day: string; title: string; copy: string }[] = [
  { day: "Day 1", title: "Discovery questionnaire", copy: "A short intake captures your goals, brand, channels, and current bottleneck." },
  { day: "Day 2", title: "Kickoff planning", copy: "We review your intake, confirm scope, and prepare your kickoff session." },
  { day: "Day 3", title: "Strategy alignment", copy: "We align on priorities and the first moves before execution begins." },
];

const IMPLEMENTATION: { icon: Ico; title: string; copy: string }[] = [
  { icon: IconDocument, title: "Strategy Brief", copy: "Your positioning, audience, and first-90-day priorities, documented and aligned before execution." },
  { icon: IconLayers, title: "Content Plan", copy: "Content pillars, formats, channel roles, and a publishing cadence your team can run consistently." },
  { icon: IconRoute, title: "Growth Roadmap", copy: "A phased plan from positioning to compounding growth across the engagement." },
  { icon: IconBarChart, title: "Performance Reporting", copy: "A regular reporting rhythm that turns performance into the next set of decisions." },
  { icon: IconChat, title: "Support", copy: "A direct line to your strategist for questions, requests, and reviews throughout the engagement." },
];

const PORTAL_ITEMS = [
  "Deliverables",
  "Progress tracking",
  "Resource library",
  "Support",
  "Reporting",
  "Timeline",
  "Downloads",
];

const JOURNEY: { label: string; sub: string }[] = [
  { label: "Traffic sources", sub: "Search · social · ads · referral" },
  { label: "norenagency.com", sub: "Public website" },
  { label: "Plans", sub: "Choose a service tier" },
  { label: `Secure checkout (${CHECKOUT_PROVIDER})`, sub: CHECKOUT_DOMAIN },
  { label: "Payment confirmation", sub: "Email + workspace invite" },
  { label: "Client portal", sub: "Private workspace" },
  { label: "Onboarding", sub: "Intake & kickoff" },
  { label: "Service delivery", sub: "Deliverables & reporting" },
  { label: "Ongoing support", sub: "Reviews & communication" },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I purchase?",
    a: "Choose a plan on the Plans page and continue to our secure checkout to complete payment.",
  },
  {
    q: "Who processes payments?",
    a: `Payments are securely processed through ${CHECKOUT_PROVIDER}. ${CHECKOUT_DOMAIN} is used solely as the operational checkout domain for selected NOREN Agency transactions. The purchased service remains a NOREN Agency engagement operated by PK DIGITAL LLC.`,
  },
  {
    q: "What happens after payment?",
    a: "You receive an order confirmation, a welcome email, and an invitation to your private client workspace.",
  },
  {
    q: "How quickly do I receive access?",
    a: "Workspace access is provisioned right after payment, and onboarding typically opens within 24 hours.",
  },
  {
    q: "Where are deliverables provided?",
    a: "All deliverables, resources, reporting, and downloads are provided inside your private client portal.",
  },
  {
    q: "How long does support continue?",
    a: "Support continues for the duration of your active engagement, on the cadence agreed for your plan.",
  },
];

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
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClientJourneyPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Client journey"
          title="Client Journey"
          lead="See exactly how clients discover NOREN Agency, purchase a service plan, complete onboarding, and receive ongoing deliverables and support."
        />

        {/* Hero CTA */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8">
            <Reveal reduce={reduce} className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/plans">View Plans</PrimaryButton>
              <GhostButton href="#diagram">See the journey diagram</GhostButton>
            </Reveal>
          </div>
        </section>

        {/* SECTION 1 — Discovery */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="Step 1"
              title="How clients discover NOREN."
              lead="Clients typically arrive through a mix of organic and paid channels — then land on the public site to understand the offer."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {DISCOVERY.map((d) => (
                <Reveal key={d.title} reduce={reduce} className="bg-surface p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{d.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Choose a plan */}
        <section className="border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <SectionHead
                  reduce={reduce}
                  kicker="Step 2"
                  title="Choose a service plan."
                  lead="Visitors review the available service plans and choose the engagement level that best fits their business goals. Pricing is transparent and listed in GBP."
                />
              </div>
              <Reveal reduce={reduce} className="md:col-span-5 md:justify-self-end">
                <PrimaryButton href="/plans">View Plans</PrimaryButton>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Secure checkout */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <Reveal reduce={reduce}>
              <div className="ticks relative overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-12">
                <div
                  className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-30"
                  aria-hidden
                />
                <div className="relative grid gap-8 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-2">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/[0.06] text-accent-strong">
                      <IconLock className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <Kicker>Step 3</Kicker>
                    <h2 className="display-md mt-5">Secure Checkout</h2>
                    <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted">
                      <p>
                        Clients are redirected to our secure checkout to complete
                        payment. Payments are securely processed through{" "}
                        {CHECKOUT_PROVIDER}.
                      </p>
                      <p>
                        {CHECKOUT_DOMAIN} is used solely as the operational
                        checkout domain for selected NOREN Agency transactions.
                        The purchased service remains a NOREN Agency engagement
                        operated by PK DIGITAL LLC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 4 — Immediate confirmation */}
        <section className="border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="Step 4"
              title="Immediate confirmation."
              lead="As soon as payment completes, the client receives everything needed to get started."
            />
            <Reveal reduce={reduce} className="mt-12 max-w-2xl">
              <div className="overflow-hidden rounded-2xl border border-line">
                {CONFIRMATION.map((c, i) => (
                  <div
                    key={c}
                    className={`flex items-center gap-4 bg-surface px-7 py-5 ${
                      i !== 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent-strong">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] text-white">{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 5 — Onboarding */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="Step 5"
              title="Client onboarding."
              lead="A structured first few days takes the engagement from access to aligned strategy."
            />
            <div className="mt-16 border-l border-line-strong">
              {ONBOARDING.map((o) => (
                <Reveal key={o.day} reduce={reduce} className="relative pb-12 pl-8 last:pb-0">
                  <span
                    className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[4.5px] rotate-45 bg-accent"
                    aria-hidden
                  />
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                    {o.day}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-white">
                    {o.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {o.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — Implementation */}
        <section className="border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="Step 6"
              title="Implementation & deliverables."
              lead="Work is produced and delivered into the client workspace. See watermarked examples on the Sample Deliverables page."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {IMPLEMENTATION.map((c) => (
                <Reveal key={c.title} reduce={reduce} className="bg-surface p-7 md:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{c.copy}</p>
                </Reveal>
              ))}
              <Reveal reduce={reduce} className="flex flex-col justify-between bg-accent/[0.04] p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                  See examples
                </span>
                <Link
                  href="/sample-deliverables"
                  className="group mt-6 inline-flex items-center gap-2 text-lg font-medium text-white"
                >
                  Sample deliverables
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Ongoing portal */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionHead
                  reduce={reduce}
                  kicker="Step 7"
                  title="Ongoing client portal."
                  lead="Clients receive ongoing access to a private workspace where the whole engagement lives."
                />
                <Reveal reduce={reduce} className="mt-9">
                  <GhostButton href="/portal">Go to client portal</GhostButton>
                  <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-faint">
                    Client login required
                  </p>
                </Reveal>
              </div>
              <Reveal reduce={reduce} className="md:col-span-7">
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {PORTAL_ITEMS.map((p) => (
                    <div key={p} className="flex items-center gap-3 bg-surface p-6">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-accent-strong">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[15px] font-medium text-white">{p}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 8 — Journey diagram */}
        <section id="diagram" className="scroll-mt-24 border-b border-line bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead
              reduce={reduce}
              kicker="The full journey"
              title="From traffic to ongoing support."
              lead="The complete, end-to-end customer journey — acquisition, purchase, fulfillment, and support — in one view."
            />
            <Reveal reduce={reduce} className="mt-14">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-10">
                <div className="bg-grid bg-grid-fade-c pointer-events-none absolute inset-0 opacity-50" aria-hidden />
                <ol className="relative flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-stretch lg:gap-0">
                  {JOURNEY.map((node, i) => (
                    <li
                      key={node.label}
                      className="flex items-center gap-3 lg:w-1/3 lg:flex-col lg:gap-2 lg:p-2"
                    >
                      <div className="w-full flex-1 rounded-xl border border-line bg-bg px-4 py-4 text-center">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-accent-strong">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="mt-2 font-[family-name:var(--font-display)] text-[15px] font-medium leading-tight text-white">
                          {node.label}
                        </div>
                        <div className="mt-1 text-[12px] leading-snug text-muted">{node.sub}</div>
                      </div>
                      {i < JOURNEY.length - 1 ? (
                        <span className="shrink-0 text-accent/60 lg:hidden" aria-hidden>
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
                <p className="relative mt-8 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] text-faint">
                  <IconLock className="h-3.5 w-3.5 text-accent-strong" />
                  Payments are securely processed through {CHECKOUT_PROVIDER}. Service operated by PK DIGITAL LLC.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <SectionHead reduce={reduce} kicker="Questions" title="Common questions." />
            <Reveal reduce={reduce} className="mt-12 max-w-3xl">
              {FAQ.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </Reveal>
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Ready to get started?"
          lead="Choose a plan to continue to secure checkout, or revisit how the whole journey fits together."
          primaryHref="/plans"
          primaryLabel="View Plans"
          secondaryHref="/how-it-works"
          secondaryLabel="See how it works"
        />
      </main>
      <Footer />
    </>
  );
}
