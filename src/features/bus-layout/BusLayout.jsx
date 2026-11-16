import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import Icon from "../../components/util/Icon";
import { getSeats } from "./seat_api";
import SeaterLayout from "./SeaterLayout";
import SleeperLayout from "./SleeperLayout";
import { useSeatSelection } from "../../context/SeatSelectionContext";
import { useBusBooking } from "../../context/BusBookingContext";

const BusLayout = ({ layoutData }) => {
  const {
    seatLayoutType,
    deckType,
    bookedSeats,
    backrowSeats,
    seaterRows,
    sleeperRows,
    isUpperDeck,
    selectedSeats,
    isSleeper,
    currentDeckType,
  } = layoutData;

  const seats = getSeats(layoutData);

  console.log(seats);

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
        {currentDeckType === "UPPER_DECK" && (
          <SleeperLayout
            seatLayoutType={"ONE_BY_ONE_SLEEPER"}
            seats={seats.upper}
            sleeperRows={sleeperRows}
          />
        )}
        {currentDeckType === "LOWER_DECK" && (
          <SeaterLayout layoutData={layoutData} seats={seats.lower} />
        )}
      </div>
    </div>
  );
};

export default BusLayout;
