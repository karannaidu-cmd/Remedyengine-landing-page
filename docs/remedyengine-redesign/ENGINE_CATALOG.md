# RemedyEngine — Engine Catalog

> The single source of truth for the 16 engines. Every engine detail page (`/engines/[slug]`), the homepage constellation, the `/engines` overview, and all internal linking are generated from this catalog. When copy or scope changes, change it **here first**, then propagate.

## How to use this file

- The redesigned site renders engine pages from **one data-driven template** (`src/components/engines/engine-detail.tsx`) fed by a typed array in `src/lib/engines.ts`. This document is the human-readable version of that array — field names below map 1:1 to the `Engine` type (see bottom).
- **Icons** are `lucide-react` (already a dependency, v1.23.0). Each engine names a primary Lucide glyph. The "clay / outline / active" treatments are CSS/SVG variants of the *same* glyph, not different icons — this keeps the icon system consistent (brief §10: do not mix libraries).
- **Availability** is explicit per engine: `live` (ship as present-tense capability) or `planned` (label "Coming soon" in UI, never imply it is operational — brief §3, §14). **The product team must confirm each flag before launch.** Defaults below are conservative placeholders and marked ⚠️ where confirmation is required.
- **Claim discipline:** no percentages, no certifications, no fake integrations. Clinical-AI copy must always carry the doctor-decides disclaimer (see AI Patient History Brief).

---

## Engine families

| Family | Purpose | Engines | Accent role |
|---|---|---|---|
| **A · Access & Communication** | Get patients in and keep the conversation moving | Booking, Conversation, AI Calling | Emerald `#16A779` |
| **B · Clinical Intelligence** | Give doctors organised context and clean clinical workflows | AI Patient History Brief, Patient Records, Consultation, Prescription | Primary green `#075E4C` |
| **C · Clinic Operations** | Run the departments without lost paperwork | Laboratory, Pharmacy, Billing & Revenue, Queue, Video Consultation | Deep forest `#043D32` |
| **D · Growth, Control & Intelligence** | See everything, retain patients, control access | Follow-Up & Retention, Insights, Team & Access, Global Search | Lime accent `#72D94E` (active states only) |

Family accents are used for the engine badge, the active connector-line glow in the constellation, and the eyebrow on each detail page — **not** for body text (brief §8: lime never for body).

---

## A · Access & Communication Engines

### 1. Booking Engine
- **slug:** `booking` · **route:** `/engines/booking`
- **icon (Lucide):** `CalendarCheck`
- **family:** Access & Communication
- **availability:** ⚠️ confirm — WhatsApp/website/walk-in/staff booking assumed `live`; Instagram/Facebook/AI-call intake `planned`
- **one-liner:** Every patient channel, connected to one booking engine.
- **purpose:** Turns any incoming request — from any channel — into a structured, de-duplicated appointment with the right doctor, type, and time.
- **features:** WhatsApp booking · Instagram enquiry capture · Facebook enquiry capture · Website booking · Walk-in booking · Staff-assisted booking · AI-call booking · Multi-doctor availability · Appointment types · Rescheduling · Cancellations · Confirmations · Reminders · Appointment statuses · Double-booking prevention
- **benefits:** Capture every enquiry regardless of where it starts · Stop double-bookings · Give patients same-channel confirmation and reminders · Remove the phone-tag back-and-forth
- **icon direction:** Calendar mark with a small check node; active state draws a converging line from six channel dots into the calendar.
- **related:** `conversation`, `ai-calling`, `queue`, `patient-records`
- **primary image:** `/images/scene-patient-chat.webp` (existing) or new `omnichannel-booking` render

