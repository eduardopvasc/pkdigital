"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
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
  SERVICES,
  FRAMEWORK,
  PHASES,
  TrustBand,
  CompanyInfo,
  CONTACT_EMAIL,
  useReduce,
} from "@/components/site";
import { CONTACT_TOPICS } from "@/lib/contact";
import {
  IconTarget,
  IconLayers,
  IconChat,
  IconTrendingUp,
  IconBarChart,
  IconCompass,
  IconRoute,
  IconUserCheck,
  IconCheck,
} from "@/components/icons";
import type { ComponentType } from "react";

type Ico = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const SERVICE_ICONS: Record<string, Ico> = {
  "strategic-growth-systems": IconTarget,
  "audience-development": IconUserCheck,
  "content-infrastructure": IconLayers,
  "strategic-distribution": IconRoute,
  "brand-positioning": IconCompass,
  "community-development": IconChat,
  "growth-intelligence": IconBarChart,
};

const FRAMEWORK_ICONS: Record<string, Ico> = {
  Positioning: IconTarget,
  "Content Infrastructure": IconLayers,
  "Distribution Engine": IconRoute,
  "Audience Development": IconUserCheck,
  "Growth Intelligence": IconBarChart,
};

const PROCESS_ICONS: Record<string, Ico> = {
  Discovery: IconCompass,
  Strategy: IconTarget,
  Infrastructure: IconLayers,
  Optimization: IconTrendingUp,
};

const WORK_WITH = [
  { title: "Founders", copy: "Building a personal and company audience in parallel." },
  { title: "Personal Brands", copy: "Turning expertise into a recognized, durable presence." },
  { title: "Coaches", copy: "Authority and audience that compound into demand." },
  { title: "SaaS Companies", copy: "Category positioning and audience-led growth." },
  { title: "Media Brands", copy: "Distribution systems that scale reach and retention." },
  { title: "High-Growth Businesses", copy: "Growth infrastructure that keeps pace with scale." },
  { title: "Creator-Led Companies", copy: "Operationalizing a founder's audience into a system." },
  { title: "Professional Organizations", copy: "A credible, well-positioned public presence." },
];

const OPTIMIZE = [
  "Audience Growth",
  "Content Performance",
  "Reach Expansion",
  "Community Engagement",
  "Retention",
  "Brand Visibility",
  "Authority",
  "Distribution Efficiency",
];

/* ------------------------------------------------------------------ */
/* Home contact form                                                   */
/* ------------------------------------------------------------------ */

type Status = "idle" | "submitting" | "success" | "error";

const labelCls =
  "font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint";
const inputCls =
  "mt-3 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] text-white placeholder:text-faint transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20";

