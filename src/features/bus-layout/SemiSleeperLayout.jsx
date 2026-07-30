import React from "react";
import SeatRow from "./SeatRow";

const SemiSleeperLayout = ({ layout, seats, sleeperRow }) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: sleeperRow }).map((_, i) => {
        const s = 5 * i;

        // console.log(L_Start, L_End, R_Start, R_End);

        return (
          <div className="flex items-center justify-between" key={i}>
            <div className="flex flex-col items-center justify-center gap-8">
              <SeatRow seats={seats.slice(s, s + 2)} />
              <SeatRow seats={seats.slice(s + 2, s + 4)} />
            </div>

            <SeatRow seats={seats.slice(s + 4, s + 5)} />
          </div>
        );
      })}
    </div>
  );
};

export default SemiSleeperLayout;
