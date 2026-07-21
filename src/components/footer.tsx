import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { contact, mailtoHref, whatsappHref } from "@/lib/contact";

// Every link resolves to a real route (no href="#").
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Engine Ecosystem", href: "/engines" },
      { label: "AI Patient History Brief", href: "/engines#ai-patient-history" },
      { label: "Omnichannel Booking", href: "/engines#booking" },
      { label: "Insights", href: "/engines#insights" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Engines",
    links: [
      { label: "Booking", href: "/engines#booking" },
      { label: "Conversation", href: "/engines#conversation" },
      { label: "Consultation", href: "/engines#consultation" },
      { label: "Prescriptions", href: "/engines#prescriptions" },
      { label: "Laboratory", href: "/engines#laboratory" },
      { label: "Pharmacy", href: "/engines#pharmacy" },
      { label: "All engines", href: "/engines" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solo Doctors", href: "/solutions#solo-doctors" },
      { label: "Multi-Doctor Clinics", href: "/solutions#multi-doctor-clinics" },
      { label: "Specialty Clinics", href: "/solutions#specialty-clinics" },
      { label: "Clinic Owners", href: "/solutions#clinic-owners" },
      { label: "Clinic Chains", href: "/solutions#clinic-chains" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Book a Demo", href: "/book-demo" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-200 bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <BrandLogo imageClassName="h-10" sizes="206px" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700">
              The engine that runs your entire clinic — WhatsApp, records,
              consultations, pharmacy, lab, billing and follow-ups on one
              connected operating system.
            </p>
            <div className="mt-5 space-y-2">
              <a
                href={mailtoHref}
                className="flex items-center gap-2 text-sm text-ink-700 hover:text-remedy-600"
              >
                <Mail size={15} /> {contact.email}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink-700 hover:text-remedy-600"
              >
                <MessageCircle size={15} /> {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-data text-xs font-semibold uppercase text-ink-700">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-700 hover:text-remedy-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line-200 pt-8">
          <p className="font-serif text-base text-ink-900">
            WhatsApp for your patients. AI assistance for your doctors. One
            connected dashboard for your clinic.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-line-200 pt-6 md:flex-row md:items-center">
          <p className="font-data text-xs text-ink-700">
            © 2026 RemedyEngine. All rights reserved. · www.remedyengin.com
          </p>
          <p className="max-w-lg text-xs leading-relaxed text-ink-700">
            AI-generated summaries support healthcare professionals and do not
            replace independent clinical judgment. Any outcomes referenced are
            illustrative, not guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
