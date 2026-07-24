import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import HeroSection from "../components/ui/hero/HeroSection";
import SearchBarSection from "../components/ui/search/SearchBarSection";
import AboutSection from "../components/ui/about/AboutSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBarSection />
      <AboutSection />
    </>
  );
};

export default Home;
