import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  MessagesSquare,
  PhoneCall,
  ClipboardPlus,
  FolderHeart,
  Stethoscope,
  FileText,
  FlaskConical,
  Pill,
  ReceiptText,
  Users,
  Video,
  BellRing,
  BarChart3,
  ShieldCheck,
  Search,
} from "lucide-react";

// See docs/remedyengine-redesign/ENGINE_CATALOG.md — this array is the source of
// truth for /engines, /engines/[slug], the homepage constellation, and internal
// linking. Add engine #17 later = one entry + one image, zero new components.

export type EngineFamily = "access" | "clinical" | "operations" | "growth";
export type Availability = "live" | "planned";

export type Engine = {
  slug: string;
  name: string;
  family: EngineFamily;
  icon: LucideIcon;
  availability: Availability;
  oneLiner: string;
  purpose: string;
  features: string[];
  benefits: string[];
  disclaimer?: string;
  related: string[];
  image?: string;
  illustrative?: boolean;
  /** Optional numbered hand-off sequence (Laboratory, Pharmacy) — rendered as
   * a connected-workflow chain in the Operations family section of /engines. */
  workflow?: string[];
};

export const engineFamilies: Record<
  EngineFamily,
  { key: EngineFamily; label: string; tagline: string }
> = {
  access: {
    key: "access",
    label: "Access & Communication",
    tagline: "Get patients in. Keep the conversation moving.",
  },
  clinical: {
    key: "clinical",
    label: "Clinical Intelligence",
    tagline: "Give doctors organised context.",
  },
  operations: {
    key: "operations",
    label: "Clinic Operations",
    tagline: "Run the departments without lost paperwork.",
  },
  growth: {
    key: "growth",
    label: "Growth, Control & Intelligence",
    tagline: "See everything. Retain patients. Control access.",
  },
};

const AI_BRIEF_DISCLAIMER =
  "AI-generated summaries organise available patient information to support healthcare professionals. They do not replace independent clinical assessment, diagnosis or professional medical judgment.";

