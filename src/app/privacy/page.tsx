import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";
import { contact } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How RemedyEngine collects, uses, and protects information across its clinic operating system.",
  path: "/privacy",
});

// TODO(legal): final wording to be reviewed and approved by the RemedyEngine
// legal owner before launch. Structure below is a standard starting point.
const SECTIONS = [
  {
    heading: "Introduction",
    body: [
      "This Privacy Policy explains how RemedyEngine handles information in connection with our clinic operating system and this website. It applies to the information we collect from clinics, their teams, and website visitors.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you provide directly — such as your name, phone number, and email when you request a demo or contact us — and standard technical information (such as device and usage data) needed to operate and secure the website.",
      "Patient information processed within the RemedyEngine platform is handled on behalf of the clinics that use it, under their instructions.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "We use the information to respond to enquiries, provide and improve our services, and communicate with you about RemedyEngine. We do not sell your personal information.",
    ],
  },
  {
    heading: "Data handling and access",
    body: [
      "Access to information within the platform is controlled through role-based permissions and privacy-conscious workflows. We take reasonable measures to protect information against unauthorised access.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You may contact us to ask about the information we hold about you, or to request corrections, subject to applicable law.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can be sent to ${contact.email} or ${contact.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
