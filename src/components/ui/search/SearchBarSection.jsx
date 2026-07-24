import React from "react";
import SearchBar from "./SearchBar";
import Icon from "../../util/Icon";
import SectionHeader from "../SectionHeader";
import { BiBus } from "react-icons/bi";
import { FcUnlock } from "react-icons/fc";

const SearchBarSection = () => {
  return (
    <div className="bg-surface-dark px-20 py-30 flex flex-col  justify-center gap-15">
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
