import { PhoneMissed, CalendarX, Users, UserX, Boxes, TrendingDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const PROBLEMS = [
  {
    icon: PhoneMissed,
    title: "Patients call (or don't)",
    desc: "Busy lines and unanswered after-hours enquiries — every missed call is a patient who books somewhere else.",
  },
  {
    icon: CalendarX,
    title: "No-shows bleed revenue",
    desc: "A forgotten appointment is a slot that earns nothing, and most clinics have no reminder system at all.",
  },
  {
    icon: Users,
    title: "The front desk is overloaded",
    desc: "Booking, confirming, reminding, rescheduling, collecting payments — done by hand, all day, every day.",
  },
  {
    icon: UserX,
    title: "Doctors walk in cold",
    desc: "No structured summary of why the patient is here, so the first minutes repeat the same questions.",
  },
  {
    icon: Boxes,
    title: "Pharmacy and lab are islands",
    desc: "Paper prescriptions, results as screenshots, stock and expiry tracked in a register nobody checks.",
  },
  {
    icon: TrendingDown,
    title: "Patients quietly disappear",
    desc: "Nothing nudges a patient who hasn't returned in 30, 60, or 90 days — they drift to the clinic down the road.",
  },
];

export function Problem() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="The problem"
          title="Growing clinics lose time and money to manual, disconnected operations"
          sub="Six leaks, one root cause: nothing in the clinic talks to anything else."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 80}
              className="h-full rounded-xl border border-line-200 bg-paper-0 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-100 text-signal-500">
                  <p.icon size={20} />
                </span>
                <span className="font-data text-xs text-line-200 select-none md:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-serif text-xl font-semibold leading-snug text-ink-900 md:text-2xl">
            RemedyEngine replaces all of this with one connected engine that
            runs the whole clinic — and the patient never has to download an
            app.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
