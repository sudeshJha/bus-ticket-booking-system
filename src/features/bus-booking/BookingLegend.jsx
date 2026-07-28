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

const BookingLegend = () => {
  return (
    <div className="flex items-start justify-evenly gap-10">
      {legends.map((legend) => {
        return (
          <div
            key={legend.id}
            className="flex items-center justify-center gap-2"
          >
            <div
              className={`h-8 w-8 rounded-md border-3 ${legend.textColor} ${legend.bgColor}`}
            ></div>
            <span className="text-text-primary/80">{legend.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BookingLegend;
