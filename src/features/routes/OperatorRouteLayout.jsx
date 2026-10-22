import React from "react";
import { useOperatorRoute } from "./useOperatorRoute";
import BackButton from "../../components/util/BackButton";
import Spinner from "../../components/ui/Spinner";
import OperatorRouteTable from "./OperatorRouteTable";
import OperatorRouteDetailsSummary from "./OperatorRouteDetailsSummary";

const OperatorRouteLayout = () => {
  const { gettingOperatorRoute, operatorRoute } = useOperatorRoute();
  console.log(gettingOperatorRoute);

  if (gettingOperatorRoute)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  const { isActive, operatorRouteCities } = operatorRoute;

  const noOfCities = operatorRouteCities.length;

  const title = `${operatorRouteCities[0].routeCity.name} to ${operatorRouteCities[noOfCities - 1].routeCity.name}`;

  return (
    <div className="min-h-[80vh] w-full mt-10 p-6 md:p-7">
      <div className="flex gap-20 mb-14 items-center">
        <div className="">
          <BackButton />
        </div>

        <h1 className="text-6xl text-secondary font-bold tracking-wide text-center">
          {title}
        </h1>
      </div>

      <div className="w-full grid grid-cols-[2fr_1fr] items-start gap-12">
        <div className="flex flex-col gap-8">
          <OperatorRouteTable />
        </div>
        <OperatorRouteDetailsSummary />
      </div>
    </div>
  );
};

export default OperatorRouteLayout;
