"use client";

import { motion } from "framer-motion";
import {
  Layers, Workflow, Gauge, Shield, Repeat, BarChart2,
  Boxes, Database, Puzzle, Send, Route, ListChecks,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { NamedItem } from "@/data/solutions";

/**
 * CapabilityGrid — presentational grid for solution capabilities.
 *
 * Icons are assigned deterministically from a curated set so the grid looks
 * considered without adding an icon field to the content model (which would
 * have to be a serialisable string anyway).
 */
const icons = [
  Layers, Workflow, Gauge, Shield, Repeat, BarChart2,
  Boxes, Database, Puzzle, Send, Route, ListChecks,
];

export default function CapabilityGrid({
  eyebrow = "Capabilities",
  title,
  lead,
  items,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: NamedItem[];
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="container-page relative z-10">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card card-interactive group flex items-start gap-4 p-6"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 border bg-accent-soft border-accent-soft transition-colors duration-base group-hover:bg-accent">
                  <Icon
                    size={17}
                    className="text-accent transition-colors duration-base group-hover:text-accent-contrast"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-h4 mb-1.5 text-content-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
