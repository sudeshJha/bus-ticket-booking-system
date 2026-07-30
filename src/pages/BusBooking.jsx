import React from "react";
import BusBookingLayout from "../features/bus-booking/BusBookingLayout";
import { SeatSelectionProvider } from "../features/bus-layout/SeatSelectionContext";

const BusBooking = () => {
  return (
    <SeatSelectionProvider>
      <BusBookingLayout />
    </SeatSelectionProvider>
  );
};

export default BusBooking;
