import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Users,
  HeartPulse,
  BarChart3,
  Building2,
} from "lucide-react";

// See docs/remedyengine-redesign/CONTENT_MATRIX.md (Solutions). One template
// (/solutions/[slug]) renders every entry. Copy is seeded from the existing
// stakeholder value lines.

export type Solution = {
  slug: string;
  name: string; // short label for cards/nav
  icon: LucideIcon;
  headline: string;
  valueLine: string;
  intro: string;
  points: string[];
  // engine slugs most relevant to this buyer (must exist in engines.ts)
  engines: string[];
  image?: string;
  imageAlt?: string;
  illustrative?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: "solo-doctors",
    name: "Solo Doctors",
    icon: Stethoscope,
    headline: "Run a solo practice without a back office.",
    valueLine:
      "Walk into every appointment fully briefed, and finish your notes in seconds.",
    intro:
      "As a solo doctor you are the practice. RemedyEngine handles booking, patient context, and follow-ups so your time goes to patients, not paperwork.",
    points: [
      "AI books, reminds, and answers patients on WhatsApp, with no front desk required",
      "An organised patient-history brief before every consultation",
      "Digital prescriptions delivered instantly, with follow-ups scheduled automatically",
    ],
    engines: [
      "ai-patient-history",
      "consultation",
      "prescriptions",
      "booking",
      "follow-up",
    ],
    image: "/images/mobile-booking-chat.webp",
    imageAlt: "A patient booking an appointment straight from a chat conversation",
    illustrative: true,
  },
  {
    slug: "multi-doctor-clinics",
    name: "Multi-Doctor Clinics",
    icon: Users,
    headline: "Coordinate every doctor on one platform.",
    valueLine: "Multi-doctor availability, shared records, and no double-bookings.",
    intro:
      "With several doctors and a busy front desk, coordination is everything. RemedyEngine keeps availability, records, and the waiting room in sync.",
    points: [
      "Multi-doctor availability and appointment types in one booking engine",
      "A shared patient record every doctor and department can see",
      "A live queue so the front desk always knows who's next",
    ],
    engines: ["booking", "queue", "patient-records", "insights", "team-access"],
    image: "/images/engine-ai-calling.webp",
    imageAlt: "Appointment confirmations and reminders coordinated across every doctor",
    illustrative: true,
  },
  {
    slug: "specialty-clinics",
    name: "Specialty Clinics",
    icon: HeartPulse,
    headline: "Purpose-fit for how your specialty works.",
    valueLine:
      "Structured consultations, lab and pharmacy, tailored to your specialty.",
    intro:
      "Specialty care depends on structured workflows and reliable follow-through. RemedyEngine connects consultation, lab, pharmacy, and recall into one flow.",
    points: [
      "Structured consultation notes and treatment plans",
      "Connected lab orders, results, and pharmacy dispensing",
      "Automated recall for reviews and repeat tests",
    ],
    engines: ["consultation", "laboratory", "pharmacy", "follow-up"],
    image: "/images/engine-laboratory.webp",
    imageAlt: "A specialty clinic laboratory with digital test tracking",
    illustrative: false,
  },
  {
    slug: "clinic-owners",
    name: "Clinic Owners",
    icon: BarChart3,
    headline: "Grow revenue and cut admin overhead.",
    valueLine:
      "Grow revenue and cut admin overhead without hiring more front-desk staff.",
    intro:
      "As an owner you need visibility and control. RemedyEngine shows what's happening across the clinic and keeps revenue and follow-ups from leaking.",
    points: [
      "A live command centre for appointments, revenue, and outstanding balances",
      "Automated follow-ups and recall that bring patients back",
      "Role-based access and accountability across the team",
    ],
    engines: ["insights", "billing", "follow-up", "team-access"],
    image: "/images/insights-multilocation.webp",
    imageAlt: "A clinic owner reviewing an operations dashboard",
    illustrative: true,
  },
  {
    slug: "clinic-chains",
    name: "Growing Clinic Chains",
    icon: Building2,
    headline: "Standardise every location.",
    valueLine:
      "One connected system across every branch, with role-based access and multi-location visibility.",
    intro:
      "Growing chains need consistency. RemedyEngine standardises workflows across locations while giving head office one connected view.",
    points: [
      "Multi-location visibility in one insights view",
      "Standardised workflows and role-based access across branches",
      "Global search across every patient, appointment, and invoice",
    ],
    engines: ["insights", "team-access", "global-search", "booking"],
    image: "/images/clinic-team.webp",
    imageAlt: "A clinic team collaborating across multiple locations",
    illustrative: false,
  },
];

export const solutionBySlug = new Map(solutions.map((s) => [s.slug, s]));

export function getSolution(slug: string): Solution | undefined {
  return solutionBySlug.get(slug);
}
