import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoRow from "@/components/LogoRow";
import Positioning from "@/components/Positioning";
import Methodology from "@/components/Methodology";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Flywheel from "@/components/Flywheel";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <LogoRow />
        <Positioning />
        <Methodology />
        <CaseStudies />
        <Pricing />
        <Flywheel />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
