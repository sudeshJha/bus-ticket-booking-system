import React, { useState } from "react";
import Button from "../../components/util/Button";
import toast from "react-hot-toast";
import HaltCityRow from "./HaltCityRow";

const AddCityForm = ({ haltCities, addedHaltCities, addHaltCity }) => {
  console.log(addedHaltCities);
  const remainingHaltCities = haltCities.filter((city) => {
    console.log(
      city,
      !addedHaltCities.find((addedCity) => addedCity === city.routeCityId),
    );

    return !addedHaltCities.find(
      (addedCity) => addedCity.routeCity.routeCityId === city.routeCityId,
    );
  });

  console.log(remainingHaltCities);

  const [haltCityId, setHaltCityId] = useState("");
  const [haltTime, setHaltTime] = useState();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!haltCityId && !haltTime) {
      toast.error("Please select Halt city and Halt time");
    }

    addHaltCity(Number(haltCityId), Number(haltTime));
    setHaltCityId("");
    setHaltTime("");
  };

  return (
    <div className="border border-border rounded-xl w-full bg-surface px-8 py-8">
      <h1 className="text-text-secondary font-bold text-2xl mb-4 ml-2">
        Add Halt Cities
      </h1>
      <form className="flex gap-12 w-full">
        <select
          value={haltCityId}
          onChange={(e) => setHaltCityId(e.target.value)}
          className="text-2xl text-semibold border border-brder rounded-xl p-4 outline-none flex-1 bg-primary-anti/70"
        >
          <option disabled className="bg-surface text-text-primary" value="">
            Select Halt City
          </option>
          {remainingHaltCities.map((city, i) => (
            <option
              key={i}
              value={city.routeCityId}
              className="bg-surface-dark text-text-primary"
            >
              {city.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          className="text-2xl text-semibold border border-brder rounded-xl p-4 outline-none bg-primary-anti/70 tracking-wide"
          placeholder="Halt time in minutes"
          value={haltTime}
          onChange={(e) => setHaltTime(e.target.value)}
        />

        <Button
          type="secondary"
          size="small"
          onClick={handleAdd}
          disabled={haltCityId && haltTime}
        >
          + Add City
        </Button>
      </form>
      {addedHaltCities.length !== 0 && (
        <div className="mt-8 p-4 bg-surface-dark rounded-2xl flex flex-col gap-4">
          {addedHaltCities.map((city, i) => (
            <HaltCityRow key={i} haltCity={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddCityForm;
