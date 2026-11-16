import React, { useState } from "react";
import { useSeatLayoutTypes } from "./useSeatLayoutType";
import { useDeckTypes } from "./useDeckTypes";
import Spinner from "../../components/ui/Spinner";
import BusLayout from "./BusLayout";
import DeckSelection from "../bus-booking/DeckSelection";
import BusLayoutSection from "../bus-booking/BusLayoutSection";

const BusLayoutForm = ({ register, setValue, errors }) => {
  const { gettingSeatLayoutTypes, seatLayoutTypes } = useSeatLayoutTypes();
  const { gettingDeckTypes, deckTypes } = useDeckTypes();

  const [seatLayoutType, setSeatLayoutType] = useState("");
  const [deckType, setDeckType] = useState("");
  const [seaterRows, setSeaterRows] = useState("");
  const [sleeperRows, setSleeperRows] = useState("");
  const [backRowSeats, setBackRowSeats] = useState("");

  const [currentDeckType, setCurrentDeckType] = useState("LOWER_DECK");
  const isSleeper =
    deckType === "UPPER_DECK" ||
    seatLayoutType === "ONE_BY_ONE_SLEEPER" ||
    seatLayoutType === "TWO_BY_ONE_SLEEPER";

  const layoutData = {
    seatLayoutType,
    deckType,
    isSleeper,
    seaterRows,
    sleeperRows,
    backRowSeats,
    currentDeckType,
    isUpperDeck: deckType === "UPPER_DECK",
    bookedSeats: null,
  };

  const handleCurrentDeckType = (currentDeck) => {
    if (currentDeck === 1 && !layoutData.isUpperDeck) return;
    if (currentDeck === currentDeckType) return;

    if (currentDeck === "UPPER_DECK" && deckType === "LOWER_DECK") {
      setCurrentDeckType("LOWER_DECK");
    }

    setCurrentDeckType(currentDeck);
  };

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
      setValue("sleeperRow", "");
      return;
    }

    if (isSleeper) {
      setSleeperRows(Math.floor(seats / 2));
      setValue("sleeperRow", Math.floor(seats / 2));
    }
  };

  const selectSleeperRows = (seats) => {
    if (isSleeper) {
      setSleeperRows(seats);
      if (!seats) {
        setSeaterRows("");
        setValue("seaterRow", "");
        return;
      }
      setSeaterRows(Math.floor(seats * 2));
      setValue("seaterRow", Math.floor(seats * 2));
    }
  };

  const showBusLayout =
    (seatLayoutType && deckType && seaterRows) ||
    (isSleeper && sleeperRows && seatLayoutType && deckType && seaterRows);

  console.log("----------- " + showBusLayout);

  if (gettingSeatLayoutTypes || gettingDeckTypes) return <Spinner />;

  return (
    <div className="w-full bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Layout
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-12 px-8 py-20">
          <div className="flex items-center justify-center gap-20">
            <div className="w-full">
              <div className="flex justify-between mb-2.5">
                <label className="text-text-secondary text-xl ml-1">
                  Deck Type
                </label>
                <p className="text-error text-xl">
                  {errors?.deckType?.message
                    ? `* ${errors.deckType.message}`
                    : ""}
                </p>
              </div>
              <select
                className={`${deckType ? "text-text-primary" : "text-text-secondary"} px-4 py-3 border border-border rounded-lg outline-none w-full`}
                value={deckType}
                {...register("deckType", {
                  required: "This field is required",
                  onChange: (e) => setDeckType(e.target.value),
                })}
              >
                <option className="bg-surface-dark" value="">
                  Select Deck Type
                </option>
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
            </div>

            <div className="w-full">
              <div className="flex justify-between mb-2.5">
                <label className="text-text-secondary text-xl ml-1">
                  Seat Layout
                </label>

                <p className="text-error text-xl">
                  {errors?.seatLayoutType?.message
                    ? `* ${errors.seatLayoutType.message}`
                    : ""}
                </p>
              </div>
              <select
                className={`${seatLayoutType ? "text-text-primary" : "text-text-secondary"}  px-4 py-3 border border-border rounded-lg outline-none w-full`}
                value={seatLayoutType}
                {...register("seatLayoutType", {
                  required: "This field is required",
                  onChange: (e) => selectSeatLayout(e.target.value),
                })}
              >
                <option className="bg-surface-dark" value="">
                  Select Seat Layout
                </option>
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
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-text-secondary text-xl ml-1">
                Back Row Seats
              </label>
              <p className="text-error text-xl">
                {errors?.backRowSeats?.message
                  ? `* ${errors.backRowSeats.message}`
                  : ""}
              </p>
            </div>
            <input
              type="number"
              min={1}
              max={6}
              className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
              placeholder="No. of Back Row Seats"
              value={backRowSeats}
              {...register("backRowSeats", {
                required: "This field is required",
                onChange: (e) => setBackRowSeats(e.target.value),
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-text-secondary text-xl ml-1">
                Seater Row Seats
              </label>
              <p className="text-error text-xl">
                {errors?.seaterRow?.message
                  ? `* ${errors.seaterRow.message}`
                  : ""}
              </p>
            </div>
            <input
              type="number"
              min={1}
              max={25}
              className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
              placeholder="Seater Rows"
              value={seaterRows}
              {...register("seaterRow", {
                required: "This field is required",
                onChange: (e) => selectSeaterRows(e.target.value),
              })}
            />
          </div>

          {(seatLayoutType === "TWO_BY_ONE_SLEEPER" ||
            seatLayoutType === "ONE_BY_ONE_SLEEPER" ||
            deckType === "UPPER_DECK") && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-text-secondary text-xl ml-1">
                  Sleeper Row Seats
                </label>
                <p className="text-error text-xl">
                  {errors?.sleeperRow?.message
                    ? `* ${errors.sleeperRow.message}`
                    : ""}
                </p>
              </div>
              <input
                type="number"
                min={1}
                max={25}
                className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${seaterRows ? "text-text-primary" : "text-text-secondary"}`}
                placeholder="Sleeper Rows"
                value={sleeperRows}
                {...register("sleeperRow", {
                  required: "This field is required",
                  onChange: (e) => selectSleeperRows(e.target.value),
                })}
              />
            </div>
          )}
        </div>
        {showBusLayout ? (
          <div className="w-full">
            <BusLayoutSection layoutData={layoutData} />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl text-text-secondary/80">
              Fill details to view layout
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusLayoutForm;
