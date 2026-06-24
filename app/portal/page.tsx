import Link from "next/link";
import { Nav, Footer } from "@/components/site";
import {
  IconLock,
  IconUserCheck,
  IconCompass,
  IconDocument,
  IconBarChart,
  IconChat,
} from "@/components/icons";

const AREAS: {
  icon: typeof IconLock;
  title: string;
  copy: string;
}[] = [
  {
    icon: IconUserCheck,
    title: "Welcome / client area",
    copy: "Your engagement overview, points of contact, and where everything lives.",
  },
  {
    icon: IconCompass,
    title: "Strategy updates",
    copy: "Positioning, roadmap and the current focus of your growth engagement.",
  },
  {
    icon: IconDocument,
    title: "Deliverables",
    copy: "Work in progress and completed assets, organized by workstream.",
  },
  {
    icon: IconBarChart,
    title: "Reporting",
    copy: "Performance reviews and growth reporting on your engagement cadence.",
  },
  {
    icon: IconChat,
    title: "Communication / support",
    copy: "A direct line to your strategist and the team running your account.",
  },
];

export default function PortalPage() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <div
          className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[55vh]"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(147,168,199,0.10), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
          {/* Restricted-access banner */}
          <div className="ticks flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur-sm sm:flex-row sm:items-center md:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/35 bg-accent/[0.06] text-accent-strong">
                <IconLock className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[14.5px] font-medium text-white">
                  Access restricted
                </p>
                <p className="text-[13px] text-muted">
                  Available to active clients, approved members and invited
                  accounts.
                </p>
              </div>
            </div>
            <Link
              href="/login"
              className="btn-ghost group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white hover:border-accent/45 hover:bg-white/[0.05]"
            >
              Client login
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="mt-14 max-w-3xl">
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-accent-strong">
              Client portal
            </span>
            <h1 className="display-xl mt-6">Noren Client Portal</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Client workspaces are provisioned by invitation for active Noren
              Agency clients. This is where strategy, deliverables, reporting and
              support come together in one place across an engagement.
            </p>
          </div>

          {/* Area preview grid */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <div key={a.title} className="group relative bg-surface p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent-strong">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-faint">
                    <IconLock className="h-3 w-3" />
                    Restricted
                  </span>
                </div>
                <h2 className="display-md mt-5 text-[1.35rem]">{a.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {a.copy}
                </p>
                <p className="mt-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-faint">
                  Available to active clients
                </p>
              </div>
            ))}

            {/* CTA cell */}
            <div className="flex flex-col justify-between bg-accent/[0.04] p-7 md:p-8">
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong">
                Not a client yet?
              </span>
              <div className="mt-8">
                <p className="text-[15px] leading-relaxed text-muted">
                  Workspaces are set up as part of an engagement.
                </p>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-lg font-medium text-white"
                >
                  Contact Noren Agency
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-faint">
            For security, portal access is limited to invited accounts. If you are
            an active client and need access, contact your strategist or reach
            Noren Agency directly.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
