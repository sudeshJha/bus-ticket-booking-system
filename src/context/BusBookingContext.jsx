import React, { createContext, useContext } from "react";
import { useBookingProgress } from "./BookingProgressContext";
import { usePassengerDetail } from "./PassengerDetailContext";
import { useSeatSelection } from "./SeatSelectionContext";

const BusBookingContext = createContext();

const BusBookingProvider = ({ children }) => {
  const bookingProgressContext = useBookingProgress();
  const passengerDetailContext = usePassengerDetail();
  const seatSelectionContext = useSeatSelection();

  return (
    <BusBookingContext.Provider
      value={{
        ...bookingProgressContext,
        ...passengerDetailContext,
        ...seatSelectionContext,
      }}
    >
      {children}
    </BusBookingContext.Provider>
  );
};

const useBusBooking = () => {
  const context = useContext(BusBookingContext);

  if (!context)
    throw new Error(
      "Bus Booking context was used outside of BusBookingProvider",
    );
  return context;
};
