import React from "react";
import ButtonIcon from "../../components/util/ButtonIcon";
import Button from "../../components/util/Button";

const RouteRow = ({ route }) => {
  return (
    <tr
      key={route.title}
      className="tracking-wide border-t border-border hover:bg-text-secondary/10 transition-colors text-xl"
    >
      <td className="px-5 py-4 text-xl  text-text-primary/80">{route.title}</td>

      <td className="px-5 py-4  text-text-primary">{route.source}</td>

      <td className="px-5 py-4  text-text-primary">{route.destination}</td>

      <td className="px-5 py-4  text-text-secondary">{route.distance}</td>

      <td className="px-5 py-4  text-text-secondary">{route.duration}</td>

      <td className="px-5 py-4  text-text-primary pl-16">{route.buses}</td>

      <td className="px-5 py-4">
        <span
          className={`rounded-3xl px-3 py-1 text-lg font-semibold ${
            route.status === "Active"
              ? "bg-success/10 text-success"
              : "bg-error/10 text-error"
          }`}
        >
          {route.status}
        </span>
      </td>

      <td className="text-start px-5 py-4">
        <Button
          custom="rounded-lg border border-border px-4 py-2
               text-sm font-medium text-primary
               hover:bg-primary/40 hover:text-primary-anti
               "
        >
          View Details
        </Button>
      </td>
    </tr>
  );
};

export default RouteRow;
