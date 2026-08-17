import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ThemeButton from "../navbar/ThemeButton";

const OperatorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((s) => !s);
  };

  return (
    <div className="flex min-w-screen">
      {/* {isSidebarOpen && <Sidebar />} */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className={`w-full  ${isSidebarOpen ? "ml-[20vw]" : "ml-0"}`}>
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
        <ThemeButton />
      </main>
    </div>
  );
};

export default OperatorLayout;
