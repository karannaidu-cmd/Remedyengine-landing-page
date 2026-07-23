import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  Info,
  ArrowRight,
  MessageCircle,
  Camera,
  Share2,
  Globe,
  DoorOpen,
  PhoneCall,
  BarChart3,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { EngineIcon } from "@/components/engine-icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { PageHero } from "@/components/site/page-hero";
import { CTABand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";
import { engineFamilies, getEngine, enginesByFamily, type Engine } from "@/lib/engines";
import {
  pageMetadata,
  breadcrumbJsonLd,
  webPageJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Engine Ecosystem",
  description:
    "Explore RemedyEngine's 16 connected clinic engines, including booking, conversation, AI patient history, records, consultation, prescriptions, lab, pharmacy, billing, insights and more.",
  path: "/engines",
  keywords: [
    "clinic booking engine",
    "AI patient history software",
    "digital patient records software",
    "clinic prescription software",
    "lab and pharmacy management software",
    "clinic billing software",
    "WhatsApp appointment booking system",
    "AI calling for clinics",
    "clinic follow-up automation",
    "clinic insights dashboard",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      name: "Engine Ecosystem | RemedyEngine",
      path: "/engines",
      description:
        "Explore RemedyEngine's 16 connected clinic engines across access, clinical intelligence, operations, and growth.",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Engines", path: "/engines" },
    ]),
  ],
};

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Camera, label: "Instagram" },
  { icon: Share2, label: "Facebook" },
  { icon: Globe, label: "Website" },
  { icon: DoorOpen, label: "Walk-in" },
  { icon: PhoneCall, label: "AI Calling" },
];

const BRIEF_ROWS = [
  "Allergies",
  "Current medications",
  "Previous diagnoses",
  "Lab trend",
  "Vitals",
];

const INSIGHTS_CHIPS = ["Appointments", "Revenue", "Lab reports", "Follow-ups"];

