export const siteConfig = {
  name: "RemedyEngine",
  url: "https://remedyengine.com",
  title: "RemedyEngine | WhatsApp Clinic Automation Software",
  description:
    "RemedyEngine automates clinic booking, reminders, triage, doctor briefs, pharmacy, lab, payments, marketing, and reports through WhatsApp.",
  logo: {
    url: "/images/remedyengine-logo.png",
    width: 1449,
    height: 281,
    alt: "RemedyEngine",
  },
  ogImage: {
    url: "/images/og-image.webp",
    width: 1424,
    height: 752,
    alt: "RemedyEngine clinic automation dashboard connected to a patient chat",
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
