import {
  MessageCircleHeart,
  Siren,
  ClipboardList,
  Stethoscope,
  FileSearch,
  NotebookPen,
  CalendarCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: MessageCircleHeart,
    title: "AI WhatsApp Assistant",
    subtitle: "Conversational front desk",
    problem:
      "Patients call when the clinic is closed or the line is busy; enquiries are missed and the front desk is swamped.",
    solution:
      "An AI assistant answers every WhatsApp message instantly, 24/7 — understands natural language, including everyday Indian English/Hinglish phrasing, and guides the patient to book.",
    benefit: "Zero missed enquiries, instant responses around the clock.",
  },
  {
    icon: Siren,
    title: "AI Triage & Emergency Detection",
    subtitle: "Patient safety, automated",
    problem:
      "A genuinely urgent message can sit unread in a queue of routine ones.",
    solution:
      "Every incoming message is automatically classified by intent and urgency; emergencies are flagged and escalated to staff in real time.",
    benefit: "Urgent cases jump the queue automatically — staff are alerted, not scanning chats.",
  },
  {
    icon: ClipboardList,
    title: "AI Symptom Intake",
    subtitle: "Structured, before the visit",
    problem:
      "Doctors spend the first minutes of every consult collecting basic history; intake is inconsistent.",
    solution:
      "Before the visit, the AI has a structured conversation with the patient to capture symptoms, duration, and history — in the patient's own words.",
    benefit: "Complete intake every time, ready for the doctor before the patient arrives.",
  },
  {
    icon: FileSearch,
    title: "AI Specialist Matching",
    subtitle: "Right doctor, first time",
    problem:
      "Patients don't know which doctor or department they need, so the front desk guesses or mis-routes.",
    solution:
      "The AI matches the described symptoms to the right specialty and doctor, and books accordingly.",
    benefit: "Fewer mis-bookings, better experience, better doctor utilization.",
  },
  {
    icon: Stethoscope,
    title: "AI Pre-Consult Doctor Briefs",
    subtitle: "Context, ready on arrival",
    problem:
      "Doctors walk into each appointment without context and re-ask the same questions.",
    solution:
      "RemedyEngine auto-generates a concise, doctor-ready brief for each appointment — chief complaint, symptom summary, relevant history — and can batch-generate all of the day's briefs each morning.",
    benefit: "Saves doctor time every visit and improves consult quality.",
  },
  {
    icon: NotebookPen,
    title: "AI Treatment Plan Assistance",
    subtitle: "Faster, consistent notes",
    problem: "Documenting a structured plan takes time and varies by doctor.",
    solution:
      "The platform generates a structured treatment-plan draft the doctor reviews and finalizes.",
    benefit: "The doctor edits instead of starting from a blank page.",
  },
  {
    icon: CalendarCheck,
    title: "Conversational Booking",
    subtitle: "No app, no login",
    problem: "Booking portals require downloads and logins patients won't complete.",
    solution:
      "Patients book entirely inside WhatsApp; slots, doctors, and fees are handled in the chat. Staff can also create walk-in and phone bookings from the dashboard.",
    benefit: "Friction-free booking that more patients actually finish.",
  },
];

export function AIFeatures() {
  return (
    <section id="features" className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            AI automation
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            Real AI, not just menus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Natural-language understanding, triage, intake, specialist
            matching, and doctor briefs — the AI does the repetitive work, so
            your team does the human work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col rounded-xl border border-line-200 bg-paper-50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-remedy-600 text-white">
                <f.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="font-data text-[11px] uppercase text-remedy-600">
                {f.subtitle}
              </p>

              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-data text-[11px] uppercase text-ink-700">
                    Problem
                  </dt>
                  <dd className="mt-1 text-ink-700">{f.problem}</dd>
                </div>
                <div>
                  <dt className="font-data text-[11px] uppercase text-ink-700">
                    Solution
                  </dt>
                  <dd className="mt-1 text-ink-700">{f.solution}</dd>
                </div>
              </dl>

              <p className="mt-4 rounded-lg bg-remedy-100 px-3 py-2 text-sm font-medium text-remedy-600">
                {f.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
