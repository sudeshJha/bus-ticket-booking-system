import React from "react";

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

  return (
    <div
      className={`${type === "seater" ? "h-12 w-12" : "w-20 h-32"}  ${legend.textColor} ${legend.bgColor} rounded-md border-3 flex items-center justify-center ${status === "booked" ? "cursor-no-drop" : "cursor-pointer"}`}
    >
      <span className="text-[1.2rem]">{seatNo}</span>
    </div>
  );
};

export default Seat;
