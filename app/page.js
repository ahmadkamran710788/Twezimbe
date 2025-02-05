import AboutUs from "@/Components/AboutUs/AboutUs";
import Discover from "@/Components/Discover/Discover";
import FAQSection from "@/Components/FAQs/FAQs";
import Features from "@/Components/Features/Features";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <AboutUs />
      <Discover />
      <FAQSection />
    </>
  );
}
