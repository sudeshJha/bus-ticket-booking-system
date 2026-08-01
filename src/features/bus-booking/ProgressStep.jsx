import React from "react";
import { useBusBooking } from "../../context/BusBookingContext";

const MAX_PROGRESS = 3;

const ProgressStep = ({ step, progress, jumpProgress }) => {
  let stepStatus;
  const { removeAllPassengers } = useBusBooking();

  if (step.id === progress) {
    stepStatus = "border-success bg-primary text-primary-anti";
  } else if (step.id > progress) {
    stepStatus = "bg-transparent border-border text-text-primary";
  } else {
    stepStatus =
      "bg-primary text-anti-primary border-primary text-primary-anti";
  }

  const handleClick = () => {
    jumpProgress(step.id);
    if (step.id === 1) {
      removeAllPassengers();
    }
  };

  return (
    <>
      <div
        className={`flex  items-center justify-center p-2 border-4 h-16 w-16 rounded-full font-bold cursor-pointer ${stepStatus}`}
        onClick={handleClick}
      >
        {step.id}
      </div>
      {step.id < MAX_PROGRESS && (
        <span className="flex-1 border-y border-text-secondary"></span>
      )}
    </>
  );
};

export default ProgressStep;
