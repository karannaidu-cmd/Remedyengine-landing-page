import Image from "next/image";
import Link from "next/link";
import { Bot, LayoutGrid, Megaphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Thread } from "@/components/sections/thread";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

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

const TRUST = [
  "No patient app",
  "WhatsApp-first",
  "Booking · Pharmacy · Lab · Payments",
  "Multi-branch ready",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-lg bg-remedy-100 px-3 py-1 font-data text-xs uppercase tracking-wide text-remedy-600">
            The operating engine for modern clinics
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-6xl">
            The engine that runs your clinic.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            Capture every enquiry, cut no-shows, and run booking, pharmacy, lab,
            payments, and marketing from one dashboard — all through WhatsApp.
            No app for your patients, no extra front-desk staff.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              render={<Link href="/book-demo" />}
              nativeButton={false}
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

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {TRUST.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-line-200 bg-paper-0/70 px-3 py-1.5 font-data text-[11px] uppercase tracking-wide text-ink-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero product visual: a WhatsApp chat resolving into the clinic dashboard.
            Kept static — this is the LCP element, never animate it. */}
        <div className="mx-auto mt-16 max-w-6xl">
          <Image
            src="/images/hero-banner.webp"
            alt="A patient's WhatsApp message flowing into a confirmed 10:30 AM appointment on the RemedyEngine clinic dashboard"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="h-auto w-full rounded-2xl shadow-[0_24px_60px_-16px_rgba(22,35,31,0.22)]"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="h-full rounded-xl border border-line-200 bg-paper-0 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600">
                <item.icon size={20} />
              </span>
              <p className="mt-3 font-sans text-sm font-semibold text-ink-900">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t border-line-200 bg-paper-0">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <SectionHeader
            eyebrow="How the engine works"
            title="A WhatsApp message becomes a finished piece of care"
            sub="One real conversation, start to finish — booked, briefed, prescribed, and delivered, without a single phone call."
          />
          <div className="mx-auto mt-14 max-w-4xl">
            <Thread />
          </div>
        </div>
      </div>
    </section>
  );
}
