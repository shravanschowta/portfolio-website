import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shravan S Chowta | Portfolio",
  description:
    "MERN Stack Developer | Tech Builder | Exploring AI. Portfolio of Shravan S Chowta — B.Tech CSBS student at BMS College of Engineering.",
  keywords: [
    "Shravan S Chowta",
    "MERN Stack",
    "Portfolio",
    "Developer",
    "BMSCE",
  ],
  authors: [{ name: "Shravan S Chowta" }],
  openGraph: {
    title: "Shravan S Chowta | Portfolio",
    description:
      "MERN Stack Developer | Tech Builder | Exploring AI",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131313",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} selection:bg-primary selection:text-on-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
