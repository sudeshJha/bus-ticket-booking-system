import { format } from "date-fns";
import React from "react";

const RouteRow = ({
  isLast,
  city,
  haltTime,
  departure,
  arrival,
  distanceFromSource,
}) => {
  return (
    <div
      className={`grid grid-cols-[18%_34%_16%_14%_18%] items-center  ${!isLast && "border-b border-border"} px-4`}
    >
      <div className="px-4 py-5 font-semibold text-primary">
        {distanceFromSource} km
      </div>

      <div className="flex items-center gap-5 px-4 py-5">
        <div className="relative flex w-5 justify-center">
          <span className="h-4 w-4 rounded-full bg-blue-600"></span>
          {!isLast && (
            <span className="absolute top-4 h-22 w-[2px] bg-blue-600"></span>
          )}
        </div>

        <p className="font-semibold text-text-primary flex flex-col">
          {city?.name}
          <span className="ml-2 text-text-secondary text-sm ">
            {city?.state?.name}
          </span>
        </p>
      </div>

      <div className="text-center font-semibold">
        {arrival ? format(new Date(arrival), "HH:mm") : "-"}
      </div>

      <div className="text-center text-xl p">
        {haltTime ? haltTime + " min" : "-"}
      </div>

      <div className="text-center font-semibold text-blue-600">
        {departure ? format(new Date(departure), "HH:mm") : "-"}
      </div>
    </div>
  );
};

export default RouteRow;
