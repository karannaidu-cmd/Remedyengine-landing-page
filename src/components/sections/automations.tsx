import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const PHASES = [
  {
    phase: "01",
    title: "Before the visit",
    line: "From booked to arrived — without a single confirmation call.",
    items: [
      {
        name: "Booking confirmation",
        benefit: "Instant reassurance; no “did it go through?” calls.",
      },
      {
        name: "24-hour reminder",
        benefit: "The single biggest lever on no-show rate.",
      },
      {
        name: "2-hour reminder",
        benefit: "A same-day nudge for on-time arrivals and a smoother queue.",
      },
      {
        name: "Cancellation & reschedule notices",
        benefit: "Clear automatic updates; freed slots get rebooked, not lost.",
      },
      {
        name: "Video consult link delivery",
        benefit: "The link arrives before the call — no “where's my link?”.",
      },
    ],
  },
  {
    phase: "02",
    title: "After the visit",
    line: "The visit ends; the relationship doesn't.",
    items: [
      {
        name: "Post-visit follow-up",
        benefit: "A structured “how are you feeling?” that improves outcomes and loyalty.",
      },
      {
        name: "No-show re-engagement",
        benefit: "An automatic offer to rebook recovers the lost slot.",
      },
    ],
  },
  {
    phase: "03",
    title: "Between visits",
    line: "Quiet patients don't have to become lost patients.",
    items: [
      {
        name: "Retention win-back (30 / 60 / 90 days)",
        benefit: "Lapsed patients get a timely reason to return.",
      },
      {
        name: "Broadcast campaigns",
        benefit: "Health camps, offers, and vaccine drives — to the right segments.",
      },
    ],
  },
];

export function Automations() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Automated communication"
          title="Set once. Runs forever."
          sub="Nine automations cover the whole patient journey — staff toggle them on, and the engine never forgets to send one."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-6">
          {PHASES.map((phase, pi) => (
            <Reveal
              key={phase.phase}
              delay={pi * 80}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line-200 bg-paper-0 md:grid-cols-[240px_1fr]"
            >
              <div className="border-b border-line-200 bg-paper-50/60 p-6 md:border-b-0 md:border-r md:p-7">
                <span className="font-data text-2xl text-remedy-500">
                  {phase.phase}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-ink-900">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {phase.line}
                </p>
              </div>

              <ul className="divide-y divide-line-200">
                {phase.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-4 md:px-7"
                  >
                    <span className="text-sm font-semibold text-ink-900">
                      {item.name}
                    </span>
                    <span className="text-sm leading-relaxed text-remedy-600">
                      {item.benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-serif text-xl font-semibold leading-snug text-ink-900 md:text-2xl">
            The compounding effect: reminders cut no-shows, follow-ups build
            loyalty, and win-back revives dormant patients — recurring revenue,
            no extra staff.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
