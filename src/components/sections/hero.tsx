import Image from "next/image";
import { Bot, LayoutGrid, Megaphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Thread } from "@/components/sections/thread";

const PILLARS = [
  {
    icon: Bot,
    title: "Automate the front desk",
    desc: "AI books, reminds, triages, and answers patients 24/7 on WhatsApp — no app for patients.",
  },
  {
    icon: LayoutGrid,
    title: "Run the whole clinic",
    desc: "One dashboard for doctors, pharmacy, lab, and payments — paper and manual work goes digital.",
  },
  {
    icon: Megaphone,
    title: "Grow with marketing",
    desc: "WhatsApp campaigns and health-care offers fill empty slots and win lapsed patients back.",
  },
  {
    icon: BarChart3,
    title: "Monitor everything",
    desc: "Live activity reports on revenue, utilization, collections, and patient flow.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <Image
        src="/images/hero-bg.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-lg bg-remedy-100 px-3 py-1 font-data text-xs uppercase text-remedy-600">
              The operating engine for modern clinics
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-6xl">
              The engine that runs your clinic.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 lg:mx-0">
              RemedyEngine automates your whole clinic — WhatsApp booking and
              reminders, doctor workflows, pharmacy, lab, payments, marketing,
              and live reports. Paper and manual work goes digital, so your
              clinic runs smoothly with a smaller team.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="w-full bg-remedy-600 text-white hover:bg-remedy-600/90 sm:w-auto"
              >
                See a 20-minute demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-ink-900 text-ink-900 sm:w-auto"
              >
                Talk to sales
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/images/engine-concept.png"
              alt="The RemedyEngine core: one engine connecting patient chat, clinic dashboards, marketing, and reporting"
              width={1024}
              height={1024}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-line-200 bg-paper-0 p-5"
            >
              <item.icon className="text-remedy-600" size={22} />
              <p className="mt-3 font-sans text-sm font-semibold text-ink-900">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line-200 bg-paper-0">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
              How the engine works
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
              A WhatsApp message becomes a finished piece of care
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              One real conversation, start to finish — booked, briefed,
              prescribed, and delivered, without a single phone call.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-4xl">
            <Thread />
          </div>
        </div>
      </div>
    </section>
  );
}
