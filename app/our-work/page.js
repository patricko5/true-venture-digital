"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

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
  transition: { staggerChildren: 0.15 }
};

const projects = [
  {
    name: "Summit Plumbing & Heating",
    type: "Trades — Plumbing",
    result: "Page 1 Google ranking in 28 days",
    color: "from-blue-900/30 to-surface-1",
    rating: 5,
  },
  {
    name: "Mission Bistro",
    type: "Restaurant — Fine Dining",
    result: "3x increase in online reservations",
    color: "from-amber-900/30 to-surface-1",
    rating: 5,
  },
  {
    name: "Foothills Electrical",
    type: "Trades — Electrical",
    result: "42 new leads in first month",
    color: "from-orange-900/30 to-surface-1",
    rating: 5,
  },
  {
    name: "Bow Valley Dental",
    type: "Healthcare — Dentistry",
    result: "200% boost in appointment bookings",
    color: "from-emerald-900/30 to-surface-1",
    rating: 5,
  },
  {
    name: "Rocky Ridge Roofing",
    type: "Trades — Roofing",
    result: "Ranked #1 for 'Calgary roofing' in 45 days",
    color: "from-red-900/30 to-surface-1",
    rating: 5,
  },
  {
    name: "Kensington Pet Care",
    type: "Services — Veterinary",
    result: "5x Google Business profile views",
    color: "from-purple-900/30 to-surface-1",
    rating: 5,
  },
];

export default function OurWorkPage() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />

      {/* Hero */}
      <Section
        id="work-hero"
        bgImage="/images/central_library.png"
        className="pt-24"
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <span className="text-brand font-heading text-xs tracking-[0.4em] font-black uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Websites That <span className="text-brand">Perform</span>
            </h1>
            <p className="text-white/50 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Real Calgary businesses. Real results. Every site we build is engineered 
              for local search dominance and lead conversion.
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 25, scale: 0.97 },
                  whileInView: { opacity: 1, y: 0, scale: 1 }
                }}
                className="group bg-surface-1 border border-white/5 overflow-hidden hover:border-brand/40 transition-all duration-500"
              >
                {/* Screenshot Placeholder */}
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 ghost-grid-subtle opacity-30" />
                  
                  {/* Browser Chrome Mock */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-black/40 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 bg-white/10" />
                    <div className="w-2 h-2 bg-white/10" />
                    <div className="w-2 h-2 bg-white/10" />
                    <div className="flex-1 mx-2 h-3 bg-white/5 flex items-center justify-center">
                      <span className="text-[6px] text-white/20 font-body tracking-widest uppercase">{project.name.toLowerCase().replace(/\s+/g, '')}.ca</span>
                    </div>
                  </div>

                  {/* Content Mock */}
                  <div className="absolute inset-0 mt-7 p-6 flex flex-col justify-end">
                    <div className="space-y-2 opacity-40">
                      <div className="h-3 w-3/4 bg-white/10" />
                      <div className="h-2 w-1/2 bg-white/5" />
                      <div className="h-6 w-24 bg-brand/20 mt-3" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500 flex items-center justify-center">
                    <ExternalLink size={24} className="text-white opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-sm font-black uppercase tracking-tighter group-hover:text-brand transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-brand text-[9px] font-body uppercase tracking-widest mt-1">
                      {project.type}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, j) => (
                      <Star key={j} size={10} className="text-brand fill-brand" />
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <ArrowRight size={12} className="text-brand shrink-0" />
                      <span className="text-white/50 text-xs font-body">{project.result}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="work-cta" bgImage="/images/hero_skyline.png">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Be <span className="text-brand">Next?</span>
          </h2>
          <p className="text-white/50 font-body text-base max-w-xl mx-auto leading-relaxed">
            Join Calgary's fastest-growing local businesses with a website that 
            actually generates leads and drives revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/checkout" variant="primary" size="lg">
              Get Started — $1,000 <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button href="/free-audit" variant="outline" size="lg">
              Request Free Audit
            </Button>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
