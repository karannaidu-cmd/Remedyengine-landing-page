# Handoff to Claude Fable — RemedyEngine Redesign

**You are the implementing engineer.** The design authority (this doc set) has done the audit, blueprint, content, engine catalog, image prompts, and plan. Your job is to **build it**, in order, without breaking what works. Read this file first, then keep the five sibling docs open.

## Read these, in this order
1. [CURRENT_SITE_AUDIT.md](./CURRENT_SITE_AUDIT.md) — what exists, what to keep, what's broken.
2. [REDESIGN_BLUEPRINT.md](./REDESIGN_BLUEPRINT.md) — IA, wireframes, design system, motion, tech strategy.
3. [ENGINE_CATALOG.md](./ENGINE_CATALOG.md) — the 16 engines + the `Engine` data type = your `lib/engines.ts`.
4. [CONTENT_MATRIX.md](./CONTENT_MATRIX.md) — every headline, copy line, CTA, and SEO title/description.
5. [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) — **your task board.** Build phase by phase.
6. [NANO_BANANA_IMAGE_PROMPTS.md](./NANO_BANANA_IMAGE_PROMPTS.md) — image generation + conversion rules.

## The stack you're working in (do not change it)
Next.js **16.2.10** App Router · React **19.2.4** · TypeScript strict · Tailwind **v4** (tokens in `@theme inline` in `src/app/globals.css`) · **shadcn style `base-nova` on `@base-ui/react`** (NOT Radix — use Base UI's `data-*-style` transition API) · **lucide-react** (only icon lib) · **nodemailer** for the demo form. Per AGENTS.md, **read `node_modules/next/dist/docs/` before writing Next-16-specific code** — APIs may differ from training data.

## Build in this exact order (from IMPLEMENTATION_PLAN.md)
`Phase 0 decisions → 1 Foundation → 2 Design system → 3 Nav & routing → 4 Homepage → 5 Engine/solution/deep-dive pages → 6 Animations → 7 Forms → 8 SEO → 9 A11y → 10 Perf → 11 Final QA.`
Phases 4/5/7 may parallelise after 3. One PR per phase; each must pass `npm run build`.

## 🚫 DO NOT BREAK (hard constraints — brief §1)
- **The logo.** Never regenerate or restyle it. It loads from `siteConfig.logo` via `brand-logo.tsx`. Leave it.
- **The demo funnel.** `book-demo-form.tsx` + `src/app/api/book-demo/route.ts` (nodemailer) + env vars `SMTP_HOST/PORT/USER/PASS`, `DEMO_INBOX`, `GOOGLE_SITE_VERIFICATION`. Restyle only; keep validation, error states, and behaviour. Test a real submission after touching it.
- **Keep `/book-demo` canonical.** Add `/demo` only as a redirect. Don't fork the form.
- **The SEO graph.** The JSON-LD `@graph` in `page.tsx`, per-page metadata, canonical/OG, `robots.ts`, `sitemap.ts` must stay valid and only get extended — never regressed.
- **Reduced-motion behaviour.** `reveal.tsx` and `stakeholders.tsx` already honour `prefers-reduced-motion`. Every new animation must too.
- **Existing routing/analytics/env/deploy.** No framework migration. No breaking env or build changes.

## ⛔ BLOCKERS — get answers before you write claim/SEO code (Phase 0)
1. **Domain:** `remedyengin.com` (brief) vs `remedyengine.com` (current `seo.ts`). Confirm, then fix `siteConfig.url` once. This is wrong today and poisons every canonical/OG/schema URL.
2. **Engine & channel availability:** which of the 16 engines and 6 channels are **live** vs **planned**. Anything not live is labelled **"Coming soon"** — never implied operational (brief §3, §14).
3. **Security facts:** what `/security` may state. **No certification claims unless verified** (brief §4, §16).
4. **Heading font:** Sora (recommended) or Manrope.
If you can't get an answer, **default to the most conservative claim** (mark "Coming soon", omit the certification) and flag it in the PR — do not invent capability.

## Non-negotiable content rules (brief §14)
- No invented numbers, percentages, customer counts, awards, certifications, testimonials, or fake integrations.
- The **AI Patient History Brief** disclaimer must appear on every surface describing it: *"AI-generated summaries organise available patient information to support healthcare professionals. They do not replace independent clinical assessment, diagnosis or professional medical judgment."*
- Keep the existing "illustrative targets, not guarantees" disclaimer.
- Any dashboard/screenshot that isn't a real product screen is labelled **"Illustrative."**
- Surface contact everywhere it belongs: `info@remedyengin.com`, `+91 8861650666` (`tel:` + `https://wa.me/918861650666`).
- **Kill every dead link:** footer's 15 `href="#"` and the destination-less "Talk to sales" button → route to real pages / `/contact`.

## Design system essentials (full detail in BLUEPRINT §5)
- **Palette:** deepen to `#043D32 / #062F29 / #075E4C (primary) / #16A779 (emerald) / #72D94E (lime)` + mint tints + `#0B1F33` navy text + `#4C6473` secondary. Add tokens to `@theme` AND remap the shadcn `:root`/`.dark` semantic tokens (two token systems coexist — thread both). **Lime is for active states/accents/pulses only — never body text.**
- **Claymorphism, selective:** engine nodes/cards, hero objects, channel icons, CTAs, KPI/timeline nodes. NOT on long text, backgrounds, tables, legal pages, or critical form fields. Use the `.clay` utilities in the blueprint. Premium soft-3D — not toy-like.
- **Type:** Sora/Manrope headings + Inter body via `next/font/google`; keep IBM Plex Mono as `.font-data`. Fluid `clamp()` scale. Repoint the `h1,h2,h3` rule in `globals.css`.
- **Icons:** lucide only; each engine's glyph is fixed in the catalog; four treatments (primary/clay/outline/active). No emoji.
- **Rhythm:** keep `max-w-[1200px]`, `py-20 md:py-28`, the elevation ladder (flat → soft card → clay → dark engine-room).

## Motion essentials (full detail in BLUEPRINT §6)
Motion **explains** the product. Transform/opacity only, 60fps, lazy-load, reduced-motion fallbacks, **no WebGL on mobile**, keep the LCP hero static (hydrate animation after). Reuse `Reveal` for scroll reveals. Interactive diagrams must be **keyboard + screen-reader accessible and never hover-only**. Prefer CSS + WAAPI + IntersectionObserver; add `motion` (Framer) only if needed and code-split it — no heavy animation bundle site-wide.

## Data-driven, build-once
- `src/lib/engines.ts` (16 engines, `Engine` type from the catalog) → one `EngineDetail` template renders all `/engines/[slug]`.
- `src/lib/solutions.ts` (5) → one template renders all `/solutions/[slug]`.
- Extend `src/lib/seo.ts` with `pageMetadata()` + JSON-LD builders; add `src/lib/contact.ts` for contact constants.
- Server components by default; client only where interaction requires (nav, constellation, scrollytelling, carousels, forms).

## Reuse, don't rebuild (audit §8)
Keep and re-theme: `reveal`, `section-header`, `brand-logo`, `book-demo-form` + API, `lib/seo`, all `ui/*` primitives, `thread` (once, on home). Rebuild presentation (reuse content): `hero`, `nav`→mega-menu, `footer`, and the section components as feedstock for the new pages per the content matrix.

## How to verify you're done (Phase 11)
1. `npm run build` clean (this runs `tsc` — it's the primary gate; there is no test suite).
2. Run `/verify` on the demo flow and any new form; run `/code-review` (high) on the diff; `/security-review` on new API/form code.
3. Manual QA at **320 / 375 / 430 / 768 / 1024 / 1280 / 1440** — zero horizontal overflow.
4. **Link audit:** no `href="#"`, no dead CTAs, all internal links resolve, sitemap lists every route.
5. **Claim audit:** no invented figures/certs/testimonials; every non-live engine/channel "Coming soon"; AI disclaimer present; illustrative dashboards labelled.
6. **Contact audit:** email/phone/WhatsApp correct and clickable everywhere.
7. **A11y:** axe/Lighthouse ≥ 95; keyboard + screen-reader pass on home, one engine page, and the demo form; reduced-motion disables complex motion.
8. **Perf:** Lighthouse mobile LCP/CLS/INP green on home + an engine page + `/book-demo`; LCP hero still static.
9. Confirm the demo email actually delivers in the deploy environment.
10. Owner sign-off on domain, availability flags, security facts, and copy.

## First move
Open [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md), get the four Phase 0 answers, then start Phase 1. Build one phase, verify, PR, repeat. When a claim is uncertain, choose the conservative option and flag it — never fabricate capability, numbers, or certifications.
