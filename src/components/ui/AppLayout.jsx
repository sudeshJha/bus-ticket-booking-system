import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../context/SearchContext";

const AppLayout = () => {
  return (
    <SearchProvider>
      <div className="bg-background">
        <Navbar />
        <main className="mt-[12vh]">
          <Outlet />
        </main>
      </div>
    </SearchProvider>
  );
};

export default AppLayout;