function HomeContact({ reduce }: { reduce: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit() {
    if (!form.name || !form.email || !form.company || !form.subject || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="layer-3 border-y border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal reduce={reduce} className="md:col-span-5">
            <SectionHead
              reduce={reduce}
              kicker="Get in touch"
              title="Send us a message"
              lead="Tell us about your business and we'll get back to you within 24 hours with a tailored proposal."
            />
            <div className="mt-10 space-y-3 text-[15px] text-muted">
              <p>
                Prefer email? Reach us directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white transition-colors hover:text-accent-strong"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal reduce={reduce} className="md:col-span-7">
            <div className="panel rounded-2xl border border-line bg-surface p-7 md:p-9">
              {status === "success" ? (
                <div>
                  <h3 className="display-md">Thank you — your message is in.</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    We&rsquo;ll review your request and reply within 24 business
                    hours. If it&rsquo;s urgent, email {CONTACT_EMAIL}.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="h-name" className={labelCls}>
                        Full Name *
                      </label>
                      <input
                        id="h-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="h-email" className={labelCls}>
                        Work Email *
                      </label>
                      <input
                        id="h-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="h-company" className={labelCls}>
                      Company / Website *
                    </label>
                    <input
                      id="h-company"
                      type="text"
                      required
                      placeholder="Company or website"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="h-subject" className={labelCls}>
                      What are you looking for? *
                    </label>
                    <div className="relative">
                      <select
                        id="h-subject"
                        required
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className={`${inputCls} appearance-none pr-11 ${
                          form.subject ? "text-white" : "text-faint"
                        }`}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {CONTACT_TOPICS.map((t) => (
                          <option key={t} value={t} className="bg-surface text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                      <span
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                        aria-hidden
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="h-message" className={labelCls}>
                      Tell us about your business *
                    </label>
                    <textarea
                      id="h-message"
                      required
                      rows={5}
                      placeholder="Monthly revenue, current challenges, goals..."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#E0876F]">
                      Please complete the required fields and try again. If the
                      problem persists, email {CONTACT_EMAIL}.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black transition-colors duration-300 hover:bg-white/90 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                    {status !== "submitting" && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-faint">
                    We&rsquo;ll review your request and reply within 24 business
                    hours.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Animated structural metric bar                                      */
/* Numbers are STRUCTURAL facts derived from real data (service /       */
/* pillar / stage counts) and a stated response target — never          */
/* fabricated performance claims.                                        */
/* ------------------------------------------------------------------ */

function CountUp({
  to,
  suffix = "",
  reduce,
}: {
  to: number;
  suffix?: string;
  reduce: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    // When reduced motion is on, the initial state already equals `to`,
    // so no state update is needed here.
    if (reduce || !inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const METRICS = [
  { to: 1, suffix: "", label: "Unified operating layer" },
  { to: FRAMEWORK.length, suffix: "", label: "Framework pillars" },
  { to: PHASES.length, suffix: "", label: "Engagement stages" },
  { to: SERVICES.length, suffix: "", label: "Core growth services" },
  { to: 24, suffix: "h", label: "Response target" },
];

function MetricBar({ reduce }: { reduce: boolean }) {
  return (
    <section className="relative border-b border-line bg-bg">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 120% at 50% 0%, rgba(147,168,199,0.06), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-2 gap-px overflow-hidden border-x border-line bg-line px-0 sm:grid-cols-3 lg:grid-cols-5">
        {METRICS.map((m) => (
          <Reveal
            key={m.label}
            reduce={reduce}
            className="cell flex flex-col items-center justify-center bg-bg px-5 py-10 text-center md:py-12"
          >
            <span className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] leading-none tracking-[-0.02em] text-white">
              <CountUp to={m.to} suffix={m.suffix} reduce={reduce} />
            </span>
            <span className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted">
              {m.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Distribution-channel marquee — audience growth & distribution         */
/* platforms only (capabilities, not endorsements or client logos).      */
/* ------------------------------------------------------------------ */

const CHANNELS = [
  "Instagram",
  "Facebook",
  "TikTok",
  "Google",
  "YouTube",
  "LinkedIn",
  "Pinterest",
  "Reddit",
  "X",
  "Snapchat",
];

function IntegrationsMarquee({ reduce }: { reduce: boolean }) {
  return (
    <section className="layer-1 border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 text-center md:px-8 md:pt-28">
        <Reveal reduce={reduce} className="flex justify-center">
          <Kicker>Content distribution</Kicker>
        </Reveal>
        <Reveal reduce={reduce}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Audience growth, brand visibility, organic reach and demand
            generation — engineered across the platforms where your audience
            actually pays attention.
          </p>
        </Reveal>
      </div>

      <div className="marquee relative mt-12 overflow-hidden border-y border-line bg-surface py-6 md:py-7">
        <div className="marquee-track flex w-max items-center">
          {[...CHANNELS, ...CHANNELS].map((name, i) => (
            <span key={`${name}-${i}`} className="flex shrink-0 items-center">
              <span className="px-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.26em] text-muted transition-colors hover:text-white md:px-9 md:text-base">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-accent/40" aria-hidden />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent md:w-40" />
      </div>
      <div className="h-20 md:h-28" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Control Centre — an ILLUSTRATIVE client workspace visual. Clearly     */
/* labelled as illustrative; contains no numeric performance claims.     */
/* ------------------------------------------------------------------ */

const CONTROL_FEATURES = [
  { t: "Audience growth", d: "Owned-audience trajectory at a glance." },
  { t: "Content pipeline", d: "Every asset from draft to live." },
  { t: "Distribution channels", d: "Where reach is being engineered." },
  { t: "Performance insights", d: "The metrics that actually move growth." },
  { t: "Support access", d: "A direct line to your strategist." },
];

const panelLabel =
  "font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-faint";

function ControlCentre({ reduce }: { reduce: boolean }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead
              reduce={reduce}
              kicker="The operating layer"
              title="One control centre for your growth."
              lead="One operating layer for content, distribution and growth visibility — a single client workspace where strategy, pipeline and performance live together."
            />
            <ul className="mt-9 space-y-3.5">
              {CONTROL_FEATURES.map((f) => (
                <li key={f.t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-accent-strong">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-muted">
                    <span className="text-white">{f.t}.</span> {f.d}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-faint">
              Illustrative workspace · provisioned per engagement
            </p>
          </div>

          <Reveal reduce={reduce} className="lg:col-span-7">
            <div className="ticks relative overflow-hidden rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur-sm md:p-5">
              <div
                className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-30"
                aria-hidden
              />
              <div className="relative">
                {/* window bar */}
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted">
                      NOREN Control Centre
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-faint">
                    Client workspace
                  </span>
                </div>

                {/* body */}
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {/* Audience growth */}
                  <div className="rounded-xl border border-line bg-bg p-4 sm:col-span-2">
                    <div className="flex items-center justify-between">
                      <span className={panelLabel}>Audience growth</span>
                      <IconTrendingUp className="h-3.5 w-3.5 text-accent-strong" />
                    </div>
                    <div className="mt-4 flex h-20 items-end gap-1.5" aria-hidden>
                      {[28, 36, 32, 48, 44, 58, 52, 66, 72, 84].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/10 to-accent/40"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Performance insights */}
                  <div className="rounded-xl border border-line bg-bg p-4">
                    <span className={panelLabel}>Performance insights</span>
                    <div className="mt-4 space-y-2.5" aria-hidden>
                      {[70, 52, 84].map((w, idx) => (
                        <div
                          key={idx}
                          className="h-1.5 w-full rounded-full bg-white/[0.06]"
                        >
                          <div
                            className="h-full rounded-full bg-accent/50"
                            style={{ width: `${w}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Content pipeline */}
                  <div className="rounded-xl border border-line bg-bg p-4 sm:col-span-3">
                    <span className={panelLabel}>Content pipeline</span>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {["Draft", "Review", "Scheduled", "Live"].map((s, idx) => (
                        <div
                          key={s}
                          className="rounded-lg border border-line bg-white/[0.02] px-2 py-2.5 text-center"
                        >
                          <span
                            className={`mx-auto block h-1.5 w-1.5 rounded-full ${
                              idx === 3 ? "bg-accent" : "bg-white/20"
                            }`}
                            aria-hidden
                          />
                          <span className="mt-2 block font-[family-name:var(--font-mono)] text-[8.5px] uppercase tracking-[0.14em] text-faint">
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Distribution channels */}
                  <div className="rounded-xl border border-line bg-bg p-4 sm:col-span-2">
                    <span className={panelLabel}>Distribution channels</span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Instagram", "TikTok", "YouTube", "LinkedIn", "X", "Newsletter"].map(
                        (c) => (
                          <span
                            key={c}
                            className="rounded-full border border-line px-2.5 py-1 text-[10px] text-muted"
                          >
                            {c}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  {/* Support access */}
                  <div className="rounded-xl border border-line bg-bg p-4">
                    <span className={panelLabel}>Support access</span>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-2" aria-hidden>
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      <span className="text-[12px] text-muted">Response target · 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonial carousel — premium, infinite, founder-focused. Quotes and */
/* role attributions are supplied by NOREN and should correspond to real, */
/* permissioned client feedback (anonymized to role only).                */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  {
    initials: "PB",
    role: "Founder · Personal Brand",
    quote:
      "The biggest shift wasn’t producing more content. It was finally having a distribution system that made every piece of content work harder.",
  },
  {
    initials: "GC",
    role: "Growth Consultant",
    quote:
      "NOREN helped us turn scattered marketing activities into a structured audience-growth engine.",
  },
  {
    initials: "SF",
    role: "Founder · B2B SaaS",
    quote:
      "The positioning work created clarity across our entire customer journey. Everything became easier to scale.",
  },
  {
    initials: "EO",
    role: "Education Business Owner",
    quote:
      "We stopped relying on random content ideas and started operating with a repeatable growth framework.",
  },
  {
    initials: "AF",
    role: "Agency Founder",
    quote:
      "The combination of strategy, distribution and execution gave us a level of consistency we’d never achieved before.",
  },
];

function Stars() {
  return (
    <div
      className="flex justify-center gap-1 text-accent-strong"
      role="img"
      aria-label="Rated 5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, s) => (
        <span key={s} aria-hidden className="text-base md:text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCarousel({ reduce }: { reduce: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  // Infinite auto-advance; pauses on hover and honours reduced motion.
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 5200);
    return () => clearInterval(id);
  }, [reduce, paused, n]);

  return (
    <section className="layer-2 border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-44">
        <SectionHead
          reduce={reduce}
          kicker="Testimonials"
          title="Built for founder-led growth."
          lead="Feedback from personal brands, founders, consultants, educators and agencies building durable audience growth."
        />

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="panel ticks relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface px-6 py-12 md:px-14 md:py-16">
            <div
              className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-25"
              aria-hidden
            />
            {/* Crossfade slides → seamless infinite loop */}
            <div className="relative min-h-[300px] sm:min-h-[240px]">
              {TESTIMONIALS.map((t, idx) => (
                <figure
                  key={idx}
                  aria-hidden={idx !== i}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
                    idx === i
                      ? "opacity-100 translate-y-0"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <Stars />
                  <blockquote className="mx-auto mt-7 max-w-2xl font-display text-[clamp(1.25rem,2.5vw,1.95rem)] font-normal leading-[1.3] tracking-[-0.01em] text-white">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-9 flex items-center justify-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg font-display text-sm tracking-[0.04em] text-accent-strong">
                      {t.initials}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="btn-ghost flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted hover:border-accent/45 hover:text-white"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === i ? "w-7 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="btn-ghost flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted hover:border-accent/45 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
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

          <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-24 pt-40 md:px-8 md:pb-32 md:pt-44">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
              {/* Left — headline */}
              <div className="lg:col-span-7">
                <Reveal reduce={reduce}>
                  <Kicker>NOREN — Strategic Growth Agency</Kicker>
                </Reveal>

                <Reveal reduce={reduce} delay={0.05}>
                  <h1 className="display-xl mt-8">
                    Your content isn&rsquo;t the problem. Your{" "}
                    <span className="display-em">distribution</span> is.
                  </h1>
                </Reveal>

                <Reveal reduce={reduce} delay={0.1}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                    NOREN builds the systems behind sustainable audience growth —
                    brand positioning, content infrastructure, strategic
                    distribution and growth intelligence, run as one operating
                    layer.
                  </p>
                </Reveal>

                <Reveal reduce={reduce} delay={0.15}>
                  <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                    <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
                    <GhostButton href="/framework">See the Framework</GhostButton>
                  </div>
                </Reveal>
              </div>

              {/* Right — framework panel */}
              <Reveal reduce={reduce} delay={0.12} className="lg:col-span-5">
                <Link
                  href="/framework"
                  className="ticks group relative block overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-accent/35 md:p-8"
                >
                  <div
                    className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-40"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-faint">
                      <span className="flex items-center gap-2 text-accent-strong">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        The NOREN Framework™
                      </span>
                      <span>5 pillars</span>
                    </div>

                    <ul className="mt-6">
                      {FRAMEWORK.map((p) => (
                        <li
                          key={p.n}
                          className="flex items-center gap-4 border-t border-line py-4 first:border-t-0"
                        >
                          <span className="font-display w-8 text-lg leading-none text-accent-strong">
                            {p.n}
                          </span>
                          <span className="flex-1 text-[15px] font-medium text-white">
                            {p.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent-strong">
                      Explore the framework
                      <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Structural metric bar ---------------- */}
        <MetricBar reduce={reduce} />

        {/* ---------------- Integrations / ecosystem marquee ---------------- */}
        <IntegrationsMarquee reduce={reduce} />

        {/* ---------------- Why brands plateau ---------------- */}
        <section className="layer-2 border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <SectionHead
                  reduce={reduce}
                  kicker="The problem"
                  title="Why Brands Plateau"
                />
              </div>
              <Reveal reduce={reduce} className="md:col-span-7">
                <div className="space-y-6">
                  {[
                    "Most companies don't lack content.",
                    "They lack distribution.",
                    "They lack positioning.",
                    "They lack systems.",
                  ].map((line, i) => (
                    <p
                      key={i}
                      className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-white"
                    >
                      {line.replace("don't", "don’t")}
                    </p>
                  ))}
                  <p className="max-w-xl pt-4 text-lg leading-relaxed text-muted">
                    NOREN builds the infrastructure behind sustainable audience
                    growth.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- What we do (services) ---------------- */}
        <section id="services" className="scroll-mt-24 border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <SectionHead
                  reduce={reduce}
                  kicker="What we do"
                  title="Strategic growth systems, end to end."
                  lead="Seven connected capabilities — from positioning and content infrastructure to distribution and growth intelligence — delivered as one accountable partnership."
                />
              </div>
              <Reveal reduce={reduce} className="md:col-span-4 md:justify-self-end md:pb-3">
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

              {/* Closing cell */}
              <Reveal reduce={reduce} className="h-full">
                <div className="cell flex h-full flex-col justify-between bg-accent/[0.04] p-7 md:p-9">
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                    One partnership
                  </span>
                  <p className="mt-6 text-[15px] leading-relaxed text-muted">
                    Delivered together as a single retainer, scoped to your
                    business and run on a defined cadence.
                  </p>
                  <span className="mt-6">
                    <TextLink href="/services">See how we engage</TextLink>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- We work with ---------------- */}
        <section className="layer-2 border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <SectionHead
              reduce={reduce}
              kicker="Who we partner with"
              title="We Work With"
              lead="Operators for whom audience and distribution are a genuine growth lever — not an afterthought."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {WORK_WITH.map((w) => (
                <Reveal key={w.title} reduce={reduce} className="cell group bg-surface p-7 md:p-8">
                  <div className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-faint">
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    Partner
                  </div>
                  <h3 className="display-md mt-4 text-[1.45rem]">{w.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {w.copy.replace("founder's", "founder’s")}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- NOREN Framework preview ---------------- */}
        <section className="layer-3 border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <SectionHead
                  reduce={reduce}
                  kicker="The method"
                  title="The NOREN Framework™"
                  lead="Five connected pillars that take a brand from how it is positioned to how it compounds — our proprietary methodology for building growth infrastructure."
                />
              </div>
              <Reveal reduce={reduce} className="md:col-span-3 md:justify-self-end md:pb-3">
                <TextLink href="/framework">See the full framework</TextLink>
              </Reveal>
            </div>

            <div className="mt-20 grid gap-y-14 md:grid-cols-5 md:gap-0">
              {FRAMEWORK.map((p) => {
                const Icon = FRAMEWORK_ICONS[p.name];
                return (
                  <Reveal key={p.n} reduce={reduce} className="group relative md:pr-6">
                    <div className="relative h-px w-full bg-line">
                      <span
                        className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-accent transition-transform duration-300 group-hover:rotate-[135deg]"
                        aria-hidden
                      />
                    </div>
                    <div className="pt-8">
                      <span className="font-display text-outline-accent block text-[clamp(3rem,6vw,4.5rem)] leading-[0.8]">
                        {p.n}
                      </span>
                      <div className="mt-6 flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-accent-strong">
                          {Icon ? <Icon className="h-[16px] w-[16px]" /> : null}
                        </div>
                        <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.01em] text-white">
                          {p.name}
                        </h3>
                      </div>
                      <p className="mt-4 text-[14px] leading-relaxed text-muted">
                        {p.copy}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- How we work (process) ---------------- */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <SectionHead
              reduce={reduce}
              kicker="The engagement"
              title="How We Work"
              lead="Every partnership runs through the same disciplined sequence — so you always know what comes next."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {PHASES.map((p) => {
                const Icon = PROCESS_ICONS[p.name];
                return (
                  <Reveal key={p.n} reduce={reduce} className="cell group bg-surface p-8 md:p-9">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.06]">
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-accent">
                        {p.n}
                      </span>
                    </div>
                    <h3 className="display-md mt-6">{p.name}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {p.copy}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- What we optimize ---------------- */}
        <section className="layer-2 border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-8 md:py-40">
            <SectionHead
              reduce={reduce}
              kicker="The outcomes"
              title="What We Optimize"
              lead="The levers we measure and improve across an engagement — every one tied to durable, owned growth."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {OPTIMIZE.map((o) => (
                <Reveal
                  key={o}
                  reduce={reduce}
                  className="cell group flex items-center gap-4 bg-surface p-7 md:p-8"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-accent-strong transition-colors group-hover:border-accent/40">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] font-medium text-white">{o}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Control Centre (operating layer) ---------------- */}
        <ControlCentre reduce={reduce} />

        {/* ---------------- Why brands choose NOREN ---------------- */}
        <TrustBand reduce={reduce} />

        {/* ---------------- Testimonials (honest scaffold) ---------------- */}
        <TestimonialCarousel reduce={reduce} />

        {/* ---------------- Contact form ---------------- */}
        <HomeContact reduce={reduce} />

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
              <h2 className="display-xl mt-8">Build Your Growth Infrastructure</h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Start with a strategy call. We&rsquo;ll identify where your
                audience system is leaking attention, trust or distribution.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
