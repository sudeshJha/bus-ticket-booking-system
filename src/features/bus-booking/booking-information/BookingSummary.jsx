import React from "react";
import TripDetails from "./TripDetails";
import SelectedSeats from "./SelectedSeats";
import { useBookingProgress } from "../../../context/BookingProgressContext";
import { useSeatSelection } from "../../../context/SeatSelectionContext";
import { useBusBooking } from "../../../context/BusBookingContext";
import AddedPassengers from "./AddedPassengers";
import SubmitButton from "../../../components/util/SubmitButton";

const BookingSummary = () => {
  const { progress, nextProgress } = useBookingProgress();
  const { selectedSeats, passengers } = useBusBooking();

  const handleClick = () => {
    if (progress === 1 && selectedSeats.length === 0) return;

    if (progress === 2 && passengers.length !== selectedSeats.length) return;

    nextProgress();
  };

  return (
    <div className="flex flex-col gap-10">
      <TripDetails />
      <SelectedSeats />
      <AddedPassengers />
      <SubmitButton onClick={handleClick} size="m">
        {progress === 1 && "Select Seats"}
        {progress === 2 && "Continue to Payment"}
        {progress === 3 && "Pay Now $90"}
      </SubmitButton>
    </div>
  );
};

export default BookingSummary;
