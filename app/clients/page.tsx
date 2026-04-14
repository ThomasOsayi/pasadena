import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientWall from "@/components/clients/ClientWall";
import CaseStudies from "@/components/clients/CaseStudies";
import IndustryCoverage from "@/components/clients/IndustryCoverage";
import Longevity from "@/components/clients/Longevity";
import TrustSignals from "@/components/clients/TrustSignals";
import ClientsCTA from "@/components/clients/ClientsCTA";

export const metadata: Metadata = {
  title: "Clients — Pasadena Construction & Interiors | Trusted Since 1971",
  description:
    "Twelve institutions across federal, education, healthcare, hospitality, and civic sectors — including UCLA, Ritz-Carlton, Edwards Air Force Base, and the Pasadena Convention Center. Long-term relationships, some spanning four decades.",
  keywords: [
    "Pasadena construction clients",
    "institutional construction Pasadena",
    "UCLA renovation contractor",
    "federal construction California",
    "historic restoration clients",
    "commercial construction portfolio",
  ],
  openGraph: {
    title: "Clients | Pasadena Construction & Interiors",
    description:
      "Twelve institutions. Five decades. Zero shortcuts. The firms, agencies, and cultural landmarks that trust PCI.",
    type: "website",
  },
};

export default function ClientsPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <ClientsHero />
        <ClientWall />
        <CaseStudies />
        <IndustryCoverage />
        <Longevity />
        <TrustSignals />
        <ClientsCTA />
      </main>
      <Footer />
    </>
  );
}