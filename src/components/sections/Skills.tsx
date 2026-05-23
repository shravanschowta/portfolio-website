import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const accentStyles = {
  primary: {
    icon: "bg-primary/10 text-primary",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary",
  },
  tertiary: {
    icon: "bg-tertiary/10 text-tertiary",
  },
} as const;

export function Skills() {
  return (
    <section
      id="skills"
      className="section-y relative scroll-mt-20 overflow-hidden md:scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-x relative z-10 mx-auto max-w-container-max">
        <RevealOnScroll className="mb-10 space-y-3 text-center sm:mb-16 sm:space-y-4">
          <h2
            id="skills-heading"
            className="font-display text-2xl text-headline-lg"
          >
            Technical Arsenal
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Empowering ideas with a modern tech stack.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll
              key={skill.name}
              delay={index * 0.1}
              className={cn(
                index === SKILLS.length - 1 &&
                  "col-span-2 mx-auto w-full max-w-[calc(50%-0.375rem)] sm:col-span-1 sm:max-w-none",
              )}
            >
              <GlassCard className="group flex h-full flex-col items-center gap-3 rounded-2xl p-4 text-center sm:gap-4 sm:rounded-3xl sm:p-6 md:p-8">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 sm:h-16 sm:w-16 sm:rounded-2xl",
                    accentStyles[skill.accent].icon,
                  )}
                >
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold sm:text-base sm:text-headline-md">
                  {skill.name}
                </h3>
                <p className="font-display text-[11px] leading-tight text-on-surface-variant sm:text-label-sm">
                  {skill.description}
                </p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
