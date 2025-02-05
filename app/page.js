import AboutUs from "@/Components/AboutUs/AboutUs";
import Community from "@/Components/Community/Community";
import Discover from "@/Components/Discover/Discover";
import FAQSection from "@/Components/FAQs/FAQs";
import Features from "@/Components/Features/Features";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Community />
      <Features />
      <AboutUs />
      <Discover />
      <FAQSection />
      <Footer />
    </>
  );
}
