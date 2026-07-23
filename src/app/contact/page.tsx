import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BookDemoForm } from "@/components/book-demo-form";
import { EngineIcon } from "@/components/engine-icon";
import {
  pageMetadata,
  breadcrumbJsonLd,
  webPageJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";
import { contact, mailtoHref, telHref, whatsappHref } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contact RemedyEngine by emailing ${contact.email} or messaging ${contact.phoneDisplay} on WhatsApp.`,
  path: "/contact",
  keywords: [
    "contact RemedyEngine",
    "clinic software support",
    "RemedyEngine customer support",
    "clinic automation help",
  ],
});

const METHODS = [
  { icon: Mail, label: "Email", value: contact.email, href: mailtoHref },
  { icon: MessageCircle, label: "WhatsApp", value: contact.phoneDisplay, href: whatsappHref },
  { icon: Phone, label: "Call", value: contact.phoneDisplay, href: telHref },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      name: "Contact | RemedyEngine",
      path: "/contact",
      description: "Contact the RemedyEngine team.",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1 bg-paper-50">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
                Contact
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-5xl">
                Talk to the RemedyEngine team.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
                Have a question, or want to see RemedyEngine run your clinic?
                Reach us directly, or leave your details and we&apos;ll come to
                you.
              </p>

              <ul className="mt-8 space-y-3">
                {METHODS.map((m) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      target={m.label !== "Email" && m.label !== "Call" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-line-200 bg-paper-0 p-4 transition-colors hover:border-remedy-500"
                    >
                      <EngineIcon icon={m.icon} treatment="clay" size="md" />
                      <span>
                        <span className="block font-data text-[11px] uppercase tracking-wide text-ink-700">
                          {m.label}
                        </span>
                        <span className="block font-sans text-base font-semibold text-ink-900">
                          {m.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
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
