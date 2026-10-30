import React from "react";
import { useOperatorRoutes } from "../routes/useOperatorRoutes";

const BusRotueForm = () => {
  const { gettingOperatorRoutes, operatorRoutes } = useOperatorRoutes();

  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Rotue
        </h1>
      </div>
    </div>
  );
};

export default BusRotueForm;
