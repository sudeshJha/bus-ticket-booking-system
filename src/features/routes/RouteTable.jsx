import React from "react";
import RouteHead from "./RouteHead";
import RouteRow from "./RouteRow";
import { useOperatorRoutes } from "./useOperatorRoutes";
import Spinner from "../../components/ui/Spinner";

// const routes = [
//   {
//     title: "Delhi to Raipur",
//     source: "Delhi",
//     destination: "Jaipur",
//     distance: "280 km",
//     duration: "5h 30m",
//     status: "Active",
//   },
//   {
//     title: "R002",
//     source: "Delhi",
//     destination: "Agra",
//     distance: "210 km",
//     duration: "4h 15m",
//     status: "Active",
//   },
//   {
//     title: "R003",
//     source: "Jaipur",
//     destination: "Udaipur",
//     distance: "420 km",
//     duration: "8h 20m",
//     status: "Active",
//   },
//   {
//     title: "R004",
//     source: "Chandigarh",
//     destination: "Delhi",
//     distance: "250 km",
//     duration: "5h",
//     status: "Active",
//   },
//   {
//     title: "R005",
//     source: "Lucknow",
//     destination: "Varanasi",
//     distance: "330 km",
//     duration: "6h 30m",
//     status: "Active",
//   },
//   {
//     title: "R006",
//     source: "Bhopal",
//     destination: "Indore",
//     distance: "195 km",
//     duration: "3h 45m",
//     status: "Active",
//   },
//   {
//     title: "R007",
//     source: "Mumbai",
//     destination: "Pune",
//     distance: "150 km",
//     duration: "3h",
//     status: "Inactive",
//   },
//   {
//     title: "R008",
//     source: "Bangalore",
//     destination: "Mysore",
//     distance: "150 km",
//     duration: "3h 30m",
//     status: "Inactive",
//   },
// ];

const RouteTable = () => {
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
            <RouteHead title="Title" />
            <RouteHead title="Source" />
            <RouteHead title="Destination" />
            <RouteHead title="Distance" />
            <RouteHead title="Duration" />
            <RouteHead title="Status" />
            <th></th>
          </tr>
        </thead>
        <tbody>
          {operatorRoutes.map((route, i) => (
            <RouteRow route={route} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteTable;
