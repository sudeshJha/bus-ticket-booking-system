import React from "react";

const NavItem = ({ tab: { id, name }, selectTab, active }) => {
  return (
    <li
      className={`  text-2xl py-3 px-4 border-b-2 border-transparent cursor-pointer tracking-wider 
   ${active ? "bg-secondary/70 text-primary-anti rounded-2xl" : "text-text-primary hover:text-secondary hover:border-b-2 hover:border-secondary"}`}
      onClick={() => selectTab(id)}
    >
      {name}
    </li>
  );
};

export default NavItem;
