import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import CapabilitiesBar from "@/components/services/CapabilitiesBar";
import ServicesGrid from "@/components/services/ServicesGrid";
import Process from "@/components/services/Process";
import Materials from "@/components/services/Materials";
import WhyUs from "@/components/services/WhyUs";
import Specialized from "@/components/services/Specialized";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title:
    "Services — Pasadena Construction & Interiors | Every Trade Under One Roof",
  description:
    "Twelve in-house specialties from a single accountable team: construction, cabinetry, painting, flooring, plumbing, electrical, HVAC, roofing, landscaping, masonry, and more. Serving Pasadena since 1971.",
  keywords: [
    "Pasadena construction services",
    "Pasadena remodeling",
    "custom cabinetry Pasadena",
    "commercial construction",
    "interior design Pasadena",
    "licensed contractor Pasadena",
    "historic restoration",
    "24 hour estimates",
  ],
  openGraph: {
    title: "Services | Pasadena Construction & Interiors",
    description:
      "Twelve trades, one accountable team. From custom cabinetry to roof repair — every service staffed by craftsmen we employ directly.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <ServicesHero />
        <CapabilitiesBar />
        <ServicesGrid />
        <Process />
        <Materials />
        <WhyUs />
        <Specialized />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}