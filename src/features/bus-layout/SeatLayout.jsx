import React from "react";
import Seat from "./Seat";
import SeatRow from "./SeatRow";

const SeatLayout = ({
  backrowSeat,
  layout,
  type,
  sleeperRow = 0,
  seaterRow,
  bookedSeats,
}) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  return (
    <div className="pt-16 px-8">
      <div className="flex flex-col items-center justify-center gap-8">
        {Array.from({ length: seaterRow }).map((_, i) => {
          console.log("hey");
          return <SeatRow key={i} leftCol={leftCol} rightCol={rightCol} />;
        })}
      </div>

      {backrowSeat && (
        <div className="mt-8 flex items-center justify-center gap-5">
          {Array.from({ length: leftCol + rightCol + 1 }).map((_, i) => {
            return <Seat key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SeatLayout;
