import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/about/PageHero";
import Origin from "@/components/about/Origin";
import Timeline from "@/components/about/Timeline";
import Generations from "@/components/about/Generations";
import CraftsmenToday from "@/components/about/CraftsmenToday";
import Values from "@/components/about/Values";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Our Story | Pasadena Construction & Interiors — Since 1971",
  description:
    "Five decades of family-owned craftsmanship in Pasadena. Three generations, in-house craftsmen, and a single standard upheld since 1971. Trusted by Ritz-Carlton, UCLA, Edwards Air Force Base, and more.",
  openGraph: {
    title: "Our Story | Pasadena Construction & Interiors",
    description:
      "Five decades. Three generations. One standard. The story of Pasadena's most trusted family-owned construction firm.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <PageHero />
        <Origin />
        <Timeline />
        <Generations />
        <CraftsmenToday />
        <Values />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}