import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Brands from "@/components/sections/Brands";
import DemoRequest from "@/components/sections/DemoRequest";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Brands />
      <DemoRequest />
      <Footer />
    </>
  );
}