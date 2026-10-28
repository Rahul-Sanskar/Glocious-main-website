"use client";

import { motion } from "framer-motion";

const reasons = [
  "Reliable Communication Infrastructure",
  "Scalable Technology Platform",
  "Multi-Channel Engagement",
  "Workflow Automation",
  "Business-Focused Solutions",
  "Integrated Digital Capabilities",
];

export default function WhyGlocious() {
  return (
    <section id="why-glocious" className="section relative overflow-hidden border-t border-border">
      <div className="container-page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">
            Why Glocious
          </p>
          <h2 className="text-h2 max-w-xl mx-auto text-content-primary">
            Built for businesses that need communication to work.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background track line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 hidden md:block"
            style={{ background: "var(--color-border)" }}
          />
          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-px origin-left hidden md:block -translate-y-1/2"
            style={{
              background: "var(--color-accent)",
              boxShadow: "var(--shadow-accent)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative z-10">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card card-interactive group relative p-5 flex flex-col items-center justify-center text-center min-h-[130px]"
              >
                {/* Connecting dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -left-[5px] w-2.5 h-2.5 rounded-full hidden xl:block transition-transform duration-base group-hover:scale-125"
                  style={{
                    background: "var(--color-accent)",
                    boxShadow: "var(--shadow-accent)",
                  }}
                />

                <span className="text-xs font-medium leading-snug text-content-secondary">
                  {reason}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
