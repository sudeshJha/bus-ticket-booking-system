import React from "react";
import PassengerForm from "./PassengerForm";

const PassengerDetail = ({ seat, passengerNo }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between px-4">
        <h3 className="font-semibold text-[1.4rem] text-text-primary">
          Passenger - {passengerNo + 1}
        </h3>
        <h3 className="font-semibold text-text-secondary text-[1.4rem] tracking-wider bg-surface px-3 py-1 rounded-xl">
          Seat <span className="tracking-widest">{seat}</span>
        </h3>
      </div>

      <PassengerForm />
    </div>
  );
};

export default PassengerDetail;
