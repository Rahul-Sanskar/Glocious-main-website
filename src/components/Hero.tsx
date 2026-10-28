"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

/* Ambient brand washes. Now with subtle breathing animation to add depth
   without distraction, maintaining a premium feel. */
function AmbientWash({ className, style, animate, transition }: { 
  className?: string; 
  style?: React.CSSProperties;
  animate?: any;
  transition?: any;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full pointer-events-none blur-[100px] ${className ?? ""}`}
      style={style}
      animate={animate}
      transition={transition}
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
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px] flex items-center justify-center">
      {/* Background concentric rings — static, providing structure */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="absolute w-[85%] h-[85%] rounded-full border border-accent/5" 
          style={{ boxShadow: "inset 0 0 40px var(--glow-color)" }}
        />
        <div className="absolute w-[65%] h-[65%] rounded-full border border-dashed border-accent/10" />
        <div className="absolute w-[45%] h-[45%] rounded-full border border-accent/5" />
      </div>

      {/* Rotating ecosystem container */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Connection lines SVG layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {channels.map((_, i) => {
            const angle = (i / channels.length) * 2 * Math.PI - Math.PI / 2;
            const x2 = 50 + Math.cos(angle) * RING_RADIUS;
            const y2 = 50 + Math.sin(angle) * RING_RADIUS;
            return (
              <g key={`line-${i}`}>
                {/* Faint static connection */}
                <line
                  x1="50" y1="50" x2={x2} y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                />
                {/* Traveling light pulse */}
                <motion.circle
                  r="0.6"
                  fill="var(--color-accent)"
                  initial={{ cx: 50, cy: 50, opacity: 0 }}
                  animate={{
                    cx: [50, x2],
                    cy: [50, y2],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Channels distributed on the ring */}
        {channels.map((label, i) => {
          const angle = (i / channels.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <motion.div
              key={label}
              className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap text-content-primary"
              style={{
                left: `${50 + Math.cos(angle) * RING_RADIUS}%`,
                top: `${50 + Math.sin(angle) * RING_RADIUS}%`,
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
                x: "-50%",
                y: "-50%",
              }}
              animate={{ 
                rotate: -360, // Keep text upright
              }}
              transition={{ 
                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {label}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Centre badge — perfectly centered, not rotating */}
      <motion.div
        className="relative z-20 flex w-28 h-28 flex-col items-center justify-center rounded-3xl"
        style={{
          background: "var(--color-surface-elevated)",
          border: "1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)",
          boxShadow: "0 0 40px var(--glow-color), var(--shadow-card)",
        }}
        animate={{ 
          scale: [1, 1.05, 1],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Image
          src="/images/glocious-mark.png"
          alt=""
          width={408}
          height={492}
          sizes="64px"
          className="mb-1"
          style={{ height: 40, width: "auto" }}
        />
        <span className="text-[11px] font-black tracking-[0.2em] uppercase text-content-primary">
          Glocious
        </span>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-20 bg-accent blur-xl -z-10" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <HeroGrid />

      {/* Ambient washes — subtly breathing for a premium, alive feel */}
      <AmbientWash
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "10%",
          background: "var(--glow-color)",
        }}
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <AmbientWash
        style={{
          width: 400,
          height: 400,
          top: "20%",
          right: "5%",
          background: "var(--glow-color-alt)",
        }}
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
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
            style={{ textShadow: "0 2px 40px var(--glow-color)" }}
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