### 2. Conversation Engine
- **slug:** `conversation` · **route:** `/engines/conversation`
- **icon (Lucide):** `MessagesSquare`
- **family:** Access & Communication
- **availability:** ⚠️ confirm — WhatsApp automated responses assumed `live`
- **one-liner:** Conversations that move patients forward.
- **purpose:** Handles the two-way WhatsApp conversation around every visit — answers, confirmations, instructions, and clean handover to staff when a human is needed.
- **features:** Automated WhatsApp responses · Patient questions · Appointment confirmations · Visit instructions · Rescheduling communication · Follow-up communication · Clinic announcements · Message routing · Staff handover
- **benefits:** Patients get answers without staff repetition · Nothing waits in an unread inbox · Clear escalation to a human when it matters
- **icon direction:** Stacked chat glyphs; active state pulses one bubble → arrow forward.
- **related:** `booking`, `ai-calling`, `follow-up`, `patient-records`

### 3. AI Calling Engine
- **slug:** `ai-calling` · **route:** `/engines/ai-calling`
- **icon (Lucide):** `PhoneCall`
- **family:** Access & Communication
- **availability:** ⚠️ confirm — likely `planned`; if not shipped, label "Coming soon" everywhere and keep copy in future/near-term tense
- **one-liner:** Appointment calls that don't need your front desk.
- **purpose:** AI-assisted voice calls that confirm, remind, follow up, recover missed calls, and route genuine intent to clinic staff.
- **features:** AI-assisted appointment calls · Appointment confirmations · Reminder calls · Follow-up calls · Missed-call recovery · Routing patients to clinic staff · Capturing booking intent
- **benefits:** Recover calls the front desk can't answer · Confirm and remind at scale · Hand real conversations to staff with context
- **icon direction:** Phone glyph with subtle waveform arc; active state animates 3-bar waveform. **Never a robot** (brief §7, §12).
- **related:** `booking`, `conversation`, `follow-up`
- **primary image:** new `ai-calling` render (smartphone + waveform + appointment card, no robot)

---

## B · Clinical Intelligence Engines

### 4. AI Patient History Brief Engine
- **slug:** `ai-patient-history` · **route:** `/engines/ai-patient-history` (also standalone marketing page `/ai-patient-history-brief`)
- **icon (Lucide):** `ClipboardPlus`
- **family:** Clinical Intelligence
- **availability:** ⚠️ confirm scope of AI analysis vs. simple aggregation
- **one-liner:** Understand the patient's history before and during the consultation.
- **purpose:** Analyses the patient's available medical history and organises the relevant parts into a structured summary the doctor can read at a glance — before and during the visit. **Replaces the old "AI Pre-Visit Brief" positioning.**
- **features:** Previous consultations · Existing conditions · Known allergies · Current medications · Previous medications · Previous diagnoses · Previous prescriptions · Lab-test history · Lab trends · Vital-sign trends · Uploaded reports · Reason for current visit · Important patient information · Relevant clinical observations · Items needing the doctor's attention
- **benefits:** Doctors walk in already oriented · Nothing important buried in old files · Less time reconstructing history, more time on care
- **REQUIRED DISCLAIMER (must appear on every surface that describes this engine):** *"AI-generated summaries organise available patient information to support healthcare professionals. They do not replace independent clinical assessment, diagnosis or professional medical judgment."*
- **icon direction:** Clipboard with a small plus/pulse; active state assembles scattered fragments → one ordered card.
- **related:** `patient-records`, `consultation`, `laboratory`
- **primary image:** `/images/scene-doctor-brief.webp` (existing) — label "illustrative" if not a real product screen (brief §6)

### 5. Patient Record Engine
- **slug:** `patient-records` · **route:** `/engines/patient-records`
- **icon (Lucide):** `FolderHeart`
- **family:** Clinical Intelligence
- **availability:** assumed `live` ⚠️ confirm
- **one-liner:** One patient. One connected record.
- **purpose:** A unified, ID-keyed profile that ties together every visit, diagnosis, prescription, report, and follow-up into a single timeline.
- **features:** Unified patient profile · Unique patient ID · Contact information · Visit history · Diagnosis history · Prescription history · Lab reports · Uploaded documents · Referral source · Follow-up history · Patient timeline
- **benefits:** No re-registering the same patient · Full context in one place · Cross-department continuity
- **icon direction:** Folder with heart/pulse node; active state stacks record layers.
- **related:** `ai-patient-history`, `consultation`, `prescriptions`, `laboratory`, `billing`

