import React from "react";
import ButtonIcon from "../../util/ButtonIcon";
import { HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../../context/ThemeContext";
import { MdBrightness2 } from "react-icons/md";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <ButtonIcon
      onClick={() => toggleTheme()}
      icon={isDarkMode ? <MdBrightness2 /> : <HiOutlineSun />}
      color={isDarkMode ? "text-info" : "text-warning"}
    />
  );
};

export default ThemeButton;
