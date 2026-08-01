import React from "react";
import { useBusBooking } from "../../../context/BusBookingContext";

const AddedPassengers = () => {
  const { passengers, selectedSeats } = useBusBooking();

  if (passengers.length === 0) return;

  return (
    <div className="border border-border w-full p-8 rounded-2xl bg-surface">
      <h3 className="font-semibold text-text-primary">Passengers Added</h3>
      <div className="flex flex-col mt-10 px-10 gap-8">
        {passengers.map((passenger, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center rounded-xl border border-border px-6 py-5 text-lg"
            >
              <p className="font-semibold text-text-primary text-xl tracking-wide uppercase">
                {passenger.name}
              </p>

              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Seat :</span>{" "}
                {selectedSeats[i]}
              </p>

              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Age :</span>{" "}
                {passenger.age}
              </p>

              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Gender :</span>{" "}
                {passenger.gender}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddedPassengers;
