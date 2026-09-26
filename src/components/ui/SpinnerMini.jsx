import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const SpinnerMini = () => {
  return (
    <BiLoaderAlt className="w-[2.4rem] h-[2.4rem] animate-spin text-surface-dark mx-auto" />
  );
};

export default SpinnerMini;
