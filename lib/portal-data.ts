import type { ComponentType } from "react";
import {
  IconDocument,
  IconLayers,
  IconTrendingUp,
  IconUserCheck,
  IconRoute,
  IconBarChart,
} from "@/components/icons";

type Ico = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* Onboarding / intake wizard                                          */
/* Placeholder-free, NOREN-specific. `group` renders several optional   */
/* inputs on one step. Answers persist client-side and POST on finish.  */
/* ------------------------------------------------------------------ */
export type OnbField = { key: string; label: string; ph: string };
export type OnbStep = {
  key: string;
  label: string;
  help: string;
  type: "text" | "select" | "textarea" | "group";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  fields?: OnbField[];
};

export const ONBOARDING_STEPS: OnbStep[] = [
  {
    key: "name",
    label: "What should we call you?",
    help: "How your strategist will address you.",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    key: "company",
    label: "Your brand or company",
    help: "The name you operate under.",
    type: "text",
    placeholder: "e.g. Northwind Studio",
    required: true,
  },
  {
    key: "website",
    label: "Primary website or sales channel",
    help: "Where most of your revenue happens today.",
    type: "text",
    placeholder: "https:// or @handle",
    required: true,
  },
  {
    key: "type",
    label: "What kind of business is this?",
    help: "So we calibrate the right playbook.",
    type: "select",
    required: true,
    options: [
      "E-commerce / DTC",
      "SaaS / Software",
      "Creator / Personal brand",
      "Coaching / Education",
      "Local / Service business",
      "Agency / B2B services",
      "Other",
    ],
  },
  {
    key: "stage",
    label: "Current business stage",
    help: "A rough band is enough — it sets scope, not judgement.",
    type: "select",
    required: true,
    options: [
      "Pre-launch / early",
      "Up to $10k / month",
      "$10k – $50k / month",
      "$50k – $250k / month",
      "$250k+ / month",
    ],
  },
  {
    key: "goal",
    label: "Primary goal for this engagement",
    help: "The one outcome that would make this a win.",
    type: "select",
    required: true,
    options: [
      "Audience growth",
      "Paid acquisition",
      "Content systems",
      "CRM, retention & lifecycle",
      "Positioning & brand",
      "A complete growth system",
    ],
  },
  {
    key: "bottleneck",
    label: "Your biggest bottleneck right now",
    help: "What is most in the way of growth today?",
    type: "textarea",
    placeholder: "A few sentences is plenty.",
    required: true,
  },
  {
    key: "channels",
    label: "Channels & stack",
    help: "Optional — where you publish and the tools you run.",
    type: "group",
    fields: [
      { key: "instagram", label: "Instagram", ph: "@yourbrand" },
      { key: "tools", label: "CRM / email", ph: "e.g. Klaviyo, HubSpot" },
      { key: "ads", label: "Ad platforms", ph: "e.g. Meta, Google" },
      { key: "other", label: "Anything else", ph: "links, context" },
    ],
  },
];

export const ONBOARDING_SUMMARY: { key: string; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "company", label: "Company" },
  { key: "website", label: "Channel" },
  { key: "type", label: "Type" },
  { key: "stage", label: "Stage" },
  { key: "goal", label: "Goal" },
];

/* ------------------------------------------------------------------ */
/* Resources / implementation docs                                     */
/* Links are placeholders (#) until the real docs/pages exist.          */
/* ------------------------------------------------------------------ */
export type PortalResource = {
  icon: Ico;
  title: string;
  desc: string;
  tag?: string;
  href: string;
};

export const PORTAL_RESOURCES: PortalResource[] = [
  {
    icon: IconDocument,
    title: "Onboarding & Access Setup",
    desc: "What we need from you, how to grant access, and how the first two weeks run.",
    tag: "Start here",
    href: "#",
  },
  {
    icon: IconLayers,
    title: "Content Infrastructure Playbook",
    desc: "The systems, formats, and workflows behind publishing consistently at scale.",
    href: "#",
  },
  {
    icon: IconTrendingUp,
    title: "Paid Acquisition Guidance",
    desc: "Channel structure, creative direction, and budget-allocation principles.",
    href: "#",
  },
  {
    icon: IconUserCheck,
    title: "CRM, Retention & Lifecycle",
    desc: "Lifecycle flows and retention systems that turn first orders into repeat revenue.",
    href: "#",
  },
  {
    icon: IconRoute,
    title: "Distribution & Channel Strategy",
    desc: "How we choose channels and the role each plays in your growth.",
    href: "#",
  },
  {
    icon: IconBarChart,
    title: "Reporting & Growth Reviews",
    desc: "How performance is measured and how review cycles drive the next decisions.",
    href: "#",
  },
];

