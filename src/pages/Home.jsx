import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroSection />
    </>
  );
};

export default Home;
