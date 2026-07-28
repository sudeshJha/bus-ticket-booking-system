import React from "react";
import Seat from "./Seat";

const SeatRow = ({ leftCol, rightCol = 0 }) => {
  return (
    <div className="flex items-center justify-center gap-x-20">
      <div className="flex items-center justify-center gap-5">
        {Array.from({ length: leftCol }).map((_, i) => {
          return <Seat key={i} status="Booked" />;
        })}
      </div>

      <div className="flex items-center justify-center gap-5">
        {Array.from({ length: rightCol }).map((_, i) => {
          return <Seat key={i} status="Booked" />;
        })}
      </div>
    </div>
  );
};

export default SeatRow;
