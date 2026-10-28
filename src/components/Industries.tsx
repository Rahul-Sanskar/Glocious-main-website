"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2, HeartPulse, GraduationCap, ShoppingBag,
  Landmark, Store, Plane, Car, Cpu,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Lead management, automated follow-ups and customer communication at every stage of the property journey.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "Appointment reminders, OTP authentication and patient engagement through compliant communication channels.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Admissions workflows, fee reminders, event notifications and student engagement across SMS and WhatsApp.",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    desc: "Order updates, delivery tracking, abandoned cart recovery and promotional campaigns that drive repeat purchase.",
  },
  {
    icon: Landmark,
    name: "BFSI",
    desc: "Secure OTP delivery, transactional alerts, KYC communications and fraud notifications at enterprise scale.",
  },
  {
    icon: Store,
    name: "Retail",
    desc: "Loyalty programmes, in-store promotions, personalised offers and seasonal campaigns across all channels.",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Booking confirmations, itinerary updates, check-in alerts and post-stay feedback collection.",
  },
  {
    icon: Car,
    name: "Automotive",
    desc: "Service reminders, test drive follow-ups, insurance renewals and dealership communication automation.",
  },
  {
    icon: Cpu,
    name: "IT & Technology",
    desc: "Developer-friendly API infrastructure, team communication automation and enterprise integrations.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section relative overflow-hidden border-t border-border bg-background-subtle">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <p className="eyebrow mb-4">
            Industries
          </p>
          <h2 className="text-h2 text-content-primary">
            Built for the industries
            <br />
            <span className="font-normal text-content-secondary">
              that depend on communication.
            </span>
          </h2>
        </motion.div>

        {/* Sector banner — a single wide crop, deliberately not a card grid of
            photos, so the industry cards below stay the focal point. */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mb-16 overflow-hidden rounded-xl border border-border bg-surface shadow-card h-[180px] sm:h-[240px] lg:h-[300px]"
        >
          <Image
            src="/images/industries.jpg"
            alt="Abstract visual representing the industries Glocious serves"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </motion.figure>

        {/* Industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card card-interactive group flex items-start gap-4 p-5"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-accent-soft border border-accent-soft transition-colors duration-base group-hover:bg-accent">
                  <Icon size={17} className="text-accent transition-colors duration-base group-hover:text-accent-contrast" />
                </div>
                <div>
                  <h3 className="text-h4 mb-1.5 text-content-primary">
                    {industry.name}
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
