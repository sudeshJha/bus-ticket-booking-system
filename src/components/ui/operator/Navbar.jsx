import React from "react";
import Logo from "../navbar/Logo";
import ButtonIcon from "../../util/ButtonIcon";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="px-8 py-6 flex items-center justify-between w-fit bg-surface h-[12vh] min-w-full ">
      <div className="flex items-center justify-center w-fit gap-16">
        <ButtonIcon
          icon={<FiMenu />}
          onClick={toggleSidebar}
          color="text-text-primary"
          bgColor="text-primary"
          size={12}
        />
        {!isSidebarOpen && <Logo />}
      </div>

      <div>Other things</div>
    </nav>
  );
};

export default Navbar;
