import React from "react";

import { Outlet } from "react-router-dom";
import { useStates } from "../../features/routes/useStates";
import { useCities } from "../../features/routes/useCities";

const AppLayout = () => {
  useStates();
  useCities();

  return <Outlet />;
};

export default AppLayout;
