import React from "react";
import { useSeatLayoutTypes } from "./useSeatLayoutType";
import { useDeckTypes } from "./useDeckTypes";

const AddBusLayout = () => {
  const { gettingSeatLayoutTypes, seatLayoutTypes } = useSeatLayoutTypes();
  const { gettingDeckTypes, deckTypes } = useDeckTypes();

  return <div>AddBusLayout</div>;
};

export default AddBusLayout;
