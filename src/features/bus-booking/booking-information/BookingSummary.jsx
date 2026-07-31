import React from "react";
import TripDetails from "./TripDetails";
import SelectedSeats from "./SelectedSeats";
import Button from "../../../components/util/Button";
import { useBookingProgress } from "../../../context/BookingProgressContext";

const BookingSummary = () => {
  const { progress, nextProgress } = useBookingProgress();

  return (
    <div className="flex flex-col gap-10">
      <TripDetails />
      <SelectedSeats />
      <Button
        className=""
        onClick={nextProgress}
        custom="bg-primary text-primary-anti w-full mt-6 py-4 mx-auto rounded-xl font-semibold hover:bg-primary-hover hover:-translate-y-1"
      >
        {progress === 1 && "Select Seats"}
        {progress === 2 && "Continue to Payment"}
      </Button>
    </div>
  );
};

export default BookingSummary;
