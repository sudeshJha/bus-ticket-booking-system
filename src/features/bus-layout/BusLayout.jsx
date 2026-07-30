import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import Icon from "../../components/util/Icon";
import { getSeats } from "./seat_api";

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

  const seats = getSeats({
    layout,
    type,
    isUpperDeck,
    seaterRow,
    sleeperRow,
    backrowSeat,
    bookedSeats,
  });

  console.log(seats);
  console.log(bookedSeats);

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
    </div>
  );
};

export default BusLayout;
