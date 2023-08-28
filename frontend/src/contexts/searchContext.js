import { createContext, useState } from "react";

const searchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState();

  const state = {
    searchValue,
    setSearchValue,
    filteredMovies,
    setFilteredMovies,
  };

  return (
    <searchContext.Provider value={state}>{children}</searchContext.Provider>
  );
}

export { searchContext };
