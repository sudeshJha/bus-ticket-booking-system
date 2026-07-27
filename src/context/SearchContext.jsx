import { format } from "date-fns";
import React, { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();

const initialState = {
  source: "",
  destination: "",
  date: format(new Date(), "yyyyMMdd"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSearch":
      return { ...state, ...action.payload };
    default:
      throw new Error("Unknown Search Context Action");
  }
};

const SearchProvider = ({ children }) => {
  const [searchData, dispatch] = useReducer(reducer, initialState);

  const setSearch = (data) => {
    console.log(data);
    dispatch({ type: "setSearch", payload: data });
  };

  return (
    <SearchContext.Provider value={{ searchData, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchQuery = () => {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error("Search Context was used outside of SearchProvider");

  return context;
};

export { SearchProvider, useSearchQuery };
