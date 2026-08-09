import React, { useState } from "react";
import defaultUserImg from "../../../../assets/default_user.jpg";
import Icon from "../../../util/Icon";
import { BiHome } from "react-icons/bi";
import { GrTicket } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const navs = [
  {
    name: "Home",
    icon: <BiHome />,
    link: "/",
  },
  {
    name: "Profile",
    icon: <IoPersonOutline />,
    link: "profile",
  },
  {
    name: "My Bookings",
    icon: <GrTicket />,
    link: "bookings",
  },
  {
    name: "Update Password",
    icon: <RiLockLine />,
    link: "update_password",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.split("/").at(-1));

  console.log();

  const handleClick = (link) => {
    if (link === "active") return;
    setActive(link);
    navigate(link);
  };

  return (
    <div className="fixed w-[22vw] px-8 pb-4 pt-10 bg-background h-screen flex flex-col">
      <div className="flex flex-col items-center border-b border-border pb-8">
        <div className="w-32 rounded-full overflow-hidden mb-8">
          <img src={defaultUserImg} alt="user profile" />
        </div>
        <div className="flex flex-col items-center w-fit">
          <h2 className="text-text-primary text-4xl font-bold">Sudesh Jha</h2>
          <span className="text-text-secondary text-xl">sudesh@gmail.com</span>
        </div>
      </div>

      <ul className="mt-16 flex flex-col gap-4">
        {navs.map((nav, i) => {
          return (
            <li
              className={`flex items-center gap-1 py-1 rounded-xl cursor-pointer ${active === nav.link ? "bg-secondary" : "hover:bg-secondary/10"}`}
              key={i}
              onClick={() => handleClick(nav.link)}
            >
              <Icon
                icon={nav.icon}
                size="small"
                color={`${active === nav.link ? "text-background" : "text-text-primary"}`}
              />
              <span
                className={`${active === nav.link ? "text-background" : "text-text-primary"} text-2xl font-bold`}
              >
                {nav.name}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-border mt-auto pt-2">
        <div
          className="flex items-center gap-1 py-1 rounded-xl cursor-pointer mt-auto hover:bg-error"
          onClick={() => handleClick("/home")}
        >
          <Icon icon={<TbLogout />} size="small" color="text-text-primary" />
          <span className="text-2xl font-bold text-text-primary">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
