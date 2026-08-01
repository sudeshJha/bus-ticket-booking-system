import React from "react";
import BusBookingLayout from "../features/bus-booking/BusBookingLayout";
import { BusBookingProvider } from "../context/BusBookingContext";

const BusBooking = () => {
  return (
    <BusBookingProvider>
      <BusBookingLayout />
    </BusBookingProvider>
  );
};

export default BusBooking;
