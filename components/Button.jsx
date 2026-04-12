"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  href,
  ...props 
}) {
  const variants = {
    primary: "bg-brand text-white hover:bg-white hover:text-black border-2 border-brand hover:border-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white hover:text-brand",
    industrial: "bg-surface-2 text-white border-2 border-white/20 hover:border-brand hover:text-brand"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-base font-bold",
    xl: "px-16 py-5 text-lg font-black"
  };

  const sharedClassName = cn(
    "relative uppercase tracking-[0.2em] font-heading transition-all duration-300 inline-flex items-center justify-center",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={sharedClassName} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={sharedClassName}
      {...props}
    >
      {children}
    </motion.button>
  );
}
