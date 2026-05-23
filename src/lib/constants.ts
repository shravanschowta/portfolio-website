export const SITE = {
  name: "Shravan S Chowta",
  title:
    "B.Tech 1st Year Student | Computer Science & Business Systems | BMS College of Engineering",
  heroSubtitle: "MERN Stack Developer | Tech Builder | Exploring AI",
  bio: "Passionate about building innovative digital products, exploring AI, and solving real-world problems through technology.",
  email: "shravanschowta@gmail.com",
  github: "https://github.com/shravanschowta",
  linkedin: "https://linkedin.com/in/shravanchowta",
  instagram: "https://instagram.com/shravanschowta",
} as const;

export const TYPEWRITER_WORDS = [
  "MERN Stack Developer",
  "Tech Builder",
  "Exploring AI",
  "Building Startups",
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
] as const;

export const SKILLS = [
  {
    name: "MERN Stack",
    description: "MongoDB, Express, React, Node",
    icon: "developer_board",
    accent: "primary" as const,
  },
  {
    name: "Git",
    description: "Version Control",
    icon: "commit",
    accent: "secondary" as const,
  },
  {
    name: "C++",
    description: "Competitive Coding",
    icon: "terminal",
    accent: "secondary" as const,
  },
  {
    name: "Python",
    description: "AI & Scripting",
    icon: "data_object",
    accent: "tertiary" as const,
  },
  {
    name: "JavaScript",
    description: "ES6+ Development",
    icon: "javascript",
    accent: "primary" as const,
  },
] as const;

export const PROJECTS = [
  {
    id: "pg-listing",
    title: "PG Listing Platform",
    description:
      "Currently building a platform for simplifying PG discovery and listings. Featuring real-time availability and smart search filters.",
    image: "/images/project-pg.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    layout: "large" as const,
  },
  {
    id: "commute",
    title: "Multi-Mode Commute Website",
    description:
      "Building a smart commute planning platform that integrates multiple transport modes into one seamless route planner.",
    image: "/images/project-commute.jpg",
    tags: ["JavaScript", "Google Maps API"],
    layout: "tall" as const,
  },
  {
    id: "ai-future",
    title: "Future AI Projects",
    description:
      "Exploring AI and future-focused tech solutions — generative AI and LLM integration for smarter web agents and productivity tools.",
    image: "/images/project-ai.jpg",
    tags: ["AI", "LLMs", "In Development"],
    layout: "wide" as const,
  },
] as const;

export const JOURNEY = [
  {
    period: "2022 - 2023",
    title: "Pre University College at Alvas Pre University College",
    description:
      "Completed PCMC (Physics, Chemistry, Mathematics, Computer Science) with 95% at Alvas Pre University College, building a strong foundation for engineering.",
    icon: "school",
    accent: "primary" as const,
  },
  {
    period: "2024 - Present",
    title: "B.Tech at BMSCE",
    description:
      "Pursuing B.Tech in Computer Science and Business Systems at BMS College of Engineering. Active in technical societies and the Business Club.",
    icon: "school",
    accent: "secondary" as const,
  },
] as const;

export const IMAGES = {
  heroPortrait: "/images/hero-portrait.jpg",
  aboutWorkspace: "/images/about-workspace.jpg",
} as const;
