import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustBanner from "@/components/TrustBanner";
import HowItWorks from "@/components/HowItWorks";
import ElectionHero from "@/components/ElectionHero";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <TrustBanner />
      <ElectionHero />
    </>
  );
}
