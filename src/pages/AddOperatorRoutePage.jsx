import React, { useState } from "react";
import RouteSearch from "../features/routes/RouteSearch";
import RouteResult from "../features/routes/RouteResult";
import RouteSummary from "../features/routes/RouteSummary";

const AddOperatorRoutePage = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleSearch = () => {
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen p-6 w-screen">
      <div className="mb-12 mt-4 mx-2 w-fit">
        <h1 className="text-4xl font-bold text-text-primary">Add Routes</h1>

        <p className="text-lg text-text-secondary">
          Select a route for your bus.
        </p>
      </div>

      <div className="bg-surface rounded-2xl p-8 space-y-8 border border-border">
        {/* Top Section: Source & Destination */}
        <RouteSearch handleSearch={handleSearch} />

        {/* Dynamic Section: Routes & Stops (Appears after search) */}
        {hasSearched && <RouteResult />}
      </div>

      {/* Right Sidebar: Route Summary */}
      {hasSearched && selectedRoute && <RouteSummary />}
    </div>
  );
};

export default AddOperatorRoutePage;
