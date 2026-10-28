"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

/* Animated grid background — pure CSS, no external dependencies.
   Every colour resolves to a theme token so it works on light paper too. */
function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Brand wash behind the headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--glow-color) 0%, transparent 70%)",
        }}
      />
      {/* Architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern" />
      {/* Vignette into the page background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 40%, var(--color-background) 80%)",
        }}
      />
    </div>
  );
}

/* Ambient brand washes. Static by design — the brief calls for depth that
   reads as architecture, not for elements that drift while the reader thinks. */
function AmbientWash({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full pointer-events-none blur-[80px] ${className ?? ""}`}
      style={style}
    />
  );
}

// Channel labels on the ring. Deliberately monochrome: six different hues read
// as a stock "multi-channel" graphic, one accent reads as a single system.
const channels = ["SMS", "WhatsApp", "RCS", "Voice & IVR", "Email", "API"];

/* Radius of the channel ring, as a percentage of the square container. Kept
   below 40% so the pills clear the container edge at every breakpoint. */
const RING_RADIUS = 34;

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[420px]">
      {/* Concentric rings — static, structural */}
      <div
        className="absolute inset-[16%] rounded-full"
        style={{
          border: "1px solid color-mix(in srgb, var(--color-accent) 14%, transparent)",
          borderTopColor: "color-mix(in srgb, var(--color-accent) 60%, transparent)",
          borderRightColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
        }}
      />
      <div
        className="absolute inset-[26%] rounded-full"
        style={{
          border: "1px dashed color-mix(in srgb, var(--color-accent-alt) 16%, transparent)",
        }}
      />

      {/* Centre badge */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex w-24 h-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl"
        style={{
          background: "var(--color-surface-elevated)",
          border: "1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)",
          boxShadow: "var(--shadow-card), var(--shadow-accent)",
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-black mb-1 bg-accent text-accent-contrast">
          G
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-content-secondary">
          Glocious
        </span>
      </div>

      {/* Channels distributed on the ring */}
      {channels.map((label, i) => {
        const angle = (i / channels.length) * 2 * Math.PI - Math.PI / 2;
        return (
          <div
            key={label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 px-2.5 py-1.5 rounded-full text-2xs font-semibold whitespace-nowrap text-content-primary"
            style={{
              left: `${50 + Math.cos(angle) * RING_RADIUS}%`,
              top: `${50 + Math.sin(angle) * RING_RADIUS}%`,
              background: "var(--color-surface-elevated)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {label}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <HeroGrid />

      {/* Ambient washes — static */}
      <AmbientWash
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "10%",
          background: "var(--glow-color)",
        }}
      />
      <AmbientWash
        style={{
          width: 400,
          height: 400,
          top: "20%",
          right: "5%",
          background: "var(--glow-color-alt)",
        }}
      />

      {/* Content */}
      <div className="container-page relative z-10 pt-[140px] pb-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Text */}
        <div className="flex-1 max-w-[600px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="badge badge-accent mb-8"
          >
            <span className="status-dot" aria-hidden />
            Business Communication &amp; Digital Growth
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-display text-content-primary mb-6"
          >
            Powering Business{" "}
            <span className="text-accent">Communication.</span>
            <br />
            Driving <span className="text-accent">Digital Growth.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lead text-content-secondary mb-10 max-w-[520px]"
          >
            Glocious helps businesses communicate with customers, automate engagement and accelerate growth through intelligent communication, digital and technology solutions.
          </motion.p>

          {/* CTAs — one primary action, one for orientation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Talk to Us
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/#communication" className="btn btn-secondary btn-lg">
                Explore Solutions
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center w-full max-w-[500px]"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-background))" }}
      />
    </section>
  );
}
