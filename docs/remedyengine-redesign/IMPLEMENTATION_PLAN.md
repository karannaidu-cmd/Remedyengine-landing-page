# RemedyEngine — Implementation Plan

*Sequenced, dependency-aware build plan for the redesign. Stack is fixed: Next.js 16 App Router · React 19 · Tailwind v4 · shadcn/base-nova on `@base-ui/react` · lucide-react. Correctness gate is `npm run build` (runs `tsc`) + manual per-route browser check + `/verify` and `/code-review` before merge — there is no test suite.*

**Golden rules for every phase (brief §1):** do not break the demo form + `/api/book-demo` nodemailer flow or its env vars; do not alter the logo; do not regress the JSON-LD graph, canonical/OG, or reduced-motion behaviour. Read `node_modules/next/dist/docs/` before writing Next-16-specific code (AGENTS.md).

---

## Phase 0 — Decisions & guardrails (BLOCKING — resolve before code)
- [ ] **Confirm domain** — `remedyengin.com` vs `remedyengine.com`. Fix `siteConfig.url` in [seo.ts](../../src/lib/seo.ts) once; it flows to canonical/OG/JSON-LD/sitemap/robots. *(Owner)*
- [ ] **Confirm engine availability** — which of 16 engines + 6 channels are `live` vs `planned` ("Coming soon"). Fills `lib/engines.ts` flags. *(Owner/Product)*
- [ ] **Confirm security facts** — what may be stated on `/security` (no unverified certifications). *(Owner)*
- [ ] **Confirm heading font** — Sora (recommended) vs Manrope. *(Creative)*
- [ ] Create a redesign branch off `main`; keep PRs per phase.
- [ ] Add analytics decision (none exists today) — if wanted, pick a privacy-friendly tool now so events can be wired as pages ship.

**Exit:** all six boxes checked. Availability flags and domain are hard blockers — claims and SEO depend on them.

---

## Phase 1 — Foundation
- [ ] `next.config.ts`: `images.formats: ['image/avif','image/webp']`; confirm no other regressions.
- [ ] Extend [seo.ts](../../src/lib/seo.ts): fixed domain; add `pageMetadata({title,description,path,ogImage?})` helper; add JSON-LD builders (`breadcrumb()`, `webPage()`, extend Organization with `ContactPoint` = phone/email); keep existing `@graph`.
- [ ] Create data modules: `src/lib/engines.ts` (16 engines per ENGINE_CATALOG.md `Engine` type) and `src/lib/solutions.ts` (5 solutions).
- [ ] Establish contact constants (email/phone/WhatsApp) in one module (`src/lib/contact.ts`) to avoid hardcoding.

**Verify:** `npm run build` green; JSON-LD still renders on `/`; no visual change yet.

---

