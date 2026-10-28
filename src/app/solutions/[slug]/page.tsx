import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolution, solutionBySlug } from "@/data/solutions";

export function generateStaticParams() {
  return Object.keys(solutionBySlug).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};

  const title = `${solution.title} | Glocious Infotech`;
  const description = `${solution.tagline} ${solution.summary}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default function SolutionsPage({ params }: { params: { slug: string } }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  return (
    <>
      <Navbar />
      <main>
        <SolutionPageTemplate solution={solution} />
      </main>
      <Footer />
    </>
  );
}
