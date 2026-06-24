"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ITEMS: [string, string][] = [
  ["#dashboard", "Dashboard"],
  ["#onboarding", "Onboarding"],
  ["#engagement", "Engagement"],
  ["#resources", "Resources"],
  ["#support", "Support"],
  ["#account", "Account"],
];

export function MemberBar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#dashboard");
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the pill for the section in view.
  useEffect(() => {
    const sections = ITEMS.map(([href]) => document.querySelector(href)).filter(
      Boolean,
    ) as Element[];
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function signOut() {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      /* ignore — redirect regardless */
    }
    router.push("/login");
    router.refresh();
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "member-bar-glass border-line" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <Link href="/portal" className="group flex items-center gap-3">
            <Image
              src="/noren-logo-white.png"
              alt="NOREN"
              width={1240}
              height={331}
              priority
              className="h-6 w-auto object-contain"
            />
            <span className="hidden border-l border-line pl-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold)] sm:inline">
              Private Workspace
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {ITEMS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={`rounded-full px-3.5 py-2 text-[13px] transition-colors ${
                  active === href
                    ? "bg-white/[0.04] text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={signOut}
              disabled={signingOut}
              className="hidden rounded-full border border-line bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:border-[color:rgba(var(--gold-rgb),0.5)] disabled:opacity-60 lg:inline-flex"
            >
              {signingOut ? "Signing out…" : "Sign out"}
            </button>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
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
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute inset-x-0 top-[68px] origin-top border-y border-line bg-surface px-5 py-4 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          {ITEMS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] text-muted transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={signOut}
            className="mt-3 w-full rounded-full border border-line bg-white/[0.02] py-3 text-sm font-medium text-[color:var(--gold-strong)]"
          >
            Sign out
          </button>
        </nav>
      </div>
    </>
  );
}
