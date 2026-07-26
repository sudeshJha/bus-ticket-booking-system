import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <nav className="mx-auto px-8 py-6 flex items-center justify-between bg-background/80  w-full shadow-xl backdrop-blur-md shadow-text-primary-hover h-[12vh]  z-50 fixed top-0">
      <Logo />
      <NavList />
      <NavActions />
    </nav>
  );
};

export default Navbar;
