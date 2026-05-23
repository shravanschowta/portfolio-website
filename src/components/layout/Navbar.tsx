"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => activeId === href.replace("#", "");

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      <nav
        className="h-16 w-full border-b border-white/10 bg-surface/80 backdrop-blur-xl md:h-20"
        aria-label="Main navigation"
      >
        <div className="container-x mx-auto flex h-full max-w-container-max items-center justify-between gap-3">
          <Link
            href="#home"
            className="min-w-0 font-display text-base font-bold tracking-tighter text-on-surface sm:text-headline-md"
            onClick={closeMenu}
          >
            <span className="block truncate sm:hidden">Shravan S.</span>
            <span className="hidden sm:block">{SITE.name}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-label-md font-medium transition-colors",
                  isActive(link.href)
                    ? "text-on-surface"
                    : "text-on-surface-variant/80 hover:text-on-surface",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="mt-1 block h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-gradient rounded-full px-6 py-2.5 font-display text-label-md font-bold text-white shadow-lg shadow-primary/20"
            >
              Let&apos;s Build
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu overlay"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-[min(100%,320px)] flex-col border-l border-white/10 bg-surface/98 px-margin-mobile pb-[env(safe-area-inset-bottom)] pt-[calc(4rem+env(safe-area-inset-top))] backdrop-blur-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <nav
                className="flex flex-col gap-2"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 font-display text-lg font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "text-on-surface-variant active:bg-white/5",
                      )}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="#contact"
                  className="btn-gradient mt-4 flex min-h-[48px] items-center justify-center rounded-full px-6 py-3 font-display text-label-md font-bold text-white"
                  onClick={closeMenu}
                >
                  Let&apos;s Build
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