### 6. Consultation Engine
- **slug:** `consultation` · **route:** `/engines/consultation`
- **icon (Lucide):** `Stethoscope`
- **family:** Clinical Intelligence
- **availability:** assumed `live` ⚠️; video sub-capability `planned` unless confirmed
- **one-liner:** The consultation, structured end to end.
- **purpose:** The doctor's in-visit workflow — notes, diagnosis, treatment plan, tests, prescription, and follow-up in one flow.
- **features:** Doctor consultation workflow · Clinical notes · Symptoms · Diagnosis · Treatment plan · Test recommendations · Prescription creation · Follow-up instructions · Video consultations where supported
- **benefits:** One flow from symptom to plan · Everything captured in the record automatically · Orders fire to lab/pharmacy without paper
- **icon direction:** Stethoscope; active state traces the loop from note → plan.
- **related:** `ai-patient-history`, `prescriptions`, `laboratory`, `video-consultation`

### 7. Prescription Engine
- **slug:** `prescriptions` · **route:** `/engines/prescriptions`
- **icon (Lucide):** `FileText`
- **family:** Clinical Intelligence
- **availability:** assumed `live` ⚠️
- **one-liner:** Prescriptions that reach the patient and the pharmacy.
- **purpose:** Digital, branded prescriptions linked to diagnosis, pharmacy dispensing, and follow-up scheduling.
- **features:** Digital prescriptions · Medicine selection · Dosage · Duration · Instructions · Diagnosis · Clinical notes · Branded PDF · Prescription history · Pharmacy connection · Follow-up scheduling
- **benefits:** No illegible paper · Instant delivery on WhatsApp · Straight line to the pharmacy
- **icon direction:** Document with Rx-style mark; active state emits a delivery pulse to pharmacy node.
- **related:** `consultation`, `pharmacy`, `follow-up`, `patient-records`
- **primary image:** existing thread/prescription card pattern from `thread.tsx`

---

## C · Clinic Operations Engines

### 8. Laboratory Engine
- **slug:** `laboratory` · **route:** `/engines/laboratory`
- **icon (Lucide):** `FlaskConical`
- **family:** Clinic Operations
- **availability:** ⚠️ confirm
- **one-liner:** From test order to report, without lost paperwork.
- **purpose:** Digital lab workflow from order to result — status tracking, uploads, doctor review, and lab billing.
- **features:** Digital test orders · Test-status tracking · Sample-status visibility · Pending-report alerts · Result entry · Report uploads · Doctor review · Patient lab history · Lab billing
- **benefits:** No paperwork lost between order and result · Pending reports never fall through · Results land in the record and on WhatsApp
- **icon direction:** Flask with level indicator; active state fills the flask.
- **related:** `consultation`, `patient-records`, `billing`, `follow-up`
- **primary image:** `/images/scene-lab.webp` (existing)

### 9. Pharmacy Engine
- **slug:** `pharmacy` · **route:** `/engines/pharmacy`
- **icon (Lucide):** `Pill`
- **family:** Clinic Operations
- **availability:** ⚠️ confirm
- **one-liner:** Every prescription connected to pharmacy operations.
- **purpose:** Prescription-linked dispensing with live inventory, stock movement, and pharmacy billing.
- **features:** Prescription-linked dispensing · Medicine inventory · Stock movement · Low-stock alerts · Dispensing history · Patient purchase history · Pharmacy billing · Reordering visibility
- **benefits:** Dispense straight from the prescription · Know what's low before it runs out · Every sale captured and billed
- **icon direction:** Pill/capsule; active state shows a stock-level bar.
- **related:** `prescriptions`, `billing`, `patient-records`, `insights`
- **primary image:** `/images/scene-pharmacy.webp` (existing)

