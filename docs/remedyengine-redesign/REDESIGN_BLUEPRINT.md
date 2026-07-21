# RemedyEngine — Redesign Blueprint

*The master design + technical plan. Reads on top of [CURRENT_SITE_AUDIT.md](./CURRENT_SITE_AUDIT.md), [ENGINE_CATALOG.md](./ENGINE_CATALOG.md), and [CONTENT_MATRIX.md](./CONTENT_MATRIX.md). Everything here is constrained to the actual stack: Next.js 16 App Router, React 19, Tailwind v4, shadcn/base-nova on `@base-ui/react`, lucide-react.*

---

## 1. Creative direction

**The central idea:** *A collection of intelligent engines working together to run the clinic.* Not "appointment software." An **operating system** whose parts are visibly connected.

**One sentence to a doctor:** "RemedyEngine is the engine room of your clinic — every channel, every department, every record, connected and running as one system."

**The visual thesis — "Engineered Calm."** Premium healthcare technology should feel *engineered* (precise, connected, deliberate) and *calm* (clinical, trustworthy, unhurried) at the same time. We express this through three moves layered on the existing restrained base:

1. **Depth where it means something.** Selective claymorphism turns each engine into a tactile, soft-extruded 3D object — engines *feel* like real components you could pick up. Everything else stays flat and quiet so the depth reads as signal, not noise.
2. **Connection you can see.** Connectors, data pulses, and convergence animations make "connected system" literal. Motion is always explanatory, never decorative.
3. **A deeper, more confident green.** The palette drops from the current mid-green into a richer forest→emerald→lime range that reads as high-technology and international, with dark-technology surfaces (`#062F29`) for the "engine room" moments.

**Tone:** confident, intelligent, human, operationally focused. Never "revolutionary/game-changing." Doctors decide; the software supports (brief §14).

**Personality guardrails (brief §7 — what we will NOT do):** no generic Bootstrap/template look, no empty gradients, no cartoon doctors, no robots, no holographic brains, no neon cyberpunk, no excessive glass/clay/neumorphism, no emoji icons, no overcrowded cards, no fake dashboards or fake stats.

---

## 2. Sitemap & information architecture

```
/                          Home — the story
/engines                   Engine ecosystem overview (the constellation, grouped by family)
/engines/[slug]            16 data-driven detail pages (see ENGINE_CATALOG.md)
    booking · conversation · ai-calling · ai-patient-history · patient-records ·
    consultation · prescriptions · laboratory · pharmacy · billing · queue ·
    video-consultation · follow-up · insights · team-access · global-search
/omnichannel-booking       Deep-dive: every doorway → one booking engine
/ai-patient-history-brief  Deep-dive: the clinical-intelligence flagship (+ disclaimer)
/how-it-works              The connected patient journey, end to end
/solutions                 Overview of who it's for
/solutions/[slug]          solo-doctors · multi-doctor-clinics · specialty-clinics ·
                           clinic-owners · clinic-chains
/integrations              Channels & systems (live vs "Coming soon", honestly labelled)
/security                  Access, roles, privacy posture — verified facts only
/demo                      Book a demo (reuses the working /book-demo funnel — see note)
/contact                   Email / phone / WhatsApp + form
/privacy                   Privacy policy
/terms                     Terms
```

**Route notes**
- **`/demo` vs `/book-demo`:** the working funnel lives at `/book-demo`. Keep the *component + API* intact. Either (a) keep `/book-demo` as the canonical route and point all CTAs there, or (b) add `/demo` as the primary and 301-alias `/book-demo`. **Recommendation: keep `/book-demo` canonical** (SEO equity, breadcrumb schema already exists) and treat "/demo" as an alias/redirect only. Do not fork the form.
- **`/engines/[slug]` is one file**, not sixteen — a dynamic segment reading `lib/engines.ts`, with `generateStaticParams` + per-slug `generateMetadata`.
- **`/solutions/[slug]`** likewise: one template reading `lib/solutions.ts`.

