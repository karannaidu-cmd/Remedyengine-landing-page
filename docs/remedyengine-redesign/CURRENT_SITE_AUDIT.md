# RemedyEngine — Current Site Audit

*Prepared as the pre-redesign baseline. Every claim below is grounded in the actual repository at audit time (commit `40963dc`). File references are clickable.*

---

## 0. Stack snapshot (what we're building on)

| Area | Current state |
|---|---|
| Framework | **Next.js 16.2.10** (App Router), **React 19.2.4** — modern, no migration needed |
| Language | TypeScript 5, `strict: true`, path alias `@/*` |
| Styling | **Tailwind v4** (`@tailwindcss/postcss`), tokens in `@theme inline` block of [globals.css](../../src/app/globals.css) |
| UI kit | **shadcn (style `base-nova`) on `@base-ui/react` ^1.6.0** — *not Radix* |
| Icons | **lucide-react ^1.23.0** (single library — good) |
| Fonts | Source Serif 4 (headings), IBM Plex Sans (body), IBM Plex Mono (`.font-data`) via `next/font/google` |
| Animation libs | **None.** One custom `Reveal` (IntersectionObserver) + CSS keyframes |
| Forms/email | [book-demo-form.tsx](../../src/components/book-demo-form.tsx) → [api/book-demo/route.ts](../../src/app/api/book-demo/route.ts), **nodemailer** over SMTP env vars |
| Routes | **Two:** `/` and `/book-demo`, plus `/api/book-demo`, `robots.ts`, `sitemap.ts` |
| Analytics | **None found** in the codebase |
| Deploy | Standard Next build (`npm run build` runs `tsc`); no `next.config` customisation |

**Verdict:** the technical foundation is genuinely good and current. This is an *evolution*, not a rebuild. Keep the stack; do not migrate frameworks (brief §1).

---

## 1. Current strengths (keep / build on)

1. **Strong, coherent brand system already exists** — `@theme inline` tokens (`ink-900`, `paper-50`, `remedy-600`, `signal-500`, `line-200`), consistent `font-data` mono treatment for eyebrows/metadata/pills, a disciplined single-shadow / 12px-radius language. This is more mature than most startup sites.
2. **Excellent SEO foundation.** [seo.ts](../../src/lib/seo.ts) centralises config; [layout.tsx](../../src/app/layout.tsx) sets full OpenGraph/Twitter/robots/verification; [page.tsx](../../src/app/page.tsx) ships a proper `@graph` JSON-LD (`Organization` + `WebSite` + `WebPage` + `SoftwareApplication`); `robots.ts` and `sitemap.ts` exist; `/book-demo` has its own metadata + `BreadcrumbList`. **This is the biggest asset to preserve.**
3. **Accessibility is above baseline.** `Reveal` and `stakeholders` respect `prefers-reduced-motion`; `stakeholders` implements a proper ARIA tablist (roles, `aria-selected`, `tabIndex`, keyboard); nav sheet has `sr-only` title/description; global `:focus-visible` outline in `globals.css`; hero background image is correctly `alt="" aria-hidden`.
4. **Content is credible and disciplined.** Copy already avoids fake numbers, carries the "illustrative targets, not guarantees" disclaimer (footer + differentiators), and reads confidently. Tone matches brief §14.
5. **Clean, data-driven section pattern.** Every section = typed array at top + `.map()` JSX. This is *exactly* the pattern the multi-engine redesign needs — the engine pages should adopt it wholesale.
6. **Working, validated demo funnel.** Client + server validation, honest error states, reduced-motion, nodemailer wired to env vars. **Do not break this** (brief §1).
7. **The `Thread` component** (chat bubbles → clinical cards in [thread.tsx](../../src/components/sections/thread.tsx)) is a genuinely distinctive, on-brand signature element.

---

## 2. Current weaknesses (what the redesign must fix)

