"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  bgImage,
  id,
  overlay = true,
  ghostGrid = true
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center",
        ghostGrid && "ghost-grid",
        className
      )}
    >
      {/* Background Image Container */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.3]"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          )}
        </div>
      )}

      {/* Surface Pattern (Subtle grid overlay) */}
      <div className="absolute inset-x-0 h-[1px] top-40 bg-white/5 z-10" />
      <div className="absolute inset-x-0 h-[1px] bottom-40 bg-white/5 z-10" />
      <div className="absolute inset-y-0 w-[1px] left-20 bg-white/5 z-10" />
      <div className="absolute inset-y-0 w-[1px] right-20 bg-white/5 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-7xl px-8 py-8 md:px-20"
      >
        {children}
      </motion.div>
    </section>
  );
}
