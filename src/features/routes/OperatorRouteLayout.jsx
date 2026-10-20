import React from "react";
import { useOperatorRoute } from "./useOperatorRoute";

const OperatorRouteLayout = () => {
  const { operatorRoute } = useOperatorRoute();
  console.log(operatorRoute);
  return <div>RouteLayout</div>;
};

export default OperatorRouteLayout;
