import React from "react";
import SeatRow from "./SeatRow";

const SleeperLayout = ({ layout, seats, sleeperRow }) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: sleeperRow }).map((_, i) => {
        return (
          <div className="flex items-center justify-between w-full" key={i}>
            <SeatRow seats={seats.slice(2 * i, 2 * i + 1)} />
            <SeatRow seats={seats.slice(2 * i + 1, 2 * i + 2)} />
          </div>
        );
      })}
    </div>
  );
};

export default SleeperLayout;
