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
  const [backRowSeats, setBackRowSeats] = useState("");

  const selectSeatLayout = (seatLayout) => {
    setSeatLayoutType(seatLayout);
    setBackRowSeats("");
    setSleeperRows("");
    setSeaterRows("");
  };

  const selectSeaterRows = (seats) => {
    setSeaterRows(seats);
    if (!seats) {
      setSleeperRows("");
      return;
    }

    if (
      seatLayoutType === "TWO_BY_ONE_SLEEPER" ||
      seatLayoutType === "ONE_BY_ONE_SLEEPER" ||
      deckType === "UPPER_DECK"
    ) {
      setSleeperRows(Math.floor(seats / 2));
    }
  };

  const selectSleeperRows = (seats) => {
    if (
      seatLayoutType === "TWO_BY_ONE_SLEEPER" ||
      seatLayoutType === "ONE_BY_ONE_SLEEPER" ||
      deckType === "UPPER_DECK"
    ) {
      setSleeperRows(seats);
      if (!seats) {
        setSeaterRows("");
        return;
      }
      setSeaterRows(Math.floor(seats * 2));
    }
  };

  if (gettingSeatLayoutTypes || gettingDeckTypes) return <Spinner />;

  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Layout
        </h1>
      </div>
      <div className="flex flex-col gap-12 px-8 py-20">
        <div className="flex items-center justify-center gap-20">
          <select
            className={`${deckType ? "text-text-primary" : "text-text-secondary"} px-4 py-3 border border-border rounded-lg outline-none w-full`}
            value={deckType}
            onChange={(e) => setDeckType(e.target.value)}
          >
            <option className="bg-surface-dark">Select Deck Type</option>
            {deckTypes.map((deckType) => (
              <option
                className={`bg-surface text-text-primary`}
                key={deckType.code}
                value={deckType.code}
              >
                {deckType.label}
              </option>
            ))}
          </select>

          <select
            className={`${seatLayoutType ? "text-text-primary" : "text-text-secondary"}  px-4 py-3 border border-border rounded-lg outline-none w-full`}
            value={seatLayoutType}
            onChange={(e) => selectSeatLayout(e.target.value)}
          >
            <option className="bg-surface-dark">Select Seat Layout</option>
            {seatLayoutTypes.map((seatLayout) => (
              <option
                className="bg-surface text-text-primary"
                key={seatLayout.code}
                value={seatLayout.code}
              >
                {seatLayout.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Back Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={6}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="No. of Back Row Seats"
            value={backRowSeats}
            onChange={(e) => setBackRowSeats(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Seater Row Seats
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Seater Rows"
            value={seaterRows}
            onChange={(e) => selectSeaterRows(e.target.value)}
          />
        </div>

        {(seatLayoutType === "TWO_BY_ONE_SLEEPER" ||
          seatLayoutType === "ONE_BY_ONE_SLEEPER" ||
          deckType === "UPPER_DECK") && (
          <div className="flex flex-col gap-2">
            <label className="text-text-secondary text-xl ml-1">
              Sleeper Row Seats
            </label>
            <input
              type="number"
              min={1}
              max={25}
              className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
              placeholder="Sleeper Rows"
              value={sleeperRows}
              onChange={(e) => selectSleeperRows(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BusLayoutForm;
