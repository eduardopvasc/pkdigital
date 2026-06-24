"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function signOut() {
    if (busy) return;
    setBusy(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      /* redirect regardless */
    }
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={busy}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[color:rgba(var(--accent-rgb),0.5)] disabled:opacity-60"
    >
      {busy ? "Signing out…" : "Sign out of workspace"}
    </button>
  );
}
