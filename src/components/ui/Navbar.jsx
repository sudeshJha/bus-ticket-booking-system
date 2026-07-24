import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className="mx-auto px-6 py-6 flex items-center justify-between bg-surface- backdrop-blur-2xl w-100% shadow-md">
      <Logo />
      <NavList />
      <Logo />
    </nav>
  );
};

export default Navbar;
