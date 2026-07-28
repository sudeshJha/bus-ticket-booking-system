import React, { useState } from "react";
import BookingLegend from "./BookingLegend";
import BusLayout from "./BusLayout";
import DeckSelection from "./DeckSelection";

const BusLayoutSection = () => {
  const [deck, setDeck] = useState(0);
  const isUpperDeck = false;

  const handleDeck = (d) => {
    if (d === 1 && !isUpperDeck) return;
    if (deck === d) return;
    setDeck(1 - deck);
  };

  return (
    <div className="flex flex-col gap-15">
      <DeckSelection
        deck={deck}
        handleDeck={handleDeck}
        isUpperDeck={isUpperDeck}
      />
      <BusLayout />
      <BookingLegend />
    </div>
  );
};

export default BusLayoutSection;
