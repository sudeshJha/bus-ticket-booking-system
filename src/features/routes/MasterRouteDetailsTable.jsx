import React from "react";

const MasterRouteDetailsTable = ({ routeCities: cities }) => {
  return (
    <div className="rounded-t-xl rounded-b-sm overflow-auto">
      <table className="w-full text-center">
        <thead className="bg-surface-dark text-lg text-text-primary">
          <tr>
            <th className="px-4 py-4 font-medium">Stop Sequence</th>
            <th className="px-4 py-4 font-medium">City</th>
            <th className="px-4 py-4 font-medium">Distance from Source</th>
            <th className="px-4 py-4 font-medium">Time from Source</th>
          </tr>
        </thead>

        <tbody>
          {cities.map((city, i) => (
            <tr
              className="border-border border text-text-primary text-xl tracking-wider bg-surface"
              key={i}
            >
              <td className="px-4 py-4 font-medium">{i + 1}</td>
              <td className="px-4 py-4">{city.name}</td>
              <td className="px-4 py-4">
                {city.distanceFromSource - cities[0].distanceFromSource} km
              </td>
              <td className="px-4 py-4">
                {city.timeFromSource - cities[0].timeFromSource} min
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterRouteDetailsTable;
