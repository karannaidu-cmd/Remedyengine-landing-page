import {
  MessageCircleHeart,
  Siren,
  ClipboardList,
  FileSearch,
  Stethoscope,
  NotebookPen,
  CalendarCheck,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const FEATURED = {
  subtitle: "Conversational front desk · 24/7",
  title: "AI WhatsApp Assistant",
  desc: "It reads natural language — including everyday Hinglish — to answer questions, judge urgency, and book the right doctor the moment a patient messages. Not a rigid button-bot: a real conversation that ends in a booked appointment.",
  chips: ["Understands Hinglish", "Answers 24/7", "Books in-chat"],
  chat: [
    { from: "patient", text: "Hi, my daughter has had a fever since last night." },
    {
      from: "ai",
      text: "Sorry to hear that. Is she drinking fluids and alert? I can book Dr. Rao (Pediatrics) today at 4:30 PM.",
    },
    { from: "patient", text: "Yes, drinking well. 4:30 works." },
  ] as const,
};

const FEATURES = [
  {
    icon: Siren,
    title: "AI Triage & Emergency Detection",
    subtitle: "Patient safety",
    desc: "Classifies every message by intent and urgency, then flags and escalates genuine emergencies to staff in real time.",
    benefit: "Urgent cases jump the queue.",
  },
  {
    icon: ClipboardList,
    title: "AI Symptom Intake",
    subtitle: "Before the visit",
    desc: "Runs a guided pre-visit conversation that captures symptoms, duration, and history in the patient's own words.",
    benefit: "Complete intake, every time.",
  },
  {
    icon: FileSearch,
    title: "AI Specialist Matching",
    subtitle: "Right doctor, first time",
    desc: "Maps the described symptoms to the correct specialty and doctor, then books the right slot.",
    benefit: "Fewer mis-bookings.",
  },
  {
    icon: Stethoscope,
    title: "AI Pre-Consult Doctor Briefs",
    subtitle: "Ready on arrival",
    desc: "Generates a concise, doctor-ready brief per appointment — and batches the whole day's briefs each morning.",
    benefit: "Saves doctor time every visit.",
  },
  {
    icon: NotebookPen,
    title: "AI Treatment Plan Assistance",
    subtitle: "Consistent notes",
    desc: "Drafts a structured treatment plan the doctor reviews and finalizes in a few edits.",
    benefit: "Edit, don't start from blank.",
  },
  {
    icon: CalendarCheck,
    title: "Conversational Booking",
    subtitle: "No app, no login",
    desc: "Handles slots, doctors, and fees inside the chat; staff add walk-ins and phone bookings too.",
    benefit: "More patients finish booking.",
  },
];

export function AIFeatures() {
  return (
    <section id="features" className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="AI automation"
          title="Real AI, not just menus"
          sub="The engine understands patients in their own words — then triages, intakes, matches, and books. It does the repetitive work, so your team does the human work."
        />

        {/* Flagship feature — text + a live conversation sample */}
        <Reveal className="mt-14 grid grid-cols-1 gap-8 rounded-2xl border border-line-200 bg-paper-50 p-8 md:grid-cols-2 md:items-center md:p-10">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-remedy-600 text-white">
              <MessageCircleHeart size={22} />
            </span>
            <p className="mt-4 font-data text-[11px] uppercase tracking-wide text-remedy-600">
              {FEATURED.subtitle}
            </p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-ink-900">
              {FEATURED.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-700">
              {FEATURED.desc}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {FEATURED.chips.map((c) => (
                <li
                  key={c}
                  className="rounded-lg bg-remedy-100 px-3 py-1 font-data text-[11px] uppercase tracking-wide text-remedy-600"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line-200 bg-paper-0 p-4 shadow-[0_4px_16px_rgba(22,35,31,0.08)]">
            <div className="space-y-2">
              {FEATURED.chat.map((b, i) =>
                b.from === "ai" ? (
                  <div
                    key={i}
                    className="max-w-[88%] rounded-[18px] rounded-tl-[4px] bg-remedy-100 px-3.5 py-2 text-sm leading-relaxed text-ink-900"
                  >
                    {b.text}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="ml-auto max-w-[88%] rounded-[18px] rounded-tr-[4px] border border-line-200 bg-paper-0 px-3.5 py-2 text-sm leading-relaxed text-ink-900"
                  >
                    {b.text}
                  </div>
                )
              )}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-remedy-100 px-3 py-2">
              <Check size={14} className="shrink-0 text-remedy-600" />
              <span className="font-data text-[11px] uppercase tracking-wide text-remedy-600">
                Confirmed · APPT-2291 · Today 4:30 PM
              </span>
            </div>
          </div>
        </Reveal>

        {/* Six more capabilities */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 80}
              className="flex h-full flex-col rounded-xl border border-line-200 bg-paper-50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600">
                <f.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-0.5 font-data text-[11px] uppercase tracking-wide text-remedy-600">
                {f.subtitle}
              </p>
              <p className="mt-3 pb-4 text-sm leading-relaxed text-ink-700">
                {f.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 border-t border-line-200 pt-4">
                <Check size={15} className="shrink-0 text-remedy-600" />
                <span className="text-sm font-medium text-ink-900">
                  {f.benefit}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
