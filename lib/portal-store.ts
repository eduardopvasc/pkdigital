import "server-only";

/**
 * Server-side store for client onboarding/intake — the source of truth.
 *
 * This is an in-memory implementation (keyed by member email) that survives
 * HMR via globalThis. It is the single seam to swap for a real database:
 * replace getOnboarding / saveOnboarding with DB reads/writes and nothing else
 * in the portal changes. No data is persisted to the browser.
 *
 * NOTE: in-memory state resets on server restart — intended only as the
 * pre-database stand-in, not long-term storage.
 */

export type OnboardingRecord = {
  answers: Record<string, string>;
  step: number;
  complete: boolean;
  updatedAt: number;
};

type OnboardingPatch = {
  answers?: Record<string, string>;
  step?: number;
  complete?: boolean;
};

const globalRef = globalThis as unknown as {
  __norenOnboarding?: Map<string, OnboardingRecord>;
};

const store: Map<string, OnboardingRecord> =
  globalRef.__norenOnboarding ?? (globalRef.__norenOnboarding = new Map());

export function getOnboarding(email: string): OnboardingRecord | null {
  return store.get(email) ?? null;
}

export function saveOnboarding(
  email: string,
  patch: OnboardingPatch,
): OnboardingRecord {
  const current = store.get(email) ?? {
    answers: {},
    step: 0,
    complete: false,
    updatedAt: 0,
  };
  const next: OnboardingRecord = {
    answers: { ...current.answers, ...(patch.answers ?? {}) },
    step: patch.step ?? current.step,
    complete: patch.complete ?? current.complete,
    updatedAt: Date.now(),
  };
  store.set(email, next);
  return next;
}
