"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared section heading used by every section on a solution page.
 *
 * Keeping this in one place is what makes eleven different solution pages read
 * as a single product: the eyebrow / title / lead rhythm, spacing and reveal
 * animation are identical everywhere.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`max-w-2xl mb-12 md:mb-16 ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-h2 text-content-primary mb-5 text-balance">{title}</h2>
      {lead && <p className="text-lead text-content-secondary">{lead}</p>}
    </motion.div>
  );
}
