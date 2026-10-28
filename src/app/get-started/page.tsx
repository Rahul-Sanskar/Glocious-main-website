"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    data.formType = "b2b_services";

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Submission failed');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-content-primary relative selection:bg-accent selection:text-accent-contrast">
      <Navbar />
      
      {/* Ambient background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-soft rounded-full blur-[150px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-36 pb-32 container mx-auto px-6 max-w-4xl min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {!isSuccess ? (
            <motion.div
              key="services-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="card rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-2 rounded-full bg-accent-soft border border-accent-soft px-4 py-1.5 mb-6 w-fit">
                <Zap size={14} className="text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  B2B AI Automation Audit
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-medium mb-4 leading-tight">
                Calculate Your Automation ROI &amp; Book Consultation
              </h1>
              <p className="text-content-secondary mb-10 text-base md:text-lg max-w-2xl leading-relaxed">
                Tell us about your business operations, existing CRM, and lead flow bottlenecks. Our AI strategy team will prepare a custom deployment blueprint tailored to your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 pb-8 border-b border-border">
                <div className="flex items-center gap-3 text-sm text-content-secondary">
                  <Clock size={18} className="text-accent shrink-0" />
                  <span>Dedicated onboarding</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-content-secondary">
                  <Zap size={18} className="text-accent shrink-0" />
                  <span>Scalable infrastructure</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-content-secondary">
                  <ShieldCheck size={18} className="text-accent shrink-0" />
                  <span>Business-focused solutions</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="field-label">Full Name *</label>
                    <input required name="name" type="text" className="field" />
                  </div>
                  <div className="space-y-2">
                    <label className="field-label">Company Name *</label>
                    <input required name="company" type="text" className="field" placeholder="Acme Real Estate Developers" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="field-label">Work Email Address *</label>
                    <input required name="email" type="email" className="field" />
                  </div>
                  <div className="space-y-2">
                    <label className="field-label">Phone Number *</label>
                    <input required name="phone" type="tel" className="field" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="field-label">Primary Service / System Needed *</label>
                    <select 
                      required 
                      name="service" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="field appearance-none"
                    >
                      <option value="">Select a system</option>
                      <option value="AI Voice Receptionist (Retell/Twilio)">AI Voice Receptionist</option>
                      <option value="Real Estate Lead Qualification Engine">Real Estate Lead Qualification Engine</option>
                      <option value="Custom CRM & ERP Automation">Custom CRM &amp; ERP Automation</option>
                      <option value="Custom Web & Mobile App Platform">Custom Web &amp; Mobile App Platform</option>
                      <option value="Enterprise AI Consulting & Blueprint">Enterprise AI Consulting &amp; Blueprint</option>
                      <option value="Custom System / Other">Custom System / Other (Specify below)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="field-label">Estimated Monthly Project Budget *</label>
                    <select 
                      required 
                      name="budget" 
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="field appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="Yet to be defined">Yet to be defined</option>
                      <option value="To be discussed on a call">To be discussed on a call</option>
                      <option value="Custom Budget / Flexible">Flexible / To be scoped together</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Custom Field Inputs */}
                {(selectedService === "Custom System / Other" || selectedBudget === "Custom Budget / Flexible") && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-accent-soft p-4 rounded-2xl border border-accent-soft"
                  >
                    {selectedService === "Custom System / Other" && (
                      <div className="space-y-2 col-span-1">
                        <label className="text-sm font-medium text-accent">Custom System Details *</label>
                        <input 
                          required 
                          name="customServiceDetails" 
                          type="text" 
                          className="field" 
                          placeholder="e.g. AI WhatsApp bot + POS integration" 
                        />
                      </div>
                    )}
                    {selectedBudget === "Custom Budget / Flexible" && (
                      <div className="space-y-2 col-span-1">
                        <label className="text-sm font-medium text-accent">Custom Budget Details *</label>
                        <input 
                          required 
                          name="customBudgetDetails" 
                          type="text" 
                          className="field" 
                          placeholder="e.g. Milestone based / Equity / Retainer" 
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="field-label">Operational Pain Points &amp; Goals</label>
                  <textarea name="requirements" rows={4} className="field resize-none" placeholder="Describe your current lead volume, existing CRM (Salesforce/HubSpot/Zoho), and key automation goals..."></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg btn-block mt-4"
                >
                  {isSubmitting ? "Generating AI Blueprint..." : "Request ROI Audit & Consultation"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card rounded-3xl text-center py-20 p-8 md:p-12"
            >
              <div className="w-24 h-24 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-soft">
                <CheckCircle2 size={44} className="text-accent" />
              </div>
              <h2 className="text-4xl font-medium mb-4">Request Received</h2>
              <p className="text-content-secondary text-lg mb-12 max-w-md mx-auto leading-relaxed">
                Thank you! Our AI Systems Architecture team will review your business requirements and connect with you shortly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <MagneticButton>
                  <Link 
                    href="/"
                    className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-border-strong transition-all hover:bg-accent-soft w-full sm:w-auto"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-content-primary opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-content-primary rounded-full px-[40px] py-[16px] h-full w-full flex items-center justify-center">
                      <span className="text-content-inverted text-[16px] font-medium tracking-wide">Return Home</span>
                    </div>
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
