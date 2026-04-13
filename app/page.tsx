import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Clients />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}