import React from "react";
import TripDetails from "./TripDetails";
import SelectedSeats from "./SelectedSeats";
import Button from "../../../components/util/Button";
import { useBookingProgress } from "../../../context/BookingProgressContext";
import { useSeatSelection } from "../../../context/SeatSelectionContext";
import { useBusBooking } from "../../../context/BusBookingContext";

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
      <Button
        className=""
        onClick={handleClick}
        custom="bg-primary text-primary-anti w-full mt-6 py-4 mx-auto rounded-xl font-semibold hover:bg-primary-hover hover:-translate-y-1"
      >
        {progress === 1 && "Select Seats"}
        {progress === 2 && "Continue to Payment"}
      </Button>
    </div>
  );
};

export default BookingSummary;
