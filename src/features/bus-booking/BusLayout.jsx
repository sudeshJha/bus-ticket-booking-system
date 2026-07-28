import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import Icon from "../../components/util/Icon";
import SeatLayout from "../seat-layout/SeatLayout";

const data = {
  layout: "2X3",
  type: "seater",
  bookedSeats: [
    "L-23",
    "L-57",
    "L-38",
    "L-44",
    "L-31",
    "L-19",
    "L-11",
    "L-10",
    "U-3",
    "U-7",
    "U-1",
  ],
  backrowSeat: true,
  seaterRow: 10,
  sleeperRow: 0,
};

const BusLayout = () => {
  const { layout, type, bookedSeats, backrowSeat, seaterRow, sleeperRow } =
    data;

  return (
    <div className="rounded-2xl border-2 border-text-secondary py-4 px-4 w-fit mx-auto">
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
        layout={layout}
        type={type}
        seaterRow={seaterRow}
        sleeperRow={sleeperRow}
        bookedSeats={bookedSeats}
      />
    </div>
  );
};

export default BusLayout;
