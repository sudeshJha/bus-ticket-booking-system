import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-[12vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
