"use client";

import { motion } from "framer-motion";
import {
  Building2, HeartPulse, GraduationCap, ShoppingBag, Landmark,
  Store, Plane, Car, Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SOLUTION_INDUSTRIES, type IndustryKey } from "@/data/solutions";

/**
 * IndustrySection — the industries a solution is most commonly applied in.
 *
 * Icons live here rather than in the content model: the model stays plain
 * serialisable data, and this component owns its own presentation.
 */
const industryIcons: Record<IndustryKey, typeof Building2> = {
  "real-estate": Building2,
  healthcare: HeartPulse,
  education: GraduationCap,
  ecommerce: ShoppingBag,
  bfsi: Landmark,
  retail: Store,
  "travel-hospitality": Plane,
  automotive: Car,
  "it-technology": Cpu,
};

export default function IndustrySection({
  industries,
  title = "Built for your industry.",
  lead,
}: {
  industries: IndustryKey[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-border bg-background-subtle">
      <div className="container-page relative z-10">
        <SectionHeading eyebrow="Industries" title={title} lead={lead} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((key, i) => {
            const industry = SOLUTION_INDUSTRIES[key];
            const Icon = industryIcons[key];
            if (!industry) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card flex items-start gap-4 p-5"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-accent-soft border border-accent-soft">
                  <Icon size={17} className="text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-h4 mb-1.5 text-content-primary">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {industry.desc}
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
