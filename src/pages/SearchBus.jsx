import React from "react";
import SearchBar from "../components/ui/search/SearchBar";
import Sidebar from "../components/ui/search/Sidebar";
import SearchInfo from "../components/ui/search/SearchInfo";
import SearchList from "../components/ui/search/SearchList";

const SearchBus = () => {
  return (
    <div className="pt-15 px-15">
      <SearchBar />

      <main className=" mt-15 grid grid-cols-[1fr_4fr]">
        <Sidebar />
        <div className="bg-surface-dark border-2 border-border rounded-2xl">
          <SearchInfo />
          <SearchList />
        </div>
      </main>
    </div>
  );
};

export default SearchBus;
