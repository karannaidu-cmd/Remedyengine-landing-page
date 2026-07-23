import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Info,
  Repeat2,
  Link2,
  Network,
  CalendarClock,
  CalendarCheck,
  Users,
  Stethoscope,
  ReceiptText,
  FlaskConical,
  Pill,
  BellRing,
  Wallet,
  ClipboardList,
  HeartHandshake,
  Layers,
  Check,
  Archive,
  LayoutGrid,
  Building2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { EngineIcon } from "@/components/engine-icon";
import { ClayCard } from "@/components/ui/clay-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CountUp } from "@/components/ui/count-up";
import { AssemblingBar } from "@/components/ui/assembling-bar";
import { Tilt } from "@/components/ui/tilt";
import { Thread } from "@/components/sections/thread";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getEngine } from "@/lib/engines";
import { solutions } from "@/lib/solutions";
import { faqs } from "@/lib/faq";

/* §2 — Omnichannel entry ("subhero") */
export function OmnichannelEntry() {
  return (
    <section id="omnichannel-entry" className="scroll-mt-24 bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 pt-6 pb-14 md:px-8 md:pt-8 md:pb-20">
        {/* A distinct "panel" variant from the hero's full-bleed grid texture
            — a soft mint-to-white gradient card with its own border and
            ambient glow, so this section reads as its own designed moment
            rather than a plain continuation of the page background. */}
        <div className="relative overflow-hidden rounded-[2rem] border border-line-200 bg-gradient-to-br from-mint-100 via-paper-0 to-remedy-100/50 p-8 md:p-12">
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight opacity-60" />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <Reveal>
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                Omnichannel entry
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
                Every doorway into your clinic. One intelligent booking engine.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
                Whether a patient messages on WhatsApp, contacts you through
                Instagram or Facebook, books through your website, walks in or
                responds to an AI call, RemedyEngine brings every request into one
                connected workflow.
              </p>
              <Button
                className="mt-6 bg-remedy-600 text-white hover:bg-remedy-600/90"
                render={<Link href="/engines#booking" />}
                nativeButton={false}
              >
                Explore omnichannel booking
              </Button>
            </Reveal>
            {/* Transparent-background render — sits directly on the panel
                (no card-within-a-card) with a per-pixel drop-shadow, a slow
                breathing scale, a spinning energy ring and lime pulses at the
                booking-engine hub (~78%/48% in this crop), echoing the
                hero's engine core. */}
            <Reveal delay={100}>
              <div className="relative mx-auto w-full max-w-sm">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 motion-safe:animate-[reGlowPulse_6.5s_ease-in-out_infinite]"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(114,217,78,0.3), transparent 72%)",
                  }}
                />
                <Tilt max={5}>
                  <div className="relative motion-safe:animate-[reBreathe_8s_ease-in-out_infinite]">
                    <Image
                      src="/images/omnichannel-converge.webp"
                      alt="Patient channels converging into one clinic booking engine"
                      width={2525}
                      height={2424}
                      sizes="(max-width: 1024px) 70vw, 380px"
                      className="h-auto w-full drop-shadow-[0_24px_40px_rgba(4,61,50,0.24)]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-remedy-500/25 motion-safe:animate-[reSpinSlow_14s_linear_infinite]"
                      style={{ left: "78%", top: "48%" }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
                      style={{ left: "78%", top: "48%" }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500/70 motion-safe:animate-[reCorePulse_3s_ease-out_infinite]"
                      style={{ left: "78%", top: "48%", animationDelay: "1.2s" }}
                    />
                  </div>
                </Tilt>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* §4 — AI Patient History Brief */
export function AiBriefSection() {
  const engine = getEngine("ai-patient-history")!;
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100} className="order-2 lg:order-1">
            <figure className="overflow-hidden rounded-2xl border border-line-200 shadow-[0_4px_16px_rgba(11,31,51,0.08)]">
              <Image
                src="/images/doctor-history-brief.webp"
                alt="A doctor reviewing an organised patient-history brief on a tablet"
                width={1200}
                height={896}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full object-cover"
              />
            </figure>
            <figcaption className="mt-2 font-data text-[11px] uppercase tracking-wide text-ink-700">
              Illustrative
            </figcaption>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                AI Patient History Brief
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
                Patient history, organised before the doctor needs it.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
                {engine.purpose}
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {engine.features.slice(0, 8).map((f, i) => (
                <Reveal key={f} delay={(i % 4) * 50}>
                  <span className="flex items-center gap-1.5 rounded-lg border border-line-200 bg-paper-0 px-3 py-2 text-sm text-ink-900">
                    <Check size={13} className="shrink-0 text-remedy-500" />
                    {f}
                  </span>
                </Reveal>
              ))}
            </div>
            <AssemblingBar className="mt-5 max-w-sm" />
            {engine.disclaimer && (
              <Reveal className="mt-6">
                <div className="flex items-start gap-3 rounded-xl border border-line-200 bg-paper-0 p-4">
                  <Info size={16} className="mt-0.5 shrink-0 text-remedy-600" />
                  <p className="text-xs leading-relaxed text-ink-700">
                    {engine.disclaimer}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* §5 — Connected patient journey (reuses the signature Thread once) */
export function ConnectedJourney() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="The connected journey"
          title="One patient. One connected journey."
          sub="Follow a single visit as it flows through every engine: booked, briefed, prescribed and delivered, without a single phone call."
        />
        <div className="mx-auto mt-14 max-w-4xl">
          <Thread />
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1 font-data text-xs uppercase tracking-wide text-remedy-600 hover:underline"
          >
            See how it works <ArrowRight size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* §6 — Clinic command centre */
const KPI_TILES: {
  icon: typeof CalendarCheck;
  label: string;
  value: number;
  suffix?: string;
}[] = [
  { icon: CalendarCheck, label: "Today's appointments", value: 24 },
  { icon: Users, label: "Patients waiting", value: 3 },
  { icon: Stethoscope, label: "Doctors on duty", value: 4 },
  { icon: ClipboardList, label: "Consultations completed", value: 18 },
  { icon: Wallet, label: "Revenue collected", value: 68, suffix: "%" },
  { icon: ReceiptText, label: "Outstanding balances", value: 6 },
  { icon: FlaskConical, label: "Pending lab reports", value: 2 },
  { icon: Pill, label: "Pharmacy stock alerts", value: 1 },
  { icon: BellRing, label: "Follow-ups on schedule", value: 92, suffix: "%" },
];
export function CommandCentre() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
              Clinic command centre
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
              See what&apos;s happening across your clinic, right now.
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {KPI_TILES.map((k, i) => (
                <Reveal key={k.label} delay={(i % 6) * 55}>
                  <div className="group h-full overflow-hidden rounded-xl border border-line-200 bg-paper-0 p-3 transition-all duration-300 hover:border-remedy-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_10px_28px_rgba(4,61,50,0.1)]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-remedy-100 text-remedy-600 transition-colors duration-300 group-hover:bg-remedy-600 group-hover:text-white">
                      <k.icon size={16} />
                    </span>
                    <p className="mt-2.5 font-serif text-xl font-semibold leading-none text-ink-900">
                      <CountUp value={k.value} suffix={k.suffix ?? ""} />
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-ink-700">
                      {k.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-1.5 font-data text-[10px] uppercase tracking-wide text-ink-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
              </span>
              Illustrative live view
            </p>
            <Button
              className="mt-6 bg-remedy-600 text-white hover:bg-remedy-600/90"
              render={<Link href="/engines#insights" />}
              nativeButton={false}
            >
              Explore Insights
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <figure className="overflow-hidden rounded-2xl border border-line-200 shadow-[0_4px_16px_rgba(11,31,51,0.08)]">
              <Image
                src="/images/insights-multilocation.webp"
                alt="A clinic operations overview across multiple locations"
                width={1376}
                height={768}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full"
              />
            </figure>
            <figcaption className="mt-2 font-data text-[11px] uppercase tracking-wide text-ink-700">
              Illustrative
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* §7 — Built for every clinic */
export function BuiltForEveryClinic() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="Built for every clinic"
          title="Built for every clinic."
          sub="From a single doctor to a growing chain, RemedyEngine adapts to how your clinic actually runs."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={(i % 3) * 70} className="h-full">
              <Link href={`/solutions#${solution.slug}`} className="block h-full">
                <ClayCard interactive className="h-full p-0">
                  <SpotlightCard
                    className="flex h-full flex-col rounded-[inherit] p-6"
                    glowClassName="[background:radial-gradient(280px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(114,217,78,0.22),transparent_72%)]"
                  >
                    <EngineIcon icon={solution.icon} treatment="clay" size="md" />
                    <p className="mt-4 font-sans text-base font-semibold text-ink-900">
                      {solution.name}
                    </p>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-700">
                      {solution.valueLine}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-data text-xs uppercase tracking-wide text-remedy-600">
                      Explore <ArrowRight size={13} />
                    </span>
                  </SpotlightCard>
                </ClayCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Before / After — the transformation (uses the clinic photography) */
export function BeforeAfter() {
  const cards = [
    {
      tag: "Before",
      tone: "muted" as const,
      image: "/images/clinic-before.webp",
      alt: "A busy clinic reception managing phone calls, paper registers and scattered reports",
      title: "Scattered tools, manual work",
      points: [
        "Phones ringing, registers and paper reports",
        "Departments working in isolation",
        "Patient history reconstructed from scratch",
      ],
    },
    {
      tag: "After",
      tone: "brand" as const,
      image: "/images/clinic-after.webp",
      alt: "A calm, organised clinic running on one connected digital workflow",
      title: "One connected operating system",
      points: [
        "Every channel in one booking engine",
        "Departments connected end to end",
        "Doctors briefed before the patient sits down",
      ],
    },
  ];
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="The transformation"
          title="From scattered tools to one connected clinic."
          sub="The same clinic, before and after the engines start working together."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line-200 bg-paper-0">
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1264}
                    height={848}
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="h-56 w-full object-cover"
                  />
                  <span
                    className={
                      "absolute left-4 top-4 rounded-lg px-2.5 py-1 font-data text-[11px] uppercase tracking-wide " +
                      (card.tone === "brand"
                        ? "bg-remedy-600 text-white"
                        : "bg-paper-0 text-ink-700")
                    }
                  >
                    {card.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-serif text-xl font-semibold text-ink-900">
                    {card.title}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {card.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm leading-relaxed text-ink-700"
                      >
                        <span
                          className={
                            "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full " +
                            (card.tone === "brand" ? "bg-remedy-500" : "bg-line-200")
                          }
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 font-data text-[11px] uppercase tracking-wide text-ink-700">
          Illustrative
        </p>
      </div>
    </section>
  );
}

/* §8 — Operational benefits (non-numeric) */
const BENEFITS = [
  { icon: Repeat2, text: "Reduce repetitive administrative work" },
  { icon: Link2, text: "Connect patient information across departments" },
  { icon: Network, text: "Improve coordination between teams" },
  { icon: CalendarClock, text: "Reduce missed follow-ups" },
  { icon: Wallet, text: "Improve payment visibility" },
  { icon: ClipboardList, text: "Give doctors organised patient context" },
  { icon: HeartHandshake, text: "Create a smoother patient experience" },
  { icon: Layers, text: "Standardise workflows across locations" },
];
export function OperationalBenefits() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight opacity-70" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="Operational benefits"
          title="Less busywork. More connected care."
          sub="The everyday differences of running your clinic on one connected system."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.text} delay={(i % 4) * 70} className="h-full">
              <SpotlightCard className="group h-full rounded-2xl border border-line-200 bg-paper-0 p-5 transition-all duration-300 hover:border-remedy-500 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_20px_45px_rgba(4,61,50,0.14)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-remedy-100 text-remedy-600 transition-all duration-300 group-hover:bg-remedy-600 group-hover:text-white motion-safe:group-hover:-rotate-3 motion-safe:group-hover:scale-110">
                  <b.icon size={20} />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink-900">{b.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ — visible Q&A (paired with FAQPage JSON-LD in page.tsx) */
export function FaqSection() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions"
          sub="The essentials clinics ask before booking a demo."
        />
        <Reveal className="mt-12">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-base text-ink-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-700">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* Why RemedyEngine is different — net-new comparison content (product doc §12) */
const COMPARISONS = [
  {
    icon: Archive,
    against: "Paper-based clinic management",
    points: [
      "Searchable, not filed away in a drawer",
      "One connected record, not scattered folders",
      "Structured data, not handwriting to decipher",
      "Easier to monitor across a busy day",
      "Built for multi-department handoffs",
    ],
  },
  {
    icon: LayoutGrid,
    against: "Basic appointment software",
    points: [
      "Booking is only one engine, not the whole product",
      "Also connects records, the AI Patient History Brief, and consultations",
      "Prescriptions, pharmacy and laboratory in the same workflow",
      "Billing, queue, follow-ups and team access included",
      "Analytics and global search built in, not bolted on",
    ],
  },
  {
    icon: Building2,
    against: "Large hospital systems",
    points: [
      "Built for clinics and growing practices, not enterprise hospitals",
      "WhatsApp-first communication patients already use",
      "Modular engines, so you adopt what you need, when you need it",
      "Faster onboarding, modern day-to-day experience",
      "Scales from a single doctor to multiple locations",
    ],
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="Why RemedyEngine"
          title="Built differently, on purpose."
          sub="RemedyEngine isn't paper made digital, a booking app with extra steps, or a hospital system scaled down. It's built specifically for how clinics run."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COMPARISONS.map((c, i) => (
            <Reveal key={c.against} delay={i * 100} className="h-full">
              <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-line-200 bg-paper-50 p-6 transition-all duration-300 hover:border-remedy-500 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_20px_45px_rgba(4,61,50,0.14)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-remedy-100 text-remedy-600 transition-all duration-300 group-hover:bg-remedy-600 group-hover:text-white motion-safe:group-hover:-rotate-3 motion-safe:group-hover:scale-110">
                    <c.icon size={20} />
                  </span>
                  <span className="rounded-full bg-ink-900 px-2.5 py-1 font-data text-[10px] uppercase tracking-wide text-paper-50">
                    vs
                  </span>
                </div>
                <p className="mt-5 font-data text-[11px] uppercase tracking-wide text-ink-700">
                  Compared with
                </p>
                <p className="mt-1 font-serif text-lg font-semibold text-ink-900">
                  {c.against}
                </p>
                <div className="mt-4 h-px w-full bg-line-200" />
                <ul className="mt-4 space-y-2.5">
                  {c.points.map((p, j) => (
                    <Reveal key={p} delay={150 + j * 70}>
                      <li className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                        <Check size={14} className="mt-1 shrink-0 text-remedy-500" />
                        {p}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 14-day free trial — dedicated, animated, dark "engine-room" treatment so it
   reads as a genuine offer band, distinct from the surrounding light sections. */
const TRIAL_POINTS = [
  "Full platform access, all 16 engines included, not a limited demo mode",
  "No credit card required to start",
  "Your team is onboarded, not left to figure it out alone",
  "Cancel anytime before the trial ends",
];

export function FreeTrialSection() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl clay-dark px-6 py-16 md:px-14 md:py-20">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-ambient-highlight opacity-60"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper-0/10 px-3 py-1 font-data text-xs uppercase tracking-wide text-lime-500">
              <Sparkles size={13} /> 14-day free trial
            </span>

            {/* Sequential day-chips — 14 dots lighting up in turn, visually
                counting out the trial length. Reduced-motion users see 14
                calm, evenly-lit dots (no animation, no information lost). */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.45}s` }}
                  className="h-2.5 w-2.5 rounded-full bg-lime-500 motion-safe:animate-[reDayLight_6.3s_ease-in-out_infinite]"
                />
              ))}
            </div>

            <h2 className="mt-8 font-serif text-3xl font-semibold leading-tight text-paper-50 md:text-4xl">
              Try the full engine, free for 14 days.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper-50/80">
              Run your real clinic on RemedyEngine for two weeks, every engine
              switched on, before you decide anything.
            </p>

            <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {TRIAL_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-paper-50/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper-0/10 text-lime-500">
                    <Check size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Button
                  size="lg"
                  render={<Link href="/book-demo" />}
                  nativeButton={false}
                  className="w-full bg-lime-500 text-remedy-900 transition-shadow hover:bg-lime-500/90 hover:shadow-[0_10px_30px_rgba(114,217,78,0.4)] sm:w-auto"
                >
                  Start your free trial
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Button>
              </Magnetic>
            </div>
            <p className="mt-4 font-data text-[11px] uppercase tracking-wide text-paper-50/50">
              No setup fee · No card required · Cancel anytime
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
