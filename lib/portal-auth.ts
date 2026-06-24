/**
 * Server-only credential check for the NOREN client portal.
 *
 * Credentials live in env (never shipped to the client). Two shapes supported:
 *   PORTAL_MEMBERS = '[{"email":"x@y.com","password":"...","name":"Jane"}]'
 *   …or PORTAL_EMAIL / PORTAL_PASSWORD / PORTAL_NAME for a single member.
 *
 * Swap path: replace `verifyCredentials` with a lookup against a real identity
 * store (hashed passwords / provider). The portal only depends on the returned
 * { email, name } shape.
 *
 * NOTE: passwords are compared in plaintext from env — acceptable for a small,
 * invite-only client list now; move to hashing + a provider before scale.
 */
import "server-only";

export type PortalMember = { email: string; password: string; name: string };
export type PortalIdentity = { email: string; name: string };

function members(): PortalMember[] {
  const raw = process.env.PORTAL_MEMBERS;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed as PortalMember[];
    } catch {
      /* fall through */
    }
  }
  if (process.env.PORTAL_EMAIL && process.env.PORTAL_PASSWORD) {
    return [
      {
        email: process.env.PORTAL_EMAIL,
        password: process.env.PORTAL_PASSWORD,
        name: process.env.PORTAL_NAME || "Client",
      },
    ];
  }
  // Local dev convenience only — disabled in production so it can never ship.
  if (process.env.NODE_ENV !== "production") {
    return [
      { email: "client@norenagency.com", password: "noren-demo", name: "Noren Client" },
    ];
  }
  return [];
}

export function verifyCredentials(
  email: string,
  password: string,
): PortalIdentity | null {
  const e = String(email || "").trim().toLowerCase();
  const p = String(password || "");
  const match = members().find(
    (m) => m.email.toLowerCase() === e && m.password === p,
  );
  return match ? { email: match.email, name: match.name } : null;
}
