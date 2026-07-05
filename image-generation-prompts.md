# Gemini image-generation prompts — RemedyEngine

Paste each prompt block into Gemini (Nano Banana / Imagen / AI Studio). Every
prompt is self-contained and already encodes the RemedyEngine brand so you
shouldn't have to fight the model for on-brand output.

## Global rules baked into every prompt (brand doc §7)

- **Palette is strict.** Muted clinical green `#2E6B54` / `#3F8B6E` / `#DCEAE1`,
  ink-charcoal `#16231F`, sage-grey paper `#F1F3EE`, warm amber `#D98A2B` for
  time-sensitive accents only, clinical red `#B94A3C` for genuine emergency
  only. **Reject** teal/blue "medical stock" look and **reject** neon/dark
  "AI-startup" look.
- **No WhatsApp logo/wordmark or any real app trademark.** Say "a generic
  messaging-app chat interface" or keep chat UI abstract.
- **No real patient data, names, or faces.** Generic/composited people,
  fictional sample IDs only (e.g. `Appt #2291`).
- **Calm and procedural.** No dramatized illness, pain, or distress; no stock
  "worried patient" photography; no red crosses, no biohazard imagery.
- **Flat and quiet.** No glossy 3D renders, no gradient-mesh, no lens flares,
  no heavy bokeh. One soft shadow max.
- **No hand-lettered UI text.** Where a scene shows a screen, ask for abstract
  grey placeholder line-blocks, not legible words — you'll composite real
  copy/screenshots on top later.

---

## 1. Hero background texture — `public/hero-bg.png`

```
A minimal, flat abstract background texture for a healthcare-technology
website hero. Base color is soft sage-grey paper (#F1F3EE). Across the frame,
very subtle barely-visible thin line-work in muted clinical green (#2E6B54 at
about 8% opacity) suggesting the mechanical rhythm of an "engine" — a few
clean concentric arcs and a single flowing horizontal thread moving left to
right, evoking a message travelling through a system. Completely flat and
calm: no gradients, no glow, no 3D, no particles, no text, no icons, no
people. Editorial and quiet, like the paper stock of a clinical letterhead.
16:9, high resolution, meant to sit behind headline text with plenty of empty
space in the center. Reject teal/blue medical-stock and neon AI-product looks.
```

## 2. Open Graph / social share image — `public/og-image.png`

```
A clean, editorial Open Graph social-share image for a clinic-automation
brand called "RemedyEngine". Flat sage-grey background (#F1F3EE). On the left
third, a simple flat-illustrated messaging chat bubble in muted clinical green
(#2E6B54) that visually transforms, via a short thin dashed connector line in
light grey (#D9DED6), into a small flat white clinical card/document icon with
a thin border and one tiny green status dot — depicting "a message becoming a
medical record". No real chat-app logos or trademarks. Leave the right two
thirds as calm empty sage-grey negative space for a headline to be added
later. Flat vector illustration, no gradients, no 3D, and no drop shadows
except one very soft subtle shadow under the card icon. Exactly 1200x630px.
```

## 3. "The Thread" signature illustration — `public/thread-hero.png`

```
A flat vector diagram illustrating a transformation sequence, portrait
orientation. On the LEFT: three small rounded chat-bubble shapes stacked
vertically, alternating muted clinical green (#3F8B6E) fill and white fill
with a thin grey border. On the RIGHT, aligned to each bubble: a small white
"clinical card" rectangle with a thin light-grey border (#D9DED6), a tiny
mono-style grey metadata line at its top edge, and one small status dot
(green #2E6B54 for done, amber #D98A2B for pending). Connect each left bubble
to its right card with a thin horizontal dashed grey connector; run a thin
vertical dashed grey line down the whole sequence. Use only abstract grey
line-shapes to imply text inside bubbles and cards — nothing legible.
Ink-charcoal (#16231F) thin outlines throughout. Fully flat 2D vector, no
gradients, no 3D, one soft ambient shadow behind the whole composition.
Generous sage-grey (#F1F3EE) padding around it. Calm, editorial, like a
diagram in a clinical brochure.
```

## 4. The "engine" concept mark — `public/engine-concept.png`

```
A flat, minimal conceptual illustration representing "the engine that runs a
clinic". Center: a single clean, abstract gear/cog outline in muted clinical
green (#2E6B54) — simple and modern, not mechanical-realistic — with a small
medical plus-sign subtly integrated into its hub. Around the gear, four thin
dashed grey connector lines radiate to four tiny flat icons in a ring:
a chat bubble, a small dashboard grid, a megaphone, and a bar-chart — each in
clinical green or ink-charcoal line style, representing automate / run / grow
/ monitor. Flat sage-grey (#F1F3EE) background, ink-charcoal (#16231F)
outlines, one small amber (#D98A2B) accent dot on the chart icon. No
gradients, no 3D bevels, no glow, one soft ambient shadow only. Square crop,
lots of breathing room. Clean, calm, corporate-but-warm.
```

## 5. Clinic front-desk scene, calm and everyday — `public/scene-frontdesk.png`

```
A calm, everyday editorial photograph of a small modern clinic reception
desk in soft natural daylight. A receptionist (generic, non-identifiable,
relaxed neutral expression, professional clothing in muted tones) glances at
a laptop, unhurried posture. Interior in warm neutral tones with small
accents of muted clinical green (#2E6B54) — a folder, a cushion, a plant —
echoing the brand without overt logos. No legible text on any screen or
paperwork. No dramatic lighting, no lens flare, no heavy background blur, no
"urgency" body language. Photorealistic documentary style, horizontal 3:2.
Reject teal/blue medical-stock grading.
```