## Phase 2 — Design system
- [ ] `globals.css`: add new palette tokens to `@theme inline`; remap `:root` + `.dark` shadcn semantic tokens to the new greens (bridges both token systems — audit §3.2); add `.clay`, `.clay--dark`, `.clay--active` utilities; add gradient/ambient utilities.
- [ ] Typography: wire heading font (Sora/Manrope) + Inter via `next/font/google` in [layout.tsx](../../src/app/layout.tsx); repoint `h1,h2,h3` and `--font-heading`; keep IBM Plex Mono as `.font-data`; add `clamp()` fluid type scale.
- [ ] Update hardcoded hex in the nodemailer email HTML ([route.ts](../../src/app/api/book-demo/route.ts#L61-L70)) to new brand green.
- [ ] Build presentational primitives: `ClayCard`, `ClayNode`, `ClayButton` (or clay variants on `ui/button`), `EngineIcon` (4 treatments: primary/clay/outline/active).
- [ ] Re-theme `ui/*` primitives; confirm focus-visible ring survives clay shadows.
- [ ] Regenerate `og-image.webp` on the new palette.

**Verify:** build green; contrast pass (WCAG 2.2 AA) on all text/bg pairs incl. mint tints; existing pages still render with the deepened palette; reduced-motion unaffected.

---

## Phase 3 — Navigation & routing
- [ ] Build mega-menu nav (extend [nav.tsx](../../src/components/nav.tsx)): Engines ▾ (4 family columns) · Solutions ▾ · How it works · Security · Integrations · [Book a demo] · WhatsApp. Reuse the existing scroll-state + `Sheet` mobile drawer (accordion family sections). Reuse the `stakeholders.tsx` ARIA tablist pattern for keyboard support.
- [ ] Scaffold all routes (empty-but-valid pages first): `/engines`, `/engines/[slug]`, `/solutions`, `/solutions/[slug]`, `/omnichannel-booking`, `/ai-patient-history-brief`, `/how-it-works`, `/integrations`, `/security`, `/contact`, `/privacy`, `/terms`. Add `/demo` → redirect to `/book-demo` (keep funnel canonical).
- [ ] `[slug]` routes: `generateStaticParams` + `generateMetadata` from data modules.
- [ ] Rebuild [footer.tsx](../../src/components/footer.tsx): real links to all routes + contact block. **Kill all 15 `href="#"`.**
- [ ] Extend [sitemap.ts](../../src/app/sitemap.ts) + [robots.ts](../../src/app/robots.ts) to enumerate every new route.

**Verify:** every route resolves (no 404s), every nav/footer link goes somewhere real, build green, sitemap lists all routes, mobile drawer works + keyboard-navigable.

---

## Phase 4 — Homepage
Rebuild `/` as the 9-section story (BLUEPRINT §4.1). Order: Hero → Omnichannel → Engine ecosystem → AI Patient History Brief → Connected journey → Command centre → Built for every clinic → Operational benefits → Final CTA.
- [ ] Reuse `Reveal`, `SectionHeader`, `Thread` (once), existing scene imagery as interim.
- [ ] Hero: static LCP poster first; animation added in Phase 6.
- [ ] Wire all CTAs to `/book-demo`; add AI-brief disclaimer; mark non-live channels "Coming soon"; label illustrative dashboards.

**Verify:** LCP stays the hero image; no fake numbers; disclaimer present; mobile stack clean; build green; `/verify` the demo CTA path end to end.

---

## Phase 5 — Engine, solution & deep-dive pages
- [ ] `EngineDetail` template (one component, BLUEPRINT §4.3) rendering from `lib/engines.ts`; verify all 16 slugs render, related-engine cross-links work, `ai-patient-history` shows the disclaimer, `planned` engines show "Coming soon".
- [ ] `/engines` overview + constellation (static/grid first; interactivity in Phase 6).
- [ ] Solution template from `lib/solutions.ts` (5 pages).
- [ ] `/omnichannel-booking`, `/ai-patient-history-brief`, `/how-it-works`, `/integrations`, `/security`, `/contact` content.
- [ ] `/privacy`, `/terms` from legal owner (flat, no clay).

**Verify:** all 16 + 5 + deep-dive pages build; per-page metadata/canonical/breadcrumb correct; internal links resolve; honest availability everywhere.

---

## Phase 6 — Animations & motion (BLUEPRINT §6)
- [ ] Hero engine orchestration (SVG/CSS/WAAPI; static poster fallback; hydrate post-idle; **no WebGL on mobile**).
- [ ] Omnichannel convergence animation.
- [ ] Interactive engine constellation (accessible: tap + visible descriptions, not hover-only; keyboard; text alt).
- [ ] Sticky patient-journey scrollytelling (IntersectionObserver sentinels; mobile = plain stack).
- [ ] Clay hover/tilt (desktop + fine-pointer only); magnetic CTA (desktop); nav active-route indicator.
- [ ] Every animation reduced-motion-aware (extend `Reveal`'s media-query approach).

**Verify:** 60fps on mid-range mobile; reduced-motion disables all complex motion; no layout shift; no scroll-hijack on mobile; keyboard reaches all interactive diagram content.

---

## Phase 7 — Forms
- [ ] Confirm `/book-demo` funnel intact (component + API + env vars untouched); restyle only.
- [ ] Add WhatsApp/phone fallback beside the form.
- [ ] `/contact` form: reuse `/api/book-demo` or add a sibling endpoint (same nodemailer pattern, same validation discipline).

**Verify:** submit a real test → email arrives; validation + error states intact; `/verify` the flow.

---

## Phase 8 — SEO
- [ ] Unique title/description/canonical/OG per route (via `pageMetadata`).
- [ ] JSON-LD: extend `SoftwareApplication.featureList`; add `ContactPoint`; `BreadcrumbList` on deep pages; **FAQ schema only where visible FAQ exists**.
- [ ] Internal linking between engines (related blocks) + descriptive URLs + optimised image filenames + alt text.
- [ ] Confirm sitemap/robots complete; domain correct everywhere.

**Verify:** Rich Results test on key pages; no orphan pages; canonical/OG correct; no keyword stuffing.

---

## Phase 9 — Accessibility (BLUEPRINT §8)
- [ ] Keyboard pass on every page (nav, mega-menu, constellation, carousels, forms).
- [ ] Heading order, landmarks, alt text, form labels.
- [ ] Interactive diagrams: text alternatives + no hover-only info.
- [ ] Contrast AA recheck on final palette; lime never on text.
- [ ] Reduced-motion full pass.

**Verify:** axe/Lighthouse a11y ≥ 95; manual screen-reader pass on home + one engine page + demo form.

---

## Phase 10 — Performance (BLUEPRINT §9)
- [ ] AVIF/WebP + responsive `sizes` on all images; SVG for icons/diagrams.
- [ ] Route-level code-split; lazy-load motion; prefetch key routes; keep LCP hero static.
- [ ] Trim client JS; confirm server components by default.

**Verify:** Lighthouse (mobile) LCP/CLS/INP in green on home + engine + demo; bundle sane (no heavy animation lib site-wide).

---

## Phase 11 — Testing & Final QA
- [ ] Per-route manual QA at 320/375/430/768/1024/1280/1440 — no horizontal overflow.
- [ ] Link audit: zero `href="#"`, zero dead CTAs, all internal links resolve.
- [ ] Claim audit: no invented numbers/certs/testimonials; every non-live channel/engine "Coming soon"; AI disclaimer present.
- [ ] Contact audit: email/phone/WhatsApp correct and clickable everywhere.
- [ ] `npm run build` clean; `/code-review` (high) on the diff; `/security-review` on new API/form code.
- [ ] Cross-browser (Chrome/Safari/Firefox) + real mobile device.
- [ ] Confirm demo email delivery in the deploy environment.

**Exit:** all phases green, owner sign-off on copy/claims/domain.

---

## Dependency graph (build order)
```
Phase 0 ─▶ Phase 1 ─▶ Phase 2 ─▶ Phase 3 ─┬─▶ Phase 4 (home) ─┐
                                          └─▶ Phase 5 (pages) ─┼─▶ Phase 6 (motion) ─▶ 8/9/10 ─▶ 11
                                              Phase 7 (forms) ─┘
```
Phases 4, 5, 7 can parallelise once 3 is done. Motion (6) waits for the static pages it decorates. SEO/A11y/Perf (8–10) run across the built surface, then final QA (11).

## Rollback / safety
- One PR per phase; each must pass `npm run build`.
- Never merge a phase that breaks the demo funnel or the JSON-LD graph.
- Keep the old `/` recoverable until the new home is signed off.
