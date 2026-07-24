import React from "react";

const sizes = {
  small: "",
  medium: "px-5 py-3 text-3xl ",
  large: "",
};

const types = {
  primary: "bg-primary hover:bg-primary-hover",
  secondary: "bg-secondary hover:bg-secondary-hover",
};

const Button = ({ size, type, onClick, children, style }) => {
  return (
    <button
      className={`${sizes[size]} ${types[type]} ${style} rounded-xl cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
