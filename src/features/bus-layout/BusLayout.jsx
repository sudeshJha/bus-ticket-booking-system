import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import Icon from "../../components/util/Icon";
import SeatLayout from "./SeatLayout";

const BusLayout = ({ data, deck }) => {
  const {
    layout,
    type,
    bookedSeats,
    backrowSeat,
    seaterRow,
    sleeperRow,
    isUpperDeck,
  } = data;

  return (
    <div className="rounded-2xl border-2 border-text-secondary py-4 px-4 mx-auto w-fit">
      <div className="mx-5 flex items-center justify-between border-b-2 border-border pb-2">
        <Icon icon={<FaPerson />} color="text-text-secondary" size="small" />
        <Icon
          icon={<GiSteeringWheel />}
          color="text-text-secondary"
          size="medium"
        />
      </div>

      <SeatLayout
        backrowSeat={backrowSeat}
        layout={deck === 0 ? layout : "1X1"}
        type={deck === 0 ? type : "sleeper"}
        seaterRow={seaterRow}
        sleeperRow={sleeperRow}
        bookedSeats={bookedSeats}
        deck={deck}
      />
    </div>
  );
};

export default BusLayout;
