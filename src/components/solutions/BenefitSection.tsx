"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { NamedItem } from "@/data/solutions";

/**
 * BenefitSection — the "Key benefits" block.
 *
 * An open two-column checklist with a single accent marker per item. It carries
 * no card chrome so it reads as a closing summary rather than another grid of
 * boxes competing with CapabilityGrid.
 */
export default function BenefitSection({
  items,
  title = "Key benefits.",
  lead,
}: {
  items: NamedItem[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="container-page relative z-10">
        <SectionHeading eyebrow="Key benefits" title={title} lead={lead} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="flex items-start gap-4"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-accent-soft"
                aria-hidden
              >
                <Check size={14} className="text-accent" />
              </div>
              <div>
                <h3 className="text-h4 mb-1.5 text-content-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-content-secondary">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