### 10. Billing & Revenue Engine
- **slug:** `billing` · **route:** `/engines/billing`
- **icon (Lucide):** `ReceiptText`
- **family:** Clinic Operations
- **availability:** ⚠️ confirm
- **one-liner:** Capture every charge. Track every payment.
- **purpose:** Unifies consultation, pharmacy, and lab charges with payment tracking, outstanding balances, and revenue visibility.
- **features:** Consultation billing · Pharmacy billing · Lab billing · Payment tracking · Outstanding balances · Payment methods · Collection visibility · Revenue summaries · Pending-payment alerts
- **benefits:** No charge slips through · See exactly what's outstanding · One revenue view across departments
- **icon direction:** Receipt with total line; active state highlights a paid/pending toggle.
- **related:** `pharmacy`, `laboratory`, `consultation`, `insights`

### 11. Queue Engine
- **slug:** `queue` · **route:** `/engines/queue`
- **icon (Lucide):** `Users` (or `ListOrdered`)
- **family:** Clinic Operations
- **availability:** ⚠️ confirm
- **one-liner:** A calm waiting room, in real time.
- **purpose:** Live arrival, waiting, and room-assignment tracking for walk-ins and scheduled patients.
- **features:** Patient arrival tracking · Walk-in queue · Scheduled-patient queue · Waiting status · Doctor-room assignment · Consultation progress · Waiting-room visibility
- **benefits:** Front desk sees the whole floor · Patients move in order · Doctors know who's next
- **icon direction:** Ordered list / people row; active state advances the queue by one.
- **related:** `booking`, `consultation`, `insights`

### 12. Video Consultation Engine
- **slug:** `video-consultation` · **route:** `/engines/video-consultation`
- **icon (Lucide):** `Video`
- **family:** Clinic Operations
- **availability:** ⚠️ likely `planned` — confirm before present-tense claims
- **one-liner:** Care that reaches beyond the clinic.
- **purpose:** Remote and follow-up appointments over a consultation link, tied into the same record.
- **features:** Remote appointments · Follow-up consultations · Virtual care · Consultation links · Remote patient access
- **benefits:** See patients who can't travel · Faster follow-ups · Same record, remote or in person
- **icon direction:** Camera glyph; active state shows a connection pulse.
- **related:** `consultation`, `follow-up`, `booking`

---

## D · Growth, Control & Intelligence Engines

### 13. Follow-Up & Retention Engine
- **slug:** `follow-up` · **route:** `/engines/follow-up`
- **icon (Lucide):** `BellRing` (or `Repeat`)
- **family:** Growth, Control & Intelligence
- **availability:** ⚠️ confirm (AI-call follow-ups `planned` unless confirmed)
- **one-liner:** The visits that would otherwise be forgotten.
- **purpose:** Recall and reminders for reviews, medications, repeat tests, and missed appointments — over WhatsApp (and AI calls where supported).
- **features:** Review-visit scheduling · Medication follow-ups · Repeat-test reminders · Treatment-progress reminders · Patient recall · WhatsApp follow-ups · AI-call follow-ups where supported · Missed-appointment recovery
- **benefits:** Fewer missed follow-ups · Patients come back on time · Recovered no-shows
- **icon direction:** Bell with a return arrow; active state rings once and loops.
- **related:** `conversation`, `ai-calling`, `consultation`, `insights`

### 14. Insights Engine
- **slug:** `insights` · **route:** `/engines/insights`
- **icon (Lucide):** `BarChart3`
- **family:** Growth, Control & Intelligence
- **availability:** ⚠️ confirm which metrics render from live data
- **one-liner:** See what's happening across your clinic — right now.
- **purpose:** The clinic command centre — today's operations, revenue, workload, alerts, and multi-location visibility.
- **features:** Today's appointments · Completed consultations · Patients waiting · Revenue collected · Outstanding payments · New-patient trends · Doctor workload · Hourly patient traffic · Appointment completion · Pharmacy stock alerts · Pending lab reports · Multi-location visibility · Operational alerts
- **benefits:** One glance shows the day · Spot problems before they compound · Compare and standardise across locations
- **icon direction:** Bar chart; active state animates bars rising. **No fabricated numbers in any mockup** — use abstract/illustrative values and label them (brief §6, §7, §14).
- **related:** `billing`, `queue`, `pharmacy`, `laboratory`, `team-access`
- **primary image:** `/images/scene-dashboard.webp` / `/images/dashboard-mockup.webp` (existing) — label illustrative

