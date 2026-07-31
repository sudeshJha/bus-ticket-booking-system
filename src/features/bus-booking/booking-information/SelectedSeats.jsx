import React from "react";
import { useSeatSelection } from "../../bus-layout/SeatSelectionContext";

const SelectedSeats = () => {
  const { selectedSeats } = useSeatSelection();
  console.log(selectedSeats);

  if (selectedSeats?.length === 0) return;
  return (
    <div className="border border-border w-full p-8 rounded-2xl bg-surface">
      <h3 className="font-semibold text-text-primary">Selected Seats</h3>
      <div className="mt-12 flex gap-8 mx-6 my-2 flex-wrap">
        {selectedSeats.map((seat, i) => {
          return (
            <span
              key={i}
              className="border border-border text-2xl text-text-secondary p-2 bg-text-secondary/5 rounded-md"
            >
              {seat}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedSeats;
