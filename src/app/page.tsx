import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { AIFeatures } from "@/components/sections/ai-features";
import { Automations } from "@/components/sections/automations";
import { Workflow } from "@/components/sections/workflow";
import { Stakeholders } from "@/components/sections/stakeholders";
import { Differentiators } from "@/components/sections/differentiators";
import { CTA } from "@/components/sections/cta";
import { absoluteUrl, siteConfig, stringifyJsonLd } from "@/lib/seo";

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
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      name: siteConfig.title,
      url: siteConfig.url,
      description: siteConfig.description,
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#software"),
      },
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
        "AI WhatsApp booking and patient intake",
        "Automated appointment reminders and no-show re-engagement",
        "AI triage, specialist matching, and doctor briefs",
        "Digital prescriptions with pharmacy and lab handoff",
        "Patient CRM, payments, marketing, and live reporting",
        "Multi-branch clinic workflows with role-based access",
      ],
      offers: {
        "@type": "Offer",
        url: absoluteUrl("/book-demo"),
        availability: "https://schema.org/InStock",
        description: "Custom pricing shared after a RemedyEngine demo",
      },
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
        <Hero />
        <Problem />
        <AIFeatures />
        <Automations />
        <Workflow />
        <Stakeholders />
        <Differentiators />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
