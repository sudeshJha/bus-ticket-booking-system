import React from "react";
import { useSeatSelection } from "../../context/SeatSelectionContext";

const legends = [
  {
    id: 1,
    name: "available",
    style: "text-text-primary bg-surface cursor-pointer hover:scale-110",
  },
  {
    id: 2,
    name: "selected",
    style: "text-success bg-success/40 cursor-pointer",
  },
  {
    id: 3,
    name: "booked",
    style:
      "text-text-secondary opacity-60 bg-text-secondary/30 border-text-secondary bg-surface cursor-no-drop",
  },
];

const Seat = ({ seat, deck = 0 }) => {
  const { seatNo, status, type } = seat;

  const { addSeat, removeSelectedSeat } = useSeatSelection();

  const handleClick = () => {
    switch (status) {
      case "booking":
        return;

      case "selected":
        removeSelectedSeat(seatNo);
        break;

      case "available":
        addSeat(seatNo);
        break;
    }
  };

  let legend;
  if (status === "available") legend = legends[0];
  if (status === "selected") legend = legends[1];
  if (status === "booked") legend = legends[2];

  return (
    <div
      className={`${type === "seater" ? "h-12 w-12" : "w-20 h-36"}  ${legend.style} rounded-md border-2 flex items-center justify-center text-[1rem]`}
      onClick={handleClick}
    >
      <span className="text-inherit">{seatNo}</span>
    </div>
  );
};

export default Seat;
