import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JOURNEY } from "@/lib/constants";
import { cn } from "@/lib/cn";

const accentMap = {
  primary: {
    border: "border-primary/50",
    time: "text-primary",
    icon: "text-primary",
  },
  secondary: {
    border: "border-secondary/50",
    time: "text-secondary",
    icon: "text-secondary",
  },
} as const;

export function Journey() {
  return (
    <section
      id="journey"
      className="section-y relative scroll-mt-20 overflow-hidden md:scroll-mt-24"
      aria-labelledby="journey-heading"
    >
      <div className="container-x relative z-10 mx-auto max-w-container-max">
        <RevealOnScroll className="mb-10 text-center sm:mb-16">
          <h2
            id="journey-heading"
            className="mb-3 font-display text-2xl text-headline-lg sm:mb-4"
          >
            My Journey
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            The path of an engineer, entrepreneur, and creator.
          </p>
        </RevealOnScroll>

        <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
          {/* Timeline line — left on mobile, center on desktop */}
          <div
            className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:left-1/2 md:translate-x-0"
            aria-hidden
          />

          {JOURNEY.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.15}>
              <article className="group relative flex items-start gap-4 md:items-center md:justify-between md:odd:flex-row-reverse">
                <div
                  className={cn(
                    "z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-surface",
                    accentMap[item.accent].border,
                    "md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2",
                  )}
                >
                  <span
                    className={cn(
                      "material-symbols-outlined text-sm",
                      accentMap[item.accent].icon,
                    )}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                </div>

                <GlassCard
                  className={cn(
                    "min-w-0 flex-1 rounded-2xl p-5 sm:p-6",
                    "md:w-[calc(50%-2.75rem)] md:flex-none",
                  )}
                >
                  <time
                    className={cn(
                      "font-display text-label-sm font-bold",
                      accentMap[item.accent].time,
                    )}
                    dateTime={item.period}
                  >
                    {item.period}
                  </time>
                  <h3 className="mb-2 mt-2 font-display text-base font-semibold leading-snug sm:text-lg sm:text-headline-md">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant sm:text-body-md">
                    {item.description}
                  </p>
                </GlassCard>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
