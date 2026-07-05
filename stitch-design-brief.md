# RemedyEngine — Google Stitch Design Brief

A single source for generating the RemedyEngine landing page in **Google Stitch**
(stitch.withgoogle.com). Section 1 is the theme/design system — paste it first so
every screen inherits the brand. Sections 2+ are per-section prompts with the real
copy — generate them one at a time and Stitch keeps the theme consistent.

**How to use:** In Stitch, start a new project → paste **§1 (Theme)** as the first
message to establish the design system → then paste each section prompt (§3.x) to
generate that block. Keep "Experimental / high-fidelity" mode on for best results.

---

## 1. Theme & Design System (paste this first)

> Design a modern, calm, editorial **healthcare SaaS marketing website** called
> **RemedyEngine** — a WhatsApp-first clinic-automation platform. The feeling is
> clinical-but-human and trustworthy: NOT a flashy startup, NOT generic medical
> teal/blue, NOT a dark neon "AI" look. Think a premium, restrained, paper-and-ink
> editorial aesthetic in muted clinical green.
>
> **Colors (use exactly these):**
> - Page background: sage-grey paper `#F1F3EE`
> - Cards / elevated surfaces: white `#FFFFFF`
> - Primary text / dark sections: ink-charcoal `#16231F`
> - Secondary text: `#33423C`
> - Primary brand / buttons / links / active states: clinical green `#2E6B54`
> - Secondary green / hover / tints: `#3F8B6E`, light fill `#DCEAE1`
> - Amber (time-sensitive, reminders, "pending" badges only): `#D98A2B`, tint `#F6E6CC`
> - Emergency red (used almost never): `#B94A3C`
> - Hairlines / borders: `#D9DED6`
>
> **Typography:**
> - Headlines / display: **Source Serif 4** (weights 600–700), large, tight leading.
> - Body / UI: **IBM Plex Sans** (400–600).
> - Data / labels / metadata / eyebrows / IDs / timestamps / status pills:
>   **IBM Plex Mono** (500), uppercase, letter-spacing 0.02em. This mono style is
>   what marks something as an "official clinical record."
>
> **Layout & components:**
> - 1200px max content width; generous vertical rhythm (large section padding).
> - Cards: 12px radius, 1px `#D9DED6` border, ONE soft shadow only
>   (`0 4px 16px rgba(22,35,31,0.08)`) — flat and calm, no gradients, no glossy 3D.
> - Buttons: primary = solid `#2E6B54` white text, 8px radius, no gradient/shadow;
>   secondary = 1px `#16231F` border, transparent fill.
> - Chat bubbles: 20px radius (one squared "tail" corner), green tint for AI, white
>   with border for patient.
> - Status pills: mono uppercase — green = confirmed/done, amber = pending/reminder.
> - Visible focus rings, WCAG AA contrast, no autoplaying media.
>
> **Voice:** plain, confident, procedural. No hype words ("revolutionary,"
> "seamless"). Say what happens, not how impressive it is.

---

## 2. Site map (section order)

Nav → Hero → Problem → AI Features → Automated Communication → Connected Workflow
→ Value by Stakeholder → Why RemedyEngine Wins + ROI → Closing CTA → Footer.

---

## 3. Section-by-section prompts (with real copy)

### 3.0 Navigation (sticky, flat)
Logo "RE" monogram in a green rounded square + wordmark **RemedyEngine**. Links:
**Features · Workflow · Who it's for**. Right side: one primary button **Book a demo**.
Flat, transparent over the sage background, 1px bottom hairline once scrolled.
Mobile: hamburger → stacked links + Book a demo.

### 3.1 Hero
- Eyebrow (mono, uppercase): `THE OPERATING ENGINE FOR MODERN CLINICS`
- H1 (serif, very large): **The engine that runs your clinic.**
- Sub: *Capture every enquiry, cut no-shows, and run booking, pharmacy, lab,
  payments, and marketing from one dashboard — all through WhatsApp. No app for
  your patients, no extra front-desk staff.*
