import React from "react";

import BusLayoutForm from "./BusLayoutForm";
import BusRouteForm from "./BusRotueForm";

const AddBusFormLayout = () => {
  return (
    <div className="p-8 ">
      <div className="flex flex-col gap-16">
        <BusLayoutForm />
        <BusRouteForm />
      </div>
    </div>
  );
};

export default AddBusFormLayout;
