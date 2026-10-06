import React from "react";

import { Outlet } from "react-router-dom";
import { useStates } from "../../features/auth/useStates";
import { useCities } from "../../features/auth/useCities";

const AppLayout = () => {
  useStates();
  useCities();

  return <Outlet />;
};

export default AppLayout;
