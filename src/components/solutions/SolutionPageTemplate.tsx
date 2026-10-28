import type { Solution } from "@/data/solutions";
import SolutionHero from "./SolutionHero";
import ProblemSolutionSection from "./ProblemSolutionSection";
import CapabilityGrid from "./CapabilityGrid";
import HowItWorksSection from "./HowItWorksSection";
import UseCaseSection from "./UseCaseSection";
import IndustrySection from "./IndustrySection";
import BenefitSection from "./BenefitSection";
import IntegrationSection from "./IntegrationSection";
import CTASection from "./CTASection";

/**
 * SolutionPageTemplate — assembles the canonical enterprise structure shared by
 * every /solutions/[slug] page:
 *
 *   Hero → Business challenge → Solution → Capabilities → How it works →
 *   Use cases → Industries → Key benefits → Integration → CTA
 *
 * The template stays a Server Component (no "use client") so the route can
 * render it on the server and pass the plain solution object down to the
 * client-rendered sections. Only the content changes between pages — never the
 * structure or visual language.
 */
export default function SolutionPageTemplate({ solution }: { solution: Solution }) {
  return (
    <>
      <SolutionHero solution={solution} />
      <ProblemSolutionSection solution={solution} />

      <CapabilityGrid
        title="What this solution includes."
        items={solution.capabilities}
      />

      <HowItWorksSection steps={solution.howItWorks} />

      <UseCaseSection items={solution.useCases} />

      <IndustrySection industries={solution.industries} />

      <BenefitSection items={solution.benefits} />

      {/* Omitted for solutions without an integration surface */}
      <IntegrationSection integration={solution.integration} />

      <CTASection />
    </>
  );
}
