import React from "react";
import RouteRow from "./RouteRow";
import { addMinutes, format } from "date-fns";

const Route = ({ route, arrival, departure }) => {
  const {
    title,
    totalDistance,
    isActive,
    midCities,
    sourceCity,
    destinationCity,
  } = route;

  let haltTime = 0;

  return (
    <div className="rounded-xl border border-border bg-surface py-2">
      <div className="grid grid-cols-[18%_34%_16%_14%_18%] border-b border-border text-[1.1rem] font-bold text-text-secondary px-4">
        <div className="px-4 py-4">Distance from Jabalpur (km)</div>

        <div className="px-14 py-4">Stop / City</div>

        <div className="px-4 py-4 text-center">
          Estimated Time
          <br />
          (Arrival)
        </div>

        <div className="px-4 py-4 text-center">Halt Time</div>

        <div className="px-4 py-4 text-center">
          Estimated Time
          <br />
          (Departure)
        </div>
      </div>

      <RouteRow
        city={sourceCity}
        departure={departure}
        distanceFromSource={0}
      />
      {midCities.map((midCity, i) => {
        haltTime += midCity.haltTime;
        return (
          <RouteRow
            key={i}
            city={midCity.city}
            arrival={addMinutes(
              departure,
              midCity.timeFromSource + haltTime - midCity.haltTime,
            )}
            departure={addMinutes(departure, midCity.timeFromSource + haltTime)}
            distanceFromSource={midCity.distanceFromSource}
            haltTime={midCity.haltTime}
          />
        );
      })}
      <RouteRow
        isLast={true}
        arrival={addMinutes(new Date(arrival), haltTime)}
        distanceFromSource={totalDistance}
        city={destinationCity}
      />
    </div>
  );
};

export default Route;
