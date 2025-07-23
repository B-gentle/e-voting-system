import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBanner from "@/components/TrustBanner";
import HowItWorks from "@/components/HowItWorks";
import ElectionHero from "@/components/ElectionHero";

export default function Home() {
  return (
    <>
      <div className="bg-background">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <WhyChooseUs />
      <TrustBanner />
      <ElectionHero />
      <Footer />
    </>
  );
}
