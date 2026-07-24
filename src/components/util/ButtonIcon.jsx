import React from "react";

const ButtonIcon = ({ icon, onClick, color = "secondary" }) => {
  return (
    <button
      className={`bg-transparent border-none p-1 rounded-full text-${color} cursor-pointer`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: "w-14 h-14",
      })}
    </button>
  );
};

export default ButtonIcon;
