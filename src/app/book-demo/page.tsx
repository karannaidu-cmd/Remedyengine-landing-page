import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BookDemoForm } from "@/components/book-demo-form";
import { absoluteUrl, siteConfig, stringifyJsonLd } from "@/lib/seo";

const demoDescription =
  "See how RemedyEngine turns a WhatsApp enquiry into a booked, briefed, billed, and followed-up patient in a 20-minute clinic automation demo.";

export const metadata: Metadata = {
  title: "Book a 20-minute clinic automation demo",
  description: demoDescription,
  alternates: {
    canonical: "/book-demo",
  },
  openGraph: {
    title: "Book a 20-minute RemedyEngine demo",
    description: demoDescription,
    url: "/book-demo",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a 20-minute RemedyEngine demo",
    description: demoDescription,
    images: [
      {
        url: siteConfig.ogImage.url,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/book-demo#webpage"),
      name: "Book a 20-minute RemedyEngine demo",
      url: absoluteUrl("/book-demo"),
      description: demoDescription,
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl("/book-demo#breadcrumb"),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Book a demo",
          item: absoluteUrl("/book-demo"),
        },
      ],
    },
  ],
};

const WHAT_YOU_SEE = [
  "How the AI books, triages, and answers patients on WhatsApp",
  "The doctor, pharmacy, and lab dashboards in action",
  "Your no-show reminders, follow-ups, and win-back automations",
];

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1 bg-paper-50">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-remedy-600"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                Book a demo
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-5xl">
                See RemedyEngine run your clinic.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
                In 20 minutes, watch a WhatsApp message become a booked,
                briefed, billed, and followed-up patient — mapped to your
                clinic&apos;s own workflow.
              </p>

              <ul className="mt-8 space-y-3">
                {WHAT_YOU_SEE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-remedy-100 text-remedy-600">
                      <Check size={13} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["No patient app", "20 minutes", "No commitment"].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-line-200 bg-paper-0 px-3 py-1.5 font-data text-[11px] uppercase tracking-wide text-ink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:pl-4">
              <BookDemoForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