**Navigation model:** replace the 3-link nav with a **mega-menu**:
- **Engines ▾** → 4 family columns (Access · Clinical · Operations · Growth) listing engines, each linking to its detail page; a footer row links to `/engines`.
- **Solutions ▾** → the 5 solution pages.
- **How it works** (link) · **Security** (link) · **Integrations** (link)
- Persistent right side: **Book a demo** (primary clay CTA) + a **WhatsApp** action (`https://wa.me/918861650666`).
- Mobile: the existing `Sheet` drawer, extended to accordion sections per menu group.

---

## 3. Page objectives (what each page must accomplish)

| Page | Primary objective | Primary CTA | Secondary |
|---|---|---|---|
| Home | Land the "OS of engines" thesis + drive demo | Book a Live Demo | Explore the Engines |
| /engines | Prove breadth + let buyers self-navigate | Book a demo | Enter a specific engine |
| /engines/[slug] | Convince on one capability; cross-link related engines | Book a demo | Related engines / See it in the journey |
| /omnichannel-booking | Show "every doorway → one engine" | Book a demo | See the Booking Engine |
| /ai-patient-history-brief | Establish clinical credibility (+ disclaimer) | Book a demo | See Patient Records |
| /how-it-works | Make the connected journey tangible | Book a demo | Explore the Engines |
| /solutions + /solutions/[slug] | Map value to buyer type | Book a demo | Talk to sales / WhatsApp |
| /integrations | Set honest expectations on channels/systems | Book a demo | Contact |
| /security | Reduce risk objection with verified facts | Book a demo | Contact |
| /book-demo (/demo) | Convert | Submit form | WhatsApp / phone |
| /contact | Enable direct contact | Send / WhatsApp / Call | Book a demo |
| /privacy, /terms | Compliance + trust | — | Contact |

---

## 4. Section-by-section wireframes

### 4.1 Home (`/`)
Order confirmed by brief §6. `[Clay]` = claymorphism surface; `[Motion]` = animated (all reduced-motion-aware).

```
NAV (mega-menu, transparent → solid on scroll)

§1 HERO  [Clay][Motion]
  ┌───────────────────────────────────────────────┐
  │  Eyebrow: THE CLINIC OPERATING SYSTEM          │
  │  H1: "The engine that runs your entire clinic."│
  │  Sub: "Every booking. Every consultation.      │
  │        Every prescription. Every report.       │
  │        One connected operating system."        │
  │  Body: (brief §6 supporting copy)              │
  │  [Book a Live Demo]  [Explore the Engines]     │
  │                                                 │
  │      ● orbiting channel nodes (WhatsApp,        │
  │        Instagram*, Facebook*, Website,          │
  │        Walk-in, AI Calling*)                    │
  │            ╲   ╲   │   ╱   ╱                     │
  │             ◆ REMEDYENGINE CORE ◆  (clay)       │
  │            ╱   ╱   │   ╲   ╲                     │
  │      ○ engine nodes (Booking, AI Brief,         │
  │        Records, Consult, Rx, Lab, Pharmacy,     │
  │        Billing, Follow-up, Analytics)           │
  │      data pulses travel along connectors        │
  └───────────────────────────────────────────────┘
  LCP = static poster of the core; animation hydrates after.
  Trust chips row (font-data): No patient app · WhatsApp-first · Multi-location ready

§2 OMNICHANNEL ENTRY  [Motion]
  H2: "Every doorway into your clinic. One intelligent booking engine."
  Convergence animation: 6 channel nodes → Booking Engine → journey spine.
  *Non-live channels carry a "Coming soon" pill.

§3 ENGINE ECOSYSTEM  [Clay][Motion]  → deep link to /engines
  H2: "Dedicated engines. One connected clinic."
  Interactive constellation grouped in 4 families. Hover/tap:
  node elevates, connectors light, description appears, related nodes illuminate.
  Mobile: swipeable family tabs → clay card grid (no hover-only info).

§4 AI PATIENT HISTORY BRIEF  [Clay]  → /ai-patient-history-brief
  H2: "Patient history, organised before the doctor needs it."
  Before/After: scattered paper/reports  →  one structured brief card
  Callouts: allergies · current meds · previous consults · lab history ·
            vital trends · previous diagnoses · reports · needs-attention
  DISCLAIMER line (required, see ENGINE_CATALOG.md #4).

§5 CONNECTED PATIENT JOURNEY  [Motion — sticky scrollytelling]  → /how-it-works
  Sticky visual, scroll advances stages:
  message → booking → confirmation → history brief → consultation → prescription
  → lab order → report → pharmacy → billing → follow-up → insights
  Active step highlighted; completed steps checked; progress rail persistent.
  Mobile: simplified vertical stack (no scroll-hijack).
  (Seed from the existing Thread component.)

§6 CLINIC COMMAND CENTRE  [Clay]
  H2: "See what's happening across your clinic — right now."
  Insights panel: appointments · waiting · doctor availability · consults done ·
  revenue · outstanding · pending lab · pharmacy stock · follow-ups.
  Use REAL screenshots where available; else label "Illustrative". No fake numbers.

§7 BUILT FOR EVERY CLINIC  → /solutions/*
  5 clay cards: Solo Doctors · Multi-Doctor Clinics · Specialty Clinics ·
  Clinic Owners · Growing Clinic Chains. Each links to its solution page.

§8 OPERATIONAL BENEFITS
  Non-numeric benefit grid (brief §8 list). No invented percentages.

§9 FINAL CTA  [Clay]
  H2: "Your clinic already has moving parts. RemedyEngine makes them work together."
  [Book Your RemedyEngine Demonstration]
  Contact block: www.remedyengin.com · info@remedyengin.com · +91 8861650666 (WhatsApp)

FOOTER (real links to all routes + contact + disclaimers)
```

