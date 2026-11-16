import React from "react";
import SeatRow from "./SeatRow";

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

const SleeperLayout = ({
  seatLayoutType,
  seats,
  sleeperRows,
  backRowSeats,
  currentDeckType,
}) => {
  const leftCol = layout[seatLayoutType].leftCol;
  const rightCol = layout[seatLayoutType].rightCol;

  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: sleeperRows }).map((_, i) => {
        return (
          <div className="flex items-center justify-between w-full" key={i}>
            <SeatRow seats={seats.slice(2 * i, 2 * i + 1)} />
            <SeatRow seats={seats.slice(2 * i + 1, 2 * i + 2)} />
          </div>
        );
      })}
      {backRowSeats && currentDeckType === "LOWER_DECK" && (
        <SeatRow
          backRowSeats={backRowSeats}
          seats={seats.slice(-1 * backRowSeats)}
        />
      )}
    </div>
  );
};

export default SleeperLayout;
