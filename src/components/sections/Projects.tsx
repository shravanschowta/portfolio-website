import { PortfolioImage } from "@/components/ui/PortfolioImage";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GradientButton } from "@/components/ui/GradientButton";
import { PROJECTS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const tagStyles = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
} as const;

export function Projects() {
  const [large, tall, wide] = PROJECTS;

  return (
    <section
      id="projects"
      className="section-y relative scroll-mt-20 overflow-hidden bg-surface-container-lowest md:scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="container-x relative z-10 mx-auto max-w-container-max">
        <RevealOnScroll className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:gap-6 md:flex-row md:items-end">
          <div className="space-y-3 sm:space-y-4">
            <h2
              id="projects-heading"
              className="font-display text-2xl text-headline-lg"
            >
              Currently Working On
            </h2>
            <p className="max-w-xl font-body text-body-md text-on-surface-variant">
              A glimpse into the digital solutions I&apos;m building — from web
              platforms to experimental AI.
            </p>
          </div>
          <Link
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center gap-2 font-display text-label-md text-primary transition-colors hover:underline"
          >
            All Projects
            <span className="material-symbols-outlined text-xl" aria-hidden>
              north_east
            </span>
          </Link>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <GlassCard className="flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative aspect-video w-full overflow-hidden bg-surface-variant">
                <PortfolioImage
                  src={large.image}
                  alt={large.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-5 sm:space-y-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {large.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 font-display text-[11px] sm:px-3 sm:py-1 sm:text-label-sm",
                        tagStyles.primary,
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-headline-md sm:text-headline-md">
                    {large.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant sm:text-body-md">
                    {large.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-5" delay={0.2}>
            <GlassCard className="flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative aspect-video overflow-hidden bg-surface-variant sm:aspect-[4/3] md:aspect-square lg:min-h-[280px]">
                <PortfolioImage
                  src={tall.image}
                  alt={tall.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-5 sm:space-y-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {tall.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 font-display text-[11px] sm:px-3 sm:py-1 sm:text-label-sm",
                        tagStyles.secondary,
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-headline-md">
                    {tall.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant sm:text-body-md">
                    {tall.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-12" delay={0.15}>
            <GlassCard className="grid grid-cols-1 overflow-hidden rounded-2xl sm:rounded-3xl md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-6 sm:space-y-6 sm:p-10">
                <div className="flex items-center gap-2 text-tertiary sm:gap-3">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden>
                    auto_awesome
                  </span>
                  <span className="font-display text-[11px] font-bold uppercase tracking-widest sm:text-label-sm">
                    In Development
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl text-headline-lg-mobile sm:text-headline-lg">
                    {wide.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant sm:text-body-md">
                    {wide.description}
                  </p>
                </div>
                <GradientButton
                  href="#contact"
                  className="w-full min-h-[48px] sm:w-fit sm:!px-8 sm:!py-3"
                >
                  Learn More
                </GradientButton>
              </div>
              <div className="relative min-h-[220px] overflow-hidden bg-surface-container-high sm:min-h-[280px] md:min-h-[320px] lg:min-h-full">
                <PortfolioImage
                  src={wide.image}
                  alt="AI visualization"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
