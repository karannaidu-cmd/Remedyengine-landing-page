import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { EngineIcon } from "@/components/engine-icon";
import { PageHero } from "@/components/site/page-hero";
import { CTABand } from "@/components/site/cta-band";
import { solutions } from "@/lib/solutions";
import { getEngine } from "@/lib/engines";
import {
  pageMetadata,
  breadcrumbJsonLd,
  webPageJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Solutions",
  description:
    "From solo practices to growing chains, RemedyEngine adapts to how your clinic runs — solo doctors, multi-doctor clinics, specialty clinics, owners and chains.",
  path: "/solutions",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      name: "Solutions | RemedyEngine",
      path: "/solutions",
      description:
        "RemedyEngine solutions for solo doctors, multi-doctor clinics, specialty clinics, clinic owners and growing clinic chains.",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
    ]),
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Built for every clinic"
          title="Built for every clinic."
          sub="From a single doctor to a growing chain, RemedyEngine adapts to how your clinic actually runs."
          primary={{ label: "Book a demo", href: "/book-demo" }}
        />

        {/* Quick jump strip — orients visitors before a 5-section scroll */}
        <div className="border-b border-line-200 bg-paper-0">
          <div className="mx-auto max-w-[1200px] px-5 py-4 md:px-8">
            <nav aria-label="Jump to a solution" className="flex flex-wrap gap-2">
              {solutions.map((s, i) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-200 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-remedy-500 hover:text-remedy-600"
                >
                  <span className="font-data text-[10px] text-remedy-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {solutions.map((solution, si) => (
          <section
            key={solution.slug}
            id={solution.slug}
            className={si % 2 === 0 ? "scroll-mt-24 bg-paper-0" : "scroll-mt-24 bg-paper-50"}
          >
            <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={si % 2 === 0 ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3">
                    <EngineIcon icon={solution.icon} treatment="clay" size="md" />
                    <span>
                      <span className="block font-data text-[10px] tracking-wide text-line-200">
                        {String(si + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
                      </span>
                      <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                        {solution.name}
                      </span>
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
                    {solution.headline}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-700">
                    {solution.intro}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {solution.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink-900">
                        <Check size={16} className="mt-0.5 shrink-0 text-remedy-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.engines.map((slug) => {
                      const engine = getEngine(slug);
                      if (!engine) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/engines#${slug}`}
                          className="rounded-lg border border-line-200 bg-paper-0 px-3 py-1.5 font-data text-[11px] uppercase tracking-wide text-ink-700 hover:border-remedy-500 hover:text-remedy-600"
                        >
                          {engine.name.replace(" Engine", "")}
                        </Link>
                      );
                    })}
                  </div>
                </Reveal>

                {solution.image && (
                  <Reveal delay={100} className={si % 2 === 0 ? "" : "lg:order-1"}>
                    <figure className="relative overflow-hidden rounded-2xl border border-line-200 shadow-[0_4px_16px_rgba(11,31,51,0.08)]">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt ?? solution.headline}
                        width={1200}
                        height={800}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="h-full w-full object-cover"
                      />
                      {/* Consistent brand duotone wash — gives /solutions its
                          own visual identity, distinct from how the same
                          photography reads elsewhere on the site. */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 mix-blend-multiply"
                        style={{
                          background:
                            "linear-gradient(160deg, rgba(4,61,50,0.28) 0%, rgba(22,167,121,0.06) 55%, transparent 85%)",
                        }}
                      />
                    </figure>
                    {solution.illustrative && (
                      <figcaption className="mt-2 font-data text-[11px] uppercase tracking-wide text-ink-700">
                        Illustrative
                      </figcaption>
                    )}
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        ))}

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
