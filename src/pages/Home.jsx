import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import HeroSection from "../components/ui/hero/HeroSection";
import SearchBarSection from "../components/ui/search/SearchBarSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBarSection />
    </>
  );
};

export default Home;
