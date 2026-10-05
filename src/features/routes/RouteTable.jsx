import React from "react";
import RouteHead from "./RouteHead";
import RouteRow from "./RouteRow";

const routes = [
  {
    title: "Delhi to Raipur",
    source: "Delhi",
    destination: "Jaipur",
    distance: "280 km",
    duration: "5h 30m",
    buses: 3,
    status: "Active",
  },
  {
    title: "R002",
    source: "Delhi",
    destination: "Agra",
    distance: "210 km",
    duration: "4h 15m",
    buses: 2,
    status: "Active",
  },
  {
    title: "R003",
    source: "Jaipur",
    destination: "Udaipur",
    distance: "420 km",
    duration: "8h 20m",
    buses: 2,
    status: "Active",
  },
  {
    title: "R004",
    source: "Chandigarh",
    destination: "Delhi",
    distance: "250 km",
    duration: "5h",
    buses: 3,
    status: "Active",
  },
  {
    title: "R005",
    source: "Lucknow",
    destination: "Varanasi",
    distance: "330 km",
    duration: "6h 30m",
    buses: 2,
    status: "Active",
  },
  {
    title: "R006",
    source: "Bhopal",
    destination: "Indore",
    distance: "195 km",
    duration: "3h 45m",
    buses: 2,
    status: "Active",
  },
  {
    title: "R007",
    source: "Mumbai",
    destination: "Pune",
    distance: "150 km",
    duration: "3h",
    buses: 3,
    status: "Inactive",
  },
  {
    title: "R008",
    source: "Bangalore",
    destination: "Mysore",
    distance: "150 km",
    duration: "3h 30m",
    buses: 2,
    status: "Inactive",
  },
];

const RouteTable = () => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="w-full min-w-225 border-collapse">
        <thead>
          <tr className="text-left bg-background">
            <RouteHead title="Title" />
            <RouteHead title="Source" />
            <RouteHead title="Destination" />
            <RouteHead title="Distance" />
            <RouteHead title="Duration" />
            <RouteHead title="Bus Assigned" />
            <RouteHead title="Status" />
            <RouteHead title="Actions" />
          </tr>
        </thead>
        <tbody>
          {routes.map((route, i) => (
            <RouteRow route={route} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteTable;
