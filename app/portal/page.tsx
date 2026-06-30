import { cookies } from "next/headers";
import Link from "next/link";
import { MemberBar } from "@/components/portal/member-bar";
import { Onboarding } from "@/components/portal/onboarding";
import { SignOutButton } from "@/components/portal/sign-out-button";
import {
  SESSION_COOKIE,
  getSessionSecret,
  verifySession,
} from "@/lib/session";
import {
  PORTAL_RESOURCES,
  getEngagementForMember,
  type PhaseStatus,
  type DeliverableStatus,
} from "@/lib/portal-data";
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/components/site";
import {
  IconMail,
  IconLock,
  IconChat,
  IconCalendar,
  IconCheck,
  IconDocument,
} from "@/components/icons";

// Reads the session cookie → always dynamic.
export const dynamic = "force-dynamic";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-muted">
      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" aria-hidden />
      {children}
    </span>
  );
}

const PHASE_STYLES: Record<PhaseStatus, { label: string; cls: string; dot: string }> = {
  // Single steel-blue hue; states differ by intensity, not color.
  complete: { label: "Complete", cls: "border-accent/30 text-accent-strong", dot: "bg-accent" },
  active: {
    label: "In progress",
    cls: "border-accent/55 text-accent-strong",
    dot: "bg-accent shadow-[0_0_10px_-1px_rgba(var(--accent-rgb),0.85)]",
  },
  upcoming: { label: "Upcoming", cls: "border-line text-faint", dot: "bg-white/20" },
};

const DELIV_STYLES: Record<DeliverableStatus, { label: string; cls: string; dot: string }> = {
  delivered: { label: "Delivered", cls: "border-accent/30 text-accent-strong", dot: "bg-accent" },
  "in-progress": {
    label: "In progress",
    cls: "border-accent/55 text-accent-strong",
    dot: "bg-accent shadow-[0_0_10px_-1px_rgba(var(--accent-rgb),0.85)]",
  },
  scheduled: { label: "Scheduled", cls: "border-line text-faint", dot: "bg-white/20" },
};

