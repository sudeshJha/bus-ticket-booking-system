import React from "react";

const ButtonIcon = ({ icon }) => {
  return (
    <button className="bg-transparent border-none p-1 rounded-full text-secondary cursor-pointer">
      {React.cloneElement(icon, {
        className: "w-14 h-14",
      })}
    </button>
  );
};

export default ButtonIcon;
