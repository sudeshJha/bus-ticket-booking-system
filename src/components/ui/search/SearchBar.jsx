import React, { useState } from "react";
import Button from "../../util/Button";
import { HiOutlineSearch, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useDarkMode } from "../../../context/ThemeContext";
import { HiMapPin, HiOutlineMapPin } from "react-icons/hi2";
import Icon from "../../util/Icon";
import { LuMapPin } from "react-icons/lu";
import SearchInput from "./SearchInput";
import { MdOutlineCalendarMonth } from "react-icons/md";

{
  /*
  
  */
}

const SearchBar = () => {
  const { isDarkMode } = useDarkMode();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <form className="flex items-center justify-center bg-background py-5 rounded-4xl shadow-2xl/10 border border-border gap-18">
      <div className="border-r border-border">
        <SearchInput
          heading="from"
          placeholder="Leaving from"
          desc="Enter source city"
          type="search"
          value={source}
          setValue={setSource}
        >
          <Icon icon={<LuMapPin />} color="text-primary" size="medium" />
        </SearchInput>
      </div>

      <Button custom="bg-text-primary text-background rounded-full p-4 dark -mx-10">
        <HiOutlineSwitchHorizontal />
      </Button>

      <div className="border-x border-border">
        <SearchInput
          heading="To"
          placeholder="Going to"
          desc="Enter destination city"
          type="search"
          value={destination}
          setValue={setDestination}
        >
          <Icon icon={<LuMapPin />} color="text-primary" size="medium" />
        </SearchInput>
      </div>

      <SearchInput
        heading="When"
        placeholder={new Date().toLocaleDateString("en-GB")}
        desc="Date of you journey"
        type="date"
        value={date}
        setValue={setDate}
      >
        <Icon
          icon={<MdOutlineCalendarMonth />}
          color="text-primary"
          size="medium"
        />
      </SearchInput>

      <Button size="medium" type="primary">
        <span className="flex items-center gap-2 px-3 py-1">
          <HiOutlineSearch />
          Search Buses
        </span>
      </Button>
    </form>
  );
};

export default SearchBar;
