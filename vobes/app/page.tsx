import Features from "@/components/Features";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBanner from "@/components/TrustBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBanner />
      <WhyChooseUs />
      <Features />
      <Footer />
    </>
  );
}
