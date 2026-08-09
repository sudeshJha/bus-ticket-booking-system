import React from "react";
import OperatorLayout from "../../features/operator/OperatorLayout";
import PassengerLayout from "../../features/passenger/PassengerLayout";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <Outlet />;
};

export default AppLayout;
