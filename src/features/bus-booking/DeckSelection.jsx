import React from "react";

const DeckSelection = ({
  currentDeckType,
  handleCurrentDeckType,
  isUpperDeck,
}) => {
  const noUpperDeck = "text-text-secondary/50 bg-text-secondary/10";
  const activeDeck = " bg-secondary text-surface";
  const nonActiveDeck = "text-text-primary";
  const deckClass = "px-10 py-4 font-semibold";

  return (
    <div className="mx-auto flex items-center justify-center border-2 rounded-xl border-text-secondary">
      <div
        className={`${deckClass} ${currentDeckType === "LOWER_DECK" ? activeDeck : nonActiveDeck} border-r-2 border-text-secondary rounded-l-md text-sm`}
        onClick={() => handleCurrentDeckType("LOWER_DECK")}
      >
        LOWER DECK
      </div>
      <div
        className={`${deckClass} ${isUpperDeck ? (currentDeckType === "UPPER_DECK" ? activeDeck : nonActiveDeck) : noUpperDeck} rounded-r-md text-sm`}
        onClick={() => handleCurrentDeckType("UPPER_DECK")}
      >
        UPPER DECK
      </div>
    </div>
  );
};

export default DeckSelection;
