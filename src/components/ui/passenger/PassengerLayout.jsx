import React from "react";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../../context/SearchContext";
import Navbar from "../navbar/Navbar";

const PassengerLayout = () => {
  // if user not passenger
  // redirect to page not found

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
