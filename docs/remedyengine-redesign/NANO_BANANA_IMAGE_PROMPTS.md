# RemedyEngine — Nano Banana Image Prompts

*Production prompts for every required website image. Supersedes the WhatsApp-era prompts in [../../image-generation-prompts.md](../../image-generation-prompts.md) for the redesign (keep that file for legacy assets). After generating: save the source PNG, convert to WebP with **sharp** (`quality: 82` photos / `quality: 92` flat graphics per CLAUDE.md), delete the PNG, and reference `/images/<name>.webp`. Update filenames to be descriptive/SEO-friendly.*

---

## SHARED ART DIRECTION (prepend to every prompt)

> Premium healthcare-SaaS advertising visual for RemedyEngine, an AI clinic operating system. Modern, internationally diverse or contemporary Indian clinical environments. Colour world: deep forest green (#043D32), primary green (#075E4C), emerald (#16A779), soft mint (#BFEFDC / #EAF8F1), off-white (#F6FAF8), pure white, with subtle dark-navy (#0B1F33) detail and sparing lime (#72D94E) energy accents. Natural, realistic soft lighting. Sophisticated, calm, credible, high-technology. Clean, restrained composition with generous negative space where website text will sit.

**Locked global negatives (append to every negative prompt):**
`no text, no readable UI text, no lettering, no logos, no brand marks, no watermarks, no robots, no holographic brains, no floating holograms, no sci-fi neon, no cyberpunk, no cartoon characters, no distorted or extra hands/fingers, no duplicated people, no fake patient data, no readable charts/numbers, no exaggerated illness or distress, no clutter, no gradient soup, no glossy plastic toy look`

**Global rules:** produce high resolution (≥ 2400px on the long edge); keep lighting and colour consistent across the whole set so the site reads as one system; never generate the RemedyEngine logo (the real logo file is composited in code); any UI shown must use abstract placeholder shapes, never legible text or real data; channel references use abstract symbols, not copyrighted logo imitations.

---

## 1 — Hero engine ecosystem
- **Page / section:** Home §1 Hero · also `/engines` hero · **filename:** `hero-engine-core.webp`
- **Prompt:** A premium claymorphic 3D "engine core" object at the centre — a soft-extruded, rounded emerald-and-white technology form suggesting a central intelligence hub. Around it, interconnected smaller claymorphic nodes representing clinic functions (booking, records, consultation, pharmacy, laboratory, billing, analytics) linked by clean glowing connector lines with small light pulses travelling along them. Soft green outer shadows, gentle white inner highlights, matte tactile surfaces. Deep-green-to-emerald palette on an off-white environment with a faint lime energy glow top-right.
- **Aspect ratio:** 16:9 (desktop hero), also export 4:5 crop for mobile
- **Composition:** central core slightly right; connected nodes orbiting; **left third kept clear** for headline + CTAs
- **Lighting:** soft studio, top-left key, gentle ambient fill; subtle emerald rim light
- **Subject placement:** core at ~62% width, vertically centred
- **Negative space:** left third and lower-left
- **Negative prompt:** global negatives + `no plastic toy sheen, no childish shapes, no literal engine/motor machinery, no gears, no smoke`
- **Mobile crop:** 4:5, core centred, fewer visible nodes, more headroom top
- **Desktop crop:** 16:9 full, core right-of-centre

## 2 — Omnichannel booking convergence
- **Page / section:** Home §2 · `/omnichannel-booking` hero · **filename:** `omnichannel-converge.webp`
- **Prompt:** A sophisticated visual of six abstract communication channels converging into one central booking hub. Use tasteful abstract symbols — a speech bubble, a camera/aperture glyph, a globe/website glyph, a doorway/walk-in glyph, a soundwave/voice-call glyph, a stylised social glyph — as soft claymorphic tokens flowing along clean converging light-lines into a single glowing emerald booking node. Green healthcare-technology palette, connected energy lines, calm and premium.
- **Aspect ratio:** 16:9
- **Composition:** channels fan in from left/top, converge to a hub on the right; clear band across upper area for headline
- **Lighting:** soft, even, subtle glow at the convergence point
- **Subject placement:** convergence hub right-of-centre
- **Negative space:** upper-left for text
- **Negative prompt:** global negatives + `no WhatsApp/Instagram/Facebook logo imitation, no recognizable brand icons, no app-store icons`
- **Mobile crop:** 1:1, vertical fan-in from top to hub at bottom
- **Desktop crop:** 16:9 or 21:9 banner

## 3 — Doctor with AI Patient History Brief
- **Page / section:** Home §4 · `/ai-patient-history-brief` · engine `ai-patient-history` · **filename:** `doctor-history-brief.webp`
- **Prompt:** A confident, calm Indian doctor (mid-30s–40s, white coat) in a premium modern clinic reviewing a structured patient summary on a tablet. Natural, warm-neutral lighting; sophisticated uncluttered clinic interior with subtle green and wood-neutral detailing. The doctor looks composed and in control. The tablet screen shows only abstract placeholder panels — no readable text or data.
- **Aspect ratio:** 4:3 (section) + 3:4 mobile
- **Composition:** doctor left-of-centre, tablet visible; right side softer/negative for callout labels added in code
- **Lighting:** soft natural window light, gentle
- **Subject placement:** doctor occupies left 55%
- **Negative space:** right third for text/callouts
- **Negative prompt:** global negatives + `no readable screen text, no patient photos on screen, no stethoscope cliché pose, no stock-smile, no messy background`
- **Mobile crop:** 3:4 portrait, tighter on doctor + tablet
- **Desktop crop:** 4:3, room on the right

## 4 — Busy clinic BEFORE RemedyEngine
- **Page / section:** Home §5 (before/after) · `/how-it-works` · problem narrative · **filename:** `clinic-before.webp`
- **Prompt:** A realistic modern Indian private-clinic reception under everyday pressure — professional staff managing a ringing phone, paper registers, sticky notes, a queue of a few patients, and scattered report folders. Editorial healthcare photography; busy and overloaded but not chaotic or dramatic. Natural indoor light, believable clinic interior.
- **Aspect ratio:** 3:2
- **Composition:** reception desk mid-frame, staff engaged; paper/analog clutter emphasised (contrast with image #5)
- **Lighting:** natural, slightly cooler/flat to feel "before"
- **Subject placement:** staff behind desk, patients foreground-left
- **Negative space:** modest top area
- **Negative prompt:** global negatives + `no dramatized chaos, no distressed/crying patients, no mess on floor, no dark mood, no clutter to the point of caricature`
- **Mobile crop:** 4:5 on the desk + one staff member
- **Desktop crop:** 3:2 wide

## 5 — Connected clinic AFTER RemedyEngine
- **Page / section:** Home §5 (before/after) · §6 command-centre · **filename:** `clinic-after.webp`
- **Prompt:** The same type of modern clinic operating calmly and digitally — organised reception with a single tidy monitor, a short orderly queue, a doctor using a tablet, staff relaxed and coordinated, connected departments visible in the background. Premium modern clinical environment, warm and bright, green accents. Editorial healthcare photography.
- **Aspect ratio:** 3:2 (match #4 for before/after pairing)
- **Composition:** mirror #4's framing but calm/organised; warmer, brighter grade
- **Lighting:** warm natural, brighter, optimistic
- **Subject placement:** reception + doctor, uncluttered
- **Negative space:** top for text
- **Negative prompt:** global negatives + `no paper clutter, no phone-juggling, no crowding`
- **Mobile crop:** 4:5 on reception
- **Desktop crop:** 3:2 wide — pair side-by-side with #4

## 6 — Laboratory Engine
- **Page / section:** engine `laboratory` · Home §6 · **filename:** `engine-laboratory.webp`
- **Prompt:** A clean, modern clinic laboratory with a technician (diverse, professional) reviewing digital test orders and result status on a monitor or tablet. Premium clinical equipment, orderly benches, subtle green accents, realistic photography. Screens show abstract placeholder panels only.
- **Aspect ratio:** 4:3
- **Composition:** technician right, equipment left, screen visible but unreadable
- **Lighting:** clean, neutral-cool clinical
- **Subject placement:** technician right-of-centre
- **Negative space:** upper-left
- **Negative prompt:** global negatives + `no biohazard drama, no blood, no readable results, no messy samples`
- **Mobile crop:** 1:1 on technician + screen
- **Desktop crop:** 4:3

## 7 — Pharmacy Engine
- **Page / section:** engine `pharmacy` · **filename:** `engine-pharmacy.webp`
- **Prompt:** A modern clinic pharmacy with neatly organised medicine storage and a pharmacist using a screen for prescription-linked dispensing. Professional lighting, green accents, premium healthcare advertising. Shelves organised; screen shows abstract placeholder UI only.
- **Aspect ratio:** 4:3
- **Composition:** pharmacist at counter, organised shelving behind
- **Lighting:** warm-neutral, clean
- **Subject placement:** pharmacist left-of-centre
- **Negative space:** right for text
- **Negative prompt:** global negatives + `no readable medicine labels, no recognizable drug brands, no clutter`
- **Mobile crop:** 1:1 on pharmacist + counter
- **Desktop crop:** 4:3

## 8 — AI Calling Engine
- **Page / section:** engine `ai-calling` · Home §2 support · **filename:** `engine-ai-calling.webp`
- **Prompt:** A tasteful conceptual visual of an AI-assisted clinic phone call: a modern smartphone held or on a clean surface, a subtle abstract audio-waveform, and a soft claymorphic appointment-card token floating nearby suggesting a confirmed booking. Calm green palette, premium and minimal. **No robot, no face, no assistant avatar.**
- **Aspect ratio:** 4:3 (also 1:1)
- **Composition:** phone centre-left, waveform arcing toward an appointment token right
- **Lighting:** soft studio, gentle emerald glow on the waveform
- **Subject placement:** phone lower-left, token upper-right
- **Negative space:** upper band for text
- **Negative prompt:** global negatives + `no robot, no humanoid assistant, no face on screen, no readable call UI, no phone-brand identifiers`
- **Mobile crop:** 1:1 phone + waveform
- **Desktop crop:** 4:3

## 9 — Multi-location insights
- **Page / section:** engine `insights` · `/solutions/clinic-chains` · **filename:** `insights-multilocation.webp`
- **Prompt:** A clinic owner (executive, diverse) reviewing a multi-location operations overview on a large screen showing abstract charts, map-style location nodes and connected lines — all placeholder, no readable numbers. Modern executive clinic office, premium healthcare-SaaS photography, green accents.
- **Aspect ratio:** 16:9
- **Composition:** owner foreground-right, screen mid-frame with abstract dashboard
- **Lighting:** soft, professional, slightly warm
- **Subject placement:** owner right, screen left-of-centre
- **Negative space:** upper-left
- **Negative prompt:** global negatives + `no readable KPIs, no fake percentages, no real map labels, no ticker text`
- **Mobile crop:** 4:5 on owner + partial screen
- **Desktop crop:** 16:9

## 10 — Clinic team
- **Page / section:** `/solutions` · `/security` (team & access) · About · **filename:** `clinic-team.webp`
- **Prompt:** A diverse, credible clinic team — a doctor, a receptionist, a pharmacist, a lab technician and an administrator — collaborating in a modern clinic. Professional, natural, approachable; premium clinical interior with green accents. Believable colleagues, not a posed stock lineup.
- **Aspect ratio:** 3:2
- **Composition:** small group mid-frame, natural interaction
- **Lighting:** warm natural
- **Subject placement:** centred group
- **Negative space:** top band for text
- **Negative prompt:** global negatives + `no forced smiles, no arms-crossed hero pose, no identical faces, no lineup`
- **Mobile crop:** 4:5 on 2–3 members
- **Desktop crop:** 3:2

## 11 — Patient journey (cinematic)
- **Page / section:** `/how-it-works` hero · Home §5 poster · **filename:** `patient-journey.webp`
- **Prompt:** A horizontal cinematic sequence visual showing one patient's journey as connected stages — messaging, booking, doctor consultation, laboratory, pharmacy, billing, follow-up — rendered as a flowing connected band with consistent people and one clinic environment across the stages, linked by clean light-lines. Premium, calm, editorial + subtle claymorphic connective tokens.
- **Aspect ratio:** 21:9 (wide banner)
- **Composition:** left-to-right progression; stages evenly spaced along a connecting line
- **Lighting:** consistent warm-natural across all stages (continuity is critical)
- **Subject placement:** stage vignettes across the band
- **Negative space:** thin upper band for a headline
- **Negative prompt:** global negatives + `no inconsistent lighting between stages, no different-looking duplicate patients, no readable stage labels`
- **Mobile crop:** stack as 3 separate 1:1 vignettes (message / consult / follow-up) rather than shrinking the banner
- **Desktop crop:** 21:9 full-bleed

## 12 — Mobile WhatsApp-style booking
- **Page / section:** Home §2 / Booking engine support · **filename:** `mobile-booking-chat.webp`
- **Prompt:** A premium smartphone mockup, isolated on a clean off-white/mint background, showing an appointment-conversation flow built entirely from abstract placeholder chat bubbles and a soft claymorphic confirmation card — green and white, tactile, no readable text. Studio product render, soft shadow beneath the device.
- **Aspect ratio:** 4:5 (portrait, device-friendly)
- **Composition:** single device centred, slight angle, floating soft shadow
- **Lighting:** clean studio, soft top light
- **Subject placement:** device centred
- **Negative space:** around device (isolated)
- **Negative prompt:** global negatives + `no readable messages, no real names/times, no phone-brand logo, no busy background, no multiple devices`
- **Mobile crop:** 4:5 as-is
- **Desktop crop:** 1:1 or 4:5 in a two-column layout

---

## Asset checklist & reuse

| Existing asset | Redesign use |
|---|---|
| `remedyengine-logo.png` | **Keep — never regenerate** (composited in code) |
| `scene-lab.webp` | Interim for engine `laboratory` until #6 lands |
| `scene-pharmacy.webp` | Interim for engine `pharmacy` until #7 |
| `scene-doctor-brief.webp` | Interim for AI Patient History (#3) |
| `scene-frontdesk.webp` | Interim for "before" (#4) |
| `scene-dashboard.webp` / `dashboard-mockup.webp` | Interim for Insights/command centre (label "Illustrative") |
| `scene-patient-chat.webp` | Interim for omnichannel / booking |
| `engine-concept.webp` | Interim for hero core (#1) until premium render |
| `og-image.webp` | **Regenerate** on the new palette |

**New OG images:** generate a branded 1200×630 OG per major page (home, /engines, /ai-patient-history-brief, /solutions) using the #1/#11 art direction with clear negative space (text composited in code, not in the image).

**Naming:** use descriptive, hyphenated, SEO-friendly filenames (as above) — not `image1.webp`. Add meaningful `alt` text in code for every image (brief §16, §17).
