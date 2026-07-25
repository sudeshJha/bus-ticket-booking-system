import React from "react";
import ButtonIcon from "../../util/ButtonIcon";
import { HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../../context/ThemeContext";
import { MdBrightness2 } from "react-icons/md";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <ButtonIcon
      onClick={handleClick}
      icon={isDarkMode ? <MdBrightness2 /> : <HiOutlineSun />}
      color={isDarkMode ? "text-secondary" : "text-warning"}
    />
  );
};

export default ThemeButton;
