import {
  CalendarClock,
  FileSignature,
  Pill,
  FlaskConical,
  Users,
  CreditCard,
  BarChart3,
  Building2,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const MODULES = [
  {
    icon: CalendarClock,
    title: "Booking & Scheduling",
    desc: "Conflict-free, real-time slots with walk-ins, rescheduling, and video consultations built in.",
    benefit: "No double-bookings, full calendar visibility.",
  },
  {
    icon: FileSignature,
    title: "Digital Prescriptions",
    desc: "Branded, e-signed prescriptions delivered on WhatsApp — auto-creating pharmacy and lab orders.",
    benefit: "No illegible paper, no lost scripts.",
  },
  {
    icon: Pill,
    title: "Pharmacy Management",
    desc: "Medicine catalog, batch and expiry tracking, low-stock alerts, and a dispensing inbox fed by prescriptions.",
    benefit: "No stockouts, no expiry losses.",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    desc: "A full test lifecycle — ordered, collected, in progress, ready — with reports delivered on WhatsApp.",
    benefit: "No more “where's my report?”.",
  },
  {
    icon: Users,
    title: "Patient CRM",
    desc: "Unified profiles, a full interaction timeline, lead scoring, and segmentation.",
    benefit: "Every patient's history in one place.",
  },
  {
    icon: CreditCard,
    title: "Payments & Revenue",
    desc: "Consultation fees and extra charges tracked; collected vs. outstanding at a glance.",
    benefit: "No revenue leakage.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Revenue, appointment flow, collections, plus dedicated lab and pharmacy reports.",
    benefit: "Decisions from numbers, not memory.",
  },
  {
    icon: Building2,
    title: "Multi-Clinic & Roles",
    desc: "Multiple branches under one account, with role-based access for every team member.",
    benefit: "One clinic or a chain — same engine.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Connected workflow"
          title="One engine, not five tools stitched together"
          sub="Booking, clinical, pharmacy, lab, CRM, payments, and analytics in one system — paper forms and manual processes digitized end to end."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <Reveal
              key={m.title}
              delay={(i % 4) * 70}
              className="flex h-full flex-col rounded-xl border border-line-200 bg-paper-50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600">
                <m.icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {m.title}
              </h3>
              <p className="mt-2 pb-4 text-sm leading-relaxed text-ink-700">
                {m.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 border-t border-line-200 pt-4">
                <Check size={15} className="shrink-0 text-remedy-600" />
                <span className="text-sm font-medium text-ink-900">
                  {m.benefit}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
