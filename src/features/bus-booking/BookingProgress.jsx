import React from "react";
import ProgressStep from "./ProgressStep";

const steps = [
  { id: 1, name: "Select Seats" },
  { id: 2, name: "Passenger Details" },
  { id: 3, name: "Payment" },
];

const BookingProgress = ({ progressInfo }) => {
  const { progress, nextProgress, prevProgress, jumpProgress } = progressInfo;

  return (
    <div className="mx-auto w-200 px-5 py-10 flex items-center justify-center">
      {steps.map((step) => {
        return (
          <ProgressStep
            key={step.id}
            step={step}
            progress={progress}
            jumpProgress={jumpProgress}
          />
        );
      })}
    </div>
  );
};

export default BookingProgress;
