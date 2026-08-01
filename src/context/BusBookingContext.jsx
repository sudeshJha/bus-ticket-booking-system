import React, { createContext, useContext } from "react";
import {
  BookingProgressProvider,
  useBookingProgress,
} from "./BookingProgressContext";
import {
  PassengerDetailProvider,
  usePassengerDetail,
} from "./PassengerDetailContext";
import {
  SeatSelectionProvider,
  useSeatSelection,
} from "./SeatSelectionContext";

const BusBookingProvider = ({ children }) => {
  return (
    <BookingProgressProvider>
      <SeatSelectionProvider>
        <PassengerDetailProvider>{children}</PassengerDetailProvider>
      </SeatSelectionProvider>
    </BookingProgressProvider>
  );
};

const useBusBooking = () => {
  return {
    ...useBookingProgress(),
    ...useSeatSelection(),
    ...usePassengerDetail(),
  };
};

export { useBusBooking, BusBookingProvider };
