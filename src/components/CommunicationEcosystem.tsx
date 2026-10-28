"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, PhoneCall, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

// Channel groups. One accent for all four groups — the category is already
// carried by the label and icon, so a per-group hue would only add noise.
const channelGroups = [
  {
    category: "Messaging",
    icon: MessageSquare,
    channels: [
      { name: "Bulk SMS",        desc: "High-volume messaging at scale" },
      { name: "Transactional SMS", desc: "Order, booking & alert messages" },
      { name: "OTP & Auth",      desc: "Secure two-factor authentication" },
      { name: "Promotional SMS", desc: "Campaigns and offers" },
      { name: "2-Way Messaging", desc: "Bidirectional SMS conversations" },
      { name: "RCS Messaging",   desc: "Rich cards, carousels & actions" },
    ],
  },
  {
    category: "Conversational",
    icon: Globe,
    channels: [
      { name: "WhatsApp Business", desc: "Verified business messaging" },
      { name: "API Messaging",     desc: "Programmable message delivery" },
    ],
  },
  {
    category: "Voice",
    icon: PhoneCall,
    channels: [
      { name: "Cloud Telephony",    desc: "Virtual phone number infrastructure" },
      { name: "IVR",                desc: "Intelligent voice response flows" },
      { name: "Missed Call Service", desc: "Lead capture via missed calls" },
      { name: "Click-to-Call",      desc: "One-click customer connection" },
      { name: "Call Routing",       desc: "Smart call distribution" },
      { name: "Voice SMS",          desc: "Pre-recorded voice messages" },
    ],
  },
  {
    category: "Email",
    icon: Mail,
    channels: [
      { name: "Transactional Email", desc: "Receipts, alerts & notifications" },
      { name: "OTP Email",           desc: "Secure one-time passwords" },
      { name: "Promotional Email",   desc: "Campaigns and newsletters" },
    ],
  },
];

export default function CommunicationEcosystem() {
  return (
    <section id="communication" className="section relative overflow-hidden border-t border-border">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative z-10">
        {/* Header — copy on the left, ecosystem visual on the right. The
            image carries the "one connected system" idea the heading states. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="eyebrow mb-4">
              Communication Platform
            </p>
            <h2 className="text-h2 mb-5 text-content-primary">
              Every business conversation.
              <br />
              <span className="text-accent">One connected ecosystem.</span>
            </h2>
            <p className="text-lead max-w-xl text-content-secondary">
              Glocious delivers the full spectrum of business communication channels — from high-volume messaging to intelligent voice and email — through a single, API-first infrastructure.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border bg-surface shadow-card"
          >
            <Image
              src="/images/communication-ecosystem.jpg"
              alt="Abstract visual of connected business communication channels"
              width={1376}
              height={768}
              sizes="(min-width: 1024px) 620px, 100vw"
              className="h-auto w-full object-cover"
            />
          </motion.figure>
        </div>

        {/* Channel groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {channelGroups.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: gi * 0.1 }}
                className="card group p-6 relative overflow-hidden transition-colors duration-base hover:border-border-strong"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-soft border border-accent-soft">
                    <GroupIcon size={15} className="text-accent" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-content-secondary">
                    {group.category}
                  </h3>
                  <span className="ml-auto text-2xs font-medium px-2 py-0.5 rounded-full bg-accent-soft text-accent border border-accent-soft">
                    {group.channels.length} channels
                  </span>
                </div>

                {/* Channel list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.channels.map((ch, ci) => (
                    <div
                      key={ci}
                      className="surface-tint flex items-start gap-2.5 p-3 rounded-lg transition-colors duration-200 hover:bg-accent-soft"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent"
                        aria-hidden
                      />
                      <div>
                        <p className="text-xs font-medium leading-snug text-content-primary">
                          {ch.name}
                        </p>
                        <p className="text-2xs leading-snug mt-0.5 text-content-secondary">
                          {ch.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          {/* Secondary action — the page keeps exactly one primary CTA action
              ("Talk to Us" in the hero and closing block); mid-page offers a
              quieter route to the same destination. */}
          <Link href="/contact" className="btn btn-secondary btn-lg">
            Talk to a communication specialist
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
