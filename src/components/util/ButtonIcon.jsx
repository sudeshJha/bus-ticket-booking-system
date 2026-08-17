import React from "react";

const ButtonIcon = ({ icon, onClick, color = "text-secondary", size = 14 }) => {
  return (
    <button
      className={`bg-transparent border-none p-1 rounded-full ${color} cursor-pointer h-${size} w-${size}`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: `w-${size} h-${size} ${color}`,
      })}
    </button>
  );
};

export default ButtonIcon;
