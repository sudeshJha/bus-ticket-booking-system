import React from "react";
import Button from "../../components/util/Button";
import { useNavigate } from "react-router-dom";

const OperatorRoutesRow = ({ operatorRoute }) => {
  const navigate = useNavigate();

  const { operatorRouteId, route, isActive, operatorRouteCities } =
    operatorRoute;

  const noOfCities = operatorRouteCities.length;

  const distance =
    operatorRouteCities[noOfCities - 1].routeCity.distanceFromSource -
    operatorRouteCities[0].routeCity.distanceFromSource;

  const totalTime =
    operatorRouteCities[noOfCities - 1].routeCity.timeFromSource -
    operatorRouteCities[0].routeCity.timeFromSource;

  const time = { hour: Math.ceil(totalTime / 60), min: totalTime % 60 };

  const handleDetails = () => {
    navigate(`/routes/${operatorRouteId}`);
  };

  return (
    <tr
      key={operatorRouteId}
      className="tracking-wide border-t border-border hover:bg-text-secondary/10 transition-colors text-xl"
    >
      <td className="px-5 py-4 text-xl  text-text-primary/80">{route.title}</td>

      <td className="px-5 py-4  text-text-primary text-2xl tracking-tight text-left">
        {operatorRouteCities[0].routeCity.name}
      </td>

      <td className="px-5 py-4  text-text-primary text-2xl tracking-tight text-left">
        {operatorRouteCities[noOfCities - 1].routeCity.name}
      </td>

      <td className="px-5 py-4  text-text-secondary">{distance} km</td>

      <td className="px-5 py-4  text-text-secondary">
        {time.hour !== 0 && `${time.hour}h `}{" "}
        {time.min !== 0 && `${time.min}m `}
      </td>

      <td className="px-5 py-4">
        <span
          className={`rounded-3xl px-3 py-1 text-lg font-semibold ${
            isActive ? "bg-success/10 text-success" : "bg-error/10 text-error"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="text-center px-5 py-4 ">
        <Button
          custom="rounded-lg border border-border px-4 py-2
               font-medium text-primary
               hover:bg-primary/60 hover:text-primary-anti
              text-sm 
               "
          onClick={handleDetails}
        >
          View Details
        </Button>
      </td>
    </tr>
  );
};

export default OperatorRoutesRow;
