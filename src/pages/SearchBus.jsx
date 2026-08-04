import React from "react";
import SearchBar from "../features/search-bar/SearchBar";
import Sidebar from "../features/search-bus/FilterSidebar";
import SearchInfo from "../features/search-bus/SearchInfo";
import SearchList from "../features/search-bus/SearchList";

const SearchBus = () => {
  return (
    <div className="pt-15 px-15">
      <SearchBar />

      <main className="mt-15 grid grid-cols-[1fr_4fr] gap-10">
        <Sidebar />
        <div className="bg-surface-dark border-2 border-border mb-10 rounded-2xl">
          <SearchInfo />
          <SearchList />
        </div>
      </main>
    </div>
  );
};

export default SearchBus;
