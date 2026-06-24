# NOREN Agency

Marketing site for **NOREN Agency** (operated by PK DIGITAL LLC) — a strategic
growth agency building audience, content and distribution infrastructure for
founders, creators and modern brands.

Public site: [norenagency.com](https://norenagency.com)

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (theme defined in `app/globals.css`)
- **framer-motion** for motion / reveals

## Development

```bash
npm run dev     # start the dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/` — routes (App Router). Marketing pages, legal pages, `/plans`,
  `/login`, `/portal`, and the `/api/contact` route handler.
- `components/site.tsx` — shared chrome (nav, footer), primitives, and the
  single source of truth for services, framework, and company details.
- `components/icons.tsx` — in-house monochrome icon set.
- `lib/` — `contact.ts` (form topics) and `seo.ts` (per-route metadata helper).

## Identity

High-contrast editorial serif (**Fraunces**) + **DM Sans** body + **DM Mono**
labels, over a four-layer dark palette with a glacial steel-blue accent. The
official logo lives at `public/noren-logo-white.png`.
