import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const SearchInfo = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 border-b border-b-border">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-text-primary font-semibold tracking-wide text-[1.8rem]">
          10 Buses found
        </h3>
        <p className="flex items-center justify-center gap-4 text-text-secondary text-2xl ">
          Jabalpur <MdOutlineArrowRightAlt /> Bhopal
        </p>
      </div>

      <div>
        <h3>Sort By</h3>
      </div>
    </div>
  );
};

export default SearchInfo;
