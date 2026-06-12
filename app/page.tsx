"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Nav,
  Footer,
  Kicker,
  PrimaryButton,
  GhostButton,
  TextLink,
  Reveal,
  SectionHead,
  CapabilityCard,
  CAPABILITIES,
  SERVICES,
  TrustBand,
  CompanyInfo,
  PHASES,
  useReduce,
} from "@/components/site";
import {
  IconTarget,
  IconDocument,
  IconLayers,
  IconSparkle,
  IconChat,
  IconTrendingUp,
  IconUserCheck,
  IconCompass,
  IconRoute,
  IconBarChart,
  IconInstagram,
  IconTikTok,
  IconYouTube,
  IconLinkedIn,
  IconFacebook,
  IconPinterest,
  IconThreads,
} from "@/components/icons";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PLATFORMS: { name: string; icon: Ico }[] = [
  { name: "Instagram", icon: IconInstagram },
  { name: "TikTok", icon: IconTikTok },
  { name: "YouTube", icon: IconYouTube },
  { name: "LinkedIn", icon: IconLinkedIn },
  { name: "Facebook", icon: IconFacebook },
  { name: "Pinterest", icon: IconPinterest },
  { name: "Threads", icon: IconThreads },
];

const AUDIENCE = [
  {
    title: "Brands",
    copy: "Brands that want a senior, strategy-led social function rather than ad-hoc posting.",
  },
  {
    title: "Businesses",
    copy: "Businesses that depend on a credible, consistent presence across their channels.",
  },
  {
    title: "Companies",
    copy: "Companies that want social run as a structured, accountable operation.",
  },
  {
    title: "Founders",
    copy: "Founders building a personal and company presence in parallel.",
  },
  {
    title: "Professionals",
    copy: "Professionals establishing authority and a clear voice in their field.",
  },
  {
    title: "Organizations",
    copy: "Organizations that need a consistent, well-managed public presence.",
  },
];

const SPECIALISMS: { title: string; copy: string; icon: Ico }[] = [
  {
    title: "Social Media Strategy",
    icon: IconTarget,
    copy: "Positioning, channel roles, and a measurable plan built around your goals.",
  },
  {
    title: "Content Strategy",
    icon: IconDocument,
    copy: "What to say and why — pillars, themes, and a content roadmap with intent.",
  },
  {
    title: "Content Production",
    icon: IconLayers,
    copy: "On-brand content produced end to end: copy, design, and short-form video.",
  },
  {
    title: "Creative Direction",
    icon: IconSparkle,
    copy: "A defined art direction and tone applied consistently across every asset.",
  },
  {
    title: "Community Management",
    icon: IconChat,
    copy: "Day-to-day publishing, engagement, and conversation in your brand's voice.",
  },
  {
    title: "Organic Growth",
    icon: IconTrendingUp,
    copy: "Sustainable audience growth driven by strategy and consistency, not shortcuts.",
  },
  {
    title: "Personal Branding",
    icon: IconUserCheck,
    copy: "Positioning founders and professionals as a credible voice in their field.",
  },
  {
    title: "Audience Development",
    icon: IconCompass,
    copy: "Reaching and retaining the right audience across the channels that matter.",
  },
  {
    title: "Social Media Operations",
    icon: IconRoute,
    copy: "The systems and cadence that keep a brand publishing reliably, month after month.",
  },
  {
    title: "Analytics & Reporting",
    icon: IconBarChart,
    copy: "A regular reporting rhythm that turns performance into clear decisions.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Strategy before content",
    copy: "We decide what a brand should stand for on social before we produce a single post. Thinking first, output second.",
  },
  {
    n: "02",
    title: "Consistency over intensity",
    copy: "A steady, recognizable presence compounds. We are built to sustain a cadence, not to chase a single moment.",
  },
  {
    n: "03",
    title: "Scope agreed in writing",
    copy: "Every engagement starts from a written statement of work. Clear deliverables and cadence — no ambiguity, no scope creep.",
  },
  {
    n: "04",
    title: "Measured against goals",
    copy: "We tie the work to goals that matter and report against them on a regular cycle, so social stays accountable.",
  },
];

const PHASE_ICONS: Record<string, Ico> = {
  Audit: IconBarChart,
  Architect: IconLayers,
  Activate: IconChat,
  Amplify: IconTrendingUp,
};

/* Refined icon per service — used by the redesigned Home services section. */
const SERVICE_ICONS: Record<string, Ico> = {
  "social-media-strategy": IconTarget,
  "content-and-creative": IconSparkle,
  "community-management": IconChat,
  "organic-growth": IconTrendingUp,
  "analytics-reporting": IconBarChart,
};

