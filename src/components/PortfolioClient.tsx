"use client";

import { useGlowParallax } from "@/hooks/useGlowParallax";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { PageTransition } from "@/components/ui/PageTransition";

export function PortfolioClient() {
  useGlowParallax();

  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
