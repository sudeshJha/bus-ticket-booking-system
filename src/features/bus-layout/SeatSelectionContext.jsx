import React, { createContext, useContext, useState } from "react";

const SeatSelectionContext = createContext();

function SeatSelectionProvider({ children }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const addSeat = (seat) => {
    if (!seat) return;
    setSelectedSeats((seats) => [...seats, seat]);
  };

  const removeSelectedSeat = (seat) => {
    setSelectedSeats((seats) => seats.filter((s) => s !== seat));
  };

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, addSeat, removeSelectedSeat }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
}

function useSeatSelection() {
  const context = useContext(SeatSelectionContext);

  if (!context)
    throw new Error(
      "Seat selection context was used outside of SeatSelectionProvider",
    );
  return context;
}

export { useSeatSelection, SeatSelectionProvider };
