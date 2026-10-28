"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "../MagneticButton";
import type { Solution } from "@/data/solutions";

/**
 * SolutionHero — the single entry point for every /solutions/[slug] page.
 *
 * Structure is fixed (breadcrumb → category → title → tagline → summary → CTA,
 * with an "at a glance" panel) so all eleven solutions open the same way. Only
 * the content changes.
 */
export default function SolutionHero({ solution }: { solution: Solution }) {
  return (
    <section className="relative overflow-hidden pt-[124px] pb-16 md:pt-[156px] md:pb-24">
      {/* Ambient brand wash + architectural grid, matching the homepage hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, var(--glow-color) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 45%, var(--color-background) 85%)",
          }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 text-content-muted text-xs mb-10 font-medium uppercase tracking-widest"
        >
          <Link href="/" className="transition-colors hover:text-content-primary">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>Solutions</span>
          <span aria-hidden>/</span>
          <span className="text-accent">{solution.title}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          {/* ── Left: message ─────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="badge badge-accent mb-7"
            >
              <span className="status-dot" aria-hidden />
              {solution.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-content-primary mb-5"
            >
              {solution.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="text-lead text-accent font-medium mb-5 max-w-xl"
            >
              {solution.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="text-body text-content-secondary measure mb-10"
            >
              {solution.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              <MagneticButton>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Talk to Us
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* ── Right: at a glance ────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="card card-elevated p-6 md:p-8 lg:mt-2"
          >
            <p className="text-2xs font-semibold uppercase tracking-widest text-content-secondary mb-6">
              At a glance
            </p>
            <ul className="space-y-4">
              {solution.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-accent shrink-0 mt-[3px]"
                    aria-hidden
                  />
                  <span className="text-sm text-content-primary leading-snug">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
