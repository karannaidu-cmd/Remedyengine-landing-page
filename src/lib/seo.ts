export const siteConfig = {
  name: "RemedyEngine",
  url: "https://www.remedyengin.com",
  title: "RemedyEngine | The AI Clinic Operating System",
  description:
    "RemedyEngine is an AI-powered clinic operating system — connecting WhatsApp, Instagram, website, walk-in and AI-call booking with records, consultations, lab, pharmacy, billing and follow-ups on one connected platform.",
  logo: {
    url: "/images/remedyengine-logo.png",
    width: 1449,
    height: 281,
    alt: "RemedyEngine",
  },
  ogImage: {
    url: "/images/og-image.webp",
    width: 1200,
    height: 630,
    alt: "The RemedyEngine core connecting a clinic's booking, records, consultation, pharmacy, lab, billing and analytics engines",
  },
  keywords: [
    "clinic automation software",
    "WhatsApp clinic booking",
    "AI front desk for clinics",
    "clinic management system",
    "doctor appointment reminders",
    "patient no-show automation",
    "pharmacy lab clinic software",
    "healthcare CRM",
    "multi-branch clinic software",
    "digital prescriptions",
  ],
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ---------------------------------------------------------------------------
// Per-page metadata helper
// ---------------------------------------------------------------------------
// Usage in a page/layout:
//   export const metadata = pageMetadata({
//     title: "Booking Engine",
//     description: "...",
//     path: "/engines/booking",
//   });
// `title` is passed through the `%s | RemedyEngine` template from layout.tsx,
// so pass the bare page name (omit for the home page default).

import type { Metadata } from "next";

type PageMetaInput = {
  title?: string;
  description: string;
  path: string; // absolute path beginning with "/"
  ogImage?: { url: string; width: number; height: number; alt: string };
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage = siteConfig.ogImage,
  noindex = false,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD builders (return plain objects; wrap with stringifyJsonLd at render)
// ---------------------------------------------------------------------------

/** BreadcrumbList from an ordered [name, path] list. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** A standalone WebPage node linked to the site's WebSite graph. */
export function webPageJsonLd({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    name,
    url: absoluteUrl(path),
    description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    inLanguage: "en",
  };
}