// Shared engine detail block — presentation adapts to `tone`, content always
// comes straight from lib/engines.ts (single source of truth).
function EngineArticle({ engine, tone = "light" }: { engine: Engine; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <article id={engine.slug} className="scroll-mt-24">
      <SpotlightCard
        glowClassName={dark ? "[background:radial-gradient(260px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(114,217,78,0.14),transparent_72%)]" : undefined}
        className={cn(
          "group rounded-2xl p-6 transition-all duration-300 md:p-8",
          dark
            ? "border border-paper-0/10 bg-paper-0/[0.06] hover:border-lime-500/30"
            : "border border-line-200 bg-paper-0 hover:-translate-y-1 hover:border-remedy-500/50 hover:shadow-[0_16px_40px_rgba(11,31,51,0.1)]"
        )}
      >
        <div className="flex items-start gap-4">
          <span className="relative shrink-0">
            <span
              aria-hidden
              className="absolute inset-0 rounded-[inherit] border-2 border-lime-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:motion-safe:animate-[rePulseRing_1.8s_ease-out_infinite]"
            />
            <EngineIcon icon={engine.icon} treatment="clay" size="md" />
          </span>
          <div className="min-w-0">
            <h3 className={cn("font-serif text-xl font-semibold", dark ? "text-paper-50" : "text-ink-900")}>
              {engine.name}
            </h3>
            <p className={cn("mt-1 text-sm leading-relaxed", dark ? "text-paper-50/70" : "text-ink-700")}>
              {engine.oneLiner}
            </p>
          </div>
        </div>

        <p className={cn("mt-5 max-w-3xl text-sm leading-relaxed", dark ? "text-paper-50/90" : "text-ink-900")}>
          {engine.purpose}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className={cn("font-data text-[11px] uppercase tracking-wide", dark ? "text-paper-50/60" : "text-ink-700")}>
              What it does
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {engine.features.map((f) => (
                <li key={f} className={cn("flex items-start gap-2 text-sm", dark ? "text-paper-50/80" : "text-ink-700")}>
                  <Check size={14} className={cn("mt-0.5 shrink-0", dark ? "text-lime-500" : "text-remedy-600")} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={cn("font-data text-[11px] uppercase tracking-wide", dark ? "text-paper-50/60" : "text-ink-700")}>
              Why it matters
            </p>
            <ul className="mt-3 space-y-2">
              {engine.benefits.map((b) => (
                <li
                  key={b}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm",
                    dark ? "bg-paper-0/10 text-paper-50" : "bg-paper-50 text-ink-900"
                  )}
                >
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 motion-safe:animate-[rePulseRing_2.5s_ease-out_infinite]" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {engine.workflow && (
          <div className="mt-6">
            <p className={cn("font-data text-[11px] uppercase tracking-wide", dark ? "text-paper-50/60" : "text-ink-700")}>
              Connected workflow
            </p>
            <ol className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1.5 sm:gap-y-3">
              {engine.workflow.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-data text-[10px] transition-transform duration-300 hover:scale-110",
                      dark ? "bg-lime-500 text-remedy-900" : "bg-remedy-600 text-white"
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className={cn("text-xs leading-tight", dark ? "text-paper-50/80" : "text-ink-700")}>
                    {step}
                  </span>
                  {i < engine.workflow!.length - 1 && (
                    <ArrowRight size={12} className={cn("hidden shrink-0 sm:block", dark ? "text-paper-50/25" : "text-line-200")} />
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        {engine.disclaimer && (
          <div
            className={cn(
              "mt-6 flex items-start gap-3 rounded-xl p-4",
              dark ? "bg-paper-0/10" : "border border-line-200 bg-paper-50"
            )}
          >
            <Info size={16} className={cn("mt-0.5 shrink-0", dark ? "text-lime-500" : "text-remedy-600")} />
            <p className={cn("text-xs leading-relaxed", dark ? "text-paper-50/80" : "text-ink-700")}>
              {engine.disclaimer}
            </p>
          </div>
        )}
      </SpotlightCard>
    </article>
  );
}

export default function EnginesPage() {
  const access = enginesByFamily("access");
  const clinical = enginesByFamily("clinical");
  const operations = enginesByFamily("operations");
  const growth = enginesByFamily("growth");
  const aiBrief = getEngine("ai-patient-history")!;
  const insights = getEngine("insights")!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="The engine ecosystem"
          title="Dedicated engines. One connected clinic."
          sub="Sixteen engines across access, clinical intelligence, operations and growth, working as one system, not five tools stitched together."
          primary={{ label: "Book a demo", href: "/book-demo" }}
        />

        {/* A · Access & Communication — the "every doorway" convergence strip */}
        <section className="bg-paper-0">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <Reveal className="max-w-2xl">
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                {engineFamilies.access.label}
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink-900 md:text-3xl">
                {engineFamilies.access.tagline}
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-line-200 bg-paper-50 px-6 py-6">
                {CHANNELS.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-200 bg-paper-0 px-3 py-1.5"
                  >
                    <c.icon size={14} className="text-remedy-600" />
                    <span className="font-data text-[11px] uppercase tracking-wide text-ink-900">
                      {c.label}
                    </span>
                  </span>
                ))}
                <ArrowRight size={16} className="text-line-200" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-remedy-600 px-3 py-1.5 text-white">
                  <span className="font-data text-[11px] uppercase tracking-wide">One booking engine</span>
                </span>
              </div>
            </Reveal>

            <div className="mt-10 space-y-6">
              {access.map((engine) => (
                <Reveal key={engine.slug}>
                  <EngineArticle engine={engine} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* B · Clinical Intelligence — AI Patient History Brief gets a featured mockup */}
        <section className="bg-paper-50">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <Reveal className="max-w-2xl">
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                {engineFamilies.clinical.label}
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink-900 md:text-3xl">
                {engineFamilies.clinical.tagline}
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <div id={aiBrief.slug} className="scroll-mt-24 grid grid-cols-1 gap-8 rounded-3xl border border-line-200 bg-paper-0 p-6 md:grid-cols-2 md:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <EngineIcon icon={aiBrief.icon} treatment="active" size="lg" />
                    <span className="font-data text-[11px] uppercase tracking-wide text-remedy-600">Featured</span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900">{aiBrief.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{aiBrief.purpose}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {aiBrief.features.slice(0, 8).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-ink-700">
                        <Check size={12} className="mt-0.5 shrink-0 text-remedy-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {aiBrief.disclaimer && (
                    <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-line-200 bg-paper-50 p-3.5">
                      <Info size={14} className="mt-0.5 shrink-0 text-remedy-600" />
                      <p className="text-xs leading-relaxed text-ink-700">{aiBrief.disclaimer}</p>
                    </div>
                  )}
                </div>
                {/* Illustrative brief mockup — labels only, no real/fabricated patient data */}
                <div className="rounded-2xl border border-line-200 bg-paper-50 p-5 shadow-[0_4px_16px_rgba(11,31,51,0.06)]">
                  <div className="flex items-center justify-between">
                    <span className="font-data text-[11px] uppercase text-ink-700">Patient Brief</span>
                    <span className="rounded-lg bg-remedy-100 px-2 py-1 font-data text-[10px] uppercase text-remedy-600">
                      Ready
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {BRIEF_ROWS.map((label) => (
                      <div key={label} className="flex items-center justify-between rounded-lg bg-paper-0 px-3 py-2.5">
                        <span className="text-xs text-ink-700">{label}</span>
                        <span className="h-1.5 w-10 rounded-full bg-mint-300" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 font-data text-[10px] uppercase tracking-wide text-ink-700">Illustrative</p>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 space-y-6">
              {clinical
                .filter((e) => e.slug !== "ai-patient-history")
                .map((engine) => (
                  <Reveal key={engine.slug}>
                    <EngineArticle engine={engine} />
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        {/* C · Clinic Operations — connected-workflow chains + pharmacy accent photo */}
        <section className="bg-paper-0">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <Reveal>
                <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                  {engineFamilies.operations.label}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-ink-900 md:text-3xl">
                  {engineFamilies.operations.tagline}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-700">
                  Laboratory and pharmacy work as connected hand-offs, not
                  separate notebooks. Every step below traces straight
                  through to billing.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <figure className="overflow-hidden rounded-2xl border border-line-200 shadow-[0_4px_16px_rgba(11,31,51,0.08)]">
                  <Image
                    src="/images/engine-pharmacy.webp"
                    alt="A clinic pharmacy with organised medicine storage and prescription-linked dispensing"
                    width={1200}
                    height={896}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="h-40 w-full object-cover md:h-48"
                  />
                </figure>
              </Reveal>
            </div>

            <div className="mt-10 space-y-6">
              {operations.map((engine) => (
                <Reveal key={engine.slug}>
                  <EngineArticle engine={engine} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* D · Growth, Control & Intelligence — dark "engine room" band */}
        <section className="bg-remedy-800">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <Reveal className="max-w-2xl">
              <span className="font-data text-xs uppercase tracking-wide text-lime-500">
                {engineFamilies.growth.label}
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-paper-50 md:text-3xl">
                {engineFamilies.growth.tagline}
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <div id={insights.slug} className="scroll-mt-24 rounded-2xl border border-paper-0/10 bg-paper-0/[0.06] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <EngineIcon icon={insights.icon} treatment="active" size="md" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-paper-50">{insights.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper-50/70">{insights.oneLiner}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {INSIGHTS_CHIPS.map((label) => (
                    <div key={label} className="rounded-xl bg-paper-0/10 p-3 text-center">
                      <BarChart3 size={16} className="mx-auto text-lime-500" />
                      <p className="mt-2 font-data text-[10px] uppercase tracking-wide text-paper-50/70">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="font-data text-[11px] uppercase tracking-wide text-paper-50/60">What it does</p>
                    <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {insights.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-paper-50/80">
                          <Check size={14} className="mt-0.5 shrink-0 text-lime-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-data text-[11px] uppercase tracking-wide text-paper-50/60">Why it matters</p>
                    <ul className="mt-3 space-y-2">
                      {insights.benefits.map((b) => (
                        <li key={b} className="rounded-lg bg-paper-0/10 px-3 py-2 text-sm text-paper-50">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 space-y-6">
              {growth
                .filter((e) => e.slug !== "insights")
                .map((engine) => (
                  <Reveal key={engine.slug}>
                    <EngineArticle engine={engine} tone="dark" />
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
