import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import EstimateForm from "@/components/contact/form/EstimateForm";
import ReassuranceBar from "@/components/contact/ReassuranceBar";
import GeneralContact from "@/components/contact/GeneralContact";
import MapSection from "@/components/contact/MapSection";
import PracticalInfo from "@/components/contact/PracticalInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title:
    "Contact & Request an Estimate — Pasadena Construction & Interiors",
  description:
    "Request a free estimate from Pasadena Construction & Interiors. Most proposals delivered within 24 hours of your site visit. Family owned since 1971. Licensed, bonded, and insured. 135 N. Marengo Ave, Pasadena.",
  keywords: [
    "Pasadena construction estimate",
    "free construction quote Pasadena",
    "contractor estimate Pasadena",
    "renovation estimate Southern California",
    "Pasadena Construction and Interiors contact",
  ],
  openGraph: {
    title: "Contact | Pasadena Construction & Interiors",
    description:
      "Tell us about your project. Free estimates within 24 hours. Family owned since 1971.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <ContactHero />
        <EstimateForm />
        <ReassuranceBar />
        <GeneralContact />
        <MapSection />
        <PracticalInfo />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}