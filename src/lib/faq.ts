// Shared so the visible FAQ section and the FAQPage JSON-LD never drift.
// FAQ schema is only emitted because these questions are visibly rendered
// on the page (see brief §17).

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is RemedyEngine?",
    a: "RemedyEngine is an AI-powered clinic operating system. It connects every patient channel and every clinic department, including booking, records, consultations, prescriptions, laboratory, pharmacy, billing and follow-ups, through a suite of connected engines on one platform.",
  },
  {
    q: "Do patients need to download an app?",
    a: "No. Patients reach your clinic through the channels they already use: WhatsApp, Instagram, Facebook, your website, walk-in or an AI call. Everything flows into one booking engine, and there is no patient app to install.",
  },
  {
    q: "Which channels can patients book through?",
    a: "WhatsApp, Instagram, Facebook, your website, walk-in reception, staff-assisted booking and AI calling all feed into the same booking engine, so no enquiry is lost regardless of where it starts.",
  },
  {
    q: "Does the AI make clinical decisions?",
    a: "No. The AI Patient History Brief organises available patient information to support healthcare professionals. It does not replace independent clinical assessment, diagnosis or professional medical judgment. Clinicians make all clinical decisions.",
  },
  {
    q: "Does RemedyEngine work for multiple doctors and locations?",
    a: "Yes. It supports multi-doctor availability, a shared patient record, role-based access, and multi-location visibility, so growing clinics and chains can standardise how every branch runs.",
  },
  {
    q: "How do we get started?",
    a: "Book a live demo and we'll walk you through RemedyEngine mapped to your clinic's own workflow. You can also reach us on WhatsApp or email.",
  },
];
