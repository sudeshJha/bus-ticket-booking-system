import React, { useState } from "react";
import { FiArrowLeft, FiFileText, FiGitBranch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/util/Button";
import Icon from "../../components/util/Icon";
import RouteDetailsTable from "./RouteDetailsTable";
import BackButton from "../../components/util/BackButton";
import RouteDetailsSummary from "./RouteDetailsSummary";
import AddCityForm from "./AddCityForm";
import SubmitButton from "../../components/util/SubmitButton";

const RouteDetails = ({ route, backToResult }) => {
  const { routeCities, title } = route;

  const [haltCities, setHaltCities] = useState([]);

  const addHaltCity = (cityId, haltTime) => {
    const routeCity = routeCities.find((city) => city.routeCityId === cityId);
    const haltCity = {
      routeCity,
      haltTime,
      stopSequence: haltCities.length + 1,
    };
    setHaltCities((cities) => [...cities, haltCity]);
  };

  return (
    <div className="min-h-screen w-full p-6 md:p-7">
      <div className="flex gap-20 mb-14">
        <BackButton customFunction={backToResult} />

        <h1 className="text-5xl text-primary font-bold tracking-wide text-center">
          {title}
        </h1>
      </div>

      <div className="w-full grid grid-cols-[2fr_1fr] items-start gap-12">
        <div className="flex flex-col gap-8">
          <RouteDetailsTable routeCities={routeCities} />
          <AddCityForm
            haltCities={routeCities.slice(1, -1)}
            addedHaltCities={haltCities}
            addHaltCity={addHaltCity}
          />
        </div>

        <div className="flex flex-col gap-6">
          <RouteDetailsSummary route={route} />

          <SubmitButton size="m">Add Route</SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
