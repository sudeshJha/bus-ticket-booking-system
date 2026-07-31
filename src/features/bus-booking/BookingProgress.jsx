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
    <div className="mx-auto w-200 py-10">
      <div className="w-full flex items-center justify-center">
        {steps.map((step) => {
          return (
            <>
              <ProgressStep
                key={step.id}
                step={step}
                progress={progress}
                jumpProgress={jumpProgress}
              />
            </>
          );
        })}
      </div>

      <div className="w-210 mt-2 flex justify-between justify-self-center">
        {steps.map((step) => (
          <span
            key={step.name}
            className={`${step.id === progress ? "text-text-primary" : "text-text-secondary"} font-bold text-xl`}
          >
            {step.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;
