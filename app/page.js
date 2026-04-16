"use client";

import Image from "next/image";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { Search, MousePointerClick, TrendingUp, ArrowRight, ShieldCheck, Zap, Globe, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { staggerChildren: 0.1 }
};

const ProblemCard = ({ card, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  }

  const spotlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 200 });
  const spotlightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 200 });

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 }
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-10 bg-surface-1/40 backdrop-blur-xl border border-white/10 hover:border-brand/40 transition-colors rounded-[2.5rem] text-left flex flex-col items-start overflow-hidden cursor-pointer h-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${spotlightX} ${spotlightY},
              rgba(255, 107, 78, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-full h-full flex flex-col">
        <div className="mb-6 p-4 bg-brand/10 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-500">
          {card.icon}
        </div>
        <h3 className="text-base font-bold tracking-tight mb-3 group-hover:text-brand transition-colors uppercase">
          {card.title}
        </h3>
        <p className="text-white/40 text-sm font-body leading-relaxed flex-grow">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const rotatingWords = [
    "GET CALLS",
    "GET CLIENTS",
    "GET FOUND",
    "SHOW UP"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <main className="flex flex-col w-full">
      <Navbar />

      {/* HERO SECTION */}
      <Section
        id="hero"
        bgImage="/images/hero_skyline.png"
        className="pt-24 md:pt-26 !justify-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* <div className="flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1">
            <div className="w-2 h-2 bg-brand animate-pulse" />
            <span className="text-[10px] uppercase tracking-[.3em] font-bold text-brand">
              CALGARY, AB
            </span>
          </div> */}

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight flex flex-col items-center px-4">
            <span className="text-center">We Build Websites That <span className="text-brand">Actually</span></span>
            <div className="h-[1.4em] relative w-full flex justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-brand whitespace-nowrap tracking-[0.05em] text-4xl md:text-7xl lg:text-8xl"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
            Stop losing local customers to competitors with better SEO. We build high-performance
            $1,000 starter websites for Calgary trades and restaurants.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" variant="primary" href="/checkout">
              Get Your Starter Package
            </Button>
            <Button size="lg" variant="outline" className="hidden sm:flex" href="/our-work">
              View Our Work
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 md:pt-2"
          >
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-[10px] uppercase tracking-widest font-bold">CONVERSION-DRIVEN</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={20} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Fast-Loading</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-2">
              <Globe size={20} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Local SEO Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* PROBLEM SECTION */}
      <Section
        id="why-it-matters"
        bgImage="/images/peace_bridge.png"
        className="bg-surface-0 border-y border-white/5"
      >
        <div className="flex flex-col items-center text-center space-y-16">
          <motion.div
            {...fadeInUp}
            className="space-y-6 max-w-3xl"
          >
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">Why It Matters</span>
            <h2 className="text-4xl md:text-7xl font-black leading-none uppercase">
              Is Your Business <br />
              <span className="text-edge-outline">Invisible Online?</span>
            </h2>
            <p className="text-white/60 font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              If your business doesn't appear on the first page of Google when a local customer
              searches for your services, you're handing revenue to your competitors.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {[
              {
                icon: <Search className="text-brand" />,
                title: "Poor Search Visibility",
                desc: "Your site is buried on page 10 where customers never look."
              },
              {
                icon: <MousePointerClick className="text-brand" />,
                title: "Zero Conversion",
                desc: "Visitors leave because your site is slow or hard to use on mobile."
              },
              {
                icon: <TrendingUp className="text-brand" />,
                title: "Lost Revenue",
                desc: "High-intent leads are calling your competitors instead of you."
              },
              {
                icon: <ShieldCheck className="text-brand" />,
                title: "Weak First Impression",
                desc: "An outdated website makes your quality service look unprofessional."
              }
            ].map((card, i) => (
              <ProblemCard key={i} card={card} index={i} />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* PACKAGE SECTION */}
      <Section
        id="package"
        bgImage="/images/stephen_ave.png"
        className="bg-surface-0 border-b border-white/5"
      >
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            {...fadeInUp}
            className="space-y-4"
          >
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">The Solution</span>
            <h2 className="text-5xl md:text-8xl font-black">
              $1,000 Starter <br />
              <span className="text-brand">Package</span>
            </h2>
            <p className="text-white/40 font-body text-sm md:text-base max-w-xl mx-auto uppercase tracking-widest">
              Everything Calgary businesses need for a professional online presence. No hidden fees.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full bg-white/10 p-[1px]"
          >
            {[
              {
                title: "Development",
                items: ["5–7 Page Technical Site", "Fast Loading Speed", "Secure Hosting Setup", "Responsive Optimization"]
              },
              {
                title: "Local SEO",
                items: ["Google Business Setup", "On-Page Keyword Strategy", "Local Meta Descriptions", "Map Integration"]
              },
              {
                title: "Assets",
                items: ["Contact Forms", "Click-to-Call Buttons", "Custom Business Graphics", "Social Media Linking"]
              }
            ].map((box, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 }
                }}
                className="bg-surface-1 p-10 text-left space-y-6"
              >
                <h3 className="text-brand font-heading text-lg font-black tracking-tighter italic underline decoration-2 underline-offset-8">
                  {box.title}
                </h3>
                <ul className="space-y-4">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ArrowRight size={14} className="mt-1 text-white/40 shrink-0" />
                      <span className="text-sm font-body text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="pt-8"
          >
            <Button size="xl" variant="primary" href="/checkout">
              CLAIM THIS OFFER
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section
        id="faq"
        bgImage="/images/calgary_tower.png"
        className="bg-surface-0 border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-4"
          >
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">Transparency</span>
            <h2 className="text-4xl md:text-6xl font-black">Frequently Asked</h2>
          </motion.div>

          <div className="space-y-1 border-t border-white/5">
            {[
              { q: "Is it really only $1,000?", a: "Yes. The Starter Package is a fixed-price product. No hidden fees, no required monthly maintenance." },
              { q: "Do YOU host the website?", a: "We set up hosting in YOUR name. You own everything. We can manage it if you wish, but you are never locked in." },
              { q: "How long until we launch?", a: "Typically 14–21 days from the moment we have your assets and information." },
              { q: "What about SEO?", a: "The package includes full on-page local SEO and Google Business setup. Ongoing SEO is a separate service." }
            ].map((faq, i) => (
              <details key={i} className="group py-6 border-b border-white/5 cursor-pointer">
                <summary className="flex justify-between items-center list-none font-heading text-sm md:text-lg font-black uppercase tracking-tighter hover:text-brand transition-colors">
                  {faq.q}
                  <ArrowRight size={20} className="group-open:rotate-90 transition-transform text-brand" />
                </summary>
                <p className="mt-6 text-white/40 font-body text-sm md:text-base leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-surface-2 p-12 border border-brand/20 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black font-heading mb-2 lowercase tracking-tighter italic font-black text-2xl">Still have questions?</h3>
              <p className="text-white/40 text-xs font-body uppercase tracking-widest">Book a free 15-minute consultation with ZASH.</p>
            </div>
            <Button variant="primary" size="lg" href="/free-audit">Schedule Call</Button>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-surface-0 border-t border-white/5 py-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-brand flex items-center justify-center font-heading font-black text-white text-3xl">
              V
            </div>
            <div className="space-y-1">
              <h3 className="font-heading text-base tracking-[0.3em] font-bold uppercase text-white">True Venture</h3>
              <h3 className="font-heading text-base tracking-[0.3em] font-bold uppercase text-brand">Digital</h3>
            </div>
            <p className="text-white/40 text-sm uppercase leading-relaxed tracking-widest max-w-[200px]">
              Calgary's Local Web <br />Performance Studio.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="font-heading text-xs font-black tracking-[0.4em] uppercase text-brand">Navigation</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-white/50">
              <li><a href="#hero" className="hover:text-white transition-colors">Top</a></li>
              <li><a href="#package" className="hover:text-white transition-colors">Starter Package</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-heading text-xs font-black tracking-[0.4em] uppercase text-brand">Connect</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-heading text-xs font-black tracking-[0.4em] uppercase text-brand">Calgary HQ</h4>
            <div className="flex items-center gap-4 text-white/50">
              <MapPin size={20} className="text-brand shrink-0" />
              <span className="text-sm uppercase tracking-widest leading-relaxed">Calgary, AB</span>
            </div>
            <Button variant="industrial" size="lg" className="w-full text-xs" href="/free-audit">
              BOOK FREE AUDIT
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-24 border-t border-white/5 mt-24 flex flex-col md:flex-row justify-between gap-8">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">© 2024 TRUE VENTURE DIGITAL. ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 italic underline underline-offset-4 decoration-white/10 text-center md:text-right">Architecture Over Templates.</p>
        </div>
      </footer>
    </main>
  );
}
