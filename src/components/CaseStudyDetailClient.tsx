"use client";

import { CaseStudyContent } from "@/data/case-studies";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

interface Props {
  data: CaseStudyContent;
}

export default function CaseStudyDetailClient({ data }: Props) {
  return (
    <main className="pt-40 pb-24 relative overflow-hidden bg-background">
      {/* Ambient glowing background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-soft blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container-page relative z-10">
        
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-content-muted text-2xs mb-12 uppercase tracking-widest font-medium"
        >
          <Link href="/" className="hover:text-content-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/resources/case-studies" className="hover:text-content-primary transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-accent truncate">{data.client}</span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge badge-accent mb-6">
              Client Case Study
            </div>
            
            <h1
              className="text-display text-content-primary mb-6"
              style={{
                backgroundImage: "linear-gradient(180deg, var(--color-text-primary) 10%, var(--color-text-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {data.title}
            </h1>

            <p className="text-lead text-accent font-medium mb-8 leading-relaxed">
              {data.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-border text-content-secondary">
              <div>
                <span className="text-content-muted text-2xs uppercase tracking-wider block mb-1">Partner Clinic Group</span>
                <strong className="text-content-primary text-h4">{data.client}</strong>
              </div>
              <div>
                <span className="text-content-muted text-2xs uppercase tracking-wider block mb-1">Geographic Focus</span>
                <strong className="text-content-primary text-h4">{data.location}</strong>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Summary & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-h3 text-content-primary mb-6">Executive Summary</h3>
            <p className="text-content-secondary text-body leading-relaxed mb-8">
              {data.executiveSummary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 card p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-danger-soft blur-[50px] rounded-full"></div>
            <div>
              <h4 className="text-danger font-semibold text-2xs uppercase tracking-widest mb-4">The Challenge</h4>
              <p className="text-content-secondary leading-relaxed text-sm">
                {data.challenge}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Technology Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 card p-8 md:p-12"
        >
          <h3 className="text-h3 text-content-primary mb-8 flex items-center gap-3">
            <Cpu className="text-accent" size={24} />
            Core Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.techStack.map((tech, i) => (
              <div key={i} className="border-l-2 border-accent pl-6 py-1">
                <h4 className="text-h4 text-content-primary mb-2">{tech.name}</h4>
                <p className="text-content-secondary text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed System Architecture & Data Flow */}
        <div className="mb-20 space-y-12">
          <h3 className="text-h2 text-content-primary">System Architecture &amp; Data Flow</h3>
          <div className="space-y-8">
            {data.architecture.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 md:p-10 flex flex-col gap-6"
              >
                <div>
                  <h4 className="text-h4 text-content-primary mb-3">{step.title}</h4>
                  <p className="text-content-secondary leading-relaxed text-sm md:text-body">{step.description}</p>
                </div>
                
                {step.codeSnippet && (
                  <div className="relative rounded-xl overflow-hidden border border-border bg-surface-sunken p-5">
                    <div className="absolute top-3 right-4 text-[10px] text-content-muted uppercase tracking-widest font-mono">
                      {step.codeSnippet.language}
                    </div>
                    <pre className="overflow-x-auto text-xs md:text-sm font-mono text-accent leading-relaxed">
                      <code>{step.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security and Edge Case Handling */}
        <div className="mb-20">
          <h3 className="text-h2 text-content-primary mb-10">Security &amp; Edge-Case Handling</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.security.map((sec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 relative group overflow-hidden flex flex-col h-full justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <ShieldCheck className="text-accent mb-4" size={24} />
                  <h4 className="text-h4 text-content-primary mb-2">{sec.title}</h4>
                  <p className="text-content-secondary text-xs md:text-sm leading-relaxed">{sec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcomes / Performance Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 card p-8 md:p-12"
        >
          <h3 className="text-h3 text-content-primary mb-8">Performance Impact Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-strong text-content-muted text-2xs uppercase tracking-wider font-semibold">
                  <th className="pb-4 pr-4">Metrics Category</th>
                  <th className="pb-4 px-4 text-center md:text-left">Legacy Workflow</th>
                  <th className="pb-4 pl-4 text-accent text-center md:text-left">AI Autonomous State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm md:text-body">
                {data.metrics.map((metric, i) => (
                  <tr key={i} className="hover:bg-accent-soft transition-colors">
                    <td className="py-4 pr-4 font-medium text-content-primary">{metric.label}</td>
                    <td className="py-4 px-4 text-content-muted text-center md:text-left">{metric.preValue}</td>
                    <td className="py-4 pl-4 text-accent font-semibold text-center md:text-left">{metric.postValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Conclusion CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="text-content-muted text-2xs uppercase tracking-widest font-bold block mb-2">Conclusion</span>
            <p className="text-content-secondary leading-relaxed text-sm md:text-body">
              {data.conclusion}
            </p>
          </div>
          <MagneticButton>
            <Link 
              href="/get-started"
              className="btn border border-accent bg-accent-soft text-accent hover:bg-accent hover:text-accent-contrast shrink-0"
            >
              Request Custom AI Build
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </main>
  );
}
