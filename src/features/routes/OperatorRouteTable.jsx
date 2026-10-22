import React from "react";
import { useOperatorRoute } from "./useOperatorRoute";

const OperatorRouteTable = () => {
  const {
    operatorRoute: { operatorRouteId, isActive, operatorRouteCities: cities },
  } = useOperatorRoute();

  return (
    <div className="rounded-t-xl rounded-b-sm overflow-auto">
      <table className="w-full text-center">
        <thead className="bg-background text-lg text-text-primary">
          <tr>
            <th className="px-4 py-4 font-medium">Stop Sequence</th>
            <th className="px-4 py-4 font-medium">City</th>
            <th className="px-4 py-4 font-medium">Halt Time</th>
            <th className="px-4 py-4 font-medium">Distance from Source</th>
            <th className="px-4 py-4 font-medium">Time from Source</th>
          </tr>
        </thead>

        <tbody>
          {cities.map((city, i) => {
            const distance =
              city.routeCity.distanceFromSource -
              cities[0].routeCity.distanceFromSource;
            const totalTime =
              city.routeCity.timeFromSource -
              cities[0].routeCity.timeFromSource;

            const time = {
              hour: Math.ceil(totalTime / 60),
              min: totalTime % 60,
            };
            return (
              <tr
                className="border-border border text-text-primary text-xl tracking-wider bg-surface"
                key={i}
              >
                <td className="px-4 py-4 font-medium">{i + 1}</td>
                <td className="px-4 py-4">{city.routeCity.name}</td>
                <td className="px-4 py-4">{city.haltTime} min</td>
                <td className="px-4 py-4">
                  {distance === 0 ? "-" : `${distance} km`}
                </td>
                <td className="px-4 py-4">
                  {totalTime === 0
                    ? "-"
                    : `${time.hour !== 0 ? `${time.hour}h ` : ""}${time.min !== 0 ? `${time.min}m` : ""}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OperatorRouteTable;
