import React from "react";
import Icon from "../../../components/util/Icon";
import { GiPathDistance } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { addMinutes, getHours, getMinutes } from "date-fns";

const RouteSummary = ({ totalDistance, totalHaltTime, estimatedTime }) => {
  console.log(getHours(addMinutes(estimatedTime, totalHaltTime)));

  return (
    <div className="border border-border rounded-xl flex items-center justify-between px-8">
      <div className="flex items-center justify-center">
        <div>
          <Icon icon={<GiPathDistance />} color="text-error" size="large" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-text-secondary">
            Total Distance
          </span>
          <span className="text-3xl font-bold text-error">{totalDistance}</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <Icon icon={<PiCookingPot />} color="text-success" size="large" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-text-secondary">
            Total Halt Time
          </span>
          <span className="text-3xl font-bold text-success">
            <span>
              {totalHaltTime / 60 !== 0
                ? `${Math.floor(totalHaltTime / 60)}h `
                : ""}
            </span>

            <span>
              {totalHaltTime % 60 !== 0
                ? `${Math.floor(totalHaltTime % 60)}min`
                : ""}
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <Icon icon={<GoClock />} color="text-warning" size="large" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-text-secondary">
            Estimated Duration
          </span>
          <span className="text-3xl font-bold text-warning">
            <span>
              {getHours(addMinutes(estimatedTime, totalHaltTime)) !== 0
                ? `${getHours(addMinutes(estimatedTime, totalHaltTime))}h `
                : ""}
            </span>
            <span>
              {getMinutes(addMinutes(estimatedTime, totalHaltTime)) !== 0
                ? `${getMinutes(addMinutes(estimatedTime, totalHaltTime))}m`
                : ""}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RouteSummary;
