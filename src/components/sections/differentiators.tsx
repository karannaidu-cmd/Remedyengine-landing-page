import { MessageSquare, Sparkles, Layers, TrendingUp, ShieldCheck } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: "WhatsApp-first, no patient app",
    desc: "Patients use the channel they already live in — adoption is effortless.",
  },
  {
    icon: Sparkles,
    title: "Real AI, not just menus",
    desc: "Natural-language understanding, triage, intake, specialist matching, and doctor briefs — not a rigid button bot.",
  },
  {
    icon: Layers,
    title: "One connected engine",
    desc: "Booking, clinical, pharmacy, lab, CRM, marketing, payments, and analytics in a single system.",
  },
  {
    icon: TrendingUp,
    title: "Automation that compounds",
    desc: "Reminders, follow-ups, and win-back work together to grow revenue continuously.",
  },
  {
    icon: ShieldCheck,
    title: "Built for scale & security",
    desc: "Multi-branch, role-based access, and strict per-clinic data isolation from day one.",
  },
];

const LEVERS = [
  {
    stat: "01",
    title: "Capture more patients",
    desc: "A 24/7 AI front desk means no enquiry goes unanswered, including nights and weekends.",
  },
  {
    stat: "02",
    title: "Lose fewer slots",
    desc: "Automated 24h + 2h reminders are the single biggest lever on no-show rate.",
  },
  {
    stat: "03",
    title: "Bring patients back",
    desc: "Automatic 30/60/90-day win-back turns one-time visits into recurring revenue.",
  },
  {
    stat: "04",
    title: "Do more with less",
    desc: "Automation absorbs the repetitive front-desk workload as volume grows.",
  },
];

export function Differentiators() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            Why RemedyEngine wins
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            Built differently, on purpose
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="rounded-xl border border-line-200 bg-paper-50 p-6">
              <d.icon className="text-remedy-600" size={22} />
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-ink-900 px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-data text-xs uppercase tracking-wide text-remedy-500">
              The ROI story
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-paper-50 md:text-4xl">
              Four levers, one connected system
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEVERS.map((l) => (
              <div key={l.stat}>
                <span className="font-data text-3xl text-remedy-500">
                  {l.stat}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-paper-50">
                  {l.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-50/70">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-paper-50/80">
            If RemedyEngine recovers even a handful of no-shows and reactivates
            a few lapsed patients each week, it pays for itself — everything
            after that is margin.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center font-data text-xs uppercase tracking-wide text-paper-50/50">
            Illustrative targets, validated per customer — not guarantees
          </p>
        </div>
      </div>
    </section>
  );
}
