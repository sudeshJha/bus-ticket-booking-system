import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <ul className="flex gap-20 items-center justify-center">
      <NavItem>Search Bus</NavItem>
      <NavItem>My Bookings</NavItem>
      <NavItem>Fares</NavItem>
      <NavItem>About</NavItem>
    </ul>
  );
};

export default NavList;
