import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";
import { contact } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of the RemedyEngine website and clinic operating system.",
  path: "/terms",
});

// TODO(legal): final wording to be reviewed and approved by the RemedyEngine
// legal owner before launch. Structure below is a standard starting point.
const SECTIONS = [
  {
    heading: "Acceptance of terms",
    body: [
      "By accessing this website or using the RemedyEngine platform, you agree to these Terms of Service. If you are using RemedyEngine on behalf of a clinic, you agree on its behalf.",
    ],
  },
  {
    heading: "Use of the service",
    body: [
      "RemedyEngine provides software to help clinics manage bookings, records, consultations, laboratory, pharmacy, billing, and follow-ups. You agree to use the service lawfully and only for legitimate clinic operations.",
    ],
  },
  {
    heading: "Clinical responsibility",
    body: [
      "RemedyEngine supports healthcare professionals but does not provide medical advice. Any AI-generated summaries organise available information to support professionals and do not replace independent clinical assessment, diagnosis, or professional medical judgment. Clinicians remain responsible for all clinical decisions.",
    ],
  },
  {
    heading: "Accounts and access",
    body: [
      "Clinics are responsible for managing their team's access and for the accuracy of the information they enter. Access is governed by role-based permissions.",
    ],
  },
  {
    heading: "Availability and changes",
    body: [
      "We may update, improve, or change the service over time. We aim to keep the service available but do not guarantee uninterrupted access.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these terms can be sent to ${contact.email} or ${contact.phoneDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
