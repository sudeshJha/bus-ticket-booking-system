import React from "react";
import ButtonIcon from "../../util/ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../../context/ThemeContext";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <ButtonIcon
      onClick={handleClick}
      icon={isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      color={isDarkMode ? "secondary" : "warning"}
    />
  );
};

export default ThemeButton;
