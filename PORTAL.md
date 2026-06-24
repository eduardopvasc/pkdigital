# NOREN Client Portal — Production Handoff

A private client workspace for active NOREN engagements, built into the main
Next.js app. It uses the same identity as the public NOREN site — dark
four-layer surfaces with the glacial steel-blue accent (no separate palette).
This doc is everything you need to run, populate, and launch it.

---

## 1. Routes

**Public**
- `/login` — server-authenticated sign-in (split layout, remember-me). `noindex`.

**Protected** (require a valid session cookie; enforced by `proxy.ts`)
- `/portal` — the members hub (single page, anchor sections): Dashboard ·
  Onboarding · Engagement · Resources · Support · Account. Dynamic, `noindex`.

**API (route handlers)**
- `POST /api/auth/login` — validates env credentials, sets the session cookie.
- `POST /api/auth/logout` — clears the session cookie.
- `GET  /api/portal/onboarding` — returns the signed-in member's saved intake.
- `POST /api/portal/onboarding` — saves intake answers / step / completion.

---

## 2. Auth flow

1. User submits `/login` → `POST /api/auth/login`.
2. `lib/portal-auth.ts#verifyCredentials` checks the email/password against env.
3. On success, `lib/session.ts#signSession` mints an **HMAC-signed** token and
   the route sets it as an **httpOnly, SameSite=Lax** cookie (`noren_session`),
   `Secure` in production. "Keep me signed in" → 30-day cookie; otherwise 8h.
4. `proxy.ts` (Next 16 proxy convention) protects `/portal/*`:
   - no/invalid session on `/portal` → redirect to `/login?next=…`
   - valid session on `/login` → redirect to `/portal`
5. `/portal` reads the cookie server-side and renders the member's name.
6. `POST /api/auth/logout` expires the cookie; the member returns to `/login`.

Sessions are **stateless** (signed cookie, no server store), so logout clears
the client cookie but cannot force-revoke an issued token before expiry. Add a
token/blocklist store if you need server-side revocation.

---

## 3. Environment variables (required for production)

See `.env.example` for the full contract. Summary:

| Var | Required | Purpose |
|---|---|---|
| `PORTAL_SESSION_SECRET` | **Yes (prod)** | Signs the session cookie. Generate with `openssl rand -base64 48`. |
| `PORTAL_MEMBERS` | One of these | JSON array of `{email,password,name}` (multi-client). |
| `PORTAL_EMAIL` / `PORTAL_PASSWORD` / `PORTAL_NAME` | One of these | Single member, used only if `PORTAL_MEMBERS` is unset. |

**Dev fallback:** with no portal env set and `NODE_ENV !== production`, a single
demo member exists — `client@norenagency.com` / `noren-demo`. It is disabled in
production. Never rely on it for a live site.

Set these in Vercel → Project → Settings → Environment Variables (and in
`.env.local` for local dev).

---

## 4. Where the data lives / what to replace

| Thing | File | Replace with |
|---|---|---|
| **Credentials & session** | `lib/portal-auth.ts`, `lib/session.ts` | hashed passwords / a real auth provider (only these two files change). |
| **Engagement record** (summary, scope, phase, pending inputs, deliverables, updates, support) | `lib/portal-data.ts` → `getEngagementForMember(email, name)` (currently returns `DEMO_ENGAGEMENT`) | a per-client lookup from your DB/CRM keyed by `email`. The `ClientEngagement` type is the contract. |
| **Onboarding submissions** | `lib/portal-store.ts` (in-memory Map) via `GET/POST /api/portal/onboarding` | a DB write/read (and optional CRM push). Swap `getOnboarding`/`saveOnboarding`; nothing else changes. |
| **Resources** | `lib/portal-data.ts` → `PORTAL_RESOURCES` (links are `#`) | real doc / Loom / page URLs. |
| **Onboarding questions** | `lib/portal-data.ts` → `ONBOARDING_STEPS` | adjust fields to taste. |
| **Support routing** | `lib/portal-data.ts` → `DEMO_ENGAGEMENT.support` | real scheduling link (`bookCtaHref`) and support address/ticketing (`requestHref`). |
| **Billing** | `app/portal/page.tsx` Account section copy | real Whop billing/portal link. |

---

## 5. Still needs DB / CRM integration

- **Onboarding persistence** — in-memory today (resets on restart). Wire
  `lib/portal-store.ts` to a database.
- **Per-client engagement data** — one demo record today. Wire
  `getEngagementForMember` to real per-client data.
- **Auth identity** — env credentials today. Move to hashed storage / provider
  when the client list grows.
- **Onboarding → CRM** — `POST /api/portal/onboarding` logs server-side; push to
  your CRM if desired.

---

## 6. Pre-launch checklist

- [ ] Set `PORTAL_SESSION_SECRET` (strong, random) in production.
- [ ] Set `PORTAL_MEMBERS` (or single `PORTAL_EMAIL`/`PORTAL_PASSWORD`/`PORTAL_NAME`).
- [ ] Confirm the dev fallback member does **not** apply in production (it won't with `NODE_ENV=production`).
- [ ] Replace `PORTAL_RESOURCES` links with real resource URLs.
- [ ] Replace `DEMO_ENGAGEMENT` with real per-client data (or wire the DB lookup).
- [ ] Set real `support.bookCtaHref` (scheduling) and `support.requestHref`.
- [ ] Add the real Whop billing link in the Account section.
- [ ] Decide on onboarding persistence (DB) before collecting real client data.
- [ ] Verify cookies are `Secure` (automatic in production) and the domain is correct.
- [ ] `npm run lint` and `npm run build` are clean.
