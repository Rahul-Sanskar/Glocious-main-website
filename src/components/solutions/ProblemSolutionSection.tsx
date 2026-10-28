"use client";

import { motion } from "framer-motion";
import { MinusCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Solution } from "@/data/solutions";

/**
 * ProblemSolutionSection — renders the "Business challenge" and "Solution"
 * blocks from one component, because they are two halves of the same
 * argument: the problem list and the response list share identical markup and
 * differ only in marker icon and accent treatment.
 */

function PointList({
  points,
  variant,
}: {
  points: string[];
  variant: "problem" | "solution";
}) {
  const isProblem = variant === "problem";
  const Marker = isProblem ? MinusCircle : CheckCircle2;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
      {points.map((point, i) => (
        <motion.li
          key={point}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="flex items-start gap-3"
        >
          <Marker
            size={16}
            className={`shrink-0 mt-[3px] ${
              isProblem ? "text-content-muted" : "text-accent"
            }`}
            aria-hidden
          />
          <span
            className={`text-sm leading-relaxed ${
              isProblem ? "text-content-secondary" : "text-content-primary"
            }`}
          >
            {point}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function ProblemSolutionSection({ solution }: { solution: Solution }) {
  return (
    <>
      {/* ── Business challenge ───────────────────────────── */}
      <section className="section relative overflow-hidden border-t border-border">
        <div className="container-page relative z-10">
          <SectionHeading
            eyebrow="Business challenge"
            title="What makes this difficult today."
            lead={solution.problem.intro}
          />
          <PointList points={solution.problem.points} variant="problem" />
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────── */}
      <section className="section relative overflow-hidden border-t border-border bg-background-subtle">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px]"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--glow-color) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-page relative z-10">
          <SectionHeading
            eyebrow="Solution"
            title="How Glocious solves it."
            lead={solution.solution.intro}
          />
          <PointList points={solution.solution.points} variant="solution" />
        </div>
      </section>
    </>
  );
}
