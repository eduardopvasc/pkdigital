"use client";

/**
 * Shared site components for NOREN Agency (operated by PK Digital LLC).
 * Identity: Fraunces (high-contrast serif display, mixed-case) + DM Sans (body)
 * + DM Mono (UPPERCASE tracked labels). Greyscale base over a four-layer depth
 * (#050508 → #16161f) with a glacial steel-blue accent (--color-accent) used
 * sparingly on hairlines, ticks, focus, and soft glows. No gold. The public API
 * (names + props) is kept stable so every page under app/ keeps compiling.
 */

import { useState, type ComponentType, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  IconRoute,
  IconDocument,
  IconCompass,
  IconUserCheck,
  IconCalendar,
  IconMapPin,
  IconMail,
  IconClock,
  IconPhone,
} from "@/components/icons";

type IconType = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* Company information — single source of truth, used site-wide.        */
/* ------------------------------------------------------------------ */

/* Business address — the primary address shown across the public site. */
export const BUSINESS_ADDRESS = [
  "2335 E. Atlantic Blvd, STE 200",
  "Pompano Beach, FL 33062",
  "United States",
];

/* Registered address — shown only on legal pages (Terms, Privacy,
   Disclaimer) and the Company Information page. */
export const REGISTERED_ADDRESS = [
  "412 W 7th St",
  "Clovis, NM 88101",
  "United States",
];

/* Public brand vs. operating legal entity. NOREN Agency is the public-facing
   brand; PK DIGITAL LLC is the company that operates it and remains the named
   party on every legal page. */
export const BRAND_NAME = "NOREN Agency";
export const BRAND_SHORT = "NOREN";
export const LEGAL_ENTITY = "PK DIGITAL LLC";
export const SITE_DOMAIN = "norenagency.com";

export const CONTACT_EMAIL = "contact@norenagency.com";
export const CONTACT_PHONE = "+1 (954) 676-1050";
export const CONTACT_PHONE_HREF = "tel:+19546761050";

/* The five services — single source of truth for the /services page,
   the footer, and every in-site link. Anchor = `/services#${slug}`. */
