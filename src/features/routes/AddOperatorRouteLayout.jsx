import React, { useState } from "react";
import RouteSearch from "./RouteSearch";
import RouteResult from "./RouteResult";
import RouteSummary from "./RouteSummary";
import { FiInfo, FiSend } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

const AddOperatorRouteLayout = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");

  const handleSearch = (sourceCity, destinationCity) => {
    e.preventDefault();

    console.log(sourceCity, destinationCity);

    if (!sourceCity || !destinationCity) {
      return;
    }
    searchParams.set("sourceCity", sourceCity);
    searchParams.set("destinationCity", destinationCity);
    setSearchParams(searchParams);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen p-6 pr-12 w-screen">
      <div className="mb-12 mt-4 mx-2 w-fit">
        <h1 className="text-4xl font-bold text-text-primary">Add Routes</h1>

        <p className="text-lg text-text-secondary">
          Select a route for your bus.
        </p>
      </div>

      <div className="flex gap-10 w-full">
        <div className="flex-1 bg-surface rounded-2xl p-8 space-y-8 border border-border w-fit">
          {/* Top Section: Source & Destination */}
          <RouteSearch
            handleSearch={handleSearch}
            sourceCity={sourceCity}
            setSourceCity={setSourceCity}
            destinationCity={destinationCity}
            setDestinationCity={setDestinationCity}
          />

          {/* Dynamic Section: Routes & Stops (Appears after search) */}
          {hasSearched && (
            <RouteResult
              setSelectedRoute={setSelectedRoute}
              selectedRoute={selectedRoute}
            />
          )}
        </div>

        {/* Right Sidebar: Route Summary */}
        <div className="flex flex-col gap-4">
          <RouteSummary />

          <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4">
            <div className="flex items-start gap-3">
              {/* Info Icon */}
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FiInfo size={14} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-blue-900">
                  No route found for your selected cities?
                </h4>

                <p className="mt-1 text-xs leading-5 text-blue-700">
                  You can request the administrator to add a new route.
                </p>

                {/* Request Button */}
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 rounded-md border border-blue-400 bg-white px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  <FiSend size={13} />
                  Request Route
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOperatorRouteLayout;
