/**
 * Stateless, signed session tokens for the NOREN client portal.
 *
 * Edge-safe: uses only Web Crypto (crypto.subtle) + btoa/atob, so the same
 * verify path runs in middleware (edge runtime) and in Server Components /
 * route handlers (node runtime). No next/headers import here on purpose.
 *
 * Swap path: replace sign/verify with a real auth provider's session (the
 * cookie name + the shape returned by verifySession is the only contract the
 * rest of the portal relies on).
 */

export const SESSION_COOKIE = "noren_session";

export type SessionPayload = {
  email: string;
  name: string;
  exp: number; // epoch ms
};

export function getSessionSecret(): string {
  // Production MUST set PORTAL_SESSION_SECRET. The dev fallback keeps local
  // builds/preview working and is never a real secret.
  return process.env.PORTAL_SESSION_SECRET || "noren-dev-portal-secret-change-me";
}

const encoder = new TextEncoder();

function bytesToB64url(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlToBytes(str: string): Uint8Array {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s.length % 4 ? 4 - (s.length % 4) : 0;
  s += "=".repeat(pad);
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function signSession(
  payload: SessionPayload,
  secret: string,
): Promise<string> {
  const body = bytesToB64url(encoder.encode(JSON.stringify(payload)));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(body) as BufferSource,
  );
  return `${body}.${bytesToB64url(new Uint8Array(sig))}`;
}

export async function verifySession(
  token: string | undefined | null,
  secret: string,
): Promise<SessionPayload | null> {
  if (!token || token.indexOf(".") === -1) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  try {
    const key = await hmacKey(secret);
    const ok = await crypto.subtle.verify(
      "HMAC",
      key,
      b64urlToBytes(sig) as BufferSource,
      encoder.encode(body) as BufferSource,
    );
    if (!ok) return null;
    const payload = JSON.parse(
      new TextDecoder().decode(b64urlToBytes(body)),
    ) as SessionPayload;
    if (!payload || typeof payload.exp !== "number" || Date.now() > payload.exp) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
