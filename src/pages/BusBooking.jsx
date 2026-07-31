import React from "react";
import BusBookingLayout from "../features/bus-booking/BusBookingLayout";
import { SeatSelectionProvider } from "../context/SeatSelectionContext";
import BookingProgress from "../features/bus-booking/BookingProgress";
import { BookingProgressProvider } from "../context/BookingProgressContext";

const BusBooking = () => {
  return (
    <BookingProgressProvider>
      <SeatSelectionProvider>
        <BusBookingLayout />
      </SeatSelectionProvider>
    </BookingProgressProvider>
  );
};

export default BusBooking;
