"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, ShoppingCart, Layers, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Section 6 — Technology Solutions.
 *
 * These four capabilities are presented as a capability overview rather than
 * deep links: dedicated sub-pages do not exist yet, and linking every card to
 * the same anchor would be worse than not linking at all. A single section CTA
 * carries the conversion intent instead.
 */
const solutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, conversion-focused websites built for performance, accessibility and long-term maintainability — from corporate sites to complex web applications.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "End-to-end e-commerce platforms designed for scale, covering catalogue, payments, logistics and the customer experience layers.",
  },
  {
    icon: Layers,
    title: "Digital Solutions",
    description:
      "Portals, dashboards and workflow systems that connect your business operations to modern digital infrastructure.",
  },
  {
    icon: Code2,
    title: "Custom Technology",
    description:
      "When off-the-shelf won't fit — custom software, integrations and automation engineered around how your business actually runs.",
  },
];

export default function TechSolutions() {
  return (
    <section id="technology" className="section relative overflow-hidden border-t border-border">
      <div className="container-page relative z-10">
        {/* Header — visual leads on the left, mirrored against the
            communication section above so the two do not read as one block. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1 lg:col-span-5 relative overflow-hidden rounded-xl border border-border bg-surface shadow-card"
          >
            <Image
              src="/images/technology-infrastructure.jpg"
              alt="Abstract visual of modern cloud and application infrastructure"
              width={1376}
              height={768}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full object-cover"
            />
          </motion.figure>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <p className="eyebrow mb-4">Technology Solutions</p>
              <h2 className="text-h2 text-content-primary">
                Built for the way
                <br />
                <span className="font-normal text-content-secondary">
                  modern businesses operate.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-content-secondary transition-colors hover:text-accent"
              >
                Talk to our technology team <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group flex items-start gap-5 p-6"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-md flex items-center justify-center shrink-0 border transition-colors duration-base bg-accent-soft border-accent-soft group-hover:bg-accent">
                  <Icon
                    size={18}
                    className="text-accent transition-colors duration-base group-hover:text-accent-contrast"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-h4 mb-2 text-content-primary">
                    {sol.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {sol.description}
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
