import React, { useState } from "react";
import { useSeatLayoutTypes } from "./useSeatLayoutType";
import { useDeckTypes } from "./useDeckTypes";
import Spinner from "../../components/ui/Spinner";

const BusLayoutForm = () => {
  const { gettingSeatLayoutTypes, seatLayoutTypes } = useSeatLayoutTypes();
  const { gettingDeckTypes, deckTypes } = useDeckTypes();

  const [seatLayoutType, setSeatLayoutType] = useState("");
  const [deckType, setDeckType] = useState("");
  const [seaterRows, setSeaterRows] = useState("");
  const [sleeperRows, setSleeperRows] = useState("");

  if (gettingSeatLayoutTypes || gettingDeckTypes) return <Spinner />;

  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Layout
        </h1>
      </div>
      <div className="flex flex-col gap-8 px-8 py-8">
        <div className=" flex items-center justify-center">
          <select
            className={`${deckType ? "text-text-primary" : "text-text-secondary"} px-4 py-3 border border-border rounded-md outline-none`}
          >
            <option className="bg-surface-dark">Select Deck Type</option>
            {deckTypes.map((deckType) => (
              <option
                className={`bg-surface text-text-primary`}
                key={deckType.code}
              >
                {deckType.label}
              </option>
            ))}
          </select>

          <select
            className={`${seatLayoutType ? "text-text-primary" : "text-text-secondary"}  px-4 py-3 border border-border rounded-md outline-none`}
          >
            <option className="bg-surface-dark">Select Seat Layout</option>
            {seatLayoutTypes.map((seatLayout) => (
              <option
                className="bg-surface text-text-primary"
                key={seatLayout.code}
              >
                {seatLayout.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Lower Decker Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-xl ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Lower Decker Seater Rows"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Lower Decker Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-xl ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Lower Decker Seater Rows"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Lower Decker Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-xl ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Lower Decker Seater Rows"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Lower Decker Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-xl ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Lower Decker Seater Rows"
          />
        </div>
      </div>
    </div>
  );
};

export default BusLayoutForm;
