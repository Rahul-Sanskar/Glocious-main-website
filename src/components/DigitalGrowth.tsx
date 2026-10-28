"use client";

import { motion } from "framer-motion";
import {
  Search, Share2, Megaphone, MousePointerClick,
  FileText, Users, BarChart2, ArrowRight,
} from "lucide-react";
import Link from "next/link";

/**
 * Section 5 — Digital Growth.
 *
 * Deliberately rendered as a numbered editorial list rather than another card
 * grid: the brief positions these as connected growth disciplines, and the
 * homepage already carries several card grids. Seven items also sit awkwardly
 * in a 3- or 4-column grid, so a list keeps the rhythm even.
 */
const services = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical and content search optimisation that builds durable organic visibility and a steady flow of qualified inbound demand.",
  },
  {
    icon: Share2,
    title: "SMO",
    description:
      "Social media optimisation — strengthening brand discoverability, profile credibility and shareability across the platforms your customers actually use.",
  },
  {
    icon: Megaphone,
    title: "SMM",
    description:
      "Social media marketing — planned content, campaigns and community engagement that keep your brand present, consistent and relevant.",
  },
  {
    icon: MousePointerClick,
    title: "PPC",
    description:
      "Paid search and social campaigns managed around measurable, cost-efficient lead acquisition rather than vanity impressions.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Editorial strategy and content that establishes authority and supports every stage of the buying journey.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Structured funnels and campaigns engineered to deliver a consistent volume of high-intent business enquiries.",
  },
  {
    icon: BarChart2,
    title: "Lead Management",
    description:
      "Capture, scoring, routing and nurturing workflows so that no enquiry is lost once it has arrived.",
  },
];

export default function DigitalGrowth() {
  return (
    <section id="digital" className="section relative overflow-hidden border-t border-border bg-background-subtle">
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, var(--glow-color) 0%, transparent 65%)",
        }}
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — section intro */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="eyebrow mb-4">Digital Growth</p>
              <h2 className="text-h2 text-content-primary mb-6">
                Growth engineered,
                <br />
                <span className="font-normal text-content-secondary">
                  not guessed at.
                </span>
              </h2>
              <p className="text-body text-content-secondary max-w-md mb-8">
                Seven connected disciplines that take a business from being found,
                to being chosen, to being bought from again.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-content-secondary transition-colors hover:text-accent"
              >
                Talk to our growth team <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right — numbered disciplines */}
          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.li
                    key={svc.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group relative border-b border-border"
                  >
                    {/* Purposeful hover state — an accent rule that draws in */}
                    <span
                      aria-hidden
                      className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 transition-transform duration-slow ease-out-soft group-hover:scale-x-100"
                      style={{ background: "var(--color-accent)" }}
                    />

                    <div className="flex items-start gap-5 sm:gap-8 py-6">
                      <span className="font-mono text-2xs tabular-nums pt-1.5 text-content-muted transition-colors group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 border transition-colors bg-accent-soft border-accent-soft group-hover:bg-accent">
                        <Icon
                          size={16}
                          className="text-accent transition-colors group-hover:text-accent-contrast"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-h4 mb-1.5 text-content-primary">
                          {svc.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-content-secondary">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
