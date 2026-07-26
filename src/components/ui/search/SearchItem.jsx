import React from "react";
import Button from "../../util/Button";

const SearchItem = ({ bus }) => {
  return (
    <div className=" bg-secondary grid grid-cols-[2fr_5fr_1.5fr]  gap-10 p-8">
      {/* IMAGE */}
      <div className=" bg-amber-50 flex flex-col items-center justify-center">
        <img src="src\assets\hero_bg_dark.png" alt="dark bus" />
      </div>

      {/* INFORMATION */}
      <div className="flex flex-col gap-6 border-r border-border">
        {/* NAME */}
        <div>
          <h2>{bus.operator}</h2>
          <p>{bus.busName}</p>
        </div>

        {/* AMENITIES */}
        <ul className="flex gap-6">
          {bus.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>

        {/* JOURNEY */}
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2>{bus.arrival.time}</h2>
            <p>{bus.arrival.city}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="w-50 h-1 bg-primary"></span>
            <span>{bus.duration}</span>
            <span className="w-50 h-1 bg-primary"></span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h2>{bus.departure.time}</h2>
            <p>{bus.departure.city}</p>
          </div>
        </div>

        {/* SEATS */}
        <div className="flex items-center justify-start gap-10">
          <span>Seats Left : {bus.seats.available}</span>
          <span>Total Seater : {bus.seats.seater}</span>
          <span>Total Sleeper : {bus.seats.sleeper}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2>&#8377; {bus.fare.price}</h2>

        <p>per person</p>

        <Button custom="bg-primary text-primary-anti px-14 py-4">
          View Seats
        </Button>

        <p>
          Seats Booked :{" "}
          {bus.seats.sleeper + bus.seats.seater - bus.seats.available}
        </p>
      </div>
    </div>
  );
};

export default SearchItem;
