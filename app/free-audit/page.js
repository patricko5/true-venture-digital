"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function FreeAuditPage() {
  const [formState, setFormState] = useState("idle"); // idle | submitting | success | error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = "w-full bg-surface-1 border border-white/10 px-4 py-3 text-sm font-body text-white placeholder:text-white/20 focus:outline-none focus:border-brand/60 transition-colors";

  return (
    <main className="flex flex-col w-full">
      <Navbar />

      <Section
        id="free-audit"
        bgImage="/images/calgary_tower.png"
        className="pt-32 md:pt-26 !min-h-0 !justify-start"
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.div {...fadeInUp} className="text-center space-y-2 mb-6">
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">
              Free Website Audit
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
              Let's Find What's <span className="text-brand">Holding</span> You Back.
            </h1>
            <p className="text-white/50 font-body text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and we'll identify exactly why your competitors
              are outranking you on Google — for free, no strings attached.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface-1 border border-brand/30 p-16 text-center space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle size={64} className="text-brand mx-auto" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black font-heading uppercase">
                  Audit <span className="text-brand">Requested</span>
                </h2>
                <p className="text-white/50 font-body text-sm max-w-md mx-auto leading-relaxed">
                  We've received your information. Expect a detailed audit of your online
                  presence within 24-48 hours. We'll reach out via email.
                </p>
                <Button href="/" variant="outline" size="md">
                  Back to Home <ArrowRight size={14} className="ml-2" />
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-surface-1 border border-white/5 p-5 md:p-6 space-y-4"
              >
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                      <User size={12} className="text-brand" />
                      First Name <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                      <User size={12} className="text-brand" />
                      Last Name <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                    <Building2 size={12} className="text-brand" />
                    Company Name <span className="text-white/20 text-[8px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Summit Plumbing Ltd."
                    className={inputClass}
                  />
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                      <Mail size={12} className="text-brand" />
                      Email Address <span className="text-brand">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@summitplumbing.ca"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                      <Phone size={12} className="text-brand" />
                      Phone Number <span className="text-brand">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(403) 555-0123"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/60">
                    <MessageSquare size={12} className="text-brand" />
                    Tell Us About Your Situation <span className="text-brand">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="We noticed our competitors rank higher than us on Google for plumbing services in Calgary. We'd like help improving our visibility and getting more local leads. Our current website is outdated and doesn't show up in local search results..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <p className="text-white/20 text-[9px] uppercase tracking-widest font-body">
                    100% Free — No credit card required
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Request Free Audit <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                {formState === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-xs font-body text-center"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </main>
  );
}
