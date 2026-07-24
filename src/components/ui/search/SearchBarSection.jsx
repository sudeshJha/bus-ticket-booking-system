import React from "react";
import SearchBar from "./SearchBar";
import { HiOutlineTruck } from "react-icons/hi";
import Icon from "../../util/Icon";
import SectionHeader from "../SectionHeader";

const SearchBarSection = () => {
  return (
    <div className="bg-surface-dark px-20 py-30 flex flex-col  justify-center gap-15">
      <SectionHeader heading="SEARCH YOU TRIP">
        <Icon
          icon={<HiOutlineTruck />}
          bgColor="bg-primary-anti"
          color="text-primary"
          size="small"
        />
      </SectionHeader>
      <SearchBar />
    </div>
  );
};

export default SearchBarSection;
