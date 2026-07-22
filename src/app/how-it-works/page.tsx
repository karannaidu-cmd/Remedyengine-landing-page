import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site/page-hero";
import { CTABand } from "@/components/site/cta-band";
import { JourneyScrolly } from "@/components/home/journey-scrolly";
import {
  pageMetadata,
  breadcrumbJsonLd,
  webPageJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "Follow one patient visit through RemedyEngine — booking, brief, consultation, prescription, lab, pharmacy, billing and follow-up, all connected.",
  path: "/how-it-works",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      name: "How It Works | RemedyEngine",
      path: "/how-it-works",
      description:
        "Follow one patient visit as it flows through every RemedyEngine engine.",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "How It Works", path: "/how-it-works" },
    ]),
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="How it works"
          title="One patient. Every engine. One connected journey."
          sub="Follow a single visit as it flows through the whole clinic — from the first message to the follow-up — with every engine handing off to the next."
          primary={{ label: "Book a demo", href: "/book-demo" }}
          secondary={{ label: "Explore the engines", href: "/engines" }}
        />

        <section className="bg-paper-50">
          <div className="mx-auto max-w-[1200px] px-5 pb-4 md:px-8">
            <figure className="overflow-hidden rounded-2xl border border-line-200 shadow-[0_4px_16px_rgba(11,31,51,0.08)]">
              <Image
                src="/images/patient-journey.webp"
                alt="One patient's journey through RemedyEngine — communication, booking, consultation, laboratory, pharmacy, billing and follow-up as connected stages"
                width={1584}
                height={672}
                sizes="(max-width: 1200px) 100vw, 1120px"
                className="h-auto w-full"
              />
            </figure>
            <figcaption className="mt-2 font-data text-[11px] uppercase tracking-wide text-ink-700">
              Illustrative
            </figcaption>
          </div>
        </section>

        <section className="bg-paper-0">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
            <JourneyScrolly />
          </div>
        </section>

        <CTABand
          title="Every step, one connected system."
          body="See the whole journey running on RemedyEngine in a 20-minute demo."
        />
      </main>
      <Footer />
    </>
  );
}
