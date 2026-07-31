import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import Icon from "../../components/util/Icon";
import { getSeats } from "./seat_api";
import SeaterLayout from "./SeaterLayout";
import SleeperLayout from "./SleeperLayout";
import { useSeatSelection } from "../../context/SeatSelectionContext";

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

  const { selectedSeats } = useSeatSelection();
  const seats = getSeats({
    layout,
    type,
    isUpperDeck,
    seaterRow,
    sleeperRow,
    backrowSeat,
    bookedSeats,
    selectedSeats,
  });

  return (
    <div className="rounded-2xl border-2 border-text-secondary py-4 px-4 mx-auto w-120">
      <div className="mx-5 flex items-center justify-between border-b-2 border-border pb-2">
        <Icon icon={<FaPerson />} color="text-text-secondary" size="small" />
        <Icon
          icon={<GiSteeringWheel />}
          color="text-text-secondary"
          size="medium"
        />
      </div>

      <div className="pt-10 px-2 py-2 w-full">
        {deck === 1 && (
          <SleeperLayout
            layout={"1X1"}
            seats={seats.upper}
            sleeperRow={sleeperRow}
          />
        )}
        {deck === 0 && (
          <SeaterLayout
            layout={layout}
            type={type}
            seats={seats}
            seaterRow={seaterRow}
            sleeperRow={sleeperRow}
          />
        )}
      </div>
    </div>
  );
};

// layout,
//     type,
//     bookedSeats,
//     backrowSeat,
//     seaterRow,
//     sleeperRow,
//     isUpperDeck,
export default BusLayout;
