import React from "react";
import { HiOutlineTruck } from "react-icons/hi";
import Icon from "../util/Icon";

const SectionHeader = ({ children, heading }) => {
  return (
    <h2 className=" flex items-center gap-8 ">
      {children}
      <span className="text-2xl text-primary font-semibold tracking-wide">
        {heading}
      </span>
    </h2>
  );
};

export default SectionHeader;
