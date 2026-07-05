const ROWS = [
  {
    automation: "Booking confirmation",
    problem: '"Did my appointment go through?" calls',
    benefit: "Instant reassurance; fewer confirmation calls",
  },
  {
    automation: "24-hour reminder",
    problem: "Patients forget appointments booked days ago",
    benefit: "Major no-show reduction",
  },
  {
    automation: "2-hour reminder",
    problem: "Same-day forgetfulness / late arrivals",
    benefit: "On-time arrivals, smoother queue",
  },
  {
    automation: "Cancellation & reschedule notices",
    problem: "Confusion when plans change",
    benefit: "Clear, automatic updates; freed slots get reused",
  },
  {
    automation: "Video consult link delivery",
    problem: '"Where\'s my video link?"',
    benefit: "Link arrives automatically before the call",
  },
  {
    automation: "Post-visit follow-up",
    problem: 'No structured "how are you feeling?" touchpoint',
    benefit: "Better outcomes, stronger loyalty",
  },
  {
    automation: "No-show re-engagement",
    problem: "Missed appointments are simply lost",
    benefit: "Auto-offer to rebook recovers revenue",
  },
  {
    automation: "Retention win-back (30 / 60 / 90 days)",
    problem: "Inactive patients quietly churn",
    benefit: "Automatic nudges bring lapsed patients back",
  },
  {
    automation: "Broadcast campaigns",
    problem: "No way to announce camps, offers, vaccines",
    benefit: "Targeted WhatsApp campaigns to patient segments",
  },
];

export function Automations() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            Automated communication
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            Set once. Runs forever.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Staff configure these on the clinic&apos;s WhatsApp and toggle
            them on — from there, they fire automatically.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border border-line-200 bg-paper-0">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line-200">
                <th className="px-5 py-4 font-data text-[11px] uppercase text-ink-700">
                  Automation
                </th>
                <th className="px-5 py-4 font-data text-[11px] uppercase text-ink-700">
                  Real-world problem
                </th>
                <th className="px-5 py-4 font-data text-[11px] uppercase text-ink-700">
                  Benefit
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.automation}
                  className={i !== ROWS.length - 1 ? "border-b border-line-200" : ""}
                >
                  <td className="px-5 py-4 font-medium text-ink-900">
                    {row.automation}
                  </td>
                  <td className="px-5 py-4 text-ink-700">{row.problem}</td>
                  <td className="px-5 py-4 text-remedy-600">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-serif text-xl font-semibold leading-snug text-ink-900 md:text-2xl">
          The compounding effect: reminders cut no-shows, follow-ups improve
          loyalty, and win-back campaigns resurrect dormant patients —
          together they grow recurring revenue with no extra staff effort.
        </p>
      </div>
    </section>
  );
}
