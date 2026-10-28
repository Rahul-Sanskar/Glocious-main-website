"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "../MagneticButton";

/**
 * CTASection — the closing conversion block on every solution page.
 *
 * Reuses the homepage CTA treatment (static aurora wash, vignette, grain) so
 * the end of a solution page feels identical to the end of the homepage.
 */
export default function CTASection({
  eyebrow = "Get started",
  title = "Ready to move this forward?",
  lead = "Tell us what you are trying to achieve and our team will map the right approach across communication, digital growth and technology.",
  ctaLabel = "Talk to Us",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      {/* Aurora wash — static, matching the homepage closing block */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-40"
          style={{ background: "var(--glow-color)" }}
        />
        <div
          className="absolute -top-[10%] right-[8%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-20"
          style={{ background: "var(--glow-color-alt)" }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-background) 0%, transparent 20%, transparent 80%, var(--color-background) 100%)",
        }}
      />

      {/* Noise texture — self-hosted, theme-aware opacity */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-6">{eyebrow}</p>

          <h2 className="text-h2 mb-6 text-content-primary">{title}</h2>

          <p className="text-lead mb-12 max-w-2xl mx-auto text-content-secondary">
            {lead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Link href={ctaHref} className="btn btn-primary btn-lg">
                {ctaLabel}
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
