"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Stethoscope,
  Headset,
  Pill,
  FlaskConical,
  MessageCircle,
  Check,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

type Stakeholder = {
  key: string;
  label: string;
  tag: string;
  icon: LucideIcon;
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
  quote: string;
};

const STAKEHOLDERS: Stakeholder[] = [
  {
    key: "owners",
    label: "Owners",
    tag: "Revenue & oversight",
    icon: BarChart3,
    title: "Clinic Owners / Administrators",
    image: "/images/dashboard-mockup.webp",
    imageAlt: "The RemedyEngine dashboard: appointment calendar and revenue analytics",
    points: [
      "More patients captured with a 24/7 AI front desk, fewer no-shows, automatic win-back of lapsed patients.",
      "Lower front-desk cost; one dashboard for revenue, collections, and utilization.",
      "Scale across branches with role-based control and security.",
    ],
    quote: "Grow revenue and cut admin overhead — without hiring more front-desk staff.",
  },
  {
    key: "doctors",
    label: "Doctors",
    tag: "Clinical time back",
    icon: Stethoscope,
    title: "Doctors",
    image: "/images/scene-doctor-brief.webp",
    imageAlt: "A doctor reviewing an AI pre-consult brief on a tablet",
    points: [
      "AI briefs before every consult, drawn from a structured intake conversation.",
      "E-prescriptions with one-click pharmacy and lab handoff.",
      "Video consults built into the same platform.",
    ],
    quote: "Walk into every appointment fully briefed — and finish your notes in seconds.",
  },
  {
    key: "reception",
    label: "Front desk",
    tag: "Less repetition",
    icon: Headset,
    title: "Receptionists / Front Desk",
    image: "/images/scene-frontdesk.webp",
    imageAlt: "A receptionist working calmly at a clinic front desk",
    points: [
      "The AI handles enquiries, booking, confirmations, and reminders automatically.",
      "Staff handle exceptions, not repetition.",
      "Walk-ins and phone bookings still fit into the same dashboard.",
    ],
    quote: "Let automation answer the phone that never stops ringing.",
  },
  {
    key: "pharmacy",
    label: "Pharmacy",
    tag: "Stock & dispensing",
    icon: Pill,
    title: "Pharmacy",
    image: "/images/scene-pharmacy.webp",
    imageAlt: "A pharmacist checking organized stock at a dispensing counter",
    points: [
      "Dispensing requests arrive straight from prescriptions.",
      "Live stock, batch, and expiry tracking with alerts.",
      "No stockouts, no expiry losses.",
    ],
    quote: "From prescription to dispense — paperless, with zero stockouts or expiry losses.",
  },
  {
    key: "labs",
    label: "Labs",
    tag: "Organized worklist",
    icon: FlaskConical,
    title: "Labs / Diagnostics",
    image: "/images/scene-lab.webp",
    imageAlt: "A lab technician working through an organized diagnostics worklist",
    points: [
      "An organized test worklist through every stage of the lifecycle.",
      "Automatic WhatsApp report delivery to patients.",
      "No more chasing samples or manual result handoffs.",
    ],
    quote: "Run an organized lab and deliver every report automatically.",
  },
  {
    key: "patients",
    label: "Patients",
    tag: "Effortless experience",
    icon: MessageCircle,
    title: "Patients",
    image: "/images/scene-patient-chat.webp",
    imageAlt: "A patient reading a clinic reminder on their phone",
    points: [
      "Book, get reminders, receive prescriptions and lab reports — all on WhatsApp.",
      "No app to install, nothing to remember.",
      "Instant answers, any time of day.",
    ],
    quote: "Your clinic, in the chat you already use.",
  },
];

const DURATION = 6000;

export function Stakeholders() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STAKEHOLDERS.length),
      DURATION
    );
    return () => clearTimeout(t);
  }, [active, paused, reduced]);

  const s = STAKEHOLDERS[active];
  const ActiveIcon = s.icon;

  return (
    <section id="stakeholders" className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Value by stakeholder"
          title="Everyone in the clinic gets something back"
          sub="Pick a role to see exactly what changes for them — or let it play."
        />

        <Reveal className="mt-14">
          <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
          {/* Role rail */}
          <div
            role="tablist"
            aria-label="Clinic roles"
            aria-orientation="vertical"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-col"
          >
            {STAKEHOLDERS.map((item, i) => {
              const isActive = i === active;
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex items-center gap-3 overflow-hidden rounded-xl border p-3 text-left transition-colors",
                    isActive
                      ? "border-remedy-600 bg-paper-0 shadow-[0_4px_16px_rgba(22,35,31,0.08)]"
                      : "border-line-200 bg-paper-0/50 hover:bg-paper-0"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isActive
                        ? "bg-remedy-600 text-white"
                        : "bg-remedy-100 text-remedy-600"
                    )}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink-900">
                      {item.label}
                    </span>
                    <span className="hidden truncate font-data text-[10px] uppercase tracking-wide text-ink-700 sm:block">
                      {item.tag}
                    </span>
                  </span>

                  {isActive && !reduced && (
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-line-200">
                      <span
                        key={active}
                        className="block h-full bg-remedy-600"
                        style={{
                          animation: `reProgress ${DURATION}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div
            role="tabpanel"
            className="overflow-hidden rounded-2xl border border-line-200 bg-paper-0 shadow-[0_4px_16px_rgba(22,35,31,0.08)]"
          >
            <div
              key={active}
              className="grid grid-cols-1 duration-500 animate-in fade-in-0 md:grid-cols-2"
            >
              <div className="order-2 p-8 md:order-1 md:p-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600">
                    <ActiveIcon size={16} />
                  </span>
                  <span className="font-data text-[11px] uppercase tracking-wide text-remedy-600">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink-900">
                  {s.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-remedy-600"
                      />
                      <span className="text-sm leading-relaxed text-ink-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-l-2 border-remedy-600 pl-4 font-serif text-lg italic text-ink-900">
                  “{s.quote}”
                </p>
              </div>

              <div className="relative order-1 min-h-[220px] border-b border-line-200 md:order-2 md:min-h-0 md:border-b-0 md:border-l">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
