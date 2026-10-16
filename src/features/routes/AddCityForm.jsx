import React, { useState } from "react";
import Button from "../../components/util/Button";

const AddCityForm = ({ haltCities, addHaltCity }) => {
  const [haltCityId, setHaltCityId] = useState("");
  const [haltTime, setHaltTime] = useState();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!haltCityId && !haltTime) return;

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
          {haltCities.map((city, i) => (
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
    </div>
  );
};

export default AddCityForm;