### 4.2 `/engines` (ecosystem overview)
Hero line "Dedicated engines. One connected clinic." → full constellation (larger than home) → 4 family sections, each a row of clay engine cards (icon, name, one-liner, "Coming soon" pill where relevant) linking to detail pages → journey teaser → CTA.

### 4.3 `/engines/[slug]` (the reusable template — build once)
```
Breadcrumb: Home / Engines / {Engine name}
Eyebrow: {FAMILY} ENGINE      Clay engine icon (active variant)
H1: {engine.name}             Sub: {engine.oneLiner}
[Book a demo]  [Explore all engines]
— Availability pill if planned: "Coming soon"

§ Purpose (1–2 sentences, large)
§ What it does — feature list (2-col, from engine.features)
§ Why it matters — benefit cards (from engine.benefits; NO numbers)
§ Visual — engine.image (real screenshot OR labelled "Illustrative")
§ [ai-patient-history only] Disclaimer callout block
§ Related engines — clay cards linking to engine.related (internal linking / SEO)
§ CTA band
```
Every field comes from `lib/engines.ts`. No per-engine bespoke code.

### 4.4 `/solutions/[slug]`
Hero (role, headline, sub) → "what changes for you" points (reuse stakeholders copy) → relevant engines for this buyer → mini journey → proof/benefit (non-numeric) → CTA. Fed by `lib/solutions.ts`.

### 4.5 `/how-it-works`
The full scrollytelling journey (home §5 expanded) + per-stage engine links + a "one system" summary + CTA.

### 4.6 `/omnichannel-booking`, `/ai-patient-history-brief`
Marketing deep-dives that expand home §2 and §4 respectively, each cross-linking to the underlying engine page(s).

### 4.7 `/integrations`, `/security`
Honest, verified-facts-only pages. Integrations: channels & systems with clear live / "Coming soon" state. Security: roles, permissions, privacy posture — **no certification claims unless verified** (brief §4, §16).

### 4.8 `/contact`
Email `info@remedyengin.com`, phone/WhatsApp `+91 8861650666` (`tel:` + `wa.me` links), light contact form (can reuse the demo API or a new endpoint), map/hours if provided.

### 4.9 `/privacy`, `/terms`
Long-form legal — **flat, high-contrast, no claymorphism** (brief §9). Content from legal owner.

---

## 5. Design system

