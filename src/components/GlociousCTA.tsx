"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function GlociousCTA() {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      {/* Aurora wash — static. The closing block already carries the page's
          strongest type; a pulsing background only competes with it. */}
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
          <p className="eyebrow mb-6">
            Get started
          </p>

          <h2 className="text-h2 mb-6 text-content-primary">
            Build better customer connections.
          </h2>

          <p className="text-lead mb-12 max-w-2xl mx-auto text-content-secondary">
            Whether you need reliable communication infrastructure, a digital growth engine, or automation across your customer journey — Glocious has the technology and expertise to make it happen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Talk to Us
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
