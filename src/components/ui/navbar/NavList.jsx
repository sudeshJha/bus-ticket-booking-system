import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: 0, name: "Home", link: "/home" },
  { id: 1, name: "Search Bus", link: "/search_bus" },
  { id: 2, name: "My Bookings", link: "/home" },
  { id: 3, name: "Routes", link: "/search_bus" },
];

const NavList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const selectTab = (id) => {
    console.log("----", id, activeTab);
    if (id === activeTab) return;

    setActiveTab(id);
    navigate(tabs[id].link);
  };

  useEffect(() => {
    console.log("activeTab");
  }, []);

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
