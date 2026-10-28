import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { caseStudiesData } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Glocious Infotech",
  description:
    "Project write-ups covering the systems Glocious architects and builds, published once approved by the client involved.",
};

export default function CaseStudiesPage() {
  const published = Object.values(caseStudiesData);

  return (
    <div className="min-h-screen bg-background text-content-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-soft blur-[150px] rounded-full pointer-events-none" />
        <div className="container-page relative z-10 max-w-3xl text-center">
          <p className="eyebrow mb-4">Case Studies</p>
          <h1 className="text-display mb-6 text-balance">Project write-ups.</h1>
          <p className="text-lead text-content-secondary mb-10">
            Detailed write-ups of the systems we architect and build — published only once the client
            involved has approved them.
          </p>
          <MagneticButton>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Talk to Us
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Listing */}
      <section className="section border-t border-border">
        <div className="container-page">
          {published.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {published.map((study) => (
                <Link
                  key={study.slug}
                  href={`/resources/case-studies/${study.slug}`}
                  className="card card-interactive p-8 md:p-10 block"
                >
                  <h2 className="text-h3 text-content-primary mb-4">{study.title}</h2>
                  <p className="text-content-secondary">{study.subtitle}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card max-w-3xl mx-auto p-8 md:p-12 text-center">
              <h2 className="text-h3 text-content-primary mb-4">Nothing published yet</h2>
              <p className="text-content-secondary mb-8">
                We publish case studies only with client approval, and none are live on this site yet.
                If you'd like to discuss relevant work directly, get in touch.
              </p>
              <MagneticButton>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Talk to Us
                </Link>
              </MagneticButton>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
