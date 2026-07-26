import React from "react";
import HeroContent from "./HeroContent";
import { useDarkMode } from "../../../../context/ThemeContext";

const HeroSection = () => {
  const { isDarkMode } = useDarkMode();

  const lightImageUrl = "src/assets/hero_bg_light.png";
  const darkImageUrl = "src/assets/hero_bg_dark.png";

  const imageUrl = isDarkMode ? darkImageUrl : lightImageUrl;
  console.log(imageUrl);

  return (
    <div
      className={" h-[88vh] object-fit w-full bg-cover bg-center bg-no-repeat "}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <HeroContent />
    </div>
  );
};

export default HeroSection;
