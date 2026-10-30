import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useUser } from "../../../features/auth/useUser";
import Spinner from "../Spinner";
import toast from "react-hot-toast";

const OperatorLayout = () => {
  // if user not operator
  // redirect to page not found
  const { user, gettingUser } = useUser();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  if (gettingUser) return <Spinner />;

  if (!user) {
    toast.error("Your session expired. Please login to continue.");
    navigate("/login");
  }

  return (
    <div>
      {/* {isSidebarOpen && <Sidebar />} */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSideBar={closeSideBar} />
      <main className={"min-h-screen overflow-x-hidden"}>
        <Navbar isSidebarOpen={isSidebarOpen} openSideBar={openSideBar} />
        <Outlet />
      </main>
    </div>
  );
};

export default OperatorLayout;
