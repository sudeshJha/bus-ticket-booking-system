import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { PiPathFill } from "react-icons/pi";

const RouteResultRow = ({ route, selectRoute }) => {
  const { title, routeCities: cities } = route;

  const totalDistance =
    cities[cities.length - 1].distanceFromSource - cities[0].distanceFromSource;

  const totalTime =
    cities[cities.length - 1].timeFromSource - cities[0].timeFromSource;

  const time = { hour: Math.floor(totalTime / 60), min: totalTime % 60 };

  const stops = cities.length - 2;

  return (
    <div
      className={`border border-border rounded-2xl p-6 cursor-pointer transition-all  hover:border-secondary hover:shadow-sm hover-bg-surface/50`}
      onClick={selectRoute}
    >
      <div className="items-center gap-3 mb-6">
        <span className="text-2xl font-bold text-primary">{title}</span>
      </div>
      <p className="text-xl text-text-primary/80 mb-4 flex gap-4">
        {cities.map((city, i) => (
          <>
            <span key={i}>{city.name}</span>
            {i !== cities.length - 1 && (
              <span className="text-text-secondary">→</span>
            )}
          </>
        ))}
      </p>
      <div className="flex gap-8 text-xl mt-10 text-text-secondary">
        <span className="flex items-center gap-2 text-text-secondary">
          <PiPathFill /> {totalDistance} km
        </span>
        <span className="flex items-center gap-2 text-text-secondary">
          <FaRegClock /> {time.hour != 0 && <span>{time.hour}h</span>}
          {time.min != 0 && <span>{time.min}m</span>}
        </span>
        <span className="flex items-center gap-2 text-text-secondary">
          <MdLocationPin /> {stops === 0 ? "No" : stops}{" "}
          {stops === 1 ? "stop" : "stops"}
        </span>
      </div>
    </div>
  );
};

export default RouteResultRow;
