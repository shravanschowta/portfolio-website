import Link from "next/link";
import { SITE } from "@/lib/constants";

const footerLinks = [
  { href: SITE.linkedin, label: "LinkedIn" },
  { href: SITE.github, label: "GitHub" },
  { href: `mailto:${SITE.email}`, label: "Email" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-background pb-[env(safe-area-inset-bottom)]">
      <div className="container-x mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 py-10 sm:gap-8 sm:py-12 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-display text-lg font-semibold text-on-surface sm:text-headline-md">
            {SITE.name}
          </p>
          <p className="max-w-xs font-body text-sm text-on-surface-variant sm:text-body-md">
            © {year} {SITE.name}. Building the future, one project at a time.
          </p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="min-h-[44px] content-center font-display text-label-sm text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