/* ------------------------------------------------------------------ */
/* Engagement status — the layer the reference is missing.             */
/* Statuses are placeholders, provisioned per client in production.     */
/* ------------------------------------------------------------------ */
export type PhaseStatus = "complete" | "active" | "upcoming";
export type EngagementPhase = {
  n: string;
  name: string;
  status: PhaseStatus;
  copy: string;
};

export const ENGAGEMENT_PHASES: EngagementPhase[] = [
  { n: "01", name: "Discovery", status: "complete", copy: "Growth assessment and baseline." },
  { n: "02", name: "Strategy", status: "active", copy: "Positioning and growth roadmap." },
  { n: "03", name: "Infrastructure", status: "upcoming", copy: "Content systems and distribution build." },
  { n: "04", name: "Optimization", status: "upcoming", copy: "Reporting and compounding iteration." },
];

/* ------------------------------------------------------------------ */
/* Per-client engagement record — the "your engagement" layer.          */
/* A clean typed shape for one client's engagement. Seeded with a        */
/* realistic NOREN demo client; in production, load per client (keyed     */
/* off the member email) from your store/CRM via getEngagementForMember.  */
/* ------------------------------------------------------------------ */
export type DeliverableStatus = "in-progress" | "scheduled" | "delivered";

export type Deliverable = { title: string; due: string; status: DeliverableStatus };
export type EngagementUpdate = { date: string; title: string; body: string };

export type EngagementSupport = {
  /** Primary support channel (monitored corporate inbox). */
  channel: string;
  /** Expected response framing. */
  responseTime: string;
  /** "Book a working call" CTA → scheduling link (or /contact placeholder). */
  bookCtaLabel: string;
  bookCtaHref: string;
  /** "Request support" CTA → mailto (or ticketing endpoint later). */
  requestLabel: string;
  requestHref: string;
  /** Optional private-channel note (secondary, for active engagements). */
  privateChannelNote?: string;
};

export type ClientEngagement = {
  clientName: string;
  title: string; // engagement title
  serviceType: string; // service type / scope tier
  startedOn: string;
  strategist: string;
  cadence: string;
  scope: string[];
  currentPhase: string;
  phases: EngagementPhase[];
  pendingInputs: string[];
  nextDeliverables: Deliverable[];
  recentUpdates: EngagementUpdate[];
  support: EngagementSupport;
};

const SUPPORT_EMAIL = "contact@norenagency.com";

const DEMO_ENGAGEMENT: ClientEngagement = {
  clientName: "Northwind Studio",
  title: "Growth Engagement",
  serviceType: "Strategy & implementation",
  startedOn: "June 2026",
  strategist: "Assigned at kickoff",
  cadence: "Bi-weekly working review",
  scope: [
    "Positioning & messaging",
    "Content infrastructure",
    "Distribution & channel strategy",
    "Reporting & growth reviews",
  ],
  currentPhase: "Strategy",
  phases: ENGAGEMENT_PHASES,
  pendingInputs: [
    "Complete your client profile in onboarding above.",
    "Grant access to your primary channels and analytics.",
    "Share brand assets and any existing guidelines.",
  ],
  nextDeliverables: [
    { title: "Positioning & messaging brief", due: "Current phase", status: "in-progress" },
    { title: "Growth roadmap & channel plan", due: "Next up", status: "scheduled" },
    { title: "Content system setup", due: "Infrastructure phase", status: "scheduled" },
  ],
  recentUpdates: [
    {
      date: "June 2026",
      title: "Strategy phase underway",
      body: "Positioning and the growth roadmap are in progress. You’ll review and sign off before anything is built.",
    },
    {
      date: "June 2026",
      title: "Resource added: Paid Acquisition Guidance",
      body: "Channel structure, creative direction, and budget-allocation principles are now in your library.",
    },
    {
      date: "May 2026",
      title: "Workspace provisioned",
      body: "Your private workspace is live. Completing your intake profile lets us finalize the strategy scope.",
    },
  ],
  support: {
    channel: SUPPORT_EMAIL,
    responseTime: "Replies within one business day on active engagements.",
    bookCtaLabel: "Book a working call",
    bookCtaHref: "/contact",
    requestLabel: "Request support",
    requestHref: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      "Support request — NOREN client workspace",
    )}`,
    privateChannelNote:
      "A private communication channel can be arranged for active engagements.",
  },
};

/**
 * Returns the engagement record for the signed-in member.
 * TODO: replace the demo return with a per-client lookup (DB/CRM) keyed by
 * `email`. `name` lets the demo reflect the logged-in client.
 */
export function getEngagementForMember(
  email?: string,
  name?: string,
): ClientEngagement {
  void email; // reserved for the real per-client lookup
  return name ? { ...DEMO_ENGAGEMENT, clientName: name } : DEMO_ENGAGEMENT;
}
