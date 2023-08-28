import { useContext } from "react";
import SearchBar from "../components/searchBar";
import { SearchContext } from "../contexts/searchContext";
import MovieItem from "../components/movieItem";

export default function SearchPage() {
  const context = useContext(SearchContext);

  return (
    <>
      <div className="filter-container">
        <SearchBar />
      </div>
      <div className="search-item-container">
        {context.filteredMovies &&
          context.filteredMovies.map((movie, index) => (
            <MovieItem movie={movie} key={index} />
          ))}
      </div>
    </>
  );
}
