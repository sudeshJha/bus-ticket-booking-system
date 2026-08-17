import React from "react";
import Logo from "../navbar/Logo";
import Icon from "../../util/Icon";
import { IoBus, IoHomeOutline } from "react-icons/io5";
import { RiMapLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { MdOutlineHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";

const navs = [
  { id: 0, name: "Dashboard", link: "/dashboard", icon: <IoHomeOutline /> },
  { id: 1, name: "My Buses", link: "/buses", icon: <IoBus /> },
  {
    id: 2,
    name: "Bus Schedule",
    link: "/bus_schedules",
    icon: <AiOutlineCalendar />,
  },
  { id: 3, name: "Drivers", link: "/drivers", icon: <RxPerson /> },
  {
    id: 4,
    name: "My Company",
    link: "/my_company",
    icon: <MdOutlineHomeWork />,
  },
  { id: 5, name: "Routes", link: "/routes", icon: <RiMapLine /> },
];

const Sidebar = () => {
  const active = 4;
  return (
    <div className="bg-surface px-8 min-h-screen">
      <Logo />
      <ul className="flex flex-col mt-20">
        {navs.map((nav) => {
          return (
            <li
              key={nav.id}
              className={`flex items-center justify-start gap-6 pl-4 py-4  cursor-pointer rounded-xl ${active === nav.id ? "bg-primary text-primary-anti" : "bg-surface hover:bg-surface-dark text-text-primary"}`}
            >
              <Icon
                icon={nav.icon}
                size="small"
                color={
                  active === nav.id ? "text-primary-anti" : "text-text-primary"
                }
              />
              <p className="mr-20 tracking-wide">
                <Link to={nav.link}>{nav.name}</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
