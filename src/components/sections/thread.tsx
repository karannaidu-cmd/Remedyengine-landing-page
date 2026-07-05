import { CheckCircle2, FileText, FlaskConical, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/reveal";

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
        text: "Sorry to hear that. I can get you seen today — Dr. Rao (General Medicine) has a 4:30 PM slot. Book it?",
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
      { from: "ai", text: "A couple of quick questions before your visit — any known allergies or ongoing medication?" },
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
      { from: "ai", text: "Your prescription from today's visit is ready — tap to view." },
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

export function Thread() {
  return (
    <div className="relative">
      <div className="relative flex flex-col gap-10">
        {STEPS.map((step, i) => (
          <Reveal
            key={i}
            delay={i * 100}
            className="relative grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6"
          >
            {/* Chat bubbles */}
            <div className="flex flex-col gap-2">
              {step.bubbles.map((b, j) => (
                <div
                  key={j}
                  className={
                    b.from === "ai"
                      ? "max-w-sm rounded-[20px] rounded-tl-[4px] bg-remedy-100 px-4 py-3 text-sm text-ink-900"
                      : "ml-auto max-w-sm rounded-[20px] rounded-tr-[4px] border border-line-200 bg-paper-0 px-4 py-3 text-sm text-ink-900"
                  }
                >
                  {b.text}
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="hidden flex-col items-center md:flex">
              <span className="font-data text-[11px] text-ink-700">
                {step.time}
              </span>
              <span className="mt-2 h-full w-px flex-1 border-l border-dashed border-line-200" />
            </div>

            {/* Clinical card */}
            <div className="rounded-xl border border-line-200 bg-paper-0 p-4 shadow-[0_4px_16px_rgba(22,35,31,0.08)]">
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
          </Reveal>
        ))}
      </div>
    </div>
  );
}
