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

export default function Home() {
  return (
    <>
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
