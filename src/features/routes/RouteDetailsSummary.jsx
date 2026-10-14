import React from "react";
import { FiFileText } from "react-icons/fi";
import Icon from "../../components/util/Icon";
import { useSearchParams } from "react-router-dom";

const RouteDetailsSummary = ({ route }) => {
  const { title, routeCities: cities } = route;
  const [searchParams] = useSearchParams();

  const sourceCity = searchParams.get("sourceCity");
  const destinationCity = searchParams.get("destinationCity");

  const totalDistance =
    cities[cities.length - 1].distanceFromSource - cities[0].distanceFromSource;

  const totalTime =
    cities[cities.length - 1].timeFromSource - cities[0].timeFromSource;

  const time = { hour: Math.floor(totalTime / 60), min: totalTime % 60 };

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold text-primary ">
        <Icon icon={<FiFileText />} />
        Route Information
      </h2>

      <div className="divide-y text-xl divide-border">
        <div className="grid grid-cols-2 gap-3 py-4">
          <span className="text-text-primary/80">Route Title</span>
          <span className="font-medium text-text-primary/90">{title}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4">
          <span className="text-text-primary/80">Source City</span>
          <span className="font-medium text-text-primary/90">{sourceCity}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4">
          <span className="text-text-primary/80">Destination City</span>
          <span className="font-medium text-text-primary/90">
            {destinationCity}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4">
          <span className="text-text-primary/80">Total Distance</span>
          <span className="font-medium text-text-primary/90">
            {totalDistance} km
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4">
          <span className="text-text-primary/80">Total Estimated Time</span>
          <span className="font-medium text-text-primary/90">
            {time.hour != 0 && <span>{time.hour}h</span>}{" "}
            {time.min != 0 && <span>{time.min}m</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RouteDetailsSummary;
