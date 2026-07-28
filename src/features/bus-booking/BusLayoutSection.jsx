import React, { useState } from "react";
import BookingLegend from "./BookingLegend";
import DeckSelection from "./DeckSelection";
import BusLayout from "../bus-layout/BusLayout";

const data = {
  layout: "2X1",
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
  sleeperRow: 5,
  isUpperDeck: true,
};

const BusLayoutSection = () => {
  const [deck, setDeck] = useState(0);

  const handleDeck = (d) => {
    if (d === 1 && !data.isUpperDeck) return;
    if (deck === d) return;
    setDeck(1 - deck);
  };

  return (
    <div className="flex flex-col gap-20 py-15">
      <DeckSelection
        deck={deck}
        handleDeck={handleDeck}
        isUpperDeck={data.isUpperDeck}
      />
      <BusLayout deck={deck} data={data} />
      <BookingLegend />
    </div>
  );
};

export default BusLayoutSection;