1. **It is a single long landing page, not a platform site.** Only `/` and `/book-demo` exist. The brief's positioning ("a collection of intelligent engines") has nowhere to breathe — no `/engines`, no engine detail pages, no `/solutions`, no `/how-it-works`, `/security`, `/contact`, `/privacy`, `/terms`. This is the central gap.
2. **Positioning is last-generation.** Current framing = "WhatsApp-first front-desk automation" organised as **4 pillars**. The new positioning = **AI Clinic Operating System of 16 engines** with **omnichannel** entry (WhatsApp + Instagram + Facebook + website + walk-in + AI calling). The story, IA, and visuals all need to shift from "automation tool" to "operating system."
3. **Visual language is flat and safe — not "premium high-technology."** The brief explicitly asks for a premium, futuristic-but-credible feel with **selective claymorphism, a deeper green/emerald/lime palette, and motion that explains the product**. The current site is deliberately minimal (one shadow, no gradients, no depth) — good taste, but under-delivers on the "world-class international healthcare-tech company" bar the brief sets.
4. **No motion that explains the product.** The only motion is a fade-up reveal and one auto-rotating carousel. There is no hero orchestration, no channel→booking convergence, no scroll-driven patient journey, no interactive engine constellation — all of which the brief calls for (§6, §11).
5. **Placeholder / dead links everywhere.** Footer's **15 column links all point to `href="#"`** ([footer.tsx](../../src/components/footer.tsx)); the **"Talk to sales" CTA has no destination** (hero + [cta.tsx](../../src/components/sections/cta.tsx)). These will read as broken to buyers and hurt SEO/crawl.
6. **No contact information anywhere.** The brief mandates surfacing **info@remedyengin.com** and **+91 8861650666 (phone/WhatsApp)**. Neither the footer nor any page contains an email, phone, or WhatsApp link today.

---

## 3. Technical risks (handle deliberately)

