"use client";

import { motion } from "framer-motion";
import { Webhook, Code2, LayoutDashboard, Plug, ArrowLeftRight, Braces } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { SolutionIntegration } from "@/data/solutions";

/**
 * IntegrationSection — the "how it connects" block.
 *
 * Only rendered for solutions that expose an integration surface (the content
 * model omits `integration` elsewhere). Copy describes integration *approaches*
 * — no endpoint paths, protocol detail, rate limits or named vendors.
 */
const icons = [Code2, Webhook, LayoutDashboard, Plug, ArrowLeftRight, Braces];

export default function IntegrationSection({
  integration,
  title = "How it connects to your stack.",
  lead,
}: {
  integration?: SolutionIntegration;
  title?: string;
  lead?: string;
}) {
  if (!integration) return null;

  return (
    <section className="section relative overflow-hidden border-t border-border bg-background-subtle">
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Integration"
          title={title}
          lead={lead ?? integration.intro}
        />

        {/* Integration approaches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {integration.methods.map((method, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="card flex items-start gap-4 p-6"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-accent-soft border border-accent-soft">
                  <Icon size={17} className="text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-h4 mb-1.5 text-content-primary">
                    {method.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {method.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connectable surfaces */}
        {integration.targets.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-tint rounded-lg border border-border p-6"
          >
            <p className="text-2xs font-semibold uppercase tracking-widest text-content-secondary mb-4">
              Connects with
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {integration.targets.map((target) => (
                <li key={target} className="badge">
                  {target}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
