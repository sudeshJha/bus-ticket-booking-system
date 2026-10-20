import React, { useState } from "react";
import RouteSearch from "./RouteSearch";
import RouteResult from "./MasterRouteResult";
import { useSearchParams } from "react-router-dom";
import { useCityRoutes } from "./useCityRoutes";
import RouteDetails from "./AddRouteDetails";
import BackButton from "../../components/util/BackButton";

const AddOperatorRouteLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRoute, setSelectedRoute] = useState(null);
  const { routes } = useCityRoutes();

  const [sourceCity, setSourceCity] = useState(
    searchParams.get("sourceCity") || "",
  );
  const [destinationCity, setDestinationCity] = useState(
    searchParams.get("destinationCity") || "",
  );
  const [showResult, setShowResult] = useState(sourceCity && destinationCity);

  const selectRoute = (index) => {
    setSelectedRoute(index);
    setShowResult(false);
  };

  const backToResult = () => {
    setSelectedRoute(null);
    setShowResult(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!sourceCity || !destinationCity) {
      return;
    }

    setSelectedRoute(null);
    setShowResult(true);
    searchParams.set("sourceCity", sourceCity);
    searchParams.set("destinationCity", destinationCity);
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen p-6 pr-12 bg-background w-screen">
      <div className="my-4">
        <BackButton />
      </div>
      <div className="mb-12 mt-16 mx-2 w-fit">
        <h1 className="text-4xl font-bold text-text-primary">Add Routes</h1>

        <p className="text-lg text-text-secondary">
          Select a route for your bus.
        </p>
      </div>

      <div className="flex-1 bg-background/50 rounded-2xl p-8 space-y-8 border border-border">
        <RouteSearch
          handleSearch={handleSearch}
          sourceCity={sourceCity}
          setSourceCity={setSourceCity}
          destinationCity={destinationCity}
          setDestinationCity={setDestinationCity}
        />
        {showResult && (
          <RouteResult
            setSelectedRoute={setSelectedRoute}
            selectRoute={selectRoute}
          />
        )}

        {selectedRoute !== null && (
          <RouteDetails
            setSelectedRoute={setSelectedRoute}
            route={routes[selectedRoute]}
            backToResult={backToResult}
          />
        )}
      </div>
    </div>
  );
};

export default AddOperatorRouteLayout;
