import React from "react";
import SleeperLayout from "./SleeperLayout";
import Sleeper_2X1_Layout from "./SemiSleeperLayout";

import SeatRow from "./SeatRow";
import SemiSleeperLayout from "./SemiSleeperLayout";

const layout = {
  ONE_BY_ONE_SLEEPER: {
    leftCol: 1,
    rightCol: 1,
  },
  TWO_BY_ONE_SLEEPER: {
    leftCol: 2,
    rightCol: 1,
  },
  THREE_BY_THREE_SEATER: {
    leftCol: 3,
    rightCol: 3,
  },
  TWO_BY_THREE_SEATER: {
    leftCol: 2,
    rightCol: 3,
  },
  TWO_BY_ONE_SEATER: {
    leftCol: 2,
    rightCol: 1,
  },
  TWO_BY_TWO_SEATER: {
    leftCol: 2,
    rightCol: 2,
  },
};

const SeaterLayout = ({ layoutData, seats }) => {
  const {
    seatLayoutType,
    isSleeper,
    seaterRows,
    sleeperRows,
    backRowSeats,
    currentDeckType,
  } = layoutData;

  const leftCol = layout[seatLayoutType].leftCol;
  const rightCol = layout[seatLayoutType].rightCol;

  if (leftCol != rightCol && isSleeper)
    return (
      <SemiSleeperLayout
        backRowSeats={backRowSeats}
        seatLayoutType={seatLayoutType}
        seats={seats}
        sleeperRows={sleeperRows}
      />
    );

  if (isSleeper)
    return (
      <SleeperLayout
        seats={seats}
        seatLayoutType={seatLayoutType}
        sleeperRows={sleeperRows}
        backRowSeats={backRowSeats}
        currentDeckType={currentDeckType}
      />
    );

  return (
    <div className="flex flex-col gap-y-8">
      {Array.from({ length: seaterRows }).map((_, i) => {
        const L_Start = i * (leftCol + rightCol);
        const L_End = L_Start + leftCol;
        const R_Start = L_End;
        const R_End = R_Start + rightCol;

        return (
          <div className="flex items-center justify-between" key={i}>
            <SeatRow seats={seats.slice(L_Start, L_End)} />
            <SeatRow seats={seats.slice(R_Start, R_End)} />
          </div>
        );
      })}

      {backRowSeats && (
        <SeatRow
          backRowSeats={backRowSeats}
          seats={seats.lower.slice(-1 * backRowSeats)}
        />
      )}
    </div>
  );
};

export default SeaterLayout;
