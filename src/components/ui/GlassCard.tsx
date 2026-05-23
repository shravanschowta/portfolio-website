"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { useGlassMouse } from "@/hooks/useGlassMouse";

type GlassCardProps = ComponentPropsWithoutRef<typeof motion.div>;

export function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  const { onMouseMove } = useGlassMouse();

  return (
    <motion.div
      className={cn("glass-card", className)}
      onMouseMove={onMouseMove}
      {...props}
    >
      {children}
    </motion.div>
  );
}
