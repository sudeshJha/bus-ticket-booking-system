import React from "react";
import SearchBar from "./SearchBar";

const SearchBarSection = () => {
  return (
    <div className="bg-surface-dark px-20 py-30 flex flex-col items-center justify-center gap-20 ">
      <h2 className="text-6xl text-text-primary">Search your Trip</h2>
      <SearchBar />
    </div>
  );
};

export default SearchBarSection;
