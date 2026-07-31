import React from "react";
import SleeperLayout from "./SleeperLayout";
import Sleeper_2X1_Layout from "./SemiSleeperLayout";

import SeatRow from "./SeatRow";

const SeaterLayout = ({ layout, type, seats, seaterRow, sleeperRow }) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  if (leftCol != rightCol && type === "sleeper")
    return (
      <Sleeper_2X1_Layout
        layout={layout}
        seats={seats.lower}
        sleeperRow={sleeperRow}
      />
    );

  if (type === "sleeper")
    return (
      <SleeperLayout
        seats={seats.lower}
        layout={layout}
        sleeperRow={sleeperRow}
      />
    );

  return (
    <div className="flex flex-col gap-y-8">
      {Array.from({ length: seaterRow }).map((_, i) => {
        const L_Start = i * (leftCol + rightCol);
        const L_End = L_Start + leftCol;
        const R_Start = L_End;
        const R_End = R_Start + rightCol;

        // console.log(L_Start, L_End, R_Start, R_End);

        return (
          <div className="flex items-center justify-between" key={i}>
            <SeatRow seats={seats.lower.slice(L_Start, L_End)} />
            <SeatRow seats={seats.lower.slice(R_Start, R_End)} />
          </div>
        );
      })}
    </div>
  );
};

export default SeaterLayout;
