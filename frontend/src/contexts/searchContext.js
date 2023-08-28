import { createContext, useState } from "react";

const SearchContext = createContext();

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
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
}

export { SearchContext };