export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "strategic-growth-systems",
    name: "Strategic Growth Systems",
    tagline: "The operating system behind sustainable growth.",
    description:
      "We design the strategy and systems that turn scattered activity into a compounding growth engine — clear goals, a measurable roadmap, and the operating rhythm to run it.",
    benefits: [
      "Growth strategy and measurable roadmap",
      "Goal architecture and success metrics",
      "Operating cadence and accountability",
      "Prioritization across channels and assets",
    ],
  },
  {
    slug: "audience-development",
    name: "Audience Development",
    tagline: "Turn attention into a durable audience.",
    description:
      "We build the systems that acquire the right audience and convert passive attention into community, trust, and long-term relationships that compound over time.",
    benefits: [
      "Audience acquisition strategy",
      "Ideal-audience definition and segmentation",
      "Retention and trust-building systems",
      "Owned-audience development",
    ],
  },
  {
    slug: "content-infrastructure",
    name: "Content Infrastructure",
    tagline: "The systems behind content that scales.",
    description:
      "We engineer the workflows, formats, and production systems that let a brand publish consistently at scale — a repeatable infrastructure, not one-off posts.",
    benefits: [
      "Content systems, pillars, and formats",
      "Production workflows and templates",
      "Creative direction and visual language",
      "Editorial standards and governance",
    ],
  },
  {
    slug: "strategic-distribution",
    name: "Strategic Distribution",
    tagline: "Engineer reach across the right channels.",
    description:
      "We design the distribution engine — the channels, mechanisms, and cadence that expand reach and visibility where your audience actually pays attention.",
    benefits: [
      "Channel strategy and roles",
      "Distribution mechanisms and cadence",
      "Reach and visibility expansion",
      "Cross-platform sequencing",
    ],
  },
  {
    slug: "brand-positioning",
    name: "Brand Positioning",
    tagline: "Be perceived, differentiated, and remembered.",
    description:
      "We define how the brand is positioned in its market — the narrative, differentiation, and messaging that make it distinct and hard to forget.",
    benefits: [
      "Positioning and narrative",
      "Differentiation and category framing",
      "Messaging architecture",
      "Tone of voice and brand language",
    ],
  },
  {
    slug: "community-development",
    name: "Community Development",
    tagline: "Build a community, not just a following.",
    description:
      "We develop the systems and rhythm that turn an audience into an engaged community — conversation, participation, and a sense of belonging around the brand.",
    benefits: [
      "Community strategy and rituals",
      "Engagement and conversation systems",
      "Moderation and stewardship",
      "Advocacy and participation loops",
    ],
  },
  {
    slug: "growth-intelligence",
    name: "Growth Intelligence & Analytics",
    tagline: "Decisions driven by data, not guesswork.",
    description:
      "We build the measurement and feedback loops that turn performance into decisions — dashboards, analysis, and a recurring review that keeps growth accountable.",
    benefits: [
      "Measurement framework and dashboards",
      "Performance analysis and insight",
      "Strategic feedback loops",
      "Recurring review and reporting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Motion                                                              */
/* ------------------------------------------------------------------ */

export function useReduce(): boolean {
  return useReducedMotion() ?? false;
}

export function Reveal({
  reduce,
  className,
  children,
  delay = 0,
}: {
  reduce: boolean;
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  // Always render motion.div so server and client markup match; reduced motion
  // is honored via the transition (which never reaches the DOM).
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-muted">
      <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" aria-hidden />
      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}

/* Small outlined pill label. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-accent/40">
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="btn-ghost group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-white hover:border-accent/45 hover:bg-white/[0.05]"
    >
      {children}
      <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
    >
      <span className="h-px w-6 bg-accent/60 transition-all duration-300 group-hover:w-9 group-hover:bg-accent" />
      {children}
      <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Headings & hero                                                     */
/* ------------------------------------------------------------------ */

export function SectionHead({
  reduce,
  kicker,
  title,
  lead,
}: {
  reduce: boolean;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal reduce={reduce} className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="display-lg mt-7">{title}</h2>
      {lead ? (
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/* The pages import `SectionHead`; keep `SectionHeader` as an alias. */
export const SectionHeader = SectionHead;

export function PageHero({
  reduce,
  kicker,
  title,
  lead,
}: {
  reduce: boolean;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55vh]"
        style={{
          background:
            "radial-gradient(50% 60% at 28% 0%, rgba(147,168,199,0.10), transparent 70%)",
        }}
        aria-hidden
      />
      {/* Hairline frame ticks */}
      <div className="pointer-events-none absolute left-6 top-28 hidden h-12 w-px bg-gradient-to-b from-accent/40 to-transparent md:block" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <Reveal reduce={reduce}>
          <Kicker>{kicker}</Kicker>
          <h1 className="display-xl mt-8 max-w-4xl">{title}</h1>
          {lead ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA section (reusable)                                              */
/* ------------------------------------------------------------------ */

export function CTA({
  reduce,
  kicker = "Get started",
  title = "Let's build something worth following.",
  lead = "Start with a discovery call. We'll tell you exactly where to begin.",
  primaryHref = "/contact",
  primaryLabel = "Request a Proposal",
  secondaryHref,
  secondaryLabel,
}: {
  reduce: boolean;
  kicker?: string;
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
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
        <Reveal reduce={reduce} className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Kicker>{kicker}</Kicker>
          </div>
          <h2 className="display-xl mx-auto mt-8 max-w-3xl">{title}</h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">
            {lead}
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
            {secondaryHref && secondaryLabel ? (
              <GhostButton href={secondaryHref}>{secondaryLabel}</GhostButton>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { href: "/framework", label: "Framework" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="NOREN — home"
      className="group inline-flex items-center"
    >
      <span className="font-display text-[22px] font-medium leading-none tracking-[0.05em] text-white">
        NOREN
      </span>
      <span
        className="ml-[3px] mt-[2px] h-1 w-1 self-end rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
        aria-hidden
      />
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto grid h-[70px] max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8">
        <div className="justify-self-start">
          <Wordmark onClick={() => setOpen(false)} />
        </div>

        {/* Centered links */}
        <div className="hidden items-center gap-9 justify-self-center md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center justify-self-end">
          <div className="hidden md:block">
            <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white transition-colors hover:border-accent/45 md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-line transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 bg-bg px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[15px] text-muted transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3">
              <PrimaryButton href="/contact">Request a Proposal</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Footer (Yumi-style, institutional)                                  */
/* ------------------------------------------------------------------ */

const FOOTER_SERVICES = SERVICES.map((s) => ({
  href: `/services#${s.slug}`,
  label: s.name,
}));

const FOOTER_COMPANY = [
  { href: "/framework", label: "Framework" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/company-information", label: "Company Information" },
];

const FOOTER_LEGAL = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/acceptable-use", label: "Acceptable Use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-faint">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[15px] text-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterInfo({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: IconType;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-faint">
        <Icon className="h-3.5 w-3.5 text-accent" />
        {title}
      </h4>
      <div className="mt-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="layer-2 relative border-t border-line">
      {/* Accent hairline at the very top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Brand + contact */}
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              NOREN — Strategic growth infrastructure for founders, creators
              and modern brands.
            </p>

            <div className="mt-10 space-y-8">
              <FooterInfo title="Contact" icon={IconMapPin}>
                {BUSINESS_ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a
                  href={CONTACT_PHONE_HREF}
                  className="mt-3 block text-white transition-colors hover:text-accent-strong"
                >
                  {CONTACT_PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-white transition-colors hover:text-accent-strong"
                >
                  {CONTACT_EMAIL}
                </a>
              </FooterInfo>
              <FooterInfo title="Business Hours" icon={IconClock}>
                <span className="block">Monday–Friday · 9:00 AM – 6:00 PM EST</span>
              </FooterInfo>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            <FooterCol title="Services" links={FOOTER_SERVICES} />
            <FooterCol title="Company" links={FOOTER_COMPANY} />
            <FooterCol title="Legal" links={FOOTER_LEGAL} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-faint">
            © 2026 NOREN Agency. Operated by PK Digital LLC.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-faint">
            Registered office: {REGISTERED_ADDRESS.join(", ")}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* NOREN Framework data                                                */
/* ------------------------------------------------------------------ */

/* The NOREN Framework™ — the proprietary methodology (five pillars).
   Surfaced on /framework, the Home, and the navigation. */
export const FRAMEWORK = [
  {
    n: "01",
    name: "Positioning",
    copy: "Define how the brand is perceived, differentiated and remembered.",
  },
  {
    n: "02",
    name: "Content Infrastructure",
    copy: "Build the systems, workflows and formats behind scalable content operations.",
  },
  {
    n: "03",
    name: "Distribution Engine",
    copy: "Design the channels and mechanisms that expand reach and visibility.",
  },
  {
    n: "04",
    name: "Audience Development",
    copy: "Transform attention into audience, community and long-term trust.",
  },
  {
    n: "05",
    name: "Growth Intelligence",
    copy: "Use data, analytics and strategic feedback loops to improve performance.",
  },
];

/* The engagement process — how a partnership actually runs over time. */
export const PHASES = [
  {
    n: "01",
    name: "Discovery",
    copy: "Research and growth assessment — where attention, trust and distribution are leaking today.",
  },
  {
    n: "02",
    name: "Strategy",
    copy: "Market positioning and a growth roadmap built around your audience and goals.",
  },
  {
    n: "03",
    name: "Infrastructure",
    copy: "Content systems and distribution channels, engineered to scale.",
  },
  {
    n: "04",
    name: "Optimization",
    copy: "Data-driven iteration and growth analytics that compound over time.",
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities — the formats and systems we produce. These describe    */
/* the work itself (verifiable), not client engagements. No brand       */
/* names, case studies, results, or metrics are claimed.                */
/* ------------------------------------------------------------------ */

export type Capability = {
  slug: string;
  name: string;
  discipline: string;
  desc: string;
  deliverables: string[];
  variant: "feed" | "phone" | "profile" | "creative" | "calendar" | "report";
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "content-systems",
    name: "Content Systems",
    discipline: "Content Production",
    desc: "Repeatable content systems — pillars, formats, and a consistent visual language that hold across every post.",
    deliverables: ["Content pillars", "Templates", "Visual system", "Grid design"],
    variant: "feed",
  },
  {
    slug: "short-form-video",
    name: "Short-Form Video",
    discipline: "Creative Direction",
    desc: "Concepting, scripting, and editing short-form video built for how people actually watch the feed.",
    deliverables: ["Concepting", "Scripting", "Editing", "Hooks"],
    variant: "phone",
  },
  {
    slug: "channel-architecture",
    name: "Profile & Channel Architecture",
    discipline: "Social Media Operations",
    desc: "How a brand presents on each channel — bio, highlights, and grid composed into a coherent first impression.",
    deliverables: ["Bio & highlights", "Grid layout", "Channel roles", "Handles"],
    variant: "profile",
  },
  {
    slug: "creative-direction",
    name: "Creative Direction",
    discipline: "Creative Direction",
    desc: "A defined art direction — typography, layout, and tone — applied consistently across every asset we produce.",
    deliverables: ["Art direction", "Typography", "Layout system", "Tone of voice"],
    variant: "creative",
  },
  {
    slug: "community-management",
    name: "Community Management",
    discipline: "Community Management",
    desc: "Planned publishing and day-to-day engagement on a steady cadence, managed end to end in your voice.",
    deliverables: ["Content calendar", "Scheduling", "Engagement", "Moderation"],
    variant: "calendar",
  },
  {
    slug: "analytics-reporting",
    name: "Analytics & Reporting",
    discipline: "Analytics & Reporting",
    desc: "A regular reporting rhythm that turns performance into clear decisions for the next cycle.",
    deliverables: ["Dashboards", "Reporting", "Insights", "Review cadence"],
    variant: "report",
  },
];

function Initials({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={`font-[family-name:var(--font-display)] leading-none tracking-[0.02em] text-white/80 ${className}`}
    >
      {initials}
    </span>
  );
}

const TILE_TONES = [
  "bg-gradient-to-br from-white/[0.12] to-white/[0.02]",
  "bg-gradient-to-tr from-white/[0.06] to-transparent",
  "bg-white/[0.03]",
  "bg-gradient-to-b from-white/[0.09] to-transparent",
  "bg-gradient-to-bl from-white/[0.05] to-white/[0.01]",
  "bg-white/[0.04]",
];

/** Abstract, monochrome interface mockup for a capability card. */
function CapabilityVisual({
  variant,
  name,
}: {
  variant: Capability["variant"];
  name: string;
}) {
  if (variant === "feed") {
    return (
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-md border border-line ${
              TILE_TONES[i % TILE_TONES.length]
            }`}
          >
            {i === 4 ? <Initials name={name} className="text-xl" /> : null}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "phone") {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex aspect-[9/16] h-full flex-col gap-1.5 rounded-[1.4rem] border border-line bg-bg p-2.5">
          <div className="mx-auto h-1 w-8 rounded-full bg-white/15" />
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/25 to-white/[0.04]" />
            <div className="h-1.5 w-12 rounded-full bg-white/15" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.02]">
            <Initials name={name} className="text-2xl" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-white/12" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/8" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "profile") {
    return (
      <div className="flex h-full w-full flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-gradient-to-br from-white/20 to-white/[0.03]">
            <Initials name={name} className="text-sm" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 w-24 rounded-full bg-white/20" />
            <div className="h-2 w-16 rounded-full bg-white/10" />
          </div>
          <div className="rounded-full border border-line px-3 py-1 font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.18em] text-muted">
            Follow
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Posts", "Reach", "Saves"].map((l) => (
            <div
              key={l}
              className="rounded-md border border-line bg-white/[0.02] py-2 text-center"
            >
              <div className="font-[family-name:var(--font-display)] text-base leading-none text-white/70">
                —
              </div>
              <div className="mt-1 font-[family-name:var(--font-mono)] text-[7px] uppercase tracking-[0.15em] text-faint">
                {l}
              </div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-md border border-line ${
                TILE_TONES[i % TILE_TONES.length]
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "creative") {
    return (
      <div className="flex h-full w-full flex-col rounded-lg border border-line bg-gradient-to-br from-white/[0.10] to-transparent p-4">
        <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.18em] text-faint">
          <span>Creative</span>
          <span>Art direction</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Initials name={name} className="text-4xl" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-2/3 rounded-full bg-white/16" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/8" />
        </div>
      </div>
    );
  }

  if (variant === "calendar") {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-bg p-3">
        <div className="flex items-center justify-between px-1">
          <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.18em] text-faint">
            Content calendar
          </span>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
          </div>
        </div>
        <div className="mt-2.5 grid flex-1 grid-cols-7 grid-rows-3 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => {
            const scheduled = [1, 3, 4, 8, 10, 13, 15, 16, 19].includes(i);
            return (
              <div
                key={i}
                className={`rounded-[3px] border border-line ${
                  scheduled
                    ? TILE_TONES[i % TILE_TONES.length]
                    : "bg-white/[0.015]"
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // report
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-bg p-4">
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.18em] text-faint">
          Performance
        </span>
        <Initials name={name} className="text-sm" />
      </div>
      <div className="mt-3 flex flex-1 items-end gap-2">
        {[40, 62, 52, 78, 68, 90].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${TILE_TONES[i % TILE_TONES.length]}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5 border-t border-line pt-3">
        {["Reach", "Engagement", "Growth"].map((l) => (
          <div key={l} className="text-center">
            <div className="font-[family-name:var(--font-display)] text-base leading-none text-white/70">
              —
            </div>
            <div className="mt-1 font-[family-name:var(--font-mono)] text-[7px] uppercase tracking-[0.12em] text-faint">
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CapabilityCard({
  capability,
  reduce,
  index,
}: {
  capability: Capability;
  reduce: boolean;
  index?: number;
}) {
  return (
    <Reveal reduce={reduce} className="h-full">
      <Link
        href="/work"
        className="panel group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
      >
        {/* Visual */}
        <div className="relative overflow-hidden border-b border-line bg-bg">
          <div
            className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
          />
          {/* Big editorial index */}
          {typeof index === "number" ? (
            <span
              className="font-display pointer-events-none absolute left-5 top-3 z-10 text-[3.25rem] leading-none text-outline-accent opacity-70"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null}
          <div
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg/70 text-muted transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent-strong"
            aria-hidden
          >
            ↗
          </div>
          <div className="relative aspect-[4/3] p-6 transition-transform duration-500 ease-out group-hover:scale-[1.03] md:p-7">
            <CapabilityVisual variant={capability.variant} name={capability.name} />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            {capability.discipline}
          </div>
          <h3 className="display-md mt-4">{capability.name}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {capability.desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {capability.deliverables.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors group-hover:border-accent/30 group-hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Trust band — credibility without invented social proof.             */
/* ------------------------------------------------------------------ */

const TRUST: { title: string; copy: string; icon: IconType }[] = [
  {
    title: "Clear process",
    icon: IconRoute,
    copy: "Every engagement runs through one system — diagnose, design, deliver, optimize. You always know what comes next.",
  },
  {
    title: "Written scope first",
    icon: IconDocument,
    copy: "Nothing begins without an agreed statement of work — scope, deliverables, and cadence, in writing, up front.",
  },
  {
    title: "Strategy-led delivery",
    icon: IconCompass,
    copy: "We decide how a brand should be positioned and distributed before we build. Strategy first, execution second.",
  },
  {
    title: "Professional onboarding",
    icon: IconUserCheck,
    copy: "A structured onboarding gets us access, context, and alignment before any system goes live.",
  },
  {
    title: "Structured engagement",
    icon: IconCalendar,
    copy: "A monthly retainer with a defined rhythm and a single point of contact — not ad-hoc, one-off work.",
  },
  {
    title: "Real business address",
    icon: IconMapPin,
    copy: "A registered US company operating from a real business address in Pompano Beach, Florida.",
  },
  {
    title: "Corporate email",
    icon: IconMail,
    copy: "Reach a monitored corporate inbox — contact@norenagency.com — with replies within two business days.",
  },
];

export function TrustBand({ reduce }: { reduce: boolean }) {
  return (
    <section className="glow-soft border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 md:py-32">
        <SectionHead
          reduce={reduce}
          kicker="Why brands choose us"
          title="Why brands choose NOREN."
          lead="No inflated claims or borrowed logos — just a professional, structured way of working that makes growth dependable and accountable."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <Reveal
              key={t.title}
              reduce={reduce}
              className="cell group bg-surface p-7 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.06]">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-medium text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.copy}</p>
            </Reveal>
          ))}

          {/* Call-to-action cell */}
          <Reveal reduce={reduce} className="cell bg-accent/[0.04] p-7 md:p-8">
            <Link href="/contact" className="group flex h-full flex-col justify-between">
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                Ready when you are
              </span>
              <span className="mt-8 flex items-center justify-between text-lg font-medium text-white">
                Request a Proposal
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Company information — consistent, verifiable details site-wide.      */
/* ------------------------------------------------------------------ */

const COMPANY_INFO: {
  label: string;
  icon: IconType;
  lines: string[];
  href?: string;
}[] = [
  { label: "Brand", icon: IconCompass, lines: [BRAND_NAME] },
  { label: "Operated by", icon: IconDocument, lines: [LEGAL_ENTITY] },
  { label: "Business address", icon: IconMapPin, lines: BUSINESS_ADDRESS },
  {
    label: "Phone",
    icon: IconPhone,
    lines: [CONTACT_PHONE],
    href: CONTACT_PHONE_HREF,
  },
  {
    label: "Email",
    icon: IconMail,
    lines: [CONTACT_EMAIL],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Business hours",
    icon: IconClock,
    lines: ["Monday–Friday", "9:00 AM – 6:00 PM EST"],
  },
];

export function CompanyInfo({ reduce }: { reduce: boolean }) {
  return (
    <section className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <SectionHead
          reduce={reduce}
          kicker="Company information"
          title="A registered, contactable company."
          lead="NOREN Agency is operated by PK Digital LLC, a registered US company. The same details appear across the site — no anonymity, no ambiguity."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY_INFO.map((c) => (
            <Reveal
              key={c.label}
              reduce={reduce}
              className="cell bg-surface-2 p-7 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
                {c.label}
              </h3>
              <div className="mt-2 text-[15px] leading-relaxed text-muted">
                {c.lines.map((line) =>
                  c.href ? (
                    <a
                      key={line}
                      href={c.href}
                      className="block text-white transition-colors hover:text-muted"
                    >
                      {line}
                    </a>
                  ) : (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Legal page layout                                                   */
/* ------------------------------------------------------------------ */

export function LegalShell({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const reduce = useReduce();
  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker={kicker}
          title={title}
          lead={`Last updated: ${updated}`}
        />
        <section className="mx-auto max-w-3xl px-6 py-20 md:px-8 md:py-28">
          <div className="space-y-12">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalBlock({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  const reduce = useReduce();
  return (
    <Reveal
      reduce={reduce}
      className="border-t border-line pt-10 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-4 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent">
            {n}
          </span>
          <h2 className="font-display mt-2 text-2xl font-normal leading-[1.08] tracking-[-0.01em] text-white">
            {title}
          </h2>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-muted md:col-span-9">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
