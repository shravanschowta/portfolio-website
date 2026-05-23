"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px", amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
