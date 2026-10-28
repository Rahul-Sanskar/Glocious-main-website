"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Business Communication",
  "Digital Growth",
  "Technology Solutions",
  "AI & Automation",
  "Not sure yet — need guidance",
];

/**
 * Enquiry form for /contact.
 * Posts to the existing /api/contact route, which forwards the payload to the
 * configured Google Sheets webhook. Field names match that route's contract.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), formType: "contact_page" };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="card p-7 sm:p-9">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-success-soft">
              <CheckCircle2 size={22} className="text-success" />
            </div>
            <h3 className="text-h4 mb-2 text-content-primary">Enquiry received</h3>
            <p className="text-sm max-w-sm text-content-secondary">
              Thanks — your details are with our team. We&apos;ll review what you need and
              get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="field-label">
                  Full name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="company" className="field-label">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="field"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="email" className="field-label">
                  Work email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="field"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="field-label">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="field"
                  placeholder="+91"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="field-label">
                What do you need?
              </label>
              <select id="service" name="service" className="field" defaultValue="">
                <option value="" disabled>
                  Select an area
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="requirements" className="field-label">
                Tell us about your requirement
              </label>
              <textarea
                id="requirements"
                name="requirements"
                className="field"
                placeholder="Volumes, channels, timelines, or the outcome you're aiming for."
              />
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2.5 text-xs text-danger">
                <AlertCircle size={14} className="mt-0.5 shrink-0" />
                Something went wrong sending your enquiry. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary btn-lg btn-block"
            >
              {status === "submitting" ? "Sending…" : "Send enquiry"}
              {status !== "submitting" && <Send size={15} />}
            </button>

            <p className="text-2xs text-content-muted text-center">
              We use your details only to respond to this enquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
