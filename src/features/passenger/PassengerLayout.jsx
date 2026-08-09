import React from "react";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../context/SearchContext";
import Navbar from "../../components/ui/navbar/Navbar";

const PassengerLayout = () => {
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

export default PassengerLayout;
