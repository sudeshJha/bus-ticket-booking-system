import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ThemeButton from "../navbar/ThemeButton";

const OperatorLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Navbar />
        <Outlet />
        <ThemeButton />
      </main>
    </div>
  );
};

export default OperatorLayout;
