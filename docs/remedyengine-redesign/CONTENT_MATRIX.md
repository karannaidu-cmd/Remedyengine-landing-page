# RemedyEngine — Content Matrix

*Copy deck + SEO for every page and section. Headlines/subs are launch-ready drafts; supporting copy is the intended message (tighten in build). All copy honours brief §14: no invented numbers, certifications, testimonials, or customer counts; clinical-AI copy carries the doctor-decides disclaimer.*

**Global facts:** Domain `www.remedyengin.com` *(confirm — see audit §3.1)* · Email `info@remedyengin.com` · Phone/WhatsApp `+91 8861650666` (`tel:+918861650666`, `https://wa.me/918861650666`). SEO titles use the template `%s | RemedyEngine` (already configured in `layout.tsx`); keep titles ≤ ~60 chars, meta descriptions ≤ ~155.

---

## HOME — `/`

| Section | Headline | Supporting copy | CTA | Visual | Engine |
|---|---|---|---|---|---|
| §1 Hero | **The engine that runs your entire clinic.** / *Every booking. Every consultation. Every prescription. Every report. One connected operating system.* | RemedyEngine connects WhatsApp, Instagram, Facebook, your website, walk-ins and AI calls to a dedicated suite of intelligent clinic engines — helping your team manage appointments, records, consultations, lab, pharmacy, billing and follow-ups through one platform. | **Book a Live Demo** / Explore the Engines | Hero engine-core + orbiting channels (image #1) | All |
| §2 Omnichannel | **Every doorway into your clinic. One intelligent booking engine.** | Whether a patient messages on WhatsApp, contacts you through Instagram or Facebook, books through your website, walks into the clinic or responds to an AI call, RemedyEngine brings every request into one connected workflow. | Explore Omnichannel Booking | Channel convergence (image #2) | Booking |
| §3 Engine ecosystem | **Dedicated engines. One connected clinic.** | Sixteen engines across access, clinical intelligence, operations, and growth — working as one system, not five tools stitched together. | Explore the Engines | Interactive constellation | All |
| §4 AI Patient History Brief | **Patient history, organised before the doctor needs it.** | The AI Patient History Brief analyses available medical history and organises the relevant details — allergies, current medications, past consultations, lab trends, diagnoses and reports — into one structured summary before and during the consultation. *Disclaimer: AI-generated summaries organise available patient information to support healthcare professionals. They do not replace independent clinical assessment, diagnosis or professional medical judgment.* | See how it works | Before/after brief (image #3) | AI Patient History |
| §5 Connected journey | **One patient. One connected journey.** | Follow a single visit as it flows through every engine — message, booking, brief, consultation, prescription, lab, pharmacy, billing and follow-up. | See How It Works | Sticky scrollytelling | All |
| §6 Command centre | **See what's happening across your clinic — right now.** | Appointments, patients waiting, doctor availability, consultations completed, revenue, outstanding balances, pending lab reports, pharmacy stock and follow-ups — in one live view. | Explore Insights | Real screenshot / *Illustrative* | Insights |
| §7 Built for every clinic | **Built for every clinic.** | From a single doctor to a growing chain, RemedyEngine adapts to how your clinic actually runs. | (cards link to solutions) | 5 clay cards | — |
| §8 Operational benefits | **Less busywork. More connected care.** | Reduce repetitive admin, connect patient information, improve coordination between departments, reduce missed follow-ups, improve payment visibility, give doctors organised context, and standardise workflows across locations. | — | Benefit grid | — |
| §9 Final CTA | **Your clinic already has moving parts. RemedyEngine makes them work together.** | Book a live demonstration and see your clinic's workflow running on one connected platform. | **Book Your RemedyEngine Demonstration** | Clay CTA band | — |

**SEO — Home**
- Title: `RemedyEngine | The AI Clinic Operating System`
- Meta: `RemedyEngine is an AI-powered clinic operating system — connecting WhatsApp booking, records, consultations, lab, pharmacy, billing and follow-ups through one connected platform.`
- Canonical: `/` · JSON-LD: Organization + WebSite + WebPage + SoftwareApplication + ContactPoint

---

## ENGINES OVERVIEW — `/engines`

| Section | Headline | Supporting copy | CTA | Engine |
|---|---|---|---|---|
| Hero | **Dedicated engines. One connected clinic.** | Every RemedyEngine capability is a dedicated engine — and every engine is connected to the rest. Explore them by what they do. | Book a demo | All |
| Family: Access | **Get patients in. Keep the conversation moving.** | Booking, Conversation and AI Calling turn every channel into a booked, informed patient. | (cards) | Booking, Conversation, AI Calling |
| Family: Clinical | **Give doctors organised context.** | AI Patient History Brief, Patient Records, Consultation and Prescription make each visit informed and complete. | (cards) | Clinical family |
| Family: Operations | **Run the departments without lost paperwork.** | Laboratory, Pharmacy, Billing, Queue and Video Consultation keep the clinic floor moving. | (cards) | Operations family |
| Family: Growth | **See everything. Retain patients. Control access.** | Follow-Up, Insights, Team & Access and Global Search keep the whole system observable and in control. | (cards) | Growth family |

**SEO:** Title `Engine Ecosystem | RemedyEngine` · Meta `Explore RemedyEngine's 16 connected clinic engines — booking, records, consultation, prescriptions, lab, pharmacy, billing, insights and more.` · Canonical `/engines`

---

## ENGINE DETAIL — `/engines/[slug]` (template)

Copy per engine comes from [ENGINE_CATALOG.md](./ENGINE_CATALOG.md) (`oneLiner`, `purpose`, `features`, `benefits`, `disclaimer`, `related`). Section skeleton + SEO pattern:

| Section | Content source |
|---|---|
| Hero | `{family} ENGINE` eyebrow · H1 `{name}` · sub `{oneLiner}` · availability pill if `planned` |
| Purpose | `{purpose}` |
| What it does | `{features}` (2-col) |
| Why it matters | `{benefits}` (benefit cards, no numbers) |
| Visual | `{image}` (label "Illustrative" if not a real screen) |
| Disclaimer | only `ai-patient-history` |
| Related engines | `{related}` internal links |
| CTA | Book a demo |

**SEO pattern (per slug):**
- Title: `{Engine name} | RemedyEngine` (e.g. `Booking Engine | RemedyEngine`)
- Meta: `{oneLiner} {short purpose}` (e.g. `Every patient channel, connected to one booking engine — WhatsApp, website, walk-in and staff booking with reminders and no double-bookings.`)
- Canonical: `/engines/{slug}` · JSON-LD: WebPage + BreadcrumbList (Home / Engines / {name})

**Per-engine SEO one-liners** (Title = `{Name} | RemedyEngine`):
| Slug | Meta description seed |
|---|---|
| booking | Turn every channel — WhatsApp, website, walk-in, staff — into one booked appointment with reminders and no double-bookings. |
| conversation | Automated WhatsApp conversations that confirm, remind, instruct and hand over to staff — patients answered without repetition. |
| ai-calling | AI-assisted appointment calls that confirm, remind, follow up and route real intent to your front desk. |
| ai-patient-history | An organised summary of the patient's available history — before and during the consultation. Doctors make the final call. |
| patient-records | One ID-keyed patient profile tying together visits, diagnoses, prescriptions, reports and follow-ups. |
| consultation | The doctor's in-visit workflow — notes, diagnosis, plan, tests and prescription in one flow. |
| prescriptions | Digital, branded prescriptions linked to diagnosis, pharmacy dispensing and follow-up. |
| laboratory | Digital lab workflow from test order to report — status tracking, uploads, review and lab billing. |
| pharmacy | Prescription-linked dispensing with live inventory, low-stock alerts and pharmacy billing. |
| billing | Consultation, pharmacy and lab charges unified — payments, outstanding balances and revenue visibility. |
| queue | Live arrival, waiting and room-assignment tracking for walk-ins and scheduled patients. |
| video-consultation | Remote and follow-up consultations over a link, tied to the same patient record. |
| follow-up | Recall and reminders for reviews, medications and repeat tests — fewer missed follow-ups. |
| insights | The clinic command centre — today's operations, revenue, workload, alerts and multi-location visibility. |
| team-access | Role-based permissions and accountability across admin, doctor, reception, pharmacy and lab. |
| global-search | Find any patient, appointment, prescription, report or invoice in seconds. |

---

## DEEP-DIVE PAGES

### `/omnichannel-booking`
| Section | Headline | Copy | CTA |
|---|---|---|---|
| Hero | **Every doorway into your clinic. One intelligent booking engine.** | (brief §3 supporting copy) — channels marked "Coming soon" where not live. | Book a demo |
| Channels | **Six ways in. One workflow.** | WhatsApp · Instagram* · Facebook* · Website · Walk-in · AI Calling* → Booking Engine. | See the Booking Engine |
| Flow | **From request to booked, briefed and beyond.** | Booking → Patient Record → AI Patient History Brief → Consultation → Prescription → Lab → Pharmacy → Billing → Follow-Up. | See How It Works |

**SEO:** Title `Omnichannel Booking | RemedyEngine` · Meta `WhatsApp, Instagram, Facebook, website, walk-in and AI-call bookings — all in one connected clinic booking engine.` · Canonical `/omnichannel-booking`

### `/ai-patient-history-brief`
| Section | Headline | Copy | CTA |
|---|---|---|---|
| Hero | **Understand the patient's history before and during the consultation.** | (ENGINE_CATALOG.md #4 purpose) | Book a demo |
| What it organises | **Everything that matters, in one place.** | Allergies · current & previous medications · previous consultations & diagnoses · lab history & trends · vital trends · uploaded reports · reason for visit · items needing attention. | See Patient Records |
| Disclaimer | — | **AI-generated summaries organise available patient information to support healthcare professionals. They do not replace independent clinical assessment, diagnosis or professional medical judgment.** | — |

**SEO:** Title `AI Patient History Brief | RemedyEngine` · Meta `RemedyEngine organises a patient's available medical history into one structured brief for doctors — supporting, never replacing, clinical judgment.` · Canonical `/ai-patient-history-brief`

### `/how-it-works`
| Section | Headline | Copy | CTA |
|---|---|---|---|
| Hero | **One patient. Every engine. One connected journey.** | See how a single visit flows through the whole clinic. | Book a demo |
| Journey | **From first message to follow-up.** | Scrollytelling across all 12 stages, each linking to its engine. | Explore the Engines |

**SEO:** Title `How It Works | RemedyEngine` · Meta `Follow one patient visit through RemedyEngine — booking, brief, consultation, prescription, lab, pharmacy, billing and follow-up, all connected.` · Canonical `/how-it-works`

---

## SOLUTIONS

### `/solutions` (overview)
Headline **Built for every clinic.** — Sub *From solo practices to growing chains, RemedyEngine adapts to how your clinic runs.* 5 cards → detail pages. Title `Solutions | RemedyEngine`.

### `/solutions/[slug]` (from `lib/solutions.ts`; copy seeded from `stakeholders.tsx`)
| Slug | Headline | Value line (from existing copy) | Key engines |
|---|---|---|---|
| solo-doctors | **Run a solo practice without a back office.** | Walk into every appointment fully briefed — and finish your notes in seconds. | AI Patient History, Consultation, Prescription, Booking, Follow-Up |
| multi-doctor-clinics | **Coordinate every doctor on one platform.** | Multi-doctor availability, shared records and no double-bookings. | Booking, Queue, Patient Records, Insights, Team & Access |
| specialty-clinics | **Purpose-fit for how your specialty works.** | Structured consultations, lab and pharmacy, tailored to your specialty. | Consultation, Laboratory, Pharmacy, Follow-Up |
| clinic-owners | **Grow revenue and cut admin overhead.** | Grow revenue and cut admin overhead — without hiring more front-desk staff. | Insights, Billing, Follow-Up, Team & Access |
| clinic-chains | **Standardise every location.** | One connected system across every branch, with role-based access and multi-location visibility. | Insights, Team & Access, Global Search, Booking |

**SEO pattern:** Title `{Solution} clinic software | RemedyEngine` · Meta = headline + value line. Canonical `/solutions/{slug}`.

---

## INTEGRATIONS — `/integrations`
Headline **Connected to the channels your patients already use.** — Honest state table: each channel/system tagged **Live** or **Coming soon** (confirm with product). No fake integrations (brief §14).
**SEO:** Title `Integrations | RemedyEngine` · Meta `See which channels and systems RemedyEngine connects to today — and what's coming next.` · Canonical `/integrations`

## SECURITY & ACCESS — `/security`
Headline **Controlled access, built in.** — Role-based permissions, accountability, privacy-conscious workflows. **Verified facts only — no certification claims unless verified** (brief §4, §16).
**SEO:** Title `Security & Access | RemedyEngine` · Meta `Role-based access, accountability and privacy-conscious workflows across your clinic team.` · Canonical `/security`

## BOOK A DEMO — `/book-demo` (canonical; keep existing funnel)
Existing copy is strong — keep. H1 **See RemedyEngine run your clinic.** Add contact fallback (WhatsApp/phone) beside the form. Existing metadata + BreadcrumbList already in place.

## CONTACT — `/contact`
Headline **Talk to the RemedyEngine team.** — Email `info@remedyengin.com` · Phone/WhatsApp `+91 8861650666` · light form. **This replaces every dead "Talk to sales" / `href="#"` link.**
**SEO:** Title `Contact | RemedyEngine` · Meta `Contact RemedyEngine — email info@remedyengin.com or message +91 8861650666 on WhatsApp.` · Canonical `/contact`

## PRIVACY `/privacy` · TERMS `/terms`
Long-form legal from the legal owner. Flat, high-contrast, no claymorphism. `robots: index,follow`; canonical self.

---

## GLOBAL: NAV & FOOTER

**Nav (mega-menu):** Engines ▾ · Solutions ▾ · How it works · Security · Integrations · **[Book a demo]** · WhatsApp.
**Footer columns (real links — replaces all `href="#"`):**
- **Platform:** Engine Ecosystem · Omnichannel Booking · AI Patient History Brief · Insights · How It Works
- **Engines:** Booking · Conversation · Consultation · Prescriptions · Laboratory · Pharmacy · Billing (+ "All engines")
- **Solutions:** Solo Doctors · Multi-Doctor Clinics · Specialty Clinics · Clinic Owners · Clinic Chains
- **Company:** Security · Integrations · Contact · Privacy · Terms
- **Contact block:** `info@remedyengin.com` · `+91 8861650666` (WhatsApp) · www.remedyengin.com
- Keep the existing disclaimer line + `© 2026 RemedyEngine`.

**Reusable CTA copy bank:** primary `Book a Live Demo` / `Book Your RemedyEngine Demonstration`; secondary `Explore the Engines`; tertiary `Message us on WhatsApp`. Retire the destination-less "Talk to sales" (route it to `/contact` if kept).
