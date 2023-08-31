import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";
import PopularMovieItem from "./popularMovieItem";

export default function PopularMovieList() {
  const context = useContext(HomeContext);

  return (
    <div className="foreground-item-container">
      <h2>MOST POPULAR MOVIES</h2>
      <div className="foreground-item-list">
        {context.popularMovies?.map((movie, index) => (
          <PopularMovieItem
            movie={movie}
            index={context.popularMovies.indexOf(movie) + 1}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
