import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import HeroSection from "../components/ui/hero/HeroSection";
import SearchBarSection from "../components/ui/search/SearchBarSection";
import AboutSection from "../components/ui/about/AboutSection";
import ChooseSection from "../components/ui/choose/ChooseSection";
import AccordianSection from "../components/ui/accordian/AccordianSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBarSection />
      <AboutSection />
      <ChooseSection />
      <AccordianSection />
    </>
  );
};

export default Home;