- Buttons: **See a 20-minute demo** (primary) · **Talk to sales** (secondary)
- Trust chips (mono pills): `No patient app` · `WhatsApp-first` ·
  `Booking · Pharmacy · Lab · Payments` · `Multi-branch ready`
- Hero banner image (16:9, framed card): a smartphone showing a chat that flows via
  a dashed arrow into a clinic dashboard (calendar + stat tiles + bar chart).
- Below: a 4-card **pillar** strip:
  1. **Automate the front desk** — AI books, reminds, triages, and answers patients 24/7 on WhatsApp — no app for patients.
  2. **Run the whole clinic** — One dashboard for doctors, pharmacy, lab, and payments — paper and manual work goes digital.
  3. **Grow with marketing** — WhatsApp campaigns and health-care offers fill empty slots and win lapsed patients back.
  4. **Monitor everything** — Live activity reports on revenue, utilization, collections, and patient flow.

### 3.2 "How the engine works" — The Thread (signature element, use once)
Section title (serif): **A WhatsApp message becomes a finished piece of care.**
Sub: *One real conversation, start to finish — booked, briefed, prescribed, and
delivered, without a single phone call.*
A vertical rail: on the left, WhatsApp-style chat bubbles (patient + AI, green
tint); each hands off via a thin dashed connector with a mono timestamp to a white
**clinical card** on the right. Four steps:
1. Chat: fever + body ache → **Appointment confirmed** card `APPT-2291 · Today, 4:30 PM · Dr. Rao` (green "Confirmed" pill)
2. Chat: allergy/medication questions → **AI doctor brief ready** card (green "Ready for doctor" pill)
3. Chat: prescription link → **Digital prescription issued** card `RX-2291` (green "Sent to pharmacy" pill)
4. Chat: report ready → **Lab report delivered** card `LAB-2291 · CBC` (amber "Delivered" pill)

