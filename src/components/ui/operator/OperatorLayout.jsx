import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const OperatorLayout = () => {
  // if user not operator
  // redirect to page not found

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-w-screen">
      {/* {isSidebarOpen && <Sidebar />} */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSideBar={closeSideBar} />
      <main className={"w-screen min-h-screen"}>
        <Navbar isSidebarOpen={isSidebarOpen} openSideBar={openSideBar} />
        <Outlet />
      </main>
    </div>
  );
};

export default OperatorLayout;
