"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, FileText, FlaskConical, MessageCircle, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  time: string;
  bubbles: { from: "patient" | "ai"; text: string }[];
  card: {
    icon: React.ReactNode;
    meta: string;
    title: string;
    detail: string;
    tag: { label: string; tone: "confirmed" | "pending" };
  };
};

const STEPS: Step[] = [
  {
    time: "09:14 AM",
    bubbles: [
      { from: "patient", text: "Hi, I've had fever and body ache since yesterday" },
      {
        from: "ai",
        text: "Sorry to hear that. I can get you seen today: Dr. Rao (General Medicine) has a 4:30 PM slot. Book it?",
      },
    ],
    card: {
      icon: <CheckCircle2 size={16} />,
      meta: "APPT-2291 · Today, 4:30 PM",
      title: "Appointment confirmed",
      detail: "Dr. Rao · General Medicine",
      tag: { label: "Confirmed", tone: "confirmed" },
    },
  },
  {
    time: "09:16 AM",
    bubbles: [
      { from: "ai", text: "A couple of quick questions before your visit: any known allergies or ongoing medication?" },
      { from: "patient", text: "No allergies, no other medication" },
    ],
    card: {
      icon: <Stethoscope size={16} />,
      meta: "BRIEF-2291 · Generated 09:17 AM",
      title: "AI doctor brief ready",
      detail: "Fever + myalgia, 2 days · No allergies",
      tag: { label: "Ready for doctor", tone: "confirmed" },
    },
  },
  {
    time: "4:52 PM",
    bubbles: [
      { from: "ai", text: "Your prescription from today's visit is ready. Tap to view." },
    ],
    card: {
      icon: <FileText size={16} />,
      meta: "RX-2291 · Dr. Rao",
      title: "Digital prescription issued",
      detail: "Paracetamol 650mg · 3×/day · 3 days",
      tag: { label: "Sent to pharmacy", tone: "confirmed" },
    },
  },
  {
    time: "6:30 PM",
    bubbles: [
      { from: "ai", text: "Your CBC report is ready. Delivering it here now." },
    ],
    card: {
      icon: <FlaskConical size={16} />,
      meta: "LAB-2291 · CBC",
      title: "Lab report delivered",
      detail: "Report sent on WhatsApp · No clinic visit needed",
      tag: { label: "Delivered", tone: "pending" },
    },
  },
];

// Flatten the script into a linear sequence of "beats" — a typing pause
// ahead of every AI line, then the line itself, then the resulting record
// card — so the whole thread can play back message-by-message instead of
// fading in as a static block per step.
type Beat =
  | { type: "typing"; step: number; bubble: number }
  | { type: "bubble"; step: number; bubble: number; from: "patient" | "ai" }
  | { type: "card"; step: number };

const BEATS: Beat[] = STEPS.flatMap((step, stepIndex) =>
  [
    ...step.bubbles.flatMap((b, bubbleIndex): Beat[] =>
      b.from === "ai"
        ? [
            { type: "typing", step: stepIndex, bubble: bubbleIndex },
            { type: "bubble", step: stepIndex, bubble: bubbleIndex, from: "ai" },
          ]
        : [{ type: "bubble", step: stepIndex, bubble: bubbleIndex, from: "patient" }]
    ),
    { type: "card", step: stepIndex },
  ]
);

// How long to hold on this beat before advancing to the next one — kept
// snappy (nothing over ~320ms) so the whole thread reads as a live,
// fast-moving conversation rather than a slow slideshow.
function holdMs(beat: Beat): number {
  if (beat.type === "typing") return 320;
  if (beat.type === "card") return 300;
  return beat.from === "patient" ? 100 : 160;
}

