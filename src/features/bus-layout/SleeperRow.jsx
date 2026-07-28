import React from "react";
import Seat from "./Seat";

const SleeperRow = ({ leftCol, rightCol }) => {
  return (
    <div className="flex items-center justify-between w-full gap-x-20">
      {leftCol === 1 ? (
        <div className="flex items-center justify-center gap-5">
          {Array.from({ length: leftCol }).map((_, i) => {
            return <Seat key={i} status="Booked" type="sleeper" />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center justify-center gap-5">
            {Array.from({ length: leftCol }).map((_, i) => {
              return <Seat key={i} status="Booked" type="seater" />;
            })}
          </div>
          <div className="flex items-center justify-center gap-5">
            {Array.from({ length: leftCol }).map((_, i) => {
              return <Seat key={i} status="Booked" type="seater" />;
            })}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-5">
        {Array.from({ length: rightCol }).map((_, i) => {
          return <Seat key={i} status="Booked" type="sleeper" />;
        })}
      </div>
    </div>
  );
};

export default SleeperRow;
