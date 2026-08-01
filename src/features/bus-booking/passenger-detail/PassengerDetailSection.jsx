import React from "react";
import { useSeatSelection } from "../../../context/SeatSelectionContext";
import { FaCirclePlus } from "react-icons/fa6";
import Icon from "../../../components/util/Icon";
import PassengerDetail from "./PassengerDetail";

const PassengerDetailSection = () => {
  const { selectedSeats } = useSeatSelection();
  return (
    <div>
      <h3 className="text-primary text-2xl tracking-wide flex items-center justify-start py-1 gap-4 font-semibold">
        <Icon icon={<FaCirclePlus />} custom="text-primary" />
        Add Passenger Details
      </h3>

      <div className="mt-20 flex flex-col items-center justify-center gap-20">
        {selectedSeats.map((seat, i) => {
          return <PassengerDetail key={i} seat={seat} passengerNo={i} />;
        })}
      </div>
    </div>
  );
};

export default PassengerDetailSection;