export const engines: Engine[] = [
  // A · Access & Communication
  {
    slug: "booking",
    name: "Booking Engine",
    family: "access",
    icon: CalendarCheck,
    availability: "live",
    oneLiner: "Every patient channel, connected to one booking engine.",
    purpose:
      "Turns any incoming request — from any channel — into a structured, de-duplicated appointment with the right doctor, type, and time.",
    features: [
      "WhatsApp appointment booking",
      "Instagram enquiry capture",
      "Facebook enquiry capture",
      "Website booking",
      "Walk-in booking",
      "Staff-assisted booking",
      "AI-call booking",
      "Multi-doctor availability",
      "Live appointment availability",
      "Appointment types",
      "Consultation types",
      "Rescheduling",
      "Cancellations",
      "Confirmations",
      "Reminders",
      "Appointment statuses",
      "Double-booking prevention",
    ],
    benefits: [
      "Capture every enquiry, wherever it starts",
      "Stop double-bookings before they happen",
      "Give patients same-channel confirmations and reminders",
      "Remove the phone-tag back-and-forth",
    ],
    related: ["conversation", "ai-calling", "queue", "patient-records"],
    image: "/images/omnichannel-converge.webp",
    illustrative: true,
  },
  {
    slug: "conversation",
    name: "Conversation Engine",
    family: "access",
    icon: MessagesSquare,
    availability: "live",
    oneLiner: "Conversations that move patients forward.",
    purpose:
      "Handles the two-way WhatsApp conversation around every visit — answers, confirmations, instructions, and clean handover to staff when a human is needed.",
    features: [
      "Automated WhatsApp responses",
      "Patient questions",
      "Appointment confirmations",
      "Visit instructions",
      "Rescheduling communication",
      "Follow-up communication",
      "Clinic announcements",
      "Message routing",
      "Staff handover",
      "Consistent communication templates",
    ],
    benefits: [
      "Patients get answers without staff repetition",
      "Nothing waits in an unread inbox",
      "Clear escalation to a human when it matters",
    ],
    related: ["booking", "ai-calling", "follow-up", "patient-records"],
    image: "/images/mobile-booking-chat.webp",
    illustrative: true,
  },
  {
    slug: "ai-calling",
    name: "AI Calling Engine",
    family: "access",
    icon: PhoneCall,
    availability: "live",
    oneLiner: "Appointment calls that don't need your front desk.",
    purpose:
      "AI-assisted voice calls that confirm, remind, follow up, recover missed calls, and route genuine intent to clinic staff.",
    features: [
      "AI-assisted appointment calls",
      "Appointment confirmations",
      "Reminder calls",
      "Follow-up calls",
      "Missed-call recovery",
      "Routing patients to clinic staff",
      "Capturing booking intent",
      "Patient recall calls",
      "Repeat-test reminder calls",
    ],
    benefits: [
      "Recover calls the front desk can't answer",
      "Confirm and remind at scale",
      "Hand real conversations to staff with context",
    ],
    related: ["booking", "conversation", "follow-up"],
    image: "/images/engine-ai-calling.webp",
    illustrative: true,
  },

  // B · Clinical Intelligence
  {
    slug: "ai-patient-history",
    name: "AI Patient History Brief Engine",
    family: "clinical",
    icon: ClipboardPlus,
    availability: "live",
    oneLiner: "Understand the patient's history before and during the consultation.",
    purpose:
      "Analyses the patient's available medical history and organises the relevant parts into a structured summary the doctor can read at a glance — before and during the visit.",
    features: [
      "Patient demographics",
      "Blood group",
      "Previous consultations",
      "Existing conditions",
      "Known allergies",
      "Current medications",
      "Previous medications",
      "Previous diagnoses",
      "Previous prescriptions",
      "Lab-test history",
      "Lab trends",
      "Vital-sign trends",
      "Uploaded reports",
      "Reason for the current visit",
      "Important patient information",
      "Relevant clinical observations",
      "Items needing the doctor's attention",
    ],
    benefits: [
      "Doctors walk in already oriented",
      "Nothing important buried in old files",
      "Less time reconstructing history, more time on care",
    ],
    disclaimer: AI_BRIEF_DISCLAIMER,
    related: ["patient-records", "consultation", "laboratory"],
    image: "/images/doctor-history-brief.webp",
    illustrative: true,
  },
  {
    slug: "patient-records",
    name: "Patient Record Engine",
    family: "clinical",
    icon: FolderHeart,
    availability: "live",
    oneLiner: "One patient. One connected record.",
    purpose:
      "A unified, ID-keyed profile that ties together every visit, diagnosis, prescription, report, and follow-up into a single timeline.",
    features: [
      "Unified patient profile",
      "Unique patient ID",
      "Patient demographics",
      "Contact information",
      "Visit history",
      "Diagnosis history",
      "Prescription history",
      "Lab reports",
      "Uploaded documents",
      "Referral source",
      "Lead tracking",
      "Follow-up history",
      "Patient timeline",
    ],
    benefits: [
      "No re-registering the same patient",
      "Full context in one place",
      "Cross-department continuity",
    ],
    related: ["ai-patient-history", "consultation", "prescriptions", "billing"],
  },
  {
    slug: "consultation",
    name: "Consultation Engine",
    family: "clinical",
    icon: Stethoscope,
    availability: "live",
    oneLiner: "The consultation, structured end to end.",
    purpose:
      "The doctor's in-visit workflow — notes, diagnosis, treatment plan, tests, prescription, and follow-up in one flow.",
    features: [
      "Doctor consultation workflow",
      "Clinical notes",
      "Symptoms",
      "Diagnosis",
      "Treatment plan",
      "Test recommendations",
      "Prescription creation",
      "Follow-up instructions",
      "Review-date scheduling",
      "Video consultations where supported",
    ],
    benefits: [
      "One flow from symptom to plan",
      "Everything captured in the record automatically",
      "Orders fire to lab and pharmacy without paper",
    ],
    related: ["ai-patient-history", "prescriptions", "laboratory", "video-consultation"],
  },
  {
    slug: "prescriptions",
    name: "Prescription Engine",
    family: "clinical",
    icon: FileText,
    availability: "live",
    oneLiner: "Prescriptions that reach the patient and the pharmacy.",
    purpose:
      "Digital, branded prescriptions linked to diagnosis, pharmacy dispensing, and follow-up scheduling.",
    features: [
      "Digital prescriptions",
      "Medicine selection",
      "Dosage",
      "Frequency",
      "Duration",
      "Instructions",
      "Diagnosis",
      "Clinical notes",
      "Branded PDF",
      "Prescription history",
      "Pharmacy connection",
      "Follow-up scheduling",
    ],
    benefits: [
      "No illegible paper",
      "Instant delivery on WhatsApp",
      "A straight line to the pharmacy",
    ],
    related: ["consultation", "pharmacy", "follow-up", "patient-records"],
  },

  // C · Clinic Operations
  {
    slug: "laboratory",
    name: "Laboratory Engine",
    family: "operations",
    icon: FlaskConical,
    availability: "live",
    oneLiner: "From test order to report, without lost paperwork.",
    purpose:
      "Digital lab workflow from order to result — status tracking, uploads, doctor review, and lab billing.",
    features: [
      "Digital test orders",
      "Test-status tracking",
      "Sample-status visibility",
      "Pending-report alerts",
      "Result entry",
      "Report uploads",
      "Doctor review",
      "Patient lab history",
      "Lab billing",
    ],
    benefits: [
      "No paperwork lost between order and result",
      "Pending reports never fall through",
      "Results land in the record and on WhatsApp",
    ],
    workflow: [
      "Doctor recommends a test",
      "Digital laboratory order is created",
      "Laboratory team receives the order",
      "Test status is updated",
      "Results and reports are uploaded",
      "Reports become part of the patient record",
      "The doctor reviews the results",
      "Laboratory charges connect to billing",
    ],
    related: ["consultation", "patient-records", "billing", "follow-up"],
    image: "/images/engine-laboratory.webp",
    illustrative: false,
  },
  {
    slug: "pharmacy",
    name: "Pharmacy Engine",
    family: "operations",
    icon: Pill,
    availability: "live",
    oneLiner: "Every prescription connected to pharmacy operations.",
    purpose:
      "Prescription-linked dispensing with live inventory, stock movement, and pharmacy billing.",
    features: [
      "Prescription-linked dispensing",
      "Medicine inventory",
      "Stock movement",
      "Low-stock alerts",
      "Dispensing history",
      "Patient purchase history",
      "Pharmacy billing",
      "Reordering visibility",
    ],
    benefits: [
      "Dispense straight from the prescription",
      "Know what's low before it runs out",
      "Every sale captured and billed",
    ],
    workflow: [
      "Doctor creates a prescription",
      "Pharmacy team receives the prescription",
      "Medicines are dispensed",
      "Inventory is updated",
      "Low-stock medicines are highlighted",
      "Pharmacy charges connect to billing",
      "Dispensing history is stored with the visit",
    ],
    related: ["prescriptions", "billing", "patient-records", "insights"],
    image: "/images/engine-pharmacy.webp",
    illustrative: false,
  },
  {
    slug: "billing",
    name: "Billing & Revenue Engine",
    family: "operations",
    icon: ReceiptText,
    availability: "live",
    oneLiner: "Capture every charge. Track every payment.",
    purpose:
      "Unifies consultation, pharmacy, and lab charges with payment tracking, outstanding balances, and revenue visibility.",
    features: [
      "Consultation billing",
      "Pharmacy billing",
      "Lab billing",
      "Combined visit billing",
      "Payment tracking",
      "Outstanding balances",
      "Payment methods",
      "Collection visibility",
      "Revenue summaries",
      "Pending-payment alerts",
    ],
    benefits: [
      "No charge slips through",
      "See exactly what's outstanding",
      "One revenue view across departments",
    ],
    related: ["pharmacy", "laboratory", "consultation", "insights"],
  },
  {
    slug: "queue",
    name: "Queue Engine",
    family: "operations",
    icon: Users,
    availability: "live",
    oneLiner: "A calm waiting room, in real time.",
    purpose:
      "Live arrival, waiting, and room-assignment tracking for walk-ins and scheduled patients.",
    features: [
      "Patient arrival tracking",
      "Walk-in queue",
      "Scheduled-patient queue",
      "Waiting status",
      "Doctor-room assignment",
      "Consultation progress",
      "Queue prioritisation",
      "Waiting-room visibility",
    ],
    benefits: [
      "Front desk sees the whole floor",
      "Patients move in order",
      "Doctors always know who's next",
    ],
    related: ["booking", "consultation", "insights"],
  },
  {
    slug: "video-consultation",
    name: "Video Consultation Engine",
    family: "operations",
    icon: Video,
    availability: "live",
    oneLiner: "Care that reaches beyond the clinic.",
    purpose:
      "Remote and follow-up appointments over a consultation link, tied into the same record.",
    features: [
      "Remote appointments",
      "Follow-up consultations",
      "Virtual care",
      "Consultation links",
      "Remote patient access",
      "Connected digital records",
      "Digital prescription support",
      "Remote follow-up scheduling",
    ],
    benefits: [
      "See patients who can't travel",
      "Faster follow-ups",
      "The same record, remote or in person",
    ],
    related: ["consultation", "follow-up", "booking"],
  },

  // D · Growth, Control & Intelligence
  {
    slug: "follow-up",
    name: "Follow-Up & Retention Engine",
    family: "growth",
    icon: BellRing,
    availability: "live",
    oneLiner: "The visits that would otherwise be forgotten.",
    purpose:
      "Recall and reminders for reviews, medications, repeat tests, and missed appointments — over WhatsApp and AI calls.",
    features: [
      "Review-visit scheduling",
      "Medication follow-ups",
      "Repeat-test reminders",
      "Treatment-progress reminders",
      "Patient recall",
      "WhatsApp follow-ups",
      "AI-call follow-ups",
      "Missed-appointment recovery",
      "Follow-up status tracking",
    ],
    benefits: [
      "Fewer missed follow-ups",
      "Patients come back on time",
      "Recovered no-shows",
    ],
    related: ["conversation", "ai-calling", "consultation", "insights"],
  },
  {
    slug: "insights",
    name: "Insights Engine",
    family: "growth",
    icon: BarChart3,
    availability: "live",
    oneLiner: "See what's happening across your clinic — right now.",
    purpose:
      "The clinic command centre — today's operations, revenue, workload, alerts, and multi-location visibility.",
    features: [
      "Today's appointments",
      "Completed consultations",
      "Patients waiting",
      "Doctor availability",
      "Revenue collected",
      "Outstanding payments",
      "New-patient trends",
      "Hot leads",
      "Doctor workload",
      "Hourly patient traffic",
      "Appointment completion",
      "Pharmacy stock alerts",
      "Pending lab reports",
      "Follow-up status",
      "Multi-location visibility",
      "Operational alerts",
    ],
    benefits: [
      "One glance shows the day",
      "Spot problems before they compound",
      "Compare and standardise across locations",
    ],
    related: ["billing", "queue", "pharmacy", "laboratory", "team-access"],
    image: "/images/insights-multilocation.webp",
    illustrative: true,
  },
  {
    slug: "team-access",
    name: "Team & Access Engine",
    family: "growth",
    icon: ShieldCheck,
    availability: "live",
    oneLiner: "The right access for every role.",
    purpose:
      "Role-based permissions and accountability across admin, doctor, reception, pharmacy, and lab.",
    features: [
      "Clinic owner roles",
      "Clinic administrator roles",
      "Location manager roles",
      "Doctor roles",
      "Receptionist roles",
      "Pharmacy roles",
      "Laboratory roles",
      "Role-based permissions",
      "Accountability",
      "Controlled access",
      "Privacy-conscious workflows",
    ],
    benefits: [
      "People see only what they should",
      "Clear accountability",
      "Safer multi-role operations",
    ],
    related: ["insights", "patient-records"],
    image: "/images/clinic-team.webp",
    illustrative: false,
  },
  {
    slug: "global-search",
    name: "Global Search Engine",
    family: "growth",
    icon: Search,
    availability: "live",
    oneLiner: "Everything in your clinic, one search away.",
    purpose:
      "Fast, unified search across patients, appointments, doctors, prescriptions, lab reports, invoices, and platform pages.",
    features: [
      "Find patients",
      "Find appointments",
      "Find doctors",
      "Find prescriptions",
      "Find lab reports",
      "Find medical records",
      "Find invoices",
      "Find pages and platform modules",
    ],
    benefits: [
      "Stop hunting across screens",
      "Reach any record in seconds",
      "One search bar for the whole OS",
    ],
    related: ["patient-records", "billing", "laboratory", "insights"],
  },
];

export const engineBySlug = new Map(engines.map((e) => [e.slug, e]));

export function getEngine(slug: string): Engine | undefined {
  return engineBySlug.get(slug);
}

export function enginesByFamily(family: EngineFamily): Engine[] {
  return engines.filter((e) => e.family === family);
}
