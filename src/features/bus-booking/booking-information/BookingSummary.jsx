import React from "react";
import TripDetails from "./TripDetails";
import SelectedSeats from "./SelectedSeats";

const BookingSummary = () => {
  return (
    <div className="flex flex-col gap-10">
      <TripDetails />
      <SelectedSeats />
    </div>
  );
};

export default BookingSummary;
