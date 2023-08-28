import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";

export default function SearchBar() {
  const context = useContext(searchContext);

  function filterMovies(e) {
    const searchTerm = e.target.value;
    context.setSearchValue(searchTerm);
    fetch("http://localhost:3000/movies?regex=" + searchTerm, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((movies) =>
      movies.json().then(({ movies }) => {
        context.setFilteredMovies(movies);
      })
    );
  }

  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search a movie, genre or a keyword"
        value={context.searchValue}
        onChange={filterMovies}
      />
    </div>
  );
}
