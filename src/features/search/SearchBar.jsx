import React, { useState } from "react";
import Button from "../../components/util/Button";
import { HiOutlineSearch, HiOutlineSwitchHorizontal } from "react-icons/hi";
import Icon from "../../components/util/Icon";
import { LuMapPin } from "react-icons/lu";
import SearchInput from "./SearchInput";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSearchQuery } from "../../context/SearchContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const {
    searchData: {
      source: sourceCity,
      destination: destinationCity,
      date: journeyDate,
    },
    setSearch,
  } = useSearchQuery();

  const [source, setSource] = useState(sourceCity);
  const [destination, setDestination] = useState(destinationCity);
  const [date, setDate] = useState(journeyDate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!source || !destination || !date) return;

    if (
      source === sourceCity &&
      destination === destinationCity &&
      date === journeyDate
    ) {
      return;
    }

    navigate({
      pathname: "/search_bus",
      search: `?from=${source}&to=${destination}&date=${date}`,
    });
    setSearch({ source, destination, date });
  };

  return (
    <form
      className="flex items-center justify-evenly  py-5 rounded-4xl shadow-2xl/10 border border-border gap-18"
      onSubmit={handleSubmit}
    >
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

      <Button size="small" type="primary">
        <span className="flex items-center gap-2 py-1">
          <HiOutlineSearch />
          Search Buses
        </span>
      </Button>
    </form>
  );
};

export default SearchBar;
