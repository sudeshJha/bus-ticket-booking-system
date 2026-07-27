import React from "react";
import HeroSection from "../components/ui/home/hero/HeroSection";
import SearchBarSection from "../components/ui/SearchBarSection";
import AboutSection from "../components/ui/home/about/AboutSection";
import ChooseSection from "../components/ui/home/choose/ChooseSection";
import AccordianSection from "../components/ui/home/accordian/AccordianSection";
import Footer from "../components/ui/home/footer/Footer";

const Home = () => {
  return (
    <div id="#">
      <HeroSection />
      <SearchBarSection />
      <AboutSection />
      <ChooseSection />
      <AccordianSection />
      <Footer />
    </div>
  );
};

export default Home;
