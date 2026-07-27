import React from "react";
import Button from "../../util/Button";

const SearchItem = ({ bus }) => {
  return (
    <div className=" bg-surface shadow-md hover:shadow-xl  grid grid-cols-[1fr_2fr_1fr] gap-15 p-8 rounded-2xl">
      {/* INFORMATION */}
      <div className="flex flex-col items-start justify-between">
        {/* NAME */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-primary font-bold text-3xl">
            {bus.operator}
          </h2>
          <p className="text-text-secondary text-xl font-semibold tracking-wide">
            {bus.busName}
          </p>
        </div>

        {/* AMENITIES */}
        <ul className="flex gap-x-6 gap-y-1 flex-wrap pr-4">
          {bus.amenities.map((amenity, i) => (
            <li
              key={i}
              className="text-xl text-text-primary/70 font-semibold tracking-tighter w-fit"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* JOURNEY */}
      <div className="flex flex-col  items-start justify-between">
        <div className="w-full flex items-center justify-between gap-5">
          <div className="flex flex-col items-start justify-center gap-0 ">
            <h2 className="font-bold text-3xl text-text-primary">
              {bus.arrival.time}
            </h2>
            <p className="text-text-secondary text-xl">{bus.arrival.city}</p>
          </div>

          <div className="flex flex-1 items-center justify-center gap-4">
            <span className="w-full border-t border-primary bg-primary flex-1"></span>
            <span className="text-text-primary/60 ">{bus.duration}</span>
            <span className="w-full border-t border-primary bg-primary flex-1"></span>
          </div>

          <div className="flex flex-col items-start justify-center gap-0 justify-self-end">
            <h2 className="font-bold text-3xl text-text-primary">
              {bus.departure.time}
            </h2>
            <p className="text-text-secondary text-xl">{bus.departure.city}</p>
          </div>
        </div>

        {/* SEATS STATUS*/}
        <div className="flex items-center justify-between  text-text-secondary text-xl w-full">
          <span className="text-error/70">
            Seats Booked :{" "}
            <span className="font-bold">
              {bus.seats.sleeper + bus.seats.seater - bus.seats.available}
            </span>
          </span>

          <span className="text-warning/70">
            Total Seater :<span className="font-bold"> {bus.seats.seater}</span>
          </span>

          <span className="text-info/70">
            Total Sleeper :{" "}
            <span className="font-bold">{bus.seats.sleeper}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-10 pl-10 border-l border-border">
        <div className="flex flex-col items-center">
          <h2 className="text-text-primary text-4xl font-extrabold">
            &#8377; {bus.fare.price}
          </h2>

          <p className="text-text-secondary text-[1rem]">per person</p>
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <Button custom="bg-primary text-primary-anti font-bold text-xl py-3 w-full rounded-xl">
            View Seats
          </Button>

          <p className="text-success font-bold text-2xl">
            Seats Available : {bus.seats.available}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
