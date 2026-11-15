import React from "react";
import Seat from "./Seat";

const SeatRow = ({ seats, backRowSeats }) => {
  return (
    <div
      className={`flex items-center ${backRowSeats ? "justify-between" : "justify-center"}  gap-4`}
    >
      {seats.map((seat, i) => (
        <Seat key={i} seat={seat} />
      ))}
    </div>
  );
};

export default SeatRow;
