import React from "react";

const sizes = {
  small: "px-5 py-3 text-2xl",
  medium: "px-7 py-5 text-3xl",
  large: "",
};

const types = {
  primary: "bg-primary hover:bg-primary-hover text-primary-anti",
  secondary: "bg-secondary hover:bg-secondary-hover",
};

const Button = ({ size, type, custom, onClick, children, style }) => {
  if (custom) {
    return (
      <button onClick={onClick} className={`${custom} cursor-pointer`}>
        {children}
      </button>
    );
  }

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
