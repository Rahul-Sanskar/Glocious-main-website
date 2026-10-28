"use client";

import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Cpu, Zap } from "lucide-react";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Business Communication",
    description:
      "Reach customers across every channel — SMS, WhatsApp, RCS, Voice, IVR, and Email — through a single, reliable communication infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description:
      "SEO, social media, PPC, content marketing, lead generation and management — the full digital stack to grow your business online.",
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    description:
      "Website development, e-commerce platforms and custom digital solutions built for performance, scalability and long-term business value.",
  },
  {
    icon: Zap,
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
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 bg-accent-soft border border-accent-soft group-hover:bg-accent">
                  <Icon
                    size={18}
                    className="text-accent transition-colors duration-300 group-hover:text-accent-contrast"
                  />
                </div>

                <h3 className="text-h4 mb-2.5 text-content-primary">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-content-secondary">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
