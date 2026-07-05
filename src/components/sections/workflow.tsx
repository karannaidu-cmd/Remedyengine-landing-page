import {
  CalendarClock,
  FileSignature,
  Pill,
  FlaskConical,
  Users,
  CreditCard,
  BarChart3,
  Building2,
} from "lucide-react";

const MODULES = [
  {
    icon: CalendarClock,
    title: "Booking & Scheduling",
    desc: "Smart slot management with conflict-free, real-time availability; walk-ins, rescheduling, and video consultations built in.",
    benefit: "No double-bookings, full calendar visibility, tele-consults without a separate tool.",
  },
  {
    icon: FileSignature,
    title: "Digital Prescriptions",
    desc: "Doctors issue branded, e-signed prescriptions delivered to the patient on WhatsApp — automatically creating a pharmacy dispensing request and lab test orders.",
    benefit: "No illegible paper, no lost scripts, clean handoff to pharmacy and lab.",
  },
  {
    icon: Pill,
    title: "Pharmacy Management",
    desc: "Medicine catalog, batch & expiry tracking, low-stock alerts, and a dispensing inbox that receives requests straight from prescriptions.",
    benefit: "No stockouts, no expired-stock losses, a paper-free dispense flow.",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    desc: "Lab test catalog and end-to-end booking lifecycle — ordered, sample collected, in progress, report ready, delivered on WhatsApp.",
    benefit: "Patients stop asking “where's my report?”; the lab runs an organized worklist.",
  },
  {
    icon: Users,
    title: "Patient CRM",
    desc: "Unified patient profiles, full interaction timeline, lead scoring, and segmentation.",
    benefit: "Every patient's history in one place; follow-ups target the right people.",
  },
  {
    icon: CreditCard,
    title: "Payments & Revenue Tracking",
    desc: "Track consultation fees and additional charges; see collected vs. outstanding at a glance.",
    benefit: "No revenue leakage; the front desk always knows who still owes what.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Revenue analytics, appointment and patient flow, payment-collection tracking, plus dedicated lab and pharmacy reports.",
    benefit: "Owners get the numbers to make decisions, without spreadsheets.",
  },
  {
    icon: Building2,
    title: "Multi-Clinic & Roles",
    desc: "Run multiple branches under one account, with role-based access for Admin, Doctor, Receptionist, Pharmacist, and Lab Technician.",
    benefit: "Scale from one clinic to a chain, with the right controls for every team member.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            Connected workflow
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            One engine, not five tools stitched together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Booking, clinical, pharmacy, lab, CRM, payments, and analytics —
            all in one system, with paper forms and manual processes digitized
            end to end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line-200 bg-line-200 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div key={m.title} className="flex flex-col bg-paper-0 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600">
                <m.icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {m.desc}
              </p>
              <p className="mt-3 text-sm font-medium text-remedy-600">
                {m.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