### 15. Team & Access Engine
- **slug:** `team-access` · **route:** `/engines/team-access`
- **icon (Lucide):** `ShieldCheck` (or `UsersRound`)
- **family:** Growth, Control & Intelligence
- **availability:** ⚠️ confirm
- **one-liner:** The right access for every role.
- **purpose:** Role-based permissions and accountability across admin, doctor, reception, pharmacy, and lab.
- **features:** Clinic administrator roles · Doctor roles · Receptionist roles · Pharmacy roles · Laboratory roles · Role-based permissions · Accountability · Controlled access · Privacy-conscious workflows
- **benefits:** People see only what they should · Clear accountability · Safer multi-role operations
- **NOTE:** **Do not claim regulatory certification** (HIPAA/ISO/etc.) unless verified (brief §4, §16). Use "privacy-conscious," "role-based access," "controlled access" — not certification language.
- **icon direction:** Shield with check; active state locks/unlocks a role row.
- **related:** `insights`, `patient-records`

### 16. Global Search Engine
- **slug:** `global-search` · **route:** `/engines/global-search`
- **icon (Lucide):** `Search`
- **family:** Growth, Control & Intelligence
- **availability:** ⚠️ confirm
- **one-liner:** Everything in your clinic, one search away.
- **purpose:** Fast, unified search across patients, appointments, doctors, prescriptions, lab reports, invoices, and platform pages.
- **features:** Find patients · Find appointments · Find doctors · Find prescriptions · Find lab reports · Find invoices · Find pages and platform modules
- **benefits:** Stop hunting across screens · Reach any record in seconds · One search bar for the whole OS
- **icon direction:** Magnifier; active state shows result rows resolving.
- **related:** `patient-records`, `billing`, `laboratory`, `insights`

---

## Cross-engine relationship map (for the constellation + internal links)

```
Channels (WhatsApp · Instagram* · Facebook* · Website · Walk-in · AI Calling*)
        │
        ▼
[Booking] ──► [Patient Records] ──► [AI Patient History Brief] ──► [Consultation]
                                                                        │
                       ┌────────────────────────────────────────────────┤
                       ▼                     ▼                           ▼
                 [Prescription] ───► [Pharmacy]                     [Laboratory]
                       │                     │                           │
                       └─────────────► [Billing & Revenue] ◄────────────┘
                                             │
[Queue] and [Video Consultation] wrap the visit · [Follow-Up] closes the loop back to Conversation/AI Calling
[Insights] observes all · [Team & Access] governs all · [Global Search] indexes all

* = confirm availability; label "Coming soon" if not live
```

---

## Data model (target `src/lib/engines.ts`)

```ts
export type EngineFamily =
  | "access"          // A · Access & Communication
  | "clinical"        // B · Clinical Intelligence
  | "operations"      // C · Clinic Operations
  | "growth";         // D · Growth, Control & Intelligence

export type Availability = "live" | "planned";

export type Engine = {
  slug: string;                 // "booking"
  name: string;                 // "Booking Engine"
  family: EngineFamily;
  icon: LucideIcon;             // e.g. CalendarCheck
  availability: Availability;   // gates the "Coming soon" pill
  oneLiner: string;             // section headline
  purpose: string;              // 1–2 sentences
  features: string[];           // bullet list
  benefits: string[];           // benefit-focused, NO numbers
  disclaimer?: string;          // required for ai-patient-history
  related: string[];            // slugs, for internal-link block
  image?: string;               // /images/*.webp
  illustrative?: boolean;       // true => render "Illustrative" label
};
```

**Rule:** the engine-detail template reads only from this array. Adding engine #17 later = one array entry + one image, zero new components.
