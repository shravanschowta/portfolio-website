"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type OutlineButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-display text-label-md font-bold transition-colors hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4";

export function OutlineButton({ href, children, className }: OutlineButtonProps) {
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
      </motion.a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
