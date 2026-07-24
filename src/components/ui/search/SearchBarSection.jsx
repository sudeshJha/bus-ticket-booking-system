import React from "react";
import SearchBar from "./SearchBar";
import { HiOutlineTruck } from "react-icons/hi";
import Icon from "../../util/Icon";

const SearchBarSection = () => {
  return (
    <div className="bg-surface-dark px-20 py-30 flex flex-col  justify-center gap-15">
      <h2 className=" flex items-center gap-8 ">
        <Icon
          icon={<HiOutlineTruck />}
          bgColor="bg-primary-anti"
          color="text-primary"
          size="small"
        />
        <span className="text-2xl text-primary font-semibold tracking-wide">
          SEARCH YOUR TRIP
        </span>
      </h2>
      <SearchBar />
    </div>
  );
};

export default SearchBarSection;
