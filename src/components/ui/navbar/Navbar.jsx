import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <nav className="mx-auto px-8 py-6 flex items-center justify-between bg-surface  w-full shadow-xl shadow-text-primary-hover h-[12vh] opacity-90 z-50 fixed">
      <Logo />
      <NavList />
      <NavActions />
    </nav>
  );
};

export default Navbar;
