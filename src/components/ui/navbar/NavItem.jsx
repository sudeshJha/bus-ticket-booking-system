import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, to }) => {
  return (
    <li
      className=" hover:border-b-2 hover:border-primary text-text-primary text-2xl py-3 border-b-2 border-transparent font-medium hover:cursor-pointer hover:text-primary tracking-wider
   "
    >
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

export default NavItem;
