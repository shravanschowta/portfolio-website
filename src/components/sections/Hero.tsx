"use client";

import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { Typewriter } from "@/components/ui/Typewriter";
import { GradientButton } from "@/components/ui/GradientButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IMAGES, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden pb-20 pt-8 md:scroll-mt-24 md:pb-32 md:pt-12 lg:py-16"
      aria-labelledby="hero-heading"
    >
      <HeroParticles />
      <GlowOrb className="absolute top-1/4 -right-10 hidden h-48 w-48 opacity-25 sm:block md:-right-20 md:h-96 md:w-96 md:opacity-35" />
      <GlowOrb
        className="absolute bottom-1/4 -left-10 hidden h-40 w-40 bg-secondary opacity-15 sm:block md:-left-20 md:h-72 md:w-72 md:opacity-20"
        delay
      />

      <div className="container-x relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12">
        <RevealOnScroll className="space-y-6 md:space-y-8 lg:col-span-7">
          <div className="space-y-3 md:space-y-4">
            <h1
              id="hero-heading"
              className="font-display text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-tight tracking-tight md:text-display-lg-mobile lg:text-display-lg"
            >
              {SITE.name}
            </h1>
            <Typewriter />
          </div>

          <div className="space-y-4 md:space-y-6">
            <p className="font-display text-base leading-snug text-on-surface-variant sm:text-headline-md">
              {SITE.title}
            </p>
            <p className="max-w-2xl font-body text-body-md leading-relaxed text-on-surface-variant/80 sm:text-body-lg">
              {SITE.bio} Focused on the intersection of technical excellence and
              business impact.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
            <GradientButton
              href="#projects"
              className="w-full min-h-[48px] sm:w-auto"
              icon={
                <span
                  className="material-symbols-outlined text-[20px] leading-none"
                  aria-hidden
                >
                  arrow_forward
                </span>
              }
            >
              View Projects
            </GradientButton>
            <OutlineButton
              href="#contact"
              className="w-full min-h-[48px] sm:w-auto"
            >
              Contact Me
            </OutlineButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll
          className="relative mx-auto w-full max-w-[min(100%,360px)] lg:col-span-5 lg:max-w-none"
          delay={0.2}
        >
          <GlassCard className="relative z-10 aspect-square w-full animate-floating rounded-2xl p-1.5 sm:rounded-3xl sm:p-2">
            <PortfolioImage
              src={IMAGES.heroPortrait}
              alt="Portrait of Shravan S Chowta"
              width={600}
              height={600}
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="h-full w-full rounded-xl object-cover transition-all duration-700 sm:rounded-2xl [@media(hover:hover)]:grayscale [@media(hover:hover)]:hover:grayscale-0"
            />
          </GlassCard>
          <div
            className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
