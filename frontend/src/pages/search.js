import { useContext } from "react";

import SearchBar from "../components/searchBar";
import { searchContext } from "../contexts/searchContext";
import MovieItem from "../components/movieItem";

export default function SearchPage() {
  const context = useContext(searchContext);

  return (
    <>
      <div id="filter-container">
        <SearchBar />
      </div>
      <div id="search-item-container">
        {context.filteredMovies &&
          context.filteredMovies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
