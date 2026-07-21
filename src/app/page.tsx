import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { EngineEcosystem } from "@/components/home/engine-ecosystem";
import {
  OmnichannelEntry,
  BeforeAfter,
  AiBriefSection,
  ConnectedJourney,
  CommandCentre,
  BuiltForEveryClinic,
  OperationalBenefits,
  WhyDifferent,
  FreeTrialSection,
  FaqSection,
} from "@/components/home/sections";
import { CTABand } from "@/components/site/cta-band";
import { absoluteUrl, siteConfig, stringifyJsonLd } from "@/lib/seo";
import { contact } from "@/lib/contact";
import { faqs } from "@/lib/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo.url),
        width: siteConfig.logo.width,
        height: siteConfig.logo.height,
      },
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contact.email,
        telephone: `+${contact.phoneDigits}`,
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": absoluteUrl("/#organization") },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      name: siteConfig.title,
      url: siteConfig.url,
      description: siteConfig.description,
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#software") },
      primaryImageOfPage: absoluteUrl(siteConfig.ogImage.url),
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/#software"),
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.ogImage.url),
      description: siteConfig.description,
      audience: {
        "@type": "Audience",
        audienceType:
          "Clinic owners, doctors, front-desk teams, pharmacies, labs, and multi-branch clinic chains",
      },
      featureList: [
        "Omnichannel booking across WhatsApp, Instagram, Facebook, website, walk-in and AI calls",
        "Automated WhatsApp conversation and AI calling",
        "AI Patient History Brief for doctors",
        "Patient records, consultation and digital prescriptions",
        "Laboratory, pharmacy, billing and queue management",
        "Follow-up and retention, insights, role-based access and global search",
      ],
      offers: {
        "@type": "Offer",
        url: absoluteUrl("/book-demo"),
        availability: "https://schema.org/InStock",
        description: "Custom pricing shared after a RemedyEngine demo",
      },
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/#faq"),
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <HomeHero />
        <OmnichannelEntry />
        <BeforeAfter />
        <EngineEcosystem />
        <AiBriefSection />
        <ConnectedJourney />
        <CommandCentre />
        <BuiltForEveryClinic />
        <OperationalBenefits />
        <WhyDifferent />
        <FreeTrialSection />
        <FaqSection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
