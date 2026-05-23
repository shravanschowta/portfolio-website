import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IMAGES } from "@/lib/constants";

export function About() {
  return (
    <section
      id="about"
      className="section-y relative scroll-mt-20 overflow-hidden bg-surface-container-lowest md:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <GlowOrb className="pointer-events-none absolute top-1/2 left-0 hidden h-64 w-64 -translate-y-1/2 bg-primary/5 sm:block md:h-96 md:w-96" />

      <div className="container-x relative z-10 mx-auto max-w-container-max">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
          <RevealOnScroll className="order-2 lg:order-1">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-label-sm text-primary sm:mb-6 sm:px-4 sm:py-1.5">
              WHO AM I
            </span>
            <h2
              id="about-heading"
              className="mb-6 font-display text-2xl text-headline-lg sm:mb-8"
            >
              Architecting Digital Experiences
            </h2>
            <div className="space-y-4 font-body text-body-md leading-relaxed text-on-surface-variant sm:space-y-6">
              <p>
                I am currently pursuing my 1st year in{" "}
                <span className="font-semibold text-on-surface">
                  B.Tech Computer Science and Business Systems
                </span>{" "}
                at{" "}
                <span className="font-semibold text-on-surface">
                  BMS College of Engineering
                </span>
                . My journey in tech is driven by curiosity for how complex
                systems work and a desire to build things that matter.
              </p>
              <p>
                I bridge the gap between engineering and entrepreneurship.
                Whether it&apos;s managing a marketing agency or architecting a
                MERN stack application, I focus on scalability, user experience,
                and real-world utility.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 md:gap-8">
              <GlassCard className="rounded-xl p-4 sm:rounded-2xl sm:p-6">
                <h3 className="mb-1 font-display text-xl font-bold text-primary sm:text-headline-md">
                  01+
                </h3>
                <p className="font-display text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-label-sm sm:tracking-widest">
                  Year Experience
                </p>
              </GlassCard>
              <GlassCard className="rounded-xl p-4 sm:rounded-2xl sm:p-6">
                <h3 className="mb-1 font-display text-xl font-bold text-primary sm:text-headline-md">
                  05+
                </h3>
                <p className="font-display text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-label-sm sm:tracking-widest">
                  Projects Built
                </p>
              </GlassCard>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="order-1 lg:order-2" delay={0.2}>
            <GlassCard className="relative aspect-video rounded-2xl p-3 sm:rounded-3xl sm:p-4">
              <div className="relative h-full min-h-[180px] w-full overflow-hidden rounded-xl bg-surface-container-high sm:min-h-[200px] sm:rounded-2xl">
                <PortfolioImage
                  src={IMAGES.aboutWorkspace}
                  alt="Engineering workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <span
                  className="material-symbols-outlined absolute bottom-4 left-4 text-3xl text-primary sm:bottom-8 sm:left-8 sm:text-4xl"
                  aria-hidden
                >
                  code
                </span>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
