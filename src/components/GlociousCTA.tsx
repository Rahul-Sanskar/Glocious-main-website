"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function GlociousCTA() {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      {/* Aurora wash — now breathing rather than static. Two out-of-phase
          layers on long, slow cycles so the closing block feels alive without
          anything moving fast enough to compete with the headline. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          className="absolute left-1/2 top-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "var(--glow-color)", x: "-50%", y: "-50%" }}
          animate={{ opacity: [0.32, 0.5, 0.32], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-[10%] right-[8%] w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: "var(--glow-color-alt)" }}
          animate={{ opacity: [0.16, 0.3, 0.16], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
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
          <p className="eyebrow mb-6">
            Get started
          </p>

          <h2 className="text-h2 mb-6 text-content-primary">
            Build better customer connections.
          </h2>

          <p className="text-lead mb-12 max-w-2xl mx-auto text-content-secondary">
            Whether you need reliable communication infrastructure, a digital growth engine, or automation across your customer journey — Glocious has the technology and expertise to make it happen.
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Soft halo breathing behind the single primary action */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[72px] w-[280px] rounded-full blur-2xl"
              style={{ background: "var(--glow-color)", x: "-50%", y: "-50%" }}
              animate={{ opacity: [0.5, 0.95, 0.5], scale: [0.96, 1.05, 0.96] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary btn-lg relative z-10">
                Talk to Us
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
