import React from "react";
import Logo from "../navbar/Logo";
import ButtonIcon from "../../util/ButtonIcon";
import { FiMenu } from "react-icons/fi";
import ThemeButton from "../navbar/ThemeButton";
import NavActions from "../navbar/NavActions";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="px-8 py-6 flex items-center justify-between w-fit bg-surface h-[12vh] min-w-full ">
      <div className="flex items-center justify-center w-fit gap-16">
        <ButtonIcon
          icon={<FiMenu />}
          onClick={toggleSidebar}
          color="text-text-primary"
          size={12}
        />
        {!isSidebarOpen && <Logo />}
      </div>

      <NavActions />
    </nav>
  );
};

export default Navbar;