const FAQ = [
  {
    q: "How are engagements structured?",
    a: "As a monthly retainer scoped to your brand and defined in a written statement of work — with a clear cadence, agreed deliverables, and a single senior point of contact.",
  },
  {
    q: "How is pricing determined?",
    a: "We don't publish package pricing. Each engagement is scoped to the brand and the work involved, and the figure is shared in a tailored proposal after a discovery call.",
  },
  {
    q: "Which platforms do you cover?",
    a: "The channels your audience actually uses — typically Instagram, TikTok, YouTube, LinkedIn, and Threads. We recommend the right mix during the strategy phase rather than spreading thin.",
  },
  {
    q: "How long before results show?",
    a: "Strategy lands in the first weeks; meaningful, sustained change builds over months. Social compounds, and we set expectations honestly rather than promising overnight results.",
  },
  {
    q: "Who will we be working with?",
    a: "A senior point of contact who owns the relationship end to end — no hand-offs to junior staff and no rotating account managers.",
  },
  {
    q: "Do we own the content you produce?",
    a: "Yes. Final deliverables produced under an engagement are assigned to your brand on the terms set out in the agreement and statement of work.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                       */
/* ------------------------------------------------------------------ */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line first:border-t first:border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-white md:text-xl">{q}</span>
        <span
          className={`shrink-0 text-2xl font-light text-muted transition-transform duration-300 ${
            open ? "rotate-45 text-white" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        {/* ---------------- Hero (asymmetric editorial split) ---------------- */}
        <section className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-line">
          <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[70%]"
            style={{
              background:
                "radial-gradient(55% 60% at 18% 38%, rgba(147,168,199,0.10), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-40">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
              {/* Left — headline */}
              <div className="lg:col-span-7">
                <Reveal reduce={reduce}>
                  <Kicker>NOREN Agency — Social Media Agency</Kicker>
                </Reveal>

                <Reveal reduce={reduce} delay={0.05}>
                  <h1 className="display-xl mt-8">
                    Social media,
                    <br />
                    content systems,
                    <br />
                    <span className="display-em">brand growth.</span>
                  </h1>
                </Reveal>

                <Reveal reduce={reduce} delay={0.1}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                    We help brands, businesses, and founders build a stronger
                    social presence — strategy, content, and community, run as
                    one accountable partnership.
                  </p>
                </Reveal>

                <Reveal reduce={reduce} delay={0.15}>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
                    <GhostButton href="/approach">Explore the framework</GhostButton>
                  </div>
                </Reveal>
              </div>

              {/* Right — geometric strategy panel */}
              <Reveal reduce={reduce} delay={0.12} className="lg:col-span-5">
                <div className="ticks relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm md:p-8">
                  <div
                    className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-40"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-faint">
                      <span className="flex items-center gap-2 text-accent-strong">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        What we run
                      </span>
                      <span>NOREN · 2026</span>
                    </div>

                    <ul className="mt-6">
                      {SERVICES.map((s, i) => (
                        <li key={s.slug} className="border-t border-line first:border-t-0">
                          <Link
                            href={`/services#${s.slug}`}
                            className="group flex items-center gap-4 py-4"
                          >
                            <span className="font-display w-8 text-lg leading-none text-accent-strong">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 text-[15px] font-medium text-white transition-colors group-hover:text-accent-strong">
                              {s.name}
                            </span>
                            <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Platforms marquee ---------------- */}
        <div className="marquee relative overflow-hidden border-y border-line bg-surface">
          <div className="flex w-max marquee-track items-center py-6 md:py-8">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <span key={`${p.name}-${i}`} className="flex shrink-0 items-center">
                <span className="group flex cursor-default items-center gap-3 px-6 text-muted transition-colors duration-300 hover:text-white md:px-9">
                  <p.icon className="h-5 w-5 shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:h-[22px] md:w-[22px]" />
                  <span className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.26em] md:text-base">
                    {p.name}
                  </span>
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-white/20" aria-hidden />
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent md:w-40" />
        </div>

        {/* ---------------- Who we work with ---------------- */}
        <section className="glow-soft border-t border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="Who we work with"
              title="Built for organizations that take social seriously."
              lead="We partner with a specific kind of client — those for whom social is a genuine part of the business, not an afterthought."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {AUDIENCE.map((a) => (
                <Reveal
                  key={a.title}
                  reduce={reduce}
                  className="cell bg-surface p-8 md:p-9"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-normal tracking-[0.01em] text-white">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {a.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- What we do (services) ---------------- */}
        <section
          id="services"
          className="layer-2 scroll-mt-24 border-t border-line"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <SectionHead
                  reduce={reduce}
                  kicker="What we do"
                  title="Five services, one partnership."
                  lead="From strategy and content through to community, growth, and reporting — delivered as a single accountable retainer, scoped to your brand."
                />
              </div>
              <Reveal
                reduce={reduce}
                className="md:col-span-4 md:justify-self-end md:pb-3"
              >
                <TextLink href="/services">Explore all services</TextLink>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = SERVICE_ICONS[s.slug];
                return (
                  <Reveal key={s.slug} reduce={reduce} className="h-full">
                    <Link
                      href={`/services#${s.slug}`}
                      className="cell group flex h-full flex-col bg-surface p-7 md:p-9"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.06]">
                          {Icon ? <Icon className="h-5 w-5" /> : null}
                        </div>
                        <span className="font-display text-outline text-[2.25rem] leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="display-md mt-7">{s.name}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                        {s.tagline}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent-strong">
                        View service
                        <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                );
              })}

              {/* Disciplines cell — keeps the full specialism set visible */}
              <Reveal reduce={reduce} className="h-full">
                <div className="cell flex h-full flex-col bg-accent/[0.04] p-7 md:p-9">
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                    Also includes
                  </span>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {SPECIALISMS.map((s) => (
                      <span
                        key={s.title}
                        className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                      >
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Why brands choose NOREN Agency ---------------- */}
        <TrustBand reduce={reduce} />

        {/* ---------------- What we produce (capabilities) ---------------- */}
        <section className="surface-soft border-t border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <SectionHead
                  reduce={reduce}
                  kicker="What we produce"
                  title="The work, made tangible."
                  lead="Examples of the formats and systems we produce. These show how the work looks and what each engagement delivers — not client projects."
                />
              </div>
              <Reveal
                reduce={reduce}
                className="md:col-span-3 md:justify-self-end md:pb-3"
              >
                <TextLink href="/work">View all capabilities</TextLink>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.slice(0, 3).map((c, i) => (
                <CapabilityCard
                  key={c.slug}
                  capability={c}
                  reduce={reduce}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Operating principles ---------------- */}
        <section className="glow-soft border-t border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <SectionHead
              reduce={reduce}
              kicker="Our operating principles"
              title="The convictions behind the work."
              lead="A few principles shape every strategy we build and every engagement we take on."
            />
            <div className="mt-16 grid gap-12 sm:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
              {PRINCIPLES.map((p) => (
                <Reveal key={p.n} reduce={reduce}>
                  <div className="font-display text-[clamp(4rem,9vw,7rem)] font-normal leading-[0.8] text-outline-accent">
                    {p.n}
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- NOREN Framework (editorial) ---------------- */}
        <section className="layer-3 border-y border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <SectionHead
                  reduce={reduce}
                  kicker="The NOREN Framework"
                  title="One system. Four phases. Every engagement."
                  lead="From diagnosis to compounding growth — a repeatable method that keeps our work consistent across very different clients."
                />
              </div>
              <Reveal
                reduce={reduce}
                className="md:col-span-3 md:justify-self-end md:pb-3"
              >
                <TextLink href="/approach">See the full framework</TextLink>
              </Reveal>
            </div>

            <div className="mt-20 grid gap-y-14 md:grid-cols-4 md:gap-0">
              {PHASES.map((p) => {
                const PhaseIcon = PHASE_ICONS[p.name];
                return (
                  <Reveal
                    key={p.name}
                    reduce={reduce}
                    className="group relative md:pr-8"
                  >
                    {/* Stepped connector with accent node */}
                    <div className="relative h-px w-full bg-line">
                      <span
                        className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-accent transition-transform duration-300 group-hover:rotate-[135deg]"
                        aria-hidden
                      />
                    </div>
                    <div className="pt-8">
                      <span className="font-display text-outline-accent block text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.8]">
                        {p.n}
                      </span>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-accent-strong">
                          {PhaseIcon ? <PhaseIcon className="h-[18px] w-[18px]" /> : null}
                        </div>
                        <h3 className="display-md">{p.name}</h3>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted md:pr-2">
                        {p.copy}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="glow-soft border-t border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <SectionHead
                  reduce={reduce}
                  kicker="FAQ"
                  title="Questions, answered."
                />
              </div>
              <Reveal reduce={reduce} className="md:col-span-8">
                <div>
                  {FAQ.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Company information ---------------- */}
        <CompanyInfo reduce={reduce} />

        {/* ---------------- Final CTA ---------------- */}
        <section className="layer-2 relative overflow-hidden border-t border-line">
          <div className="bg-grid bg-grid-fade-c pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(45% 60% at 50% 0%, rgba(147,168,199,0.09), transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-28 text-center md:px-8 md:py-40">
            <Reveal reduce={reduce} className="mx-auto max-w-4xl">
              <div className="flex justify-center">
                <Kicker>Get started</Kicker>
              </div>
              <h2 className="display-xl mt-8">
                Let&rsquo;s build{" "}
                <span className="display-em">something worth</span> following.
              </h2>
              <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">
                Start with a discovery call. We&rsquo;ll tell you which phase of
                the framework your brand needs first — and exactly how we would
                run it.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
                <GhostButton href="/about">About the firm</GhostButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
