import React from "react";
import Icon from "../../../components/util/Icon";
import { FaCar } from "react-icons/fa";

const TripDetails = () => {
  return (
    <div className="border border-border w-full p-8 rounded-2xl bg-surface">
      <h3 className="font-semibold text-text-primary">Trip Details</h3>

      <div className="flex items-center justify-between mt-16 mb-6 px-6 gap-30">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-text-primary text-2xl">
            Jabalpur
          </span>
          <span className="-mt-2 text-xl text-text-secondary">
            Madhya Pradesh
          </span>

          <span className="text-xl text-text-primary">
            01 Aug 2026, <span className="font-bold">20:45</span>
          </span>
        </div>

        <div className="flex-1 flex items-center">
          <span className="h-3 w-3 rounded-full bg-text-secondary/80"></span>
          <span className="flex-1 border-y border-text-secondary/60"></span>
          <span className="w-fit border-2 px-4 py-1 rounded-full border-text-secondary text-2xl text-text-primary/80">
            8h 10m
          </span>
          <span className="flex-1 border-y border-text-secondary/60"></span>
          <span className="h-3 w-3 rounded-full bg-text-secondary/80"></span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-text-primary text-2xl">
            Jabalpur
          </span>
          <span className="-mt-2 text-xl text-text-secondary">
            Madhya Pradesh
          </span>

          <span className="text-xl text-text-primary">
            01 Aug 2026, <span className="font-bold">20:45</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
