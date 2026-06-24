"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IconCompass, IconDocument, IconBarChart, IconChat } from "@/components/icons";

const INSIDE = [
  { icon: IconCompass, label: "Engagement status" },
  { icon: IconDocument, label: "Private resources" },
  { icon: IconBarChart, label: "Reporting" },
  { icon: IconChat, label: "Direct support" },
];

const labelCls =
  "block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-faint";
const inputCls =
  "mt-3 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] text-white placeholder:text-faint outline-none transition-all duration-300 focus:border-accent/55 focus:ring-1 focus:ring-accent/25";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    if (!email || !password) {
      fail("Enter your email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        fail(body.error || "Those credentials don’t match an active workspace.");
        setLoading(false);
        return;
      }
      // Resolve ?next= (same-origin only), default to the hub.
      const params = new URLSearchParams(window.location.search);
      const next = params.get("next");
      const dest = next && next.startsWith("/") ? next : "/portal";
      router.push(dest);
      router.refresh();
    } catch {
      fail("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  function fail(msg: string) {
    setError(msg);
    setShake(false);
    requestAnimationFrame(() => setShake(true));
  }

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-bg px-5 py-16">
      <div className="portal-aurora" aria-hidden />

      <div
        className={`relative grid w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface/80 backdrop-blur-sm lg:grid-cols-2 ${
          shake ? "onb-shake" : ""
        }`}
      >
        {/* Context panel */}
        <div className="ticks relative hidden flex-col justify-between border-r border-line bg-bg/40 p-10 lg:flex">
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
              Your private client workspace.
            </p>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Onboarding, implementation resources, engagement status, and
              support — together in one secure place, for active NOREN
              engagements.
            </p>
          </div>
          <div className="relative mt-10">
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
              Inside your workspace
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {INSIDE.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3.5 py-3"
                >
                  <item.icon className="h-4 w-4 text-[color:var(--gold-strong)]" />
                  <span className="text-[13.5px] text-muted">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form panel */}
        <div className="p-8 md:p-10 lg:p-12">
          <Link href="/" aria-label="NOREN — home" className="mb-8 inline-flex lg:hidden">
            <Image
              src="/noren-logo-white.png"
              alt="NOREN"
              width={1240}
              height={331}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Client Portal
          </span>
          <h1 className="display-md mt-3">Sign in.</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Access your private NOREN workspace.
          </p>

          {error ? (
            <div
              role="alert"
              className="mt-7 rounded-xl border border-[#E0876F]/40 bg-[#E0876F]/[0.08] px-4 py-3 text-[14px] text-[#E0876F]"
            >
              {error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="username"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-[color:var(--gold-strong)]"
                >
                  Need access?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-muted">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-line bg-bg accent-[var(--gold)]"
              />
              Keep me signed in
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-black transition-colors duration-300 hover:bg-white/90 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {loading ? "Signing in…" : "Sign in"}
              {!loading ? (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              ) : null}
            </button>

            <p className="flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-[11px] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden />
              Secure access · Billing via Whop
            </p>
          </form>

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
