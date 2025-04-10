"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  className?: string;
}

export function SmoothScroll({ children, className = "" }: SmoothScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`smooth-scroll ${className}`}
    >
      {children}
    </motion.div>
  );
}

// This component is used to create a smooth scroll effect for individual sections
export function SmoothSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
