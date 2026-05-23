"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

const baseClassName =
  "btn-gradient inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-label-md font-bold text-white shadow-lg shadow-primary/20 sm:px-8 sm:py-4";

export function GradientButton({
  href,
  children,
  className,
  icon,
}: GradientButtonProps) {
  const classNames = cn(baseClassName, className);

  if (href.startsWith("#")) {
    return (
      <motion.a
        href={href}
        className={classNames}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      <motion.span
        className="inline-flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
        {icon}
      </motion.span>
    </Link>
  );
}
