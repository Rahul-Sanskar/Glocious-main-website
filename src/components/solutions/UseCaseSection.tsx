"use client";

import { motion } from "framer-motion";
import { Target, Users, Route, Inbox, Megaphone, Repeat } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { NamedItem } from "@/data/solutions";

/**
 * UseCaseSection — the business situations a solution is applied to.
 *
 * Deliberately lighter than CapabilityGrid: no card chrome, tinted surface
 * blocks instead, so the two sections do not compete visually.
 */
const icons = [Target, Users, Route, Inbox, Megaphone, Repeat];

export default function UseCaseSection({
  items,
  title = "Where it is used.",
  lead,
}: {
  items: NamedItem[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      <div className="container-page relative z-10">
        <SectionHeading eyebrow="Use cases" title={title} lead={lead} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="surface-tint flex items-start gap-4 p-6 rounded-lg border border-transparent transition-colors duration-base hover:border-border"
              >
                <Icon
                  size={18}
                  className="text-accent shrink-0 mt-0.5"
                  aria-hidden
                />
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
