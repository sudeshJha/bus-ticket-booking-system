import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="ml-[22vw]">
        <Outlet />
      </main>
    </div>
  );
};

export default SettingsLayout;
