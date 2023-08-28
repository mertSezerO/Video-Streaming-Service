import { useContext } from "react";
import { SearchContext } from "../contexts/searchContext";

export default function SearchBar() {
  const context = useContext(SearchContext);

  function filterMovies(e) {
    const searchTerm = e.target.value;
    context.setSearchValue(searchTerm);
    if (!context.filteredMovies) {
      fetch("http://localhost:5000/movies?search=" + searchTerm, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((movies) =>
        movies.json().then(({ movies }) => {
          context.setFilteredMovies(movies);
        })
      );
    }
  }

  return (
    <input
      type="text"
      placeholder="Search a movie, genre or a keyword"
      value={context.searchValue}
      onChange={filterMovies}
      onFocus={filterMovies}
    />
  );
}
