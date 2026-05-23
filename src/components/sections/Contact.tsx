"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { SITE } from "@/lib/constants";

const socialLinks = [
  { href: SITE.github, label: "GitHub", Icon: GitHubIcon },
  { href: SITE.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SITE.instagram, label: "Instagram", Icon: InstagramIcon },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="section-y relative scroll-mt-20 overflow-hidden bg-surface-container-lowest md:scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container-x relative z-10 mx-auto max-w-container-max">
        <RevealOnScroll>
          <GlassCard className="relative overflow-hidden rounded-2xl p-6 text-center sm:rounded-3xl sm:p-12 md:p-20">
            <GlowOrb className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 opacity-30 sm:-top-24 sm:-right-24 sm:h-64 sm:w-64 sm:opacity-35" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6 sm:space-y-8">
              <h2
                id="contact-heading"
                className="font-display text-2xl leading-tight text-headline-lg-mobile sm:text-headline-lg"
              >
                Let&apos;s build something{" "}
                <span className="text-gradient">remarkable</span> together.
              </h2>
              <p className="font-body text-body-md text-on-surface-variant sm:text-body-lg">
                Have a project in mind or just want to chat? I&apos;m always open
                to discussing new ideas and opportunities.
              </p>
              <motion.a
                href={`mailto:${SITE.email}`}
                className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 break-all px-2 font-display text-base text-primary sm:gap-3 sm:text-headline-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {SITE.email}
                <span className="material-symbols-outlined shrink-0" aria-hidden>
                  mail
                </span>
              </motion.a>
              <div className="flex flex-wrap justify-center gap-4 pt-4 sm:gap-6 sm:pt-8">
                {socialLinks.map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-colors hover:text-primary active:scale-95"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
