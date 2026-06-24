"use client";

import { useEffect, useState } from "react";
import {
  ONBOARDING_STEPS,
  ONBOARDING_SUMMARY,
  type OnbStep,
} from "@/lib/portal-data";

type Answers = Record<string, string>;
type Status = "loading" | "ready";

const inputCls =
  "mt-3 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] text-white placeholder:text-faint outline-none transition-all duration-300 focus:border-accent/55 focus:ring-1 focus:ring-accent/25";

/**
 * Intake wizard. The server (lib/portal-store via /api/portal/onboarding) is the
 * source of truth: answers are loaded on mount and saved on each step / on
 * completion. React state is session-only UI state — nothing is stored in the
 * browser.
 */
export function Onboarding({ memberName }: { memberName: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [saving, setSaving] = useState(false);

  // Load the member's saved intake from the server (source of truth).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let answers: Answers = {};
      let savedStep = 0;
      let complete = false;
      try {
        const res = await fetch("/api/portal/onboarding", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          answers = (json.answers as Answers) || {};
          savedStep = Number(json.step) || 0;
          complete = Boolean(json.complete);
        }
      } catch {
        /* fall back to an empty form */
      }
      if (cancelled) return;
      if (!answers.name && memberName && memberName !== "Client") {
        answers = { ...answers, name: memberName };
      }
      setData(answers);
      setStep(Math.min(Math.max(savedStep, 0), ONBOARDING_STEPS.length - 1));
      setDone(complete);
      setStatus("ready");
    })();
    return () => {
      cancelled = true;
    };
  }, [memberName]);

  const total = ONBOARDING_STEPS.length;
  const current: OnbStep = ONBOARDING_STEPS[step];

  async function persist(patch: {
    answers?: Answers;
    step?: number;
    complete?: boolean;
  }) {
    setSaving(true);
    try {
      await fetch("/api/portal/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
    } catch {
      /* best-effort; UI state already reflects the change */
    } finally {
      setSaving(false);
    }
  }

  function setField(key: string, value: string) {
    setError(false);
    setData((d) => ({ ...d, [key]: value }));
  }

  function valid(): boolean {
    if (!current.required) return true;
    return Boolean(data[current.key] && data[current.key].trim());
  }

  function flagError() {
    setError(true);
    setShake(false);
    requestAnimationFrame(() => setShake(true));
  }

  function next() {
    if (!valid()) {
      flagError();
      return;
    }
    const last = step === total - 1;
    const ns = last ? step : step + 1;
    setStep(ns);
    setError(false);
    if (last) setDone(true);
    void persist({ answers: data, step: ns, complete: last });
  }

  function back() {
    if (step === 0) return;
    const ns = step - 1;
    setStep(ns);
    setError(false);
    void persist({ step: ns });
  }

  function editProfile() {
    setDone(false);
    setStep(0);
    void persist({ complete: false, step: 0 });
  }

  if (status === "loading") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-7 md:p-10">
        <div className="h-1 w-full animate-pulse rounded-full bg-white/[0.06]" />
        <div className="mt-8 h-5 w-2/3 animate-pulse rounded bg-white/[0.05]" />
        <div className="mt-4 h-12 w-full animate-pulse rounded-xl bg-white/[0.03]" />
      </div>
    );
  }

  if (done) {
    return (
      <div className="ticks rounded-2xl border border-line bg-surface p-7 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(var(--gold-rgb),0.4)] bg-[rgba(var(--gold-rgb),0.08)] text-[color:var(--gold-strong)]">
          ✓
        </div>
        <h3 className="display-md mt-6">Your client profile is complete.</h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          Thank you. Your strategist now has what they need to prepare your
          engagement. We’ll be in touch with the next steps shortly.
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {ONBOARDING_SUMMARY.map((f) => (
            <div key={f.key} className="bg-surface px-5 py-4">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-faint">
                {f.label}
              </div>
              <div className="mt-1 text-[15px] text-white">{data[f.key] || "—"}</div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={editProfile}
          className="mt-8 rounded-full border border-line bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent/45"
        >
          Edit profile
        </button>
      </div>
    );
  }

  const pct = Math.round((step / (total - 1)) * 100);

  return (
    <div className="rounded-2xl border border-line bg-surface p-7 md:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-faint">
          Step {step + 1} of {total}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
          {saving ? "Saving…" : `${pct}% complete`}
        </span>
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="onb-progress-fill h-full rounded-full bg-[var(--gold)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-3 flex gap-1.5">
        {ONBOARDING_STEPS.map((s, i) => (
          <span
            key={s.key}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i < step
                ? "bg-accent/60"
                : i === step
                  ? "bg-[var(--gold)]"
                  : "bg-white/[0.07]"
            }`}
          />
        ))}
      </div>

      {/* Field */}
      <div className={`mt-9 ${shake ? "onb-shake" : ""}`}>
        <label
          htmlFor={`onb-${current.key}`}
          className="font-[family-name:var(--font-display)] text-xl font-medium text-white"
        >
          {current.label}
        </label>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{current.help}</p>

        {current.type === "select" ? (
          <div className="relative">
            <select
              id={`onb-${current.key}`}
              value={data[current.key] || ""}
              onChange={(e) => setField(current.key, e.target.value)}
              className={`${inputCls} appearance-none pr-11 ${
                data[current.key] ? "text-white" : "text-faint"
              }`}
            >
              <option value="" disabled>
                Select an option…
              </option>
              {current.options?.map((o) => (
                <option key={o} value={o} className="bg-surface text-white">
                  {o}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
              ▾
            </span>
          </div>
        ) : current.type === "textarea" ? (
          <textarea
            id={`onb-${current.key}`}
            rows={4}
            placeholder={current.placeholder}
            value={data[current.key] || ""}
            onChange={(e) => setField(current.key, e.target.value)}
            className={`${inputCls} resize-none`}
          />
        ) : current.type === "group" ? (
          <div className="mt-1 grid gap-4 sm:grid-cols-2">
            {current.fields?.map((f) => (
              <div key={f.key}>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-faint">
                  {f.label}
                </span>
                <input
                  id={`onb-${f.key}`}
                  type="text"
                  placeholder={f.ph}
                  value={data[f.key] || ""}
                  onChange={(e) => setField(f.key, e.target.value)}
                  className={inputCls}
                />
              </div>
            ))}
          </div>
        ) : (
          <input
            id={`onb-${current.key}`}
            type="text"
            placeholder={current.placeholder}
            value={data[current.key] || ""}
            onChange={(e) => setField(current.key, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                next();
              }
            }}
            className={inputCls}
          />
        )}

        {error ? (
          <p className="mt-3 text-sm text-[#E0876F]">
            Please complete this field to continue.
          </p>
        ) : null}
      </div>

      {/* Nav */}
      <div className="mt-9 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          className={`rounded-full border border-line bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-all hover:border-accent/45 ${
            step === 0 ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          Back
        </button>
        <button
          type="button"
          onClick={next}
          className="btn-glow group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
        >
          {step === total - 1 ? "Complete profile" : "Next"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
