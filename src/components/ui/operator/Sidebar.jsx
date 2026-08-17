import React, { useEffect, useState } from "react";
import Logo from "../navbar/Logo";
import Icon from "../../util/Icon";
import { useLocation, useNavigate } from "react-router-dom";
import { IoBus, IoHomeOutline } from "react-icons/io5";
import { MdOutlinePinDrop } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { MdOutlineHomeWork } from "react-icons/md";
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
  { id: 5, name: "Routes", link: "/routes", icon: <MdOutlinePinDrop /> },
];

const Sidebar = ({ isSidebarOpen }) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = "/" + location.pathname.split("/")[1];
    navs.map((tab) => {
      tab.link === section && setActiveTab(tab.id);
    });
  }, [location]);

  const selectTab = (id) => {
    if (id === activeTab) return;

    setActiveTab(id);
    navigate(navs[id].link);
  };
  return (
    <div
      className={`fixed left-0 top-0 bg-surface min-h-screen flex flex-col justify-start items-center gap-20 py-4 border-r border-border w-[20vw]  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="-ml-6 w-full flex justify-center">
        <Logo />
      </div>

      <ul className="flex flex-col px-8 gap-1">
        {navs.map((nav) => {
          return (
            <li
              onClick={() => selectTab(nav.id)}
              key={nav.id}
              className={`flex items-center justify-start gap-6 pl-4 py-3 cursor-pointer rounded-xl ${activeTab === nav.id ? "bg-primary text-primary-anti" : "bg-surface hover:bg-surface-dark text-text-primary"}`}
            >
              <Icon
                icon={nav.icon}
                size="extraSmall"
                color={
                  activeTab === nav.id
                    ? "text-primary-anti"
                    : "text-text-primary"
                }
              />
              <p className="mr-20 tracking-wide text-2xl">{nav.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