export default async function PortalPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = await verifySession(token, getSessionSecret());
  const name = session?.name || "Client";
  const eng = getEngagementForMember(session?.email, name);

  const summaryRows: [string, string][] = [
    ["Engagement", eng.title],
    ["Service", eng.serviceType],
    ["Started", eng.startedOn],
    ["Strategist", eng.strategist],
    ["Cadence", eng.cadence],
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="portal-aurora" aria-hidden />
      <MemberBar />

      <main className="relative mx-auto max-w-[1240px] px-5 pb-24 pt-[68px] md:px-8">
        {/* ---------------- Dashboard / Welcome ---------------- */}
        <section id="dashboard" className="scroll-mt-24 py-16 md:py-24">
          <Eyebrow>Private client workspace</Eyebrow>
          <h1 className="display-xl mt-7">
            Welcome back,{" "}
            <span className="font-display italic text-[color:var(--color-accent-strong)]">
              {name}
            </span>
            .
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            Your private NOREN workspace — engagement status, deliverables,
            implementation resources, and a direct line to your strategist, in
            one place.
          </p>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {[
              ["Status", "Active"],
              ["Access", "Private"],
              ["Phase", eng.currentPhase],
            ].map(([k, v]) => (
              <span
                key={k}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-[13px] text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
                {k}: <b className="font-medium text-white">{v}</b>
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- Onboarding / Intake ---------------- */}
        <section id="onboarding" className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Onboarding</Eyebrow>
            <h2 className="display-lg mt-6">Tell us how to run your engagement.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted md:text-base">
              A short intake that sets your scope, priorities, and the way we’ll
              work together. It’s saved to your workspace as you go.
            </p>
          </div>
          <Onboarding memberName={name} />
        </section>

        {/* ---------------- Engagement (status / scope / deliverables) ---------------- */}
        <section id="engagement" className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Your engagement</Eyebrow>
            <h2 className="display-lg mt-6">Engagement overview.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted md:text-base">
              Live status of your scope, what we’re building now, what we need
              from you, and what’s next — maintained by your strategist.
            </p>
          </div>

          {/* Summary + current phase */}
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="ticks h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Engagement summary
                </span>
                <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {summaryRows.map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-faint">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-[15px] text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 border-t border-line pt-6">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-faint">
                    Current scope
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {eng.scope.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-[13px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Current phase &amp; status
                </span>
                <div className="mt-6 space-y-2.5">
                  {eng.phases.map((p) => {
                    const s = PHASE_STYLES[p.status];
                    return (
                      <div key={p.n} className="flex items-center gap-3">
                        <span className="font-[family-name:var(--font-mono)] text-[11px] text-faint">
                          {p.n}
                        </span>
                        <span className="flex-1 text-[14px] text-white">{p.name}</span>
                        <span
                          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.14em] ${s.cls}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Pending inputs + next deliverables */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Pending inputs from you
                </span>
                <ul className="mt-6 space-y-4">
                  {eng.pendingInputs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full border border-[color:rgba(var(--accent-rgb),0.6)]"
                        aria-hidden
                      />
                      <span className="text-[14.5px] leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#onboarding"
                  className="mt-7 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
                >
                  Go to onboarding <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Next deliverables
                </span>
                <ul className="mt-6 space-y-4">
                  {eng.nextDeliverables.map((d) => {
                    const s = DELIV_STYLES[d.status];
                    return (
                      <li
                        key={d.title}
                        className="flex items-center justify-between gap-4 border-b border-line pb-4 last:border-b-0 last:pb-0"
                      >
                        <div>
                          <div className="text-[14.5px] text-white">{d.title}</div>
                          <div className="mt-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint">
                            {d.due}
                          </div>
                        </div>
                        <span
                          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.14em] ${s.cls}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
                          {s.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Onboarding checklist + delivered files */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Onboarding checklist
                </span>
                <ul className="mt-6 space-y-3.5">
                  {eng.onboardingChecklist.map((c) => (
                    <li key={c.label} className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          c.done
                            ? "border-accent/40 text-accent-strong"
                            : "border-line text-faint"
                        }`}
                      >
                        {c.done ? <IconCheck className="h-3 w-3" /> : null}
                      </span>
                      <span
                        className={`flex-1 text-[14.5px] ${
                          c.done ? "text-white" : "text-muted"
                        }`}
                      >
                        {c.label}
                      </span>
                      <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint">
                        {c.done ? c.date : "Pending"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Delivered files
                </span>
                <ul className="mt-5 divide-y divide-line">
                  {eng.deliveredFiles.map((f) => (
                    <li key={f.title}>
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-3.5"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-accent-strong">
                            <IconDocument className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-[14.5px] text-white">
                              {f.title}
                            </span>
                            <span className="block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint">
                              {f.kind} · {f.date}
                            </span>
                          </span>
                        </span>
                        <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent-strong">
                          Download ↓
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent updates & notes (engagement timeline) */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <div className="border-b border-line bg-surface px-7 py-5">
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Engagement timeline
              </span>
            </div>
            {eng.recentUpdates.map((u, i) => (
              <article
                key={u.title}
                className={`flex flex-col gap-3 bg-surface p-6 sm:flex-row sm:gap-8 md:px-7 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)] sm:w-28">
                  {u.date}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[16px] font-medium text-white">
                    {u.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                    {u.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface/60 p-6 sm:flex-row sm:items-center md:px-8">
            <p className="text-[15px] text-muted">
              Questions about your engagement or a deliverable?
            </p>
            <a
              href="#support"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[color:rgba(var(--accent-rgb),0.5)]"
            >
              Contact your team <span className="text-[color:var(--color-accent-strong)]">→</span>
            </a>
          </div>
        </section>

        {/* ---------------- Resources / Implementation docs ---------------- */}
        <section id="resources" className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>The library</Eyebrow>
            <h2 className="display-lg mt-6">Resources for your engagement.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted md:text-base">
              Implementation docs, playbooks, and references that map to your
              current scope.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {PORTAL_RESOURCES.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="cell group flex flex-col bg-surface p-7 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-[color:var(--color-accent-strong)] transition-colors group-hover:border-[color:rgba(var(--accent-rgb),0.4)]">
                    <r.icon className="h-5 w-5" />
                  </div>
                  {r.tag ? (
                    <span className="rounded-full border border-[color:rgba(var(--accent-rgb),0.4)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[color:var(--color-accent-strong)]">
                      {r.tag}
                    </span>
                  ) : null}
                </div>
                <h3 className="display-md mt-5 text-[1.3rem]">{r.title}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {r.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-[color:var(--color-accent-strong)]">
                  Open
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ---------------- Support / Communication ---------------- */}
        <section id="support" className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <Eyebrow>Support</Eyebrow>
              <h2 className="display-lg mt-6">A direct line to your team.</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Reach your strategist for anything related to the engagement —
                questions, requests, feedback, or a review.
              </p>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
                {eng.support.responseTime}
              </p>
              {eng.support.privateChannelNote ? (
                <p className="mt-4 max-w-md text-[13px] leading-relaxed text-faint">
                  {eng.support.privateChannelNote}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {/* Primary support channel */}
              <div className="flex flex-col rounded-2xl border border-line bg-surface p-7">
                <IconMail className="h-5 w-5 text-[color:var(--color-accent-strong)]" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                  Message your strategist
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  Your primary support channel — a monitored inbox for the
                  engagement.
                </p>
                <a
                  href={`mailto:${eng.support.channel}`}
                  className="mt-4 inline-block text-[15px] text-white transition-colors hover:text-[color:var(--color-accent-strong)]"
                >
                  {eng.support.channel}
                </a>
                <a
                  href={eng.support.requestHref}
                  className="btn-glow group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  {eng.support.requestLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Book a working call */}
              <div className="flex flex-col rounded-2xl border border-line bg-surface p-7">
                <IconCalendar className="h-5 w-5 text-[color:var(--color-accent-strong)]" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                  {eng.support.bookCtaLabel}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  Strategy and review calls are scheduled with your team.
                </p>
                <Link
                  href={eng.support.bookCtaHref}
                  className="mt-4 inline-flex items-center gap-2 text-[15px] text-white transition-colors hover:text-[color:var(--color-accent-strong)]"
                >
                  Request a call <span>→</span>
                </Link>
                <p className="mt-auto pt-6 font-[family-name:var(--font-mono)] text-[11px] text-faint">
                  <IconChat className="mr-1.5 inline h-3.5 w-3.5 align-[-2px]" />
                  {CONTACT_PHONE} ·{" "}
                  <a href={CONTACT_PHONE_HREF} className="hover:text-white">
                    call
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Account / Billing / Access ---------------- */}
        <section id="account" className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Account</Eyebrow>
            <h2 className="display-lg mt-6">Billing &amp; access.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-7 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:rgba(var(--accent-rgb),0.4)] bg-[rgba(var(--accent-rgb),0.07)] text-[color:var(--color-accent-strong)]">
                  <IconLock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
                    Billing is handled securely via Whop.
                  </h3>
                  <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-muted">
                    Your engagement is purchased through our approved checkout
                    provider. Invoices, receipts, and access are managed there;
                    your workspace stays available for the duration of your
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 md:p-8">
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-faint">
                    Workspace access
                  </span>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                    Signed in as{" "}
                    <span className="text-white">{session?.email || "your account"}</span>
                    . Access is private to you.
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-faint">
                    Demonstration workspace · populated with sample data
                  </p>
                </div>
                <div className="mt-8">
                  <SignOutButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Member footer ---------------- */}
      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-8 text-[13px] text-faint md:flex-row md:items-center md:justify-between md:px-8">
          <span>© 2026 NOREN Agency · Private client workspace</span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]">
            Operated by PK DIGITAL LLC · Billing via Whop
          </span>
        </div>
      </footer>
    </div>
  );
}
