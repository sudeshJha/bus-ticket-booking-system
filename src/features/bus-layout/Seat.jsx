import React from "react";
import { useSeatSelection } from "./SeatSelectionContext";

const legends = [
  {
    id: 1,
    name: "available",
    textColor: "text-text-primary",
    bgColor: "bg-text-secondary/20",
  },
  {
    id: 2,
    name: "selected",
    textColor: "text-success",
    bgColor: "bg-success/40",
  },
  {
    id: 3,
    name: "booked",
    textColor: "text-text-secondary",
    bgColor: "bg-text-secondary/20",
  },
];

const Seat = ({ seat, deck = 0 }) => {
  let legend;
  const { seatNo, status, type } = seat;

  if (status === "available") legend = legends[0];
  if (status === "selected") legend = legends[1];
  if (status === "booked") legend = legends[2];

  const { addSeat, removeSelectedSeat } = useSeatSelection();

  const handleClick = () => {
    if()
  };

  return (
    <div
      className={`${type === "seater" ? "h-12 w-12" : "w-20 h-36"}  ${legend.textColor} ${legend.bgColor} rounded-md border-2 flex items-center justify-center ${status === "booked" ? "cursor-no-drop" : "cursor-pointer"}`}
 onClick={handleClick}   >
      <span className="text-[1rem]">{seatNo}</span>
    </div>
  );
};

export default Seat;
