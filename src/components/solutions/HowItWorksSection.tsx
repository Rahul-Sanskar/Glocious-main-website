"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import type { NamedItem } from "@/data/solutions";

/**
 * HowItWorksSection — numbered process steps.
 *
 * A hairline connector runs behind the step numbers on large screens to read
 * as a single sequence rather than four unrelated cards.
 */
export default function HowItWorksSection({
  steps,
  title = "How it works.",
  lead,
}: {
  steps: NamedItem[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border bg-background-subtle">
      <div className="container-page relative z-10">
        <SectionHeading eyebrow="How it works" title={title} lead={lead} />

        <div className="relative">
          {/* Sequence connector — desktop only, sits behind the step markers */}
          <div
            className="hidden lg:block absolute top-4 left-0 right-0 h-px bg-border"
            aria-hidden
          />

          <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-5 border bg-background border-accent-soft text-accent shadow-card"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-h4 mb-2 text-content-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-content-secondary">
                  {step.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
