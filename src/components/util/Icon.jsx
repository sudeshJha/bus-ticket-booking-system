import React from "react";

const sizes = {
  small: "w-16 h-16 p-2",
  medium: "w-24 h-24 p-3",
  large: "w-32 h-32 p-4",
  extraLarge: "w-54 h-54 p-5",
};

const Icon = ({ icon, size, color, bgColor, custom, onClick }) => {
  return (
    <div
      className={`text-${color} ${bgColor} ${sizes[size]}  rounded-full flex items-center justify-center ${custom}`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: `${sizes[size]} ${color} ${custom}`,
      })}
    </div>
  );
};

export default Icon;
