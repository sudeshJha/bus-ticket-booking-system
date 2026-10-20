import React from "react";
import RouteRow from "./OperatorRoutesRow";
import { useOperatorRoutes } from "./useOperatorRoutes";
import Spinner from "../../components/ui/Spinner";

const OperatorRouteTable = () => {
  const { operatorRoutes, gettingOperatorRoutes } = useOperatorRoutes();

  if (gettingOperatorRoutes) {
    return <Spinner />;
  }

  if (operatorRoutes.length == 0) {
    return <p>No Routes Found.</p>;
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="w-full min-w-225 border-collapse">
        <thead className="bg-background w-full">
          <tr className="text-left w-full">
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Title
            </th>
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Source
            </th>
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Destination
            </th>
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Distance
            </th>
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Time
            </th>
            <th className="px-5 py-4 text-lg font-semibold text-text-secondary">
              Status
            </th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {operatorRoutes.map((operatorRoute, i) => (
            <RouteRow operatorRoute={operatorRoute} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperatorRouteTable;
