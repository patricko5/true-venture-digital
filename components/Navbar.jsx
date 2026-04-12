"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "/#hero", id: "hero" },
  { title: "Why It Matters", href: "/#why-it-matters", id: "why-it-matters" },
  { title: "The Package", href: "/#package", id: "package" },
  { title: "FAQ", href: "/#faq", id: "faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [activeSegment, setActiveSegment] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Intersection Observer to track active section on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSegment(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const opacity = useTransform(scrollY, [0, 100], [1, 1]);
  const y = useTransform(scrollY, [0, 100], [0, 0]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-6 md:p-8 pointer-events-none">
        {/* Centered Floating Bar */}
        <motion.div 
          style={{ opacity, y }}
          className="pointer-events-auto flex items-center glass-morphism w-full max-w-5xl px-10 py-5 border border-white/10 relative"
        >
          {/* Logo Container */}
          <Link href="/#hero" className="flex-1 flex items-center gap-4 group" onClick={closeMenu}>
            <div className="w-12 h-12 bg-brand flex items-center justify-center font-heading font-black text-white text-2xl shrink-0 group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="hidden lg:flex flex-col leading-none">
              <span className="font-heading text-[13px] tracking-[0.3em] font-bold uppercase text-white group-hover:text-brand transition-colors">
                True Venture
              </span>
              <span className="font-heading text-[13px] tracking-[0.3em] font-bold uppercase text-brand group-hover:text-white transition-colors">
                Digital
              </span>
            </div>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="flex-none hidden md:flex items-center justify-center gap-10 px-4">
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeSegment === item.id;
              
              return (
                <Link 
                  key={item.title}
                  href={item.href}
                  onClick={() => setActiveSegment(item.id)}
                  className={cn(
                    "relative font-body text-[13px] tracking-[0.25em] uppercase transition-colors whitespace-nowrap py-1",
                    isActive ? "text-white" : "text-white/40 hover:text-brand"
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand origin-center"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {!isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/20 origin-left"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-none">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-none transition-all duration-300",
                isMenuOpen ? "bg-white text-brand" : "bg-brand text-white"
              )}
            >
              {isMenuOpen ? <ArrowRight size={20} className="rotate-90" /> : <div className="space-y-1">
                <div className="w-5 h-0.5 bg-white"></div>
                <div className="w-5 h-0.5 bg-white"></div>
                <div className="w-3 h-0.5 bg-white"></div>
              </div>}
            </button>
          </div>

          {/* CTA Container (Desktop) */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-6 text-[11px] uppercase tracking-widest">
            <div className="hidden xl:flex items-center gap-2 text-white/30 whitespace-nowrap">
              <MapPin size={12} className="text-brand" />
              <span>Calgary, AB</span>
            </div>
            
            <Button 
              variant="primary" 
              size="md" 
              className={cn(
                "hidden sm:flex group h-11 px-6 text-[11px] transition-all duration-300",
                pathname === "/free-audit" ? "ring-2 ring-brand ring-offset-4 ring-offset-black" : ""
              )} 
              href="/free-audit"
            >
              FREE AUDIT 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={14} className="ml-2" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-brand flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveSegment(item.id);
                      closeMenu();
                    }}
                    className="font-heading text-4xl font-black uppercase text-white hover:text-surface-0 transition-colors tracking-tighter"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 w-full"
              >
                <Button 
                  href="/free-audit" 
                  variant="white" 
                  size="xl" 
                  className="w-full text-brand justify-center"
                  onClick={closeMenu}
                >
                  FREE AUDIT <ArrowRight size={20} className="ml-4" />
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="absolute bottom-12 left-0 right-0 text-center flex flex-col items-center gap-2"
            >
              <MapPin size={16} className="text-white" />
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-white">Calgary, AB</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

