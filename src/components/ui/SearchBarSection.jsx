import React from "react";
import SearchBar from "../../features/search/SearchBar";
import { BiBus } from "react-icons/bi";
import Icon from "../util/Icon";
import SectionHeader from "./home/SectionHeader";

const SearchBarSection = () => {
  return (
    <div
      className="bg-surface-dark px-20 py-25 pb-30 flex flex-col  justify-center gap-15"
      id="search-bus"
    >
      <SectionHeader heading="search your trip">
        <Icon
          icon={<BiBus />}
          bgColor="bg-surface"
          color="text-primary"
          size="small"
        />
      </SectionHeader>
      <SearchBar />
    </div>
  );
};

export default SearchBarSection;
