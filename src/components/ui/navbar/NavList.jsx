import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: 0, name: "Home", link: "/home" },
  { id: 1, name: "Search Bus", link: "/search_bus" },
  { id: 2, name: "My Bookings", link: "settings/bookings" },
  { id: 3, name: "Routes", link: "/routes" },
];

const NavList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const section = "/" + location.pathname.split("/")[1];
    tabs.map((tab) => {
      tab.link === section && setActiveTab(tab.id);
    });
  }, [location]);

  const selectTab = (id) => {
    if (id === activeTab) return;

    setActiveTab(id);
    navigate(tabs[id].link);
  };

  return (
    <ul className="flex gap-16 items-center justify-center">
      {tabs.map((tab) => (
        <NavItem
          tab={tab}
          key={tab.id}
          selectTab={selectTab}
          active={tab.id === activeTab}
        />
      ))}
    </ul>
  );
};

export default NavList;
