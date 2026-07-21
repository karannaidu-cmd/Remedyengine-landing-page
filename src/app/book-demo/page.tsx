import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail, MessageCircle } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { BookDemoForm } from "@/components/book-demo-form";
import {
  pageMetadata,
  breadcrumbJsonLd,
  webPageJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";
import { contact, mailtoHref, whatsappHref } from "@/lib/contact";

const demoDescription =
  "See how RemedyEngine's connected engines turn a patient enquiry into a booked, briefed, prescribed, and followed-up visit in a 20-minute demo.";

export const metadata: Metadata = pageMetadata({
  title: "Book a 20-minute demo",
  description: demoDescription,
  path: "/book-demo",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      name: "Book a 20-minute RemedyEngine demo",
      path: "/book-demo",
      description: demoDescription,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Book a demo", path: "/book-demo" },
    ]),
  ],
};

const WHAT_YOU_SEE = [
  "Every patient channel — WhatsApp, Instagram, Facebook, website, walk-in, AI calling — landing in one booking engine",
  "The AI Patient History Brief and consultation workflow, doctor's-eye view",
  "Prescriptions, lab and pharmacy handing off to each other automatically",
  "The clinic command centre — appointments, revenue, and alerts in real time",
];

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="relative flex-1 overflow-hidden bg-paper-50">
        <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                Book a demo
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-5xl">
                See RemedyEngine run your clinic.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
                In 20 minutes, watch a patient enquiry become a booked,
                briefed, prescribed, and followed-up visit — mapped to your
                clinic&apos;s own workflow across every connected engine.
              </p>

              <ul className="mt-8 space-y-3">
                {WHAT_YOU_SEE.map((item, i) => (
                  <Reveal key={item} delay={i * 60}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-remedy-100 text-remedy-600">
                        <Check size={13} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink-700">
                        {item}
                      </span>
                    </li>
                  </Reveal>
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

              <div className="mt-8 flex flex-wrap gap-4 border-t border-line-200 pt-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-remedy-600"
                >
                  <MessageCircle size={16} /> {contact.phoneDisplay}
                </a>
                <a
                  href={mailtoHref}
                  className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-remedy-600"
                >
                  <Mail size={16} /> {contact.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:pl-4">
              <BookDemoForm />
              <p className="mt-4 text-center text-xs text-ink-700">
                Prefer to talk first?{" "}
                <Link href="/contact" className="font-medium text-remedy-600 hover:underline">
                  Contact us directly
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
