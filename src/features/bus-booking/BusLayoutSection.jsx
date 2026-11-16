import React, { useState } from "react";
import BookingLegend from "./BookingLegend";
import DeckSelection from "./DeckSelection";
import BusLayout from "../bus-layout/BusLayout";
import { useUser } from "../auth/useUser";
import Spinner from "../../components/ui/Spinner";

const data = {
  layout: "2X1",
  type: "sleeper",
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
  backrowSeat: false,
  seaterRow: 10,
  sleeperRow: 5,
  isUpperDeck: true,
};

const BusLayoutSection = ({ layoutData }) => {
  const [currentDeckType, setCurrentDeckType] = useState("LOWER_DECK");

  const { user, gettingUser } = useUser();

  const handleCurrentDeckType = (currentDeck) => {
    if (currentDeck === currentDeckType) return;

    if (currentDeck === "UPPER_DECK" && !layoutData.isUpperDeck) {
      return;
    }

    if (currentDeck === "UPPER_DECK" && layoutData.deckType === "LOWER_DECK") {
      setCurrentDeckType("LOWER_DECK");
      return;
    }

    setCurrentDeckType(currentDeck);
  };

  layoutData.currentDeckType = currentDeckType;

  if (gettingUser) return <Spinner />;

  return (
    <div className="flex flex-col gap-15 py-10">
      <DeckSelection
        currentDeckType={currentDeckType}
        handleCurrentDeckType={handleCurrentDeckType}
        isUpperDeck={layoutData.deckType === "UPPER_DECK"}
      />
      <BusLayout layoutData={layoutData} />

      {user?.userInfo?.userType === "PASSENGER" ? <BookingLegend /> : ""}
    </div>
  );
};

export default BusLayoutSection;
