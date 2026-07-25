import React from "react";

const ButtonIcon = ({ icon, onClick, color = "text-secondary" }) => {
  return (
    <button
      className={`bg-transparent border-none p-1 rounded-full ${color} cursor-pointer`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: `w-14 h-14 ${color}`,
      })}
    </button>
  );
};

export default ButtonIcon;
