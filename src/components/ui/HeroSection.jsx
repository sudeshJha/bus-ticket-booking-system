import React from "react";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  const isDarkMode = true;
  const lightImageUrl = "src/assets/hero_bg_light.png";
  const darkImageUrl = "src/assets/hero_bg_dark.png";
  const imageUrl = isDarkMode ? darkImageUrl : lightImageUrl;
  console.log(imageUrl);
  return (
    <div
      className={`bg-[url(${imageUrl})] h-[88vh] object-fit w-full bg-cover bg-center bg-no-repeat`}
    >
      <HeroContent />
    </div>
  );
};

export default HeroSection;
