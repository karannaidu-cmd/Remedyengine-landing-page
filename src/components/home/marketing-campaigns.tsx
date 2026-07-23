"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Camera, Target, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/ui/tilt";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { cn } from "@/lib/utils";

const POINTS = [
  "Segment patients automatically: no-shows, follow-ups, new leads",
  "One composer for both channels, no separate marketing tool",
  "Every open and booking traced back to its campaign",
];

const CAMPAIGNS = [
  {
    channel: "WhatsApp",
    icon: MessageCircle,
    audience: "312 patients · No visit in 6 months",
    message:
      "Hi Ravi, it's been a while since your last check-up. Book this week and get 15% off your consultation.",
    stats: [
      { label: "Sent", value: 312 },
      { label: "Delivered", value: 298 },
      { label: "Opened", value: 210 },
      { label: "Booked", value: 47 },
    ],
  },
  {
    channel: "Instagram",
    icon: Camera,
    audience: "890 new followers · Last 30 days",
    message: "New here? Get ₹200 off your first consultation with Dr. Mehta. Tap to book your slot.",
    stats: [
      { label: "Sent", value: 890 },
      { label: "Delivered", value: 890 },
      { label: "Opened", value: 640 },
      { label: "Booked", value: 96 },
    ],
  },
];

// A small self-playing showcase (auto-rotates every 5s, click either tab or
// dot to jump directly) rather than a static mockup — the point being made
// is "one composer, two channels", which reads far better as something that
// visibly switches than as a screenshot with a caption.
export function MarketingCampaigns() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % CAMPAIGNS.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const campaign = CAMPAIGNS[active];

  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
              Marketing &amp; campaigns
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
              Run WhatsApp and Instagram campaigns from inside RemedyEngine.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
              Build a patient segment, write one message, and send it on WhatsApp or
              Instagram in minutes. No marketing agency, no separate tool, no
              copy-pasting patient lists.
            </p>
            <ul className="mt-6 space-y-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-900">
                  <Check size={16} className="mt-0.5 shrink-0 text-remedy-600" />
                  {p}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 bg-remedy-600 text-white hover:bg-remedy-600/90"
              render={<Link href="/book-demo" />}
              nativeButton={false}
            >
              See campaigns in action
              <ArrowRight size={16} />
            </Button>
          </Reveal>

          <Reveal delay={100}>
            <Tilt max={4}>
              <div className="relative overflow-hidden rounded-2xl border border-line-200 bg-paper-0 p-6 shadow-[0_16px_40px_rgba(11,31,51,0.1)] md:p-7">
                <div className="flex items-center gap-2">
                  {CAMPAIGNS.map((c, i) => (
                    <button
                      key={c.channel}
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-data text-[11px] uppercase tracking-wide transition-colors",
                        i === active
                          ? "bg-remedy-600 text-white"
                          : "bg-paper-50 text-ink-700 hover:bg-remedy-100"
                      )}
                    >
                      <c.icon size={13} />
                      {c.channel}
                    </button>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1.5 font-data text-[10px] uppercase tracking-wide text-remedy-600">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                    </span>
                    Live
                  </span>
                </div>

                <div
                  key={`audience-${active}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-paper-50 px-3 py-2 motion-safe:animate-[reEnterUp_0.4s_ease-out_backwards]"
                >
                  <Target size={14} className="text-remedy-600" />
                  <span className="text-xs text-ink-900">{campaign.audience}</span>
                </div>

                <div
                  key={`message-${active}`}
                  className="mt-3 max-w-sm rounded-[20px] rounded-tl-[4px] bg-remedy-100 px-4 py-3 text-sm text-ink-900 motion-safe:animate-[reEnterUp_0.4s_ease-out_backwards] motion-safe:[animation-delay:80ms]"
                >
                  {campaign.message}
                </div>

                <div className="mt-6 grid grid-cols-4 gap-2 border-t border-line-200 pt-5">
                  {campaign.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-serif text-xl font-semibold text-remedy-600">
                        <CountUp value={s.value} duration={700} />
                      </p>
                      <p className="mt-0.5 font-data text-[10px] uppercase tracking-wide text-ink-700">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center gap-1.5">
                  {CAMPAIGNS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show campaign ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === active ? "w-6 bg-remedy-600" : "w-1.5 bg-line-200"
                      )}
                    />
                  ))}
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
