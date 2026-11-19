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

const SemiSleeperLayout = ({
  backRowSeats,
  seatLayoutType,
  seats,
  sleeperRows,
}) => {
  const leftCol = layout[seatLayoutType].leftCol;
  const rightCol = layout[seatLayoutType].rightCol;

  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: sleeperRows }).map((_, i) => {
        const s = 5 * i;

        return (
          <div className="flex items-center justify-between" key={i}>
            <div className="flex flex-col gap-10">
              <SeatRow seats={seats.slice(s, s + 2)} />
              <SeatRow seats={seats.slice(s + 2, s + 4)} />
            </div>

            <SeatRow seats={seats.slice(s + 4, s + 5)} />
          </div>
        );
      })}

      {backRowSeats && (
        <SeatRow
          backRowSeats={backRowSeats}
          seats={seats.slice(-1 * backRowSeats)}
        />
      )}
    </div>
  );
};

export default SemiSleeperLayout;
