import React, { useState } from "react";
import BookingProgress from "./BookingProgress";
import BusLayoutSection from "./BusLayoutSection";
import PassengerDetailSection from "./passenger-detail/PassengerDetailSection";
import PaymentSection from "./PaymentSection";
import BookingInformation from "./booking-information/BookingInformation";
import Button from "../../components/util/Button";
import { useBookingProgress } from "../../context/BookingProgressContext";
import BackButton from "../../components/util/BackButton";
import { useBusBooking } from "../../context/BusBookingContext";

const BusBookingLayout = () => {
  const { progress, passengers } = useBusBooking();
  console.log(passengers);

  return (
    <div className="bg-surface pb-10">
      <div className="relative">
        <div className="absolute top-15 left-20">
          <BackButton />
        </div>
        <BookingProgress />
      </div>
      <div className="mt-10 mx-15  grid grid-cols-[2fr_3fr] gap-15">
        <div className="p-10 border-2 border-border rounded-2xl bg-background">
          {progress === 1 && <BusLayoutSection />}
          {progress === 2 && <PassengerDetailSection />}
          {progress === 3 && <PaymentSection />}
        </div>

        <BookingInformation />
      </div>
    </div>
  );
};

export default BusBookingLayout;
