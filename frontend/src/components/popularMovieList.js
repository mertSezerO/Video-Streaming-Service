import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";
import MovieItem from "./movieItem";
import PageNavigator from "./genrePageNavigator";

export default function PopularMovieList() {
  const context = useContext(HomeContext);

  return (
    <div className="foreground-item-container">
      <h2>MOST POPULAR MOVIES</h2>
      <div className="foreground-item-list">
        {context.popularMovies?.map((movie, index) => (
          <MovieItem movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}
