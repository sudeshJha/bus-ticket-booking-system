import React from "react";
import ButtonIcon from "../../components/util/ButtonIcon";
import { RiDeleteBin6Line } from "react-icons/ri";

const HaltCityRow = ({ haltCity, stop, removeHaltCity }) => {
  const { stopSequence, routeCity, haltTime } = haltCity;
  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr_0.5fr] text-text-primary w-full text-left text-2xl bg-surface-dark py-2 rounded-xl px-16">
      <div>{stop}</div>
      <div>{routeCity.name}</div>
      <div>{haltTime} mins</div>
      <div className="text-end">
        <ButtonIcon
          icon={<RiDeleteBin6Line />}
          color="text-error"
          onClick={() => removeHaltCity(routeCity.routeCityId)}
          size={10}
        ></ButtonIcon>
      </div>
    </div>
  );
};

export default HaltCityRow;
