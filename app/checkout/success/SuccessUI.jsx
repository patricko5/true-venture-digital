"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { CheckCircle, ArrowRight, Calendar, Mail, AlertCircle } from "lucide-react";

export default function SuccessUI({ session, error }) {
  if (error || !session) {
    return (
      <main className="flex flex-col w-full">
        <Navbar />
        <Section id="error" className="pt-24">
          <div className="max-w-md mx-auto text-center space-y-6">
            <AlertCircle size={64} className="text-red-500 mx-auto" />
            <h1 className="text-3xl font-black uppercase tracking-tighter">Verification Failed</h1>
            <p className="text-white/50 text-sm">We couldn't verify your payment session. If you believe this is an error, please contact us.</p>
            <Button href="/checkout" variant="secondary">Try Again</Button>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full">
      <Navbar />

      <Section
        id="success"
        bgImage="/images/the_bow.png"
        className="pt-24"
      >
        <div className="max-w-2xl mx-auto w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircle size={80} className="text-brand mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">
              Payment Confirmed
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Welcome to <span className="text-brand">True Venture</span>
            </h1>
            <p className="text-white/50 font-body text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Your Starter Website Package is now active. Here's what happens next:
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-surface-1 border border-white/5 divide-y divide-white/5 text-left"
          >
            {[
              {
                step: "01",
                title: "Confirmation Email",
                desc: "You'll receive a payment receipt and onboarding details within 15 minutes.",
                icon: <Mail size={18} className="text-brand" />
              },
              {
                step: "02",
                title: "Strategy Call (48hrs)",
                desc: "We'll schedule a 30-minute call to gather your business info, keywords, and brand assets.",
                icon: <Calendar size={18} className="text-brand" />
              },
              {
                step: "03",
                title: "Build & Launch (14–21 days)",
                desc: "Your high-performance website will be designed, developed, and deployed with full local SEO.",
                icon: <ArrowRight size={18} className="text-brand" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="flex items-start gap-6 p-8"
              >
                <span className="text-2xl font-heading font-black text-white/10 shrink-0">{item.step}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-heading text-sm font-bold uppercase tracking-tighter">{item.title}</h3>
                  </div>
                  <p className="text-white/40 font-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4 pt-4"
          >
            <Button href="/" variant="primary" size="lg">
              Back to Home <ArrowRight size={16} className="ml-2" />
            </Button>
            <p className="text-white/20 text-[9px] uppercase tracking-widest font-body">
              Questions? Email us at hello@trueventuredigital.com
            </p>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
