import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const COLUMNS = [
  {
    title: "Product",
    links: ["AI Assistant", "Workflow", "Pharmacy & Lab", "Analytics", "Marketing"],
  },
  {
    title: "Solutions",
    links: ["Clinics", "Multi-branch chains", "Doctors", "Pharmacy", "Labs"],
  },
  {
    title: "Company",
    links: ["About", "Security", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-200 bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <BrandLogo imageClassName="h-10" sizes="206px" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700">
              The engine that runs your clinic. WhatsApp automation, clinical
              workflows, pharmacy, lab, marketing, and reporting — one
              connected platform.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-data text-xs font-semibold uppercase text-ink-700">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-700 hover:text-remedy-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line-200 pt-8 md:flex-row md:items-center">
          <p className="font-data text-xs text-ink-700">
            © 2026 RemedyEngine. All rights reserved.
          </p>
          <p className="max-w-lg text-xs leading-relaxed text-ink-700">
            Outcome figures referenced on this site are illustrative targets,
            not guarantees, and are validated per customer.
          </p>
        </div>
      </div>
    </footer>
  );
}
