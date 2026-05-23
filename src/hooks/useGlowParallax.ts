"use client";

import { useEffect } from "react";

export function useGlowParallax() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const glowOrbs = document.querySelectorAll<HTMLElement>(".glow-aura");
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glowOrbs.forEach((glow) => {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}
