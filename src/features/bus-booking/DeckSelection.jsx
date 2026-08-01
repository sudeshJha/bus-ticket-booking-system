import React from "react";

const DeckSelection = ({ deck, handleDeck, isUpperDeck }) => {
  const noUpperDeck = "text-text-secondary/50 bg-text-secondary/10";
  const activeDeck = " bg-secondary text-surface";
  const nonActiveDeck = "text-text-primary";
  const deckClass = "px-10 py-4 font-semibold";

  return (
    <div className="mx-auto flex items-center justify-center border-2 rounded-xl border-text-secondary">
      <div
        className={`${deckClass} ${deck === 0 ? activeDeck : nonActiveDeck} border-r-2 border-text-secondary rounded-l-xl text-sm`}
        onClick={() => handleDeck(0)}
      >
        LOWER DECK
      </div>
      <div
        className={`${deckClass} ${isUpperDeck ? (deck === 1 ? activeDeck : nonActiveDeck) : noUpperDeck} rounded-r-xl text-sm`}
        onClick={() => handleDeck(1)}
      >
        UPPER DECK
      </div>
    </div>
  );
};

export default DeckSelection;