1. **🚩 DOMAIN MISMATCH — highest-priority correctness issue.** The codebase hardcodes `https://remedyengine.com` in [seo.ts](../../src/lib/seo.ts) (`siteConfig.url`), which flows into **canonical URLs, OpenGraph `url`, JSON-LD `@id`s, sitemap, and `robots.host`**. The brief states the live domain is **`https://www.remedyengin.com`** (no trailing "e"). If the brief is correct, **every canonical and structured-data URL currently points at the wrong domain** — a serious SEO problem. **Action: confirm the authoritative domain with the owner, then fix `siteConfig.url` once — it propagates everywhere.** Do not guess; this changes indexing.
2. **Two coexisting palette/token systems.** Section components + `sheet.tsx` use **brand tokens** (`paper-*`, `ink-*`, `remedy-*`, `line-200`, `signal-*`); but `button.tsx`, `card.tsx`, `tabs.tsx`, `accordion.tsx` use **generic shadcn tokens** (`primary`, `muted`, `foreground`, `card`, `ring`). They're bridged in the `:root` block, so it works — but the new richer palette must be threaded through **both** systems or primitives will drift off-brand. Consolidate during the design-system phase.
3. **New palette ≠ current palette.** The brief's palette (`#075E4C`, `#043D32`, `#062F29`, `#16A779`, `#72D94E`, mint tints) is **deeper and more saturated** than the shipped `remedy-600 #2E6B54`. This is a deliberate brand deepening, but it touches the `@theme` block, the `:root`/`.dark` shadcn mappings, every hardcoded hex in the nodemailer HTML email, and the OG image. Treat as a coordinated token migration, not a find-replace.
4. **shadcn is on `@base-ui/react`, not Radix.** Any new primitive must be added via the project's `base-nova` setup (`npx shadcn@latest add …`) and use Base UI's `data-*-style` transition API — copying Radix snippets from the internet will not work. (Per AGENTS.md: read `node_modules/next/dist/docs/` before writing Next-specific code.)
5. **Heavy hero/scroll animation could regress LCP.** The hero banner is currently the LCP element and is *intentionally static* (see the comment in [hero.tsx](../../src/components/sections/hero.tsx#L94)). Any new WebGL/canvas hero orchestration must not block first paint or displace the LCP image — gate it behind idle/interaction, ship a static fallback, and respect reduced motion (brief §11, §18).
6. **`sitemap.ts` / `robots.ts` will silently under-represent the new pages.** They currently enumerate only `/` and `/book-demo`. Every new route must be added, or it won't be indexed.
7. **No test suite** (per CLAUDE.md). Correctness gate is `npm run build` + manual browser check. The redesign expands surface area a lot — the implementation plan must add explicit per-route QA since there's no automated safety net.

---

## 4. Visual issues (specific)

- **Depth & hierarchy:** everything sits on one elevation (single `0 4px 16px rgba(22,35,31,0.08)` shadow, `rounded-xl`). Nothing feels tactile or "engineered." The claymorphism system (blueprint §Design System) is the fix — applied *selectively* to engine nodes/cards/CTAs, not globally.
- **Hero is text-over-faint-image + a static banner.** Competent but generic; does not communicate "operating system of connected engines." Needs the engine-core + orbiting-channel orchestration (brief §6 §1).
- **Iconography is fine but generic.** Plain Lucide glyphs in mint chips. The brief wants **distinct engine glyphs** with clay/outline/active variants — a recognisable icon identity per engine.
- **The dark ROI panel** in [differentiators.tsx](../../src/components/sections/differentiators.tsx) (`bg-ink-900`) is the one moment of contrast/drama and it works — a signal that the redesign can push a "dark technology surface" (`#062F29`) further for command-centre / engine-ecosystem sections.
- **Card density is good; don't regress it.** Current cards breathe. The brief warns against overcrowded cards (§7) — keep the current restraint even while adding depth.

---

## 5. Content problems

1. **Wrong mental model for the new positioning.** Content is organised as 4 pillars + 6 "modules" + 9 automations. The new model is **16 named engines in 4 families** with an **omnichannel funnel**. Most copy is reusable *as raw material* but must be re-slotted into the engine taxonomy (see CONTENT_MATRIX.md).
2. **"AI Pre-Consult Doctor Briefs" naming is retired.** [ai-features.tsx](../../src/components/sections/ai-features.tsx) uses "AI Pre-Consult Doctor Briefs" / "AI Pre-Visit"; the brief renames this to the **AI Patient History Brief** and requires a specific **disclaimer** on every surface. Current AI copy does *not* carry that disclaimer — must be added (brief §4, §14).
3. **Omnichannel is under-claimed and over-claimed at once.** Current copy is WhatsApp-only; the new story adds Instagram/Facebook/website/walk-in/AI-calling. But several of those may not be live — content must **mark non-live channels "Coming soon"** and never imply an integration works when it doesn't (brief §3, §14).
4. **No FAQ content** exists, yet FAQ schema is a brief SEO target — needs authored, visible Q&A before any FAQ structured data is added (§17).
5. **Contact details missing from copy** (email/phone/WhatsApp) — see §2.6.
6. **Disclaimers are good and must be preserved** ("illustrative targets, not guarantees"; add the clinical-AI disclaimer). Do not fabricate metrics, certifications, testimonials, or customer counts (brief §14) — the current site already honours this; keep it.

---

## 6. Performance observations

- **Positive:** images are WebP and use `next/image` with `priority`/`sizes`; fonts via `next/font` (self-hosted, no layout shift); the LCP hero image is static by design; minimal client JS (only 4 client components). Baseline CWV should be healthy today.
- **Risks introduced by the redesign:**
  - New hero orchestration / scrollytelling / engine constellation are the main CWV threats — must animate transform/opacity only, lazy-load, avoid WebGL on mobile, and never block first render (brief §11, §18).
  - Multiplying routes multiplies image weight — enforce AVIF/WebP, responsive `sizes`, and SVG for all diagrams/icons.
  - `og-image.webp` is only 1424×752 and generic; new OG assets per page section should be planned.
- **No `next.config` image/remote/compression tuning** exists yet — an opportunity (formats, `images.formats: ['image/avif','image/webp']`).

---

## 7. Accessibility problems (to fix, beyond the good baseline)

1. **Dead `href="#"` links** (footer ×15) are keyboard-focusable but do nothing — confusing for screen-reader/keyboard users. Fix by routing them to real pages.
2. **"Talk to sales" is a `<button>` with no action** — announces as an actionable control that does nothing. Give it a destination (`/contact` or `tel:`/WhatsApp) or remove.
3. **Interactive engine diagrams (new) must be screen-reader friendly** — the brief requires this (§16). Any constellation/scrollytelling needs text alternatives and must not lock information behind hover only.
4. **Colour-contrast recheck required for the deeper palette** — lime `#72D94E` must never carry body text; verify all text/background pairs hit WCAG 2.2 AA (esp. secondary text `#4C6473` on mint tints, and any text on the new gradient/dark surfaces).
5. **Confirm focus-visible styling survives** the claymorphism restyle of buttons/cards (the current global outline is good — don't let soft shadows swallow it).

---

## 8. Component reuse map

### ✅ Reuse as-is (or with token re-theming only)
| Component | Why | Note |
|---|---|---|
| [reveal.tsx](../../src/components/reveal.tsx) | Solid reduced-motion-aware scroll reveal | The base motion primitive for the whole redesign |
| [section-header.tsx](../../src/components/section-header.tsx) | Clean eyebrow/title/sub pattern | Reuse on every new page |
| [brand-logo.tsx](../../src/components/brand-logo.tsx) | Logo from `siteConfig` | **Do not touch the logo** (brief §1); component is fine |
| [book-demo-form.tsx](../../src/components/book-demo-form.tsx) + [route.ts](../../src/app/api/book-demo/route.ts) | Working, validated funnel | **Preserve behaviour**; only restyle + update hardcoded hex in email HTML if palette changes |
| [lib/seo.ts](../../src/lib/seo.ts) | Centralised SEO | Extend with per-page helpers; fix domain |
| `ui/*` primitives (button, card, accordion, tabs, sheet, input, label, separator, badge) | Standard, headless, accessible | Re-theme tokens; reuse for engine pages, mega-menu, FAQ |
| [thread.tsx](../../src/components/sections/thread.tsx) | Signature element | Keep **once** on home (per CLAUDE.md); it can seed the scrollytelling journey |

### ♻️ Reuse content, rebuild presentation
| Component | Becomes |
|---|---|
| [hero.tsx](../../src/components/sections/hero.tsx) | New immersive engine-core hero; keep static LCP fallback discipline |
| [ai-features.tsx](../../src/components/sections/ai-features.tsx) | Feeds Conversation / AI Calling / AI Patient History engine pages; rename brief; add disclaimer |
| [workflow.tsx](../../src/components/sections/workflow.tsx) | Its 8 modules map into the 16-engine catalog + `/engines` overview |
| [automations.tsx](../../src/components/sections/automations.tsx) | Feeds Follow-Up & Retention + Conversation engines |
| [stakeholders.tsx](../../src/components/sections/stakeholders.tsx) | Feeds `/solutions/*` pages; carousel pattern reusable |
| [differentiators.tsx](../../src/components/sections/differentiators.tsx) | "Built differently" + ROI story → home §8 + `/how-it-works` |
| [problem.tsx](../../src/components/sections/problem.tsx) | Home "before RemedyEngine" narrative; pairs with before/after imagery |
| [cta.tsx](../../src/components/sections/cta.tsx) | Final CTA (brief §9 copy) — **give "Talk to sales" a real destination** |
| [footer.tsx](../../src/components/footer.tsx) | Rebuild link map to real routes; add contact block (email/phone/WhatsApp) |

### 🆕 Net-new components required
- `EngineDetail` template + `lib/engines.ts` data (16 engines, one template)
- `EngineConstellation` (interactive, accessible ecosystem map)
- `OmnichannelConverge` (channels → booking animation)
- `PatientJourney` (sticky scrollytelling)
- `MegaMenu` nav (engines grouped by family) replacing the 3-link nav
- `ClayCard` / `ClayNode` / `ClayButton` presentational primitives
- Reusable page scaffold for `/solutions/*`, `/security`, `/integrations`, `/contact`, `/privacy`, `/terms`, `/how-it-works`

### 🗑️ Replace / retire
- Footer `href="#"` links (all 15) — dead
- "Talk to sales" no-op button — dead
- "AI Pre-Consult Doctor Briefs" naming — renamed to AI Patient History Brief

---

## 9. Top-priority actions (ordered)

1. **Confirm & fix the domain** (`remedyengin.com` vs `remedyengine.com`) in `siteConfig` before anything ships — it poisons canonical/OG/schema/sitemap. *(Owner decision required.)*
2. **Confirm engine availability flags** (which of the 16 engines / 6 channels are live vs "Coming soon") — gates every claim. *(Owner decision required.)*
3. **Lock the design-system evolution** (deeper palette + selective claymorphism + type) across *both* token systems.
4. **Stand up routing/IA** (mega-menu + all new routes + sitemap/robots) so content has a home.
5. **Rebuild home as a story**, then the data-driven engine pages, then solutions, then motion polish, then SEO/a11y/perf QA.
6. **Preserve the demo funnel, SEO graph, reduced-motion behaviour, and the logo** throughout.

> Nothing in this codebase forces a rewrite. The redesign is: **deepen the brand, add depth + explanatory motion, expand one page into a proper platform IA, and reposition from "automation tool" to "operating system of engines" — without breaking the funnel, the SEO graph, or the logo.**
