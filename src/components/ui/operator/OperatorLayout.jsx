import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const OperatorLayout = () => {
  // if user not operator
  // redirect to page not found

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
      </main>
    </div>
  );
};

export default OperatorLayout;
