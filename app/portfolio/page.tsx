import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FeaturedProject from "@/components/portfolio/FeaturedProject";
import FilterableGrid from "@/components/portfolio/FilterableGrid";
import StatsBand from "@/components/portfolio/StatsBand";
import Testimonial from "@/components/portfolio/Testimonial";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title:
    "Portfolio — Pasadena Construction & Interiors | Selected Work Since 1971",
  description:
    "Five decades of finished work: historic restorations, commercial construction, residential renovations, and institutional projects across Pasadena and Southern California. From UCLA to the Ritz-Carlton to private estates.",
  keywords: [
    "Pasadena construction portfolio",
    "historic restoration projects",
    "commercial construction Pasadena",
    "residential renovation portfolio",
    "UCLA construction",
    "Ritz-Carlton renovation",
    "Pasadena landmark restoration",
  ],
  openGraph: {
    title: "Portfolio | Pasadena Construction & Interiors",
    description:
      "Five decades of finished work — historic estates, institutional facilities, commercial spaces, and residential renovations across Southern California.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <PortfolioHero />
        <FeaturedProject />
        <FilterableGrid />
        <StatsBand />
        <Testimonial />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}