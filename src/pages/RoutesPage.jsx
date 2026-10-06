import React from "react";
import RouteTable from "../features/routes/RouteTable";
import Button from "../components/util/Button";

const RoutesPage = () => {
  return (
    <div className="p-6">
      <div className="mb-12 mt-4 flex items-center justify-between mx-2">
        <div>
          <h1 className="text-4xl font-bold text-text-primary">Routes</h1>

          <p className="text-lg text-text-secondary">Manage your bus routes</p>
        </div>
        <Button size="small" type="secondary">
          Add Route +
        </Button>
      </div>

      <RouteTable />
    </div>
  );
};

export default RoutesPage;