function findBeatIndex(step: number, type: Beat["type"], bubble?: number) {
  return BEATS.findIndex(
    (b) => b.step === step && b.type === type && (bubble === undefined || (b as { bubble?: number }).bubble === bubble)
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 rounded-[20px] rounded-tl-[4px] bg-remedy-100 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-remedy-600/60 motion-safe:animate-[reTypingDot_1s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

export function Thread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shownCount, setShownCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setShownCount(BEATS.length));
      return () => cancelAnimationFrame(frame);
    }

    let cancelled = false;
    let timeoutId: number | undefined;

    const advance = (i: number) => {
      if (cancelled) return;
      setShownCount(i + 1);
      if (i + 1 >= BEATS.length) return;
      timeoutId = window.setTimeout(() => advance(i + 1), holdMs(BEATS[i]));
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => advance(0), 180);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Chat-header frame — establishes "this is a live conversation" at a
          glance without borrowing any real messaging app's mark. */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-line-200 bg-paper-0 px-4 py-3 shadow-[0_4px_16px_rgba(22,35,31,0.06)]">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-remedy-600 text-white">
          <MessageCircle size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink-900">RemedyEngine AI Front Desk</p>
          <p className="flex items-center gap-1.5 text-xs text-ink-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
            </span>
            Active now
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-10">
        {STEPS.map((step, stepIndex) => {
          const stepActive = BEATS.some(
            (b, i) => b.step === stepIndex && i < shownCount
          );
          const cardShown = findBeatIndex(stepIndex, "card") < shownCount;

          return (
            <div
              key={stepIndex}
              className={cn(
                "relative grid grid-cols-1 items-start gap-4 transition-opacity duration-300 md:grid-cols-[1fr_auto_1fr] md:gap-6",
                stepActive ? "opacity-100" : "opacity-0"
              )}
            >
              {/* Chat bubbles */}
              <div className="flex flex-col gap-2">
                {step.bubbles.map((b, bubbleIndex) => {
                  const bubbleShown =
                    findBeatIndex(stepIndex, "bubble", bubbleIndex) < shownCount;
                  const typingIdx = findBeatIndex(stepIndex, "typing", bubbleIndex);
                  const typingShown = typingIdx >= 0 && typingIdx < shownCount && !bubbleShown;

                  if (!bubbleShown && !typingShown) return null;

                  if (typingShown) {
                    return (
                      <div key={bubbleIndex} className="motion-safe:animate-[reEnterUp_0.3s_ease-out_backwards]">
                        <TypingDots />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={bubbleIndex}
                      className={cn(
                        "motion-safe:animate-[reEnterUp_0.3s_ease-out_backwards]",
                        b.from === "ai"
                          ? "max-w-sm rounded-[20px] rounded-tl-[4px] bg-remedy-100 px-4 py-4 text-sm text-ink-900"
                          : "ml-auto max-w-sm rounded-[20px] rounded-tr-[4px] border border-line-200 bg-paper-0 px-4 py-3 text-sm text-ink-900"
                      )}
                    >
                      {b.text}
                    </div>
                  );
                })}
              </div>

              {/* Connector */}
              <div className="hidden flex-col items-center md:flex">
                <span className="relative flex items-center gap-1.5 font-data text-[11px] text-ink-700">
                  {stepActive && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                    </span>
                  )}
                  {step.time}
                </span>
                <span className="mt-2 h-full w-px flex-1 border-l border-dashed border-line-200" />
              </div>

              {/* Clinical card */}
              {cardShown ? (
                <div className="rounded-xl border border-line-200 bg-paper-0 p-4 shadow-[0_4px_16px_rgba(22,35,31,0.08)] motion-safe:animate-[reEnterUpScale_0.4s_cubic-bezier(0.22,1,0.36,1)_backwards]">
                  <div className="flex items-center justify-between">
                    <span className="font-data text-[11px] uppercase text-ink-700">
                      {step.card.meta}
                    </span>
                    <span
                      className={
                        step.card.tag.tone === "confirmed"
                          ? "rounded-lg bg-remedy-100 px-2 py-1 font-data text-[11px] uppercase text-remedy-600"
                          : "rounded-lg bg-signal-100 px-2 py-1 font-data text-[11px] uppercase text-signal-500"
                      }
                    >
                      {step.card.tag.label}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-remedy-600 text-white">
                      {step.card.icon}
                    </span>
                    <div>
                      <p className="font-sans text-base font-semibold text-ink-900">
                        {step.card.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-700">{step.card.detail}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
