"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconCompass, IconDocument, IconBarChart, IconChat } from "@/components/icons";

const PORTAL_INCLUDES = [
  { icon: IconCompass, label: "Strategy updates" },
  { icon: IconDocument, label: "Deliverables" },
  { icon: IconBarChart, label: "Reporting" },
  { icon: IconChat, label: "Direct support" },
];

export default function LoginPage() {
  const [showNotice, setShowNotice] = useState(false);
  const [showPw, setShowPw] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    // No real authentication is wired up yet. Rather than fake a sign-in or a
    // dashboard, we tell the visitor honestly how portal access works.
    e.preventDefault();
    setShowNotice(true);
  }

  const labelCls =
    "block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint";
  const inputCls =
    "mt-3 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] text-white placeholder:text-faint transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20";

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-bg px-6 py-16">
      {/* Background texture, consistent with the rest of the site */}
      <div
        className="bg-grid bg-grid-fade-c pointer-events-none absolute inset-0 opacity-70"
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

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface/80 backdrop-blur-sm lg:grid-cols-2">
        {/* Context panel */}
        <div className="ticks relative hidden flex-col justify-between border-r border-line bg-bg/40 p-10 lg:flex">
          <div
            className="bg-grid-fine bg-grid-fade-c pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          />
          <div className="relative">
            <Link href="/" aria-label="NOREN — home" className="inline-flex">
              <Image
                src="/noren-logo-white.png"
                alt="NOREN"
                width={1240}
                height={331}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-10 max-w-sm font-display text-[1.6rem] font-normal leading-snug tracking-[-0.01em] text-white">
              A focused workspace for active Noren engagements.
            </p>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              The client portal is where strategy, deliverables, reporting and
              direct support live together for the brands we partner with.
            </p>
          </div>

          <div className="relative mt-10">
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint">
              Inside the portal
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {PORTAL_INCLUDES.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3.5 py-3"
                >
                  <item.icon className="h-4 w-4 text-accent-strong" />
                  <span className="text-[13.5px] text-muted">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form panel */}
        <div className="p-8 md:p-10 lg:p-12">
          {/* Logo shown inline on small screens where the context panel is hidden */}
          <Link
            href="/"
            aria-label="NOREN — home"
            className="mb-8 inline-flex lg:hidden"
          >
            <Image
              src="/noren-logo-white.png"
              alt="NOREN"
              width={1240}
              height={331}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-accent-strong">
            Client Portal
          </span>
          <h1 className="display-md mt-3">Sign in.</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Access your Noren client workspace.
          </p>

          {showNotice ? (
            <div
              role="status"
              className="mt-7 rounded-xl border border-accent/30 bg-accent/[0.06] p-5"
            >
              <p className="text-[14.5px] leading-relaxed text-white">
                Portal access is currently provided to approved clients and active
                engagements. If you need access, please contact Noren Agency.
              </p>
              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent-strong transition-colors hover:text-white"
              >
                Contact Noren Agency
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={inputCls}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={labelCls}>
                  Password
                </label>
                <Link
                  href="/contact"
                  className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent-strong"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  className={`${inputCls} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-white"
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black transition-colors duration-300 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign in
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="mt-6 text-[13px] leading-relaxed text-faint">
            Portal access is provided to approved clients and active engagements.
            New here?{" "}
            <Link
              href="/contact"
              className="text-muted underline-offset-2 transition-colors hover:text-white"
            >
              Contact Noren Agency
            </Link>{" "}
            to request access.
          </p>

          <div className="mt-8 border-t border-line pt-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
