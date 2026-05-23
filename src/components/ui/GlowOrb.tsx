import { cn } from "@/lib/cn";

type GlowOrbProps = {
  className?: string;
  delay?: boolean;
};

export function GlowOrb({ className, delay }: GlowOrbProps) {
  return (
    <div
      className={cn("glow-aura rounded-full pointer-events-none", className)}
      style={delay ? { animationDelay: "-5s" } : undefined}
      aria-hidden
    />
  );
}
