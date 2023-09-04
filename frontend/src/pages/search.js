import { useContext } from "react";
import SearchBar from "../components/searchBar";
import { SearchContext } from "../contexts/searchContext";
import MovieItem from "../components/movieItem";
import { AppContext } from "../contexts/appContext";

export default function SearchPage() {
  const searchContext = useContext(SearchContext);
  //const appContext = useContext(AppContext);

  return (
    <>
      <div className="filter-container">
        <SearchBar />
      </div>
      <div className="search-item-container">
        {searchContext.filteredMovies &&
          searchContext.filteredMovies.map((movie, index) => (
            <MovieItem movie={movie} key={index} />
          ))}
      </div>
    </>
  );
}
