import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Camera,
  Share2,
  Globe,
  DoorOpen,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Camera, label: "Instagram" },
  { icon: Share2, label: "Facebook" },
  { icon: Globe, label: "Website" },
  { icon: DoorOpen, label: "Walk-in" },
  { icon: PhoneCall, label: "AI Calling" },
];

const TRUST = [
  "No patient app",
  "WhatsApp-first",
  "16 connected engines",
  "Multi-location ready",
];

// Words for the mask-reveal headline. Kept as a literal array (not a runtime
// .split()) so the exact wrapping/spacing is explicit and easy to adjust.
const HEADLINE_WORDS = [
  "The",
  "engine",
  "that",
  "runs",
  "your",
  "entire",
  "clinic.",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight" />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-lg bg-remedy-100 px-3 py-1 font-data text-xs uppercase tracking-wide text-remedy-600 motion-safe:animate-[reEnterUp_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards]">
            The clinic operating system
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-6xl">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden align-bottom">
                  <span
                    className="inline-block motion-safe:animate-[reWordIn_0.7s_cubic-bezier(0.22,1,0.36,1)_backwards]"
                    style={{ animationDelay: `${120 + i * 75}ms` }}
                  >
                    {word}
                  </span>
                </span>
                {i < HEADLINE_WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 motion-safe:animate-[reEnterUp_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:620ms]"
          >
            Every booking. Every consultation. Every prescription. Every report.
            RemedyEngine connects WhatsApp, Instagram, Facebook, your website,
            walk-ins and AI calls to a suite of intelligent clinic engines — one
            connected operating system.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row motion-safe:animate-[reEnterUp_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:720ms]">
            <Magnetic className="w-full sm:w-auto">
              <Button
                size="lg"
                render={<Link href="/book-demo" />}
                nativeButton={false}
                className="w-full bg-remedy-600 text-white transition-shadow hover:bg-remedy-600/90 hover:shadow-[0_10px_30px_rgba(114,217,78,0.35)] sm:w-auto"
              >
                Book a Live Demo
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto" strength={8}>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/engines" />}
                nativeButton={false}
                className="w-full border-ink-900 text-ink-900 sm:w-auto"
              >
                Explore the Engines
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Engine core — static image is the LCP element; it paints immediately
            (opacity starts at 0 in the keyframe's `from` but `priority` still
            makes the browser fetch/decode at full speed, and the fade is a
            short 700ms wrapper-level animation, not a load gate). Channel
            nodes float around it; a few lime pulse-rings radiate outward from
            the core to visualise "data moving between modules" without
            depending on the exact (responsive) position of each chip. */}
        <div className="relative mx-auto mt-16 max-w-4xl motion-safe:animate-[reEnterUpScale_0.8s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:800ms]">
          <div className="relative mx-auto max-w-2xl motion-safe:animate-[reBreathe_7s_ease-in-out_infinite]">
            <Image
              src="/images/hero-engine-core.webp"
              alt="The RemedyEngine core connecting a clinic's booking, records, consultation, pharmacy, laboratory, billing and analytics engines"
              width={1376}
              height={768}
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="h-auto w-full rounded-2xl shadow-[0_24px_60px_-16px_rgba(11,31,51,0.28)]"
            />
            {/* Radiating core pulses — decorative, aria-hidden, positioned near
                the core hub within the source image (~58%/47%). */}
            <span
              aria-hidden
              className="pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
              style={{ left: "58%", top: "47%" }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
              style={{ left: "58%", top: "47%", animationDelay: "1s" }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
              style={{ left: "58%", top: "47%", animationDelay: "2s" }}
            />
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {CHANNELS.map((c, i) => (
              <li
                key={c.label}
                style={{ animationDelay: `${i * 0.4}s` }}
                className="inline-flex items-center gap-2 rounded-full border border-line-200 bg-paper-0 px-3 py-1.5 shadow-[0_4px_16px_rgba(11,31,51,0.06)] motion-safe:animate-[reFloat_5s_ease-in-out_infinite]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                </span>
                <c.icon size={15} className="text-remedy-600" />
                <span className="font-data text-[11px] uppercase tracking-wide text-ink-900">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-2 motion-safe:animate-[reEnterUp_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:950ms]">
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
    </section>
  );
}
