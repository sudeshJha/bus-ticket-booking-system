import React from "react";
import ButtonIcon from "../../util/ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeButton = () => {
  const isDarkMode = false;
  return (
    <ButtonIcon icon={isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />} />
  );
};

export default ThemeButton;
