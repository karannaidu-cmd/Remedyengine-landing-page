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
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

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

// Headline words with an emphasis flag — emphasis words get bold weight and
// brand green, the rest stays a lighter weight, the mixed-weight display
// treatment common to render.com/lusion.co-calibre marketing pages.
const HEADLINE_WORDS: { text: string; emphasis?: boolean }[] = [
  { text: "The" },
  { text: "engine" },
  { text: "that" },
  { text: "runs" },
  { text: "your" },
  { text: "entire", emphasis: true },
  { text: "clinic.", emphasis: true },
];

// A continuous per-character stagger delay across the whole headline (not
// reset per word) so the letter cascade flows in one smooth wave rather than
// restarting at each word boundary.
function withCharDelays(words: typeof HEADLINE_WORDS) {
  let i = 0;
  return words.map((word) => ({
    ...word,
    chars: word.text.split("").map((ch) => ({ ch, delay: 140 + i++ * 16 })),
  }));
}
const HEADLINE_CHARS = withCharDelays(HEADLINE_WORDS);

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-grid-lines" />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight" />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-4 md:px-8 md:pt-24 md:pb-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-lg bg-remedy-100 px-3 py-1 font-data text-xs uppercase tracking-wide text-remedy-600 motion-safe:animate-[reEnterUp_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards]">
              The clinic operating system
            </span>
            <h1 className="mt-7 font-serif text-5xl font-normal leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.5rem]">
              {HEADLINE_CHARS.map((word, wi) => (
                <span key={wi}>
                  <span
                    className={cn(
                      "inline-block whitespace-nowrap",
                      word.emphasis && "font-bold text-remedy-600"
                    )}
                  >
                    {word.chars.map(({ ch, delay }, ci) => (
                      <span
                        key={ci}
                        className="inline-block overflow-hidden pb-1 align-bottom"
                      >
                        <span
                          className="inline-block motion-safe:animate-[reCharIn_0.55s_cubic-bezier(0.22,1,0.36,1)_backwards]"
                          style={{ animationDelay: `${delay}ms` }}
                        >
                          {ch}
                        </span>
                      </span>
                    ))}
                  </span>
                  {wi < HEADLINE_CHARS.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-700 lg:mx-0 motion-safe:animate-[reEnterUp_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:920ms]">
              Every booking. Every consultation. Every prescription. Every report.
              RemedyEngine connects WhatsApp, Instagram, Facebook, your website,
              walk-ins and AI calls to a suite of intelligent clinic engines. It&apos;s
              one connected operating system.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start motion-safe:animate-[reEnterUp_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:1000ms]">
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
              short 800ms wrapper-level animation, not a load gate). The source
              asset is a transparent-background render, so it sits directly on
              the section — a per-pixel drop-shadow (not a box-shadow, which
              would frame the whole rectangular canvas) follows its silhouette.
              Channel nodes float below it; a few lime pulse-rings radiate
              outward from the core hub (~59%/50% in this crop) to visualise
              "data moving between modules". */}
          <div className="relative mx-auto w-full max-w-xl motion-safe:animate-[reEnterUpScale_0.8s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:750ms] lg:mx-0 lg:max-w-none">
            {/* Ambient glow blob behind the whole graphic — breathes slightly
                out of phase with the image's own scale animation so the
                composition never looks static. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 motion-safe:animate-[reGlowPulse_6s_ease-in-out_infinite]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(114,217,78,0.32), transparent 72%)",
              }}
            />
            <Tilt className="relative" max={6}>
              <div className="relative motion-safe:animate-[reBreathe_7s_ease-in-out_infinite]">
                <Image
                  src="/images/hero-engine-core.webp"
                  alt="The RemedyEngine core connecting a clinic's booking, records, consultation, pharmacy, laboratory, billing and analytics engines"
                  width={3410}
                  height={2424}
                  priority
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="h-auto w-full drop-shadow-[0_28px_44px_rgba(4,61,50,0.28)]"
                />
                {/* Slow-spinning dashed energy ring around the hub — a second
                    layer of ambient motion behind the radiating pulses. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-remedy-500/25 motion-safe:animate-[reSpinSlow_16s_linear_infinite]"
                  style={{ left: "59%", top: "50%" }}
                />
                {/* Radiating core pulses — decorative, aria-hidden, positioned near
                    the core hub within the transparent crop (~59%/50%). */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
                  style={{ left: "59%", top: "50%" }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
                  style={{ left: "59%", top: "50%", animationDelay: "1s" }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
                  style={{ left: "59%", top: "50%", animationDelay: "2s" }}
                />
              </div>
            </Tilt>

            {/* Channel chips — a fixed 2/3-column grid (not flex-wrap) so the
                six chips always resolve to clean, evenly aligned rows instead
                of a ragged last row. */}
            <ul className="mt-7 grid grid-cols-2 place-items-center gap-2.5 sm:grid-cols-3">
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
        </div>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-2 motion-safe:animate-[reEnterUp_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-safe:[animation-delay:1200ms]">
          {TRUST.map((t) => (
            <li
              key={t}
              className="rounded-lg border border-line-200 bg-paper-0/70 px-3 py-1.5 font-data text-[11px] uppercase tracking-wide text-ink-700"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Scroll cue — a real link (not purely decorative) down to the next
            section. A glowing comet segment travels the length of a thin
            guide line rather than a boxed/circular badge, a quieter, more
            linear nod to "there's more below". */}
        <div className="mt-10 flex justify-center motion-safe:animate-[reEnterUp_0.6s_ease-out_backwards] motion-safe:[animation-delay:1450ms]">
          <a
            href="#omnichannel-entry"
            className="group flex flex-col items-center gap-4"
          >
            <span className="font-data text-[11px] uppercase tracking-[0.25em] text-ink-700/70 transition-colors group-hover:text-remedy-600">
              Scroll to explore
            </span>
            <span className="relative h-16 w-[6px] overflow-hidden rounded-full bg-line-200 transition-colors duration-300 group-hover:bg-remedy-100">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-7 w-full rounded-full bg-gradient-to-b from-transparent via-remedy-400 to-remedy-600 shadow-[0_0_8px_1px_rgba(114,217,78,0.5)] motion-safe:animate-[reScrollTrail_2.2s_ease-in-out_infinite]"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