### 3.3 Problem — "Growing clinics lose time and money to manual, disconnected operations"
Six cards (icon in emergency-red, serif title, body). Close with a large serif line.
1. **Patients call (or don't)** — busy lines, unanswered after-hours enquiries; every missed call is a lost patient.
2. **No-shows bleed revenue** — a forgotten appointment is an empty slot; most clinics have no automated reminders.
3. **The front desk is overloaded** — booking, confirming, reminding, rescheduling, payments — all manual, all day.
4. **Doctors walk in cold** — no structured summary; the first minutes are spent re-asking the same questions.
5. **Pharmacy and lab are islands** — paper scripts, WhatsApp screenshots for results, stock in a register.
6. **Patients disappear** — nothing nudges a patient who hasn't returned in 30/60/90 days.
Closing line (serif): *RemedyEngine replaces all of this with one connected engine
that runs the whole clinic — and the patient never has to download an app.*

### 3.4 AI Features — "Real AI, not just menus"
A responsive grid of 7 cards. Each card: green icon tile, title, mono uppercase
subtitle, a **Problem** and **Solution** block (mono labels), and a green-tint
**benefit** strip at the bottom.
1. **AI WhatsApp Assistant** (Conversational front desk) — answers every message instantly 24/7, natural language incl. Hinglish. Benefit: *Zero missed enquiries, instant responses around the clock.*
2. **AI Triage & Emergency Detection** (Patient safety, automated) — classifies intent + urgency, escalates emergencies. Benefit: *Urgent cases jump the queue automatically.*
3. **AI Symptom Intake** (Structured, before the visit) — structured pre-visit history in the patient's words. Benefit: *Complete intake every time, ready before arrival.*
4. **AI Specialist Matching** (Right doctor, first time) — matches symptoms to the right specialty/doctor. Benefit: *Fewer mis-bookings, better utilization.*
5. **AI Pre-Consult Doctor Briefs** (Context, ready on arrival) — auto-generated brief per appointment; batch the day's briefs each morning. Benefit: *Saves doctor time every visit.*
6. **AI Treatment Plan Assistance** (Faster, consistent notes) — structured plan draft the doctor finalizes. Benefit: *Edit instead of starting from blank.*
7. **Conversational Booking** (No app, no login) — book entirely in WhatsApp; staff add walk-ins/phone bookings. Benefit: *Friction-free booking more patients finish.*

### 3.5 Automated Communication — "Set once. Runs forever."
A clean 3-column table: **Automation · Real-world problem · Benefit** (benefit text
in green). Rows: Booking confirmation; 24-hour reminder; 2-hour reminder;
Cancellation & reschedule notices; Video consult link delivery; Post-visit
follow-up; No-show re-engagement; Retention win-back (30/60/90 days); Broadcast
campaigns. Close with serif line about the compounding effect of reminders +
follow-ups + win-back growing recurring revenue with no extra staff.

### 3.6 Connected Workflow — "One engine, not five tools stitched together"
Sub: *…all in one system, with paper forms and manual processes digitized end to
end.* An 8-cell grid (green icon tile, title, description, green benefit line):
Booking & Scheduling · Digital Prescriptions · Pharmacy Management · Lab &
Diagnostics · Patient CRM · Payments & Revenue Tracking · Analytics & Reports ·
Multi-Clinic & Roles.

### 3.7 Value by Stakeholder — "Everyone in the clinic gets something back"
A tabbed section (6 tabs). Each tab = two columns: left has a serif title, 3
checkmarked points, and an italic serif pull-quote; right has a relevant image.
- **Owners** — dashboard mockup image. Quote: *"Grow revenue and cut admin overhead — without hiring more front-desk staff."*
- **Doctors** — quote: *"Walk into every appointment fully briefed — and finish your notes in seconds."*
- **Front desk** — quote: *"Let automation answer the phone that never stops ringing."*
- **Pharmacy** — quote: *"From prescription to dispense — paperless, with zero stockouts or expiry losses."*
- **Labs** — quote: *"Run an organized lab and deliver every report automatically."*
- **Patients** — quote: *"Your clinic, in the chat you already use."*

### 3.8 Why RemedyEngine Wins + ROI
Top: 5 differentiator cards (green icon, title, body):
**WhatsApp-first, no patient app · Real AI, not just menus · One connected engine ·
Automation that compounds · Built for scale & security.**
Below, a dark **ink-charcoal (`#16231F`) band** titled *Four levers, one connected
system* with 4 numbered items in mono/serif (green numerals):
`01 Capture more patients · 02 Lose fewer slots · 03 Bring patients back ·
04 Do more with less`. Footer line (mono, muted): *Illustrative targets, validated
per customer — not guarantees.*

### 3.9 Closing CTA
A green-tint (`#DCEAE1`) rounded panel, centered: serif **See RemedyEngine run your
clinic in a 20-minute demo**, sub *Watch a WhatsApp message become a booked,
briefed, billed, and followed-up patient — automatically.*, buttons **Book a demo**
(primary) · **Talk to sales** (secondary).

### 3.10 Footer
White surface, 1px top hairline. Left: RE logo + tagline *The engine that runs your
clinic…*. Columns: **Product** (AI Assistant, Workflow, Pharmacy & Lab, Analytics,
Marketing) · **Solutions** (Clinics, Multi-branch chains, Doctors, Pharmacy, Labs) ·
**Company** (About, Security, Careers, Contact). Bottom row (mono): copyright +
*"Outcome figures referenced on this site are illustrative targets, not
guarantees, and are validated per customer."*

---

## 4. Generation guardrails (repeat to Stitch if it drifts)

- Stay strictly within the palette above; reject teal/blue medical-stock and neon
  dark "AI-product" looks.
- Never render the WhatsApp logo or any real app trademark — use a generic
  messaging-chat style.
- No dramatized illness/distress imagery; calm and procedural only.
- Clinical data (IDs, dates, dosages, timestamps) always in mono, never in the
  serif or italics.
- One signature "Thread" element per page; keep every other component quiet.
