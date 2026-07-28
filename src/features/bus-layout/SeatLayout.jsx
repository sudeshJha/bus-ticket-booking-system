import React from "react";
import Seat from "./Seat";
import SeaterRow from "./SeaterRow";
import SleeperRow from "./SleeperRow";

const SeatLayout = ({
  backrowSeat,
  layout,
  type,
  sleeperRow = 0,
  seaterRow,
  bookedSeats,
  deck,
}) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  return (
    <div className="pt-16 pb-8 px-8">
      {/* UPPER DECKER */}
      {deck === 1 && (
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {Array.from({ length: sleeperRow }).map((_, i) => {
            return <SleeperRow key={i} leftCol={1} rightCol={1} />;
          })}
        </div>
      )}

      {/* LOWER DECKER SEATER */}

      {type === "seater" && (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          {Array.from({
            length: seaterRow,
          }).map((_, i) => {
            return <SeaterRow key={i} leftCol={leftCol} rightCol={rightCol} />;
          })}
        </div>
      )}

      {/* LOWER DECKER SLEEPER */}
      {type === "sleeper" && deck === 0 && (
        <div className="flex flex-col items-center justify-center gap-8">
          {Array.from({ length: sleeperRow }).map((_, i) => {
            return <SleeperRow key={i} leftCol={leftCol} rightCol={rightCol} />;
          })}
        </div>
      )}

      {/* BACK ROW SEATS */}

      {backrowSeat && type !== "sleeper" && (
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
