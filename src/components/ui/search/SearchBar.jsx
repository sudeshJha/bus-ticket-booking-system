import React from "react";
import Button from "../../util/Button";
import { HiOutlineSearch, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useDarkMode } from "../../../context/ThemeContext";
import { HiMapPin } from "react-icons/hi2";

const SearchBar = () => {
  const { isDarkMode } = useDarkMode();

  const inputClass =
    "px-6 py-5 rounded-xl border-3 border-border outline-0 w-[25vw] bg-surface-dark focus:border-3 focus:border-text-primary/30 focus:outline-none text-text-primary";
  return (
    <form className="flex items-center justify-around bg-background gap-10 px-20 py-20 rounded-4xl shadow-2xl/10 border-t-2 border-border">
      <input
        className="px-6 py-5 rounded-xl border-3 border-border outline-0 w-[25vw] bg-surface-dark focus:border-3 focus:border-text-primary/40 focus:outline-none text-text-primary"
        placeholder="Enter origin"
        type="search"
      />

      <Button custom="bg-text-primary text-background rounded-full p-4 dark">
        <HiOutlineSwitchHorizontal />
      </Button>

      <input
        className={inputClass}
        placeholder="Enter destination"
        type="search"
      />

      <input
        className={`px-6 py-5 border-3 border-border rounded-xl  bg-surface-dark  focus:border-text-primary/40 focus:outline-none text-text-primary [color-scheme:${isDarkMode ? "dark" : "light"}]`}
        placeholder="Enter "
        type="date"
      />

      <Button size="medium" type="primary" style="ml-40">
        <span className="flex items-center gap-2">
          <HiOutlineSearch />
          Search
        </span>
      </Button>
    </form>
  );
};

export default SearchBar;
