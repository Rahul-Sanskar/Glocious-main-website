"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { PageContent } from "@/data/pages";

export default function DynamicPageTemplate({ data, category }: { data: PageContent, category: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-content-primary">
        <h2>Page not found.</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">

      {/* Ambient glowing background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[150px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative z-10">

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-content-muted text-xs mb-12 uppercase tracking-widest font-medium"
        >
          <Link href="/" className="transition-colors hover:text-content-primary">Home</Link>
          <span>/</span>
          <Link href={`/#${category.toLowerCase()}`} className="transition-colors hover:text-content-primary">{category}</Link>
          <span>/</span>
          <span className="text-accent">{data.title}</span>
        </motion.div>

        {/* Hero Section */}
        <div className={`mb-24 flex flex-col ${data.imageUrl ? 'lg:flex-row lg:items-center lg:justify-between' : ''} gap-12`}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl ${data.imageUrl ? 'lg:max-w-2xl' : ''}`}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary mb-8 transition-colors">
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>

            <h1
              className="text-display mb-6 text-content-primary"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--color-text-primary) 10%, var(--color-text-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title}
            </h1>
            <p className="text-lead text-accent font-medium mb-8">
              {data.subtitle}
            </p>
            <p className="text-body text-content-secondary leading-relaxed mb-12">
              {data.description}
            </p>

            <MagneticButton>
              <Link href="/get-started" className="btn btn-primary btn-lg">
                {category === "Training" ? "Enroll Now" : "Request Consultation"}
              </Link>
            </MagneticButton>
          </motion.div>

          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative hidden md:block"
            >
              {/* Decorative glow behind image */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[100px] rounded-full"
                style={{ background: "var(--glow-color)" }}
              />

              <div className="group relative rounded-xl overflow-hidden border border-border bg-surface aspect-[4/3] shadow-card">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border border-border rounded-xl pointer-events-none"></div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 80px color-mix(in srgb, var(--color-background) 70%, transparent)",
                  }}
                />
              </div>
            </motion.div>
          )}

        </div>

        {/* Dynamic Content Sections */}
        <div className="space-y-16">

          {/* Features Grid */}
          {data.features && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="card p-8 md:p-12 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top, var(--glow-color) 0%, transparent 70%)",
                }}
              />
              <h3 className="text-h3 text-content-primary mb-10">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-accent shrink-0 mt-1" />
                    <span className="text-content-secondary text-body leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Workflow / Process Steps */}
          {data.workflowSteps && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-h3 text-content-primary mb-10">How We Build It</h3>
              <div className="space-y-6">
                {data.workflowSteps.map((step, i) => (
                  <div key={i} className="card p-6 flex gap-6 hover:border-accent">
                    <div className="w-12 h-12 rounded-full bg-accent-soft text-accent flex items-center justify-center font-bold text-h4 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-h4 text-content-primary mb-2">{step.title}</h4>
                      <p className="text-content-secondary">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Modules (For Training) */}
          {data.modules && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-h3 text-content-primary mb-10">Curriculum Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.modules.map((mod, i) => (
                  <div key={i} className="card p-8">
                    <h4 className="text-h4 text-accent mb-2">{mod.title}</h4>
                    <p className="text-content-secondary">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQs */}
          {data.faqs && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-h3 text-content-primary mb-10">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`card overflow-hidden ${
                      openFaq === i ? 'border-accent bg-accent-soft' : ''
                    }`}
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className={`font-medium text-h4 ${openFaq === i ? 'text-accent' : 'text-content-primary'}`}>{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : 'text-content-muted'}`} />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                    >
                      <div className="px-6 pb-6 text-content-secondary leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </main>
  );
}
