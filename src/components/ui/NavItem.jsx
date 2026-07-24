import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, to }) => {
  return (
    <li
      className=" hover:border-b-2 hover:border-primary text-text-primary text-2xl transition py-3 border-b-2 border-surface font-medium hover:cursor-pointer hover:text-primary
   "
    >
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

export default NavItem;
