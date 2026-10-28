"use client";

import { motion } from "framer-motion";
import LottieIcon from "./LottieIcon";
import messageAnimation from "@/assets/lottie/message.json";
import growthAnimation from "@/assets/lottie/growth.json";
import technologyAnimation from "@/assets/lottie/technology.json";
import automationAnimation from "@/assets/lottie/automation.json";

const capabilities = [
  {
    animation: messageAnimation,
    title: "Business Communication",
    description:
      "Reach customers across every channel — SMS, WhatsApp, RCS, Voice, IVR, and Email — through a single, reliable communication infrastructure.",
  },
  {
    animation: growthAnimation,
    title: "Digital Growth",
    description:
      "SEO, social media, PPC, content marketing, lead generation and management — the full digital stack to grow your business online.",
  },
  {
    animation: technologyAnimation,
    title: "Technology Solutions",
    description:
      "Website development, e-commerce platforms and custom digital solutions built for performance, scalability and long-term business value.",
  },
  {
    animation: automationAnimation,
    title: "AI & Automation",
    description:
      "Automate customer engagement workflows, communication triggers and lead nurturing across every channel with intelligent, workflow-driven automation.",
  },
];

export default function CapabilitiesStrip() {
  return (
    <section className="section-tight relative overflow-hidden border-t border-border bg-background-subtle">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="container-page relative z-10">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">
            What we do
          </p>
          <h2 className="text-h2 max-w-2xl mx-auto text-content-primary">
            One partner for communication,
            <br className="hidden md:block" /> growth and technology.
          </h2>
        </motion.div>

        {/* Four capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.18, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="card card-interactive group relative p-6 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-base"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                }}
              />

              {/* Lottie glyph — authored in-repo, no external requests */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-base bg-accent-soft border border-accent-soft group-hover:border-accent group-hover:scale-105">
                <LottieIcon animationData={cap.animation} size={30} />
              </div>

              <h3 className="text-h4 mb-2.5 text-content-primary">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-content-secondary">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
