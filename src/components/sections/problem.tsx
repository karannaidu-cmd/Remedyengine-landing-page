import { PhoneMissed, CalendarX, Users, UserX, Boxes, TrendingDown } from "lucide-react";

const PROBLEMS = [
  {
    icon: PhoneMissed,
    title: "Patients call (or don't)",
    desc: "Phone lines are busy, after-hours enquiries go unanswered, and every missed call is a lost patient.",
  },
  {
    icon: CalendarX,
    title: "No-shows bleed revenue",
    desc: "A forgotten appointment is a slot that earns nothing — most clinics have no automated reminder system.",
  },
  {
    icon: Users,
    title: "The front desk is overloaded",
    desc: "Booking, confirming, reminding, rescheduling, collecting payments — all done manually, all day.",
  },
  {
    icon: UserX,
    title: "Doctors walk in cold",
    desc: "No structured summary of why the patient is here; the first minutes are spent re-asking the same questions.",
  },
  {
    icon: Boxes,
    title: "Pharmacy and lab are islands",
    desc: "Paper prescriptions, WhatsApp screenshots for results, stock and expiry tracked in a register.",
  },
  {
    icon: TrendingDown,
    title: "Patients disappear",
    desc: "Nothing nudges a patient who hasn't returned in 30/60/90 days — they quietly go to the clinic down the road.",
  },
];

export function Problem() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            The problem
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            Growing clinics lose time and money to manual, disconnected
            operations
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-line-200 bg-paper-0 p-6"
            >
              <p.icon className="text-clinical-red-500" size={22} />
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl font-semibold leading-snug text-ink-900 md:text-2xl">
          RemedyEngine replaces all of this with one connected engine that runs
          the whole clinic — and the patient never has to download an app.
        </p>
      </div>
    </section>
  );
}
