import React from "react";

const sizes = {
  small: "w-16 h-16 p-2",
  medium: "w-22 h-22 p-2 ",
  large: "w-36 h-36 p-4",
  extraLarge: "w-54 h-54 p-5",
};

const Icon = ({ icon, size, color, bgColor, custom }) => {
  if (custom) {
    return (
      <div className={custom}>
        {React.cloneElement(icon, {
          className: custom,
        })}
      </div>
    );
  }

  console.log(bgColor, size);
  return (
    <div
      className={`text-${color} ${bgColor} ${sizes[size]} max-w-fit rounded-full flex items-center justify-center`}
    >
      {React.cloneElement(icon, {
        className: `${sizes[size]} ${color}`,
      })}
    </div>
  );
};

export default Icon;
