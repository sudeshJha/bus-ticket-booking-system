import React from "react";

const legends = [
  {
    id: 1,
    name: "Available",
    textColor: "text-text-primary",
    bgColor: "bg-text-secondary/20",
  },
  {
    id: 2,
    name: "Selected",
    textColor: "text-success",
    bgColor: "bg-success/40",
  },
  {
    id: 3,
    name: "Booked",
    textColor: "text-text-secondary",
    bgColor: "bg-text-secondary/20",
  },
];

const Seat = ({ status = "Available", type = "seater", deck = 0 }) => {
  let legend;

  if (status === "Available") legend = legends[0];
  if (status === "Selected") legend = legends[1];
  if (status === "Booked") legend = legends[2];

  return (
    <div
      className={`${type === "seater" ? "h-10 w-10" : "w-20 h-32"} rounded-md border-3 ${legend.textColor} ${legend.bgColor}`}
    ></div>
  );
};

export default Seat;
