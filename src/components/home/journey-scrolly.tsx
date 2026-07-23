"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { getEngine } from "@/lib/engines";
import { EngineIcon } from "@/components/engine-icon";
import { cn } from "@/lib/utils";

const JOURNEY: { engine: string; stage: string; detail: string }[] = [
  { engine: "booking", stage: "A patient reaches out", detail: "A message, call, or walk-in becomes a structured booking with the right doctor and time." },
  { engine: "conversation", stage: "Confirmation & instructions", detail: "The patient gets a same-channel confirmation, reminders, and any visit instructions." },
  { engine: "ai-patient-history", stage: "History organised", detail: "The available medical history is organised into one structured brief for the doctor." },
  { engine: "consultation", stage: "The consultation", detail: "Notes, diagnosis, and treatment plan are captured in one flow." },
  { engine: "prescriptions", stage: "Prescription issued", detail: "A digital, branded prescription is created, delivered, and linked to the pharmacy." },
  { engine: "laboratory", stage: "Lab, if needed", detail: "Test orders, status, and results flow back into the record without lost paperwork." },
  { engine: "pharmacy", stage: "Pharmacy dispensing", detail: "Medicines are dispensed straight from the prescription, with inventory kept in sync." },
  { engine: "billing", stage: "Billing", detail: "Consultation, pharmacy, and lab charges are captured and tracked in one place." },
  { engine: "follow-up", stage: "Follow-up", detail: "Reviews, medication reminders, and recall keep the patient on track." },
  { engine: "insights", stage: "Management sees it all", detail: "Every step rolls up into the clinic command centre in real time." },
];

export function JourneyScrolly() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        }
      },
      // Only the step nearest the viewport middle counts as active.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeEngine = getEngine(JOURNEY[active].engine);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Sticky visual (lg+) */}
      <div className="hidden lg:block">
        <div className="lg:sticky lg:top-28">
          <div className="clay-dark min-h-[420px] rounded-3xl p-12">
            <span className="font-data text-xs uppercase tracking-wide text-lime-500">
              Step {String(active + 1).padStart(2, "0")} / {JOURNEY.length}
            </span>
            {activeEngine && (
              <div className="mt-8 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-paper-0/10 text-paper-50">
                  <activeEngine.icon size={30} strokeWidth={2} />
                </span>
                <span className="font-data text-xs uppercase tracking-wide text-paper-50/70">
                  {activeEngine.name}
                </span>
              </div>
            )}
            <p className="mt-8 font-serif text-3xl font-semibold leading-snug text-paper-50">
              {JOURNEY[active].stage}
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper-50/80">
              {JOURNEY[active].detail}
            </p>
            {/* progress rail */}
            <div className="mt-10 flex gap-1.5">
              {JOURNEY.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i <= active ? "bg-lime-500" : "bg-paper-0/20"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling steps */}
      <ol className="flex flex-col gap-4">
        {JOURNEY.map((step, i) => {
          const engine = getEngine(step.engine);
          const done = i < active;
          const current = i === active;
          return (
            <li
              key={step.engine}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={cn(
                "rounded-2xl border p-5 transition-all duration-300",
                current
                  ? "border-remedy-500 bg-paper-0 shadow-[0_4px_16px_rgba(11,31,51,0.08)]"
                  : "border-line-200 bg-paper-0"
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-data text-xs transition-colors",
                    current
                      ? "bg-remedy-600 text-white"
                      : done
                        ? "bg-remedy-100 text-remedy-600"
                        : "bg-paper-50 text-ink-700"
                  )}
                >
                  {done ? <Check size={15} /> : String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    {engine && (
                      <EngineIcon icon={engine.icon} treatment="primary" size="sm" />
                    )}
                    <p className="font-sans text-base font-semibold text-ink-900">
                      {step.stage}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {step.detail}
                  </p>
                  {engine && (
                    <Link
                      href={`/engines#${engine.slug}`}
                      className="mt-2 inline-block font-data text-[11px] uppercase tracking-wide text-remedy-600 hover:underline"
                    >
                      Powered by {engine.name}
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
