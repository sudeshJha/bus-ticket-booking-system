import React from "react";

import BusLayoutForm from "./BusLayoutForm";
import BusRouteForm from "./BusRotueForm";
import BusInformationForm from "./BusInformationForm";

const AddBusFormLayout = () => {
  return (
    <div className="p-8 ">
      <div className="flex flex-col gap-16">
        <BusInformationForm />
        <BusLayoutForm />
        <BusRouteForm />
      </div>
    </div>
  );
};

export default AddBusFormLayout;
