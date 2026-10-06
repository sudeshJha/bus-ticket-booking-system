import React from "react";
import Logo from "../navbar/Logo";
import ButtonIcon from "../../util/ButtonIcon";
import NavActions from "../navbar/NavActions";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ isSidebarOpen, openSideBar }) => {
  return (
    <nav className="px-8 py-6 flex items-center justify-between w-fit bg-surface h-[12vh] min-w-full ">
      <div className="flex items-center justify-center w-fit gap-16">
        <ButtonIcon
          icon={<RxHamburgerMenu />}
          onClick={openSideBar}
          color="text-text-primary"
          size={12}
        />
        <div className={`${isSidebarOpen ? "-translate-x-20 opacity-0" : ""}`}>
          <Logo />
        </div>
        {/* {!isSidebarOpen && <Logo />} */}
      </div>

      <NavActions />
    </nav>
  );
};

export default Navbar;
