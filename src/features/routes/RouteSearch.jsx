import React, { useState } from "react";
import { useCities } from "./useCities";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/util/Button";
import toast from "react-hot-toast";

const RouteSearch = ({
  sourceCity,
  setSourceCity,
  destinationCity,
  setDestinationCity,
  handleSearch,
}) => {
  const { cities, gettingCities } = useCities();

  const selectSourceCity = (e) => {
    if (e.target.value == destinationCity) {
      toast.error("Source and Destination city cannot be same.");
      return;
    }
    setSourceCity(e.target.value);
  };

  const selectDestinationCity = (e) => {
    if (e.target.value == sourceCity) {
      toast.error("Source and Destination city cannot be same.");
      return;
    }
    setDestinationCity(e.target.value);
  };

  if (gettingCities) return <Spinner />;

  return (
    <form
      className="grid grid-cols-[2.5fr_2.5fr_1fr] items-end gap-6"
      onSubmit={handleSearch}
    >
      <div className="flex-col">
        <label className="block text-lg font-medium text-text-secondary mb-2 ml-2">
          Source City
        </label>
        <select
          className="w-full text-2xl text-semibold border border-brder rounded-xl p-4 outline-none focus:ring-2 focus:ring-secondary bg-primary-anti"
          onChange={selectSourceCity}
          value={sourceCity || "default"}
        >
          <option
            disabled
            className="bg-surface text-text-primary"
            value="default"
          >
            Select source city
          </option>
          {cities.map((city, i) => {
            return (
              <option
                key={i}
                className="text-xl bg-surface-dark text-text-primary"
              >
                {city.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex-col">
        <label className="block text-lg font-medium text-text-secondary mb-2 ml-2">
          Destination City
        </label>
        <select
          className="w-full text-2xl text-semibold border border-brder rounded-xl p-4 outline-none focus:ring-2 focus:ring-secondary bg-primary-anti"
          value={destinationCity || "default"}
          onChange={selectDestinationCity}
        >
          <option
            disabled
            className="bg-surface text-text-primary"
            value="default"
          >
            Select destination city
          </option>
          {cities.map((city, i) => {
            return (
              <option
                key={i}
                className="text-xl bg-surface-dark text-text-primary"
              >
                {city.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="">
        <Button size="medium" type="primary">
          Search Routes
        </Button>
      </div>
    </form>
  );
};

export default RouteSearch;