## 6. Doctor reviewing an AI brief before a consult — `public/scene-doctor-brief.png`

```
A calm, photorealistic editorial photograph of a doctor (generic,
non-identifiable, mid-career, plain white or navy coat) seated at a desk
glancing at a tablet that shows a simple abstract card-style layout — grey
placeholder line-blocks and one small green status pill, no legible real text.
Soft daylight from a window, muted sage-grey and warm wood background, one
small plant. The mood is prepared and unhurried — the doctor looks briefed,
not stressed. No clinical equipment crowding the frame, no patients in
distress. Documentary style, mild depth of field (not heavy bokeh),
horizontal 3:2.
```

## 7. Pharmacy dispensing scene — `public/scene-pharmacy.png`

```
A calm, well-lit photorealistic photograph of a small clinic pharmacy
counter. A pharmacist (generic, non-identifiable) checks a shelf of neatly
organized, generic UNBRANDED medicine boxes — plain white/light-grey boxes
with abstract grey line-text, no real drug names, no logos, no red crosses.
On the counter, a tablet shows a simple abstract dispensing-list UI: grey
line rows and one small green checkmark, no legible text. Organized and calm,
implying "everything tracked, no stockouts". Natural light, neutral grading
with a touch of muted clinical green in an apron or signage. Documentary
editorial style, horizontal 3:2.
```

## 8. Lab / diagnostics scene — `public/scene-lab.png`

```
A calm, photorealistic photograph of a lab technician (generic,
non-identifiable, plain lab coat and gloves) at a clean, organized
diagnostics bench with simple sample tubes marked only by abstract
non-legible grey barcode shapes. In the background, a monitor shows an
abstract worklist UI: a short vertical list of grey rounded rows, one with a
small amber "in progress" pill and one with a green "done" pill — no legible
text. Bright, clean, calm lighting; no dramatic shadows, no biohazard
imagery, nothing distressing. Documentary editorial style, horizontal 3:2.
```

## 9. Patient on a messaging chat, everyday moment — `public/scene-patient-chat.png`

```
A calm, candid-style photograph of an ordinary person (generic,
non-identifiable, casual everyday clothing, relaxed at home or seated as a
passenger — NOT driving) glancing at a smartphone with a slight, reassured
expression — not distressed, not grinning. The phone screen is angled away or
softly blurred so no app interface, logo, or text is legible — do not render
any real messaging-app UI or trademark. Warm natural daylight, soft neutral
grading, no heavy filters. Reads as "an ordinary person getting a helpful
reminder", not a clinical or dramatic moment. Documentary style, portrait 4:5.
```

## 10. Owner dashboard / "monitor everything" scene — `public/scene-dashboard.png`

```
A calm, photorealistic over-the-shoulder editorial photograph of a clinic
owner or administrator (generic, non-identifiable) looking at a desktop
monitor that displays an abstract analytics dashboard: simple flat bar and
line chart shapes and a few stat tiles rendered only as grey placeholder
blocks with green and amber accent shapes — NO legible numbers or words. Calm
modern office, soft daylight, muted sage-grey and warm neutral tones, small
clinical-green accent. Composed and in-control mood, not busy or stressed.
Documentary style, mild depth of field, horizontal 3:2. Reject neon
dark-dashboard "AI-product" aesthetic — keep it light, flat, and calm.
```

## 11. Four-pillar icon set — `public/pillars.png`

```
A set of four simple, flat, line-style icons in a single horizontal row, each
inside its own rounded square with a thin light-grey border (#D9DED6) on a
sage-grey (#F1F3EE) background. Icons, left to right: (1) a chat bubble with a
small sparkle = "automate the front desk"; (2) a 2x2 dashboard grid = "run
the whole clinic"; (3) a megaphone = "grow with marketing"; (4) a simple bar
chart = "monitor everything". All icons drawn in muted clinical green
(#2E6B54) with consistent stroke width, one tiny amber (#D98A2B) accent dot on
the bar-chart icon only. Fully flat vector, no gradients, no 3D, no shadows.
Even spacing, clean and minimal.
```

## 12. Generic avatar set for testimonials/UI — `public/avatars-set.png`

```
A set of 6 simple flat geometric avatar icons in a grid. Each is a plain
circle containing a minimal abstract head-and-shoulders silhouette (no facial
features, no specific race/gender signaling beyond a neutral silhouette),
each circle filled with a different tint from this palette ONLY: #2E6B54,
#3F8B6E, #DCEAE1, #D98A2B, #33423C, and white with a #16231F outline. Flat
vector, consistent stroke width, no photorealism, no gradients, no shadows.
Generic placeholder avatars for fictional sample names — no real or
identifiable people. Even spacing, transparent or white background.
```

## 13. Favicon / app-icon mark — `public/favicon-mark.png`

```
A minimal flat geometric app-icon on a solid clinical-green (#2E6B54)
rounded-square background (12px-style corner radius). The mark, in solid
white and centered with generous padding: a simple abstract gear/cog outline
with a small chat-bubble notch integrated into it — reading as "engine +
message", simple enough to be legible at 32x32px. No gradients, no 3D, no
photorealism, no text or lettering. 512x512px, flat vector icon style.
```

---

## After generating

- Generate at ~2x final display size; compress into `public/` and serve via
  `next/image`.
- If Gemini drifts off-palette, append to the prompt: *"Strictly limit all
  colors to #2E6B54, #3F8B6E, #DCEAE1, #16231F, #F1F3EE, #D98A2B. Reject
  teal/blue medical-stock and reject neon/dark AI-product looks."*
- Re-check every marketing image against brand doc §7 before publishing: no
  real patient data, no dramatized distress, no unlicensed faces.