### 5.1 Colour tokens (Tailwind v4 `@theme` — extend, don't discard)
Add the brief's palette as brand tokens alongside the current ones, then remap shadcn semantic tokens to the new values so **both token systems** (see audit §3.2) resolve to the new brand.

```css
@theme inline {
  /* Greens */
  --color-remedy-900: #043D32;   /* deep forest */
  --color-remedy-800: #062F29;   /* dark technology surface */
  --color-remedy-700: #075E4C;   /* PRIMARY */
  --color-remedy-500: #16A779;   /* emerald */
  --color-lime-500:   #72D94E;   /* accent — active/pulse/status ONLY */
  --color-mint-300:   #BFEFDC;   /* soft mint */
  --color-mint-100:   #EAF8F1;   /* very light mint */
  /* Neutrals */
  --color-paper-50:   #F6FAF8;   /* off-white page bg */
  --color-paper-0:    #FFFFFF;
  --color-ink-900:    #0B1F33;   /* dark navy text */
  --color-ink-500:    #4C6473;   /* secondary text */
  --color-line-200:   #DCE7E2;   /* light border */
  /* Status */
  --color-signal-500: #F4A340;   /* warning amber */
  --color-danger-500: #D95C5C;   /* error / genuine urgency only */
}
```
- **Primary gradient** (heroes, engine-core, CTA bands): `linear-gradient(135deg,#043D32 0%,#075E4C 45%,#16A779 100%)`.
- **Ambient highlight** (behind clay hero): `radial-gradient(circle at top right, rgba(114,217,78,0.18), transparent 38%)`.
- **Lime rules:** active engine states, small highlights, status dots, CTA accents, energy pulses. **Never body text** (brief §8).
- **Migration:** update the `:root`/`.dark` shadcn mappings (`--primary`, `--card`, `--ring`, …) to the new greens; update the hardcoded hex in the nodemailer email HTML ([route.ts](../../src/app/api/book-demo/route.ts#L61)); regenerate `og-image.webp`.
- **Contrast:** verify every text/bg pair for WCAG 2.2 AA. Secondary text `#4C6473` on white passes; check it on mint tints. Never place text on the lime.

### 5.2 Claymorphism system (selective — brief §9)
**Use on:** engine nodes, engine cards, hero 3D objects, channel icons, CTA buttons, interactive diagrams, small KPI cards, timeline nodes.
**Do NOT use on:** long text, every nav item, page backgrounds, dense tables, legal pages, critical form fields.

```css
/* clay surface token */
.clay {
  background:
    linear-gradient(145deg, #FFFFFF 0%, #EAF8F1 100%);
  border-radius: 20px;                 /* large, soft */
  box-shadow:
    0 20px 55px rgba(4,61,50,0.16),    /* soft green outer */
    inset 0 1px 0 rgba(255,255,255,0.80); /* white inner highlight */
  border: 1px solid var(--color-line-200);
}
.clay--dark {  /* engine-room surfaces */
  background: linear-gradient(145deg, #075E4C 0%, #062F29 100%);
  box-shadow: 0 24px 60px rgba(4,61,50,0.40), inset 0 1px 0 rgba(255,255,255,0.12);
}
.clay--active { box-shadow: 0 20px 55px rgba(4,61,50,0.16),
                            0 0 0 2px rgba(114,217,78,0.5),   /* lime ring */
                            inset 0 1px 0 rgba(255,255,255,0.80); }
```
Tactile, premium, "soft 3D technology objects — not children's toys" (brief §9). Coexists with the existing restrained flat cards elsewhere.

### 5.3 Typography (brief §13)
- **Headings:** **Sora** (geometric, technical, premium) via `next/font/google`. *This is a deliberate change from Source Serif 4* — the serif reads editorial/soft; the OS positioning wants a precise sans. If the owner prefers to retain the serif signature, **Manrope** is the fallback heading face. Recommend **Sora**.
- **Body:** **Inter** via `next/font/google`.
- **Data/mono:** keep **IBM Plex Mono** as `.font-data` for eyebrows, metadata, pills, IDs, timestamps — it's already a brand signature and pairs well.
- Two families max for headings+body (Sora + Inter); mono is the functional third for data, consistent with current usage.
- **Fluid sizing with `clamp()`**, e.g. `--step-h1: clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem)`. Tight heading line-height (~1.05), body ~1.6, short paragraphs.
- Update `layout.tsx` font wiring and the `--font-serif`/`--font-heading` mapping in `globals.css` (`h1,h2,h3` currently `@apply font-serif` → point to the new heading font).

### 5.4 Icon system (brief §10)
- **lucide-react only** (already the sole library — do not add Phosphor etc.). Each engine's primary glyph is fixed in ENGINE_CATALOG.md.
- **Four treatments per engine, same glyph:** `primary` (line icon in mint chip), `clay` (icon embossed on a clay node), `outline` (stroke-only for dense lists), `active` (lime-accented + subtle SVG animation on hover/section-active).
- Optional: a few **custom SVG engine glyphs** for the hero/constellation where Lucide is too generic — but keep them stylistically unified with Lucide (2px stroke, rounded joins). No emoji, ever.

### 5.5 Spacing, radius, elevation
- Container `max-w-[1200px]`, section rhythm **`py-20 md:py-28`** (keep the current rhythm; it's good).
- Radius scale already defined in `globals.css` (`--radius` 0.75rem → xl/2xl/3xl). Clay uses 20px.
- **Elevation ladder:** flat (borders only) → soft card (`0 4px 16px rgba(...) /existing`) → clay (`0 20px 55px …`) → dark engine-room. Use the ladder to signal importance; don't flatten everything to clay.

---

## 6. Motion system (brief §11)

Principle: **motion explains the product.** Everything animates `transform`/`opacity` only, targets 60fps, lazy-loads, and respects `prefers-reduced-motion` (extend the existing `Reveal` pattern — it already reads the media query).

| # | Moment | Technique | Perf guardrail |
|---|---|---|---|
| 1 | Hero engine orchestration | **SVG + CSS/WAAPI** (orbiting nodes, pulses, breathing core). Consider a light canvas only if justified; **no WebGL/R3F unless truly needed** and never on mobile | Static poster is LCP; animation hydrates post-idle; `content-visibility` on offscreen |
| 2 | Scroll reveal | Existing `Reveal` (IntersectionObserver, opacity+translate, staggered) | Already reduced-motion-aware — reuse everywhere |
| 3 | Engine constellation | SVG connector paths draw progressively; related nodes illuminate on hover/tap; info panel (not hover-only) | Pause when offscreen; touch = tap, no hover dependency |
| 4 | Sticky patient journey | Scroll-linked progress via IntersectionObserver sentinels (prefer over scroll math); one active step at a time; persistent progress rail | Mobile = plain vertical stack, no scroll-hijack |
| 5 | Clay card interactions | Lift + shadow expansion + inner highlight + icon nudge; pointer-tilt **desktop + fine-pointer only** | `@media (hover:hover) and (pointer:fine)`; transform-only |
| 6 | CTA | Magnetic pull (desktop), animated arrow, soft lime glow, immediate keyboard focus ring | Disabled on touch; focus-visible must survive |
| 7 | Nav | Transparent→solid on scroll (already implemented in `nav.tsx`), active-route indicator, smooth mega-menu, clear mobile drawer | Keep the existing passive scroll listener |

Do: animate transforms/opacity, lazy-load heavy assets, provide reduced-motion + static fallbacks, disable parallax/tilt/magnetic on touch. Don't: autoplay sound, animate layout properties, block first render, load WebGL eagerly.

**Recommended libs:** prefer **CSS + the Web Animations API + IntersectionObserver** (zero-dependency, already the house style). If a declarative scroll/gesture layer is wanted, add **`motion`** (Framer Motion's modern package) *sparingly* and code-split it — do not pull in a large animation bundle site-wide (brief §18).

---

## 7. Responsive strategy (brief §15)

Breakpoints to honour: 320 / 375 / 430 / tablet-portrait / tablet-landscape / 1024 / 1280 / 1440 / large.

- **Mobile is designed, not squished.** Concrete mobile decisions:
  - Hero: static engine-core poster (no orbit animation), stacked copy, full-width clay CTA.
  - Constellation → **swipeable family tabs → clay card grid**; no hover-only info.
  - Patient journey → simplified vertical stack, no scroll-hijack.
  - Mega-menu → `Sheet` drawer with accordion family sections.
  - Touch targets ≥ 44px; no tiny feature cards; body ≥ 16px; **no horizontal overflow** (audit every full-bleed diagram).
- Grids: 1-col (mobile) → 2-col (sm/tablet) → 3–4-col (lg+), matching the current section patterns.
- Keep the `max-w-[1200px]` container and `px-5 md:px-8` gutters.

---

## 8. Accessibility strategy (brief §16 · WCAG 2.2 AA)

- Semantic landmarks (`header/nav/main/section/footer`), one `h1` per page, ordered headings.
- **Interactive diagrams get text alternatives** and are keyboard-operable; **no information hover-only** (constellation must have tap + visible descriptions). This is the biggest new a11y obligation.
- Reuse the existing ARIA tablist pattern from `stakeholders.tsx` for the mega-menu / family tabs.
- Visible focus (keep the global `:focus-visible` outline; ensure clay shadows don't hide it).
- Form labels (the demo form is already correct — match it).
- Meaningful `alt` on all imagery; decorative images `alt="" aria-hidden`.
- Full `prefers-reduced-motion` support (extend `Reveal`'s approach to all new motion).
- Contrast AA on the deeper palette; lime never carries text.
- Descriptive link/button text — kill the `href="#"` and no-op "Talk to sales" (audit §7).

---

## 9. Technical strategy

- **Stay on the current stack** (Next 16 App Router, React 19, Tailwind v4, base-nova/@base-ui, lucide). No framework migration (brief §1). Read `node_modules/next/dist/docs/` before Next-specific code (AGENTS.md).
- **Server components by default;** client components only where interaction requires (`nav`, constellation, scrollytelling controller, carousels, forms). Keep the client footprint small (brief §18).
- **Data-driven everything:** `lib/engines.ts` (16), `lib/solutions.ts` (5), extend `lib/seo.ts` with a `pageMetadata()` helper + per-page JSON-LD builders. One template per repeated page type.
- **Routing:** dynamic segments `[slug]` with `generateStaticParams` + `generateMetadata`; static-render all marketing pages.
- **Preserve, do not break** (brief §1): the demo form + `/api/book-demo` nodemailer flow + its env vars (`SMTP_*`, `DEMO_INBOX`, `GOOGLE_SITE_VERIFICATION`); the JSON-LD `@graph`; canonical/OG setup; the logo; reduced-motion behaviour.
- **SEO:** unique title/description/canonical/OG per route; extend `sitemap.ts` + `robots.ts` to enumerate all new routes; add `BreadcrumbList` per deep page; `Organization` + `SoftwareApplication` already exist — extend `featureList`, add `ContactPoint` (phone/email); **FAQ schema only where visible FAQ exists** (brief §17). **Fix the domain first** (audit §3.1).
- **Performance:** AVIF+WebP (`next.config` `images.formats`), responsive `sizes`, SVG for icons/diagrams, route-level code-splitting, prefetch key routes, lazy-load motion; keep LCP hero static.
- **Correctness gate:** `npm run build` (runs `tsc`) is the primary check; there's no test suite, so QA is per-route manual + the `/verify` and `/code-review` skills before merge.

---

## 10. What success looks like

A buyer (doctor / clinic owner / chain operator) lands, immediately understands RemedyEngine is a **connected operating system of engines** (not another appointment app), can **explore any engine in depth**, sees the **patient journey flow through the whole clinic**, finds **their own clinic type** represented, trusts the **honest, disclaimered, certification-free** claims, and books a demo — on a site that loads fast, works on a 320px phone, passes WCAG 2.2 AA, and never breaks the existing funnel, SEO graph, or logo.
