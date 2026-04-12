"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { createCheckoutSession } from "@/app/actions/stripe";
import { ArrowRight, ShieldCheck, Zap, Globe, Camera, Phone, Search } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const packageItems = [
  { icon: <Globe size={18} />, label: "5–7 Page Professional Website" },
  { icon: <Search size={18} />, label: "Google Business Profile Setup" },
  { icon: <Zap size={18} />, label: "On-Page Local SEO Optimization" },
  { icon: <Phone size={18} />, label: "Contact Form + Click-to-Call" },
  { icon: <Camera size={18} />, label: "5–10 Curated Professional Photos" },
  { icon: <ShieldCheck size={18} />, label: "Fast-Loading, Secure Hosting Setup" },
];

export default function CheckoutPage() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />

      <Section
        id="checkout"
        bgImage="/images/peace_bridge.png"
        className="pt-32 md:pt-26 !min-h-0 !justify-start"
      >
        <div className="max-w-3xl mx-auto w-full">
          <motion.div {...fadeInUp} className="text-center space-y-2 mb-6">
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">
              Checkout
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Your <span className="text-brand">Starter</span> Package
            </h1>
            <p className="text-white/40 font-body text-sm max-w-xl mx-auto leading-relaxed">
              Review your order and proceed to payment via Stripe.
            </p>
          </motion.div>

          {/* Order Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-1 border border-white/5 overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 md:px-10 py-5 border-b border-white/5 flex justify-between items-center">
              <div>
                <h2 className="font-heading text-lg font-black uppercase tracking-tighter">
                  Starter Website Package
                </h2>
                <p className="text-white/30 font-body text-[10px] uppercase tracking-widest mt-1">
                  One-time payment • No hidden fees
                </p>
              </div>
              <div className="text-right">
                <span className="block text-3xl md:text-4xl font-heading font-black text-brand">$1,000</span>
                <span className="block text-[9px] uppercase tracking-widest text-white/30 font-body">CAD</span>
              </div>
            </div>

            {/* Line Items */}
            <div className="px-6 md:px-10 py-4 space-y-0">
              {packageItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 py-2.5 border-b border-white/5 last:border-0"
                >
                  <div className="text-brand shrink-0">{item.icon}</div>
                  <span className="font-body text-sm text-white/70">{item.label}</span>
                  <div className="flex-1" />
                  <span className="text-brand text-[9px] font-heading font-bold uppercase tracking-widest">Included</span>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <div className="px-6 md:px-10 py-4 bg-surface-2 border-t border-white/10 flex justify-between items-center">
              <span className="font-heading text-xs uppercase tracking-widest font-bold text-white/60">Total</span>
              <span className="font-heading text-2xl font-black text-white">$1,000.00 <span className="text-xs text-white/40">CAD</span></span>
            </div>

            {/* Action */}
            <div className="px-6 md:px-10 py-6 border-t border-white/5 space-y-4">
              <form action={createCheckoutSession} className="w-full">
                <Button type="submit" variant="primary" size="xl" className="w-full justify-center">
                  Proceed to Payment <ArrowRight size={18} className="ml-3" />
                </Button>
              </form>
              <div className="flex items-center justify-center gap-6 text-white/20">
                <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest font-body">
                  <ShieldCheck size={12} />
                  <span>SSL Encrypted</span>
                </div>
                <div className="w-[1px] h-3 bg-white/10" />
                <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest font-body">
                  <Zap size={12} />
                  <span>Powered by Stripe</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div {...fadeInUp} className="text-center mt-8">
            <Button href="/" variant="ghost" size="sm">
              ← Back to Home
            </Button>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
