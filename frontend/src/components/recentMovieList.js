import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";
import RecentMovieItem from "./recentMovieItem";
import RecentMoviePages from "./recentMoviePages";

export default function RecentMovieList() {
  const context = useContext(HomeContext);

  function PageNavigator({ direction }) {
    function showDirectionMovie() {
      if (direction === "prev") {
        const index = context.recentlyAddedMovies.indexOf(context.showingMovie);
        index === 0
          ? context.setShowingMovie(context.recentlyAddedMovies[9])
          : context.setShowingMovie(context.recentlyAddedMovies[index - 1]);
      } else {
        const index = context.recentlyAddedMovies.indexOf(context.showingMovie);
        index === 9
          ? context.setShowingMovie(context.recentlyAddedMovies[0])
          : context.setShowingMovie(context.recentlyAddedMovies[index + 1]);
      }
    }
    return (
      <div className="direction-item">
        <button className="direction" onClick={showDirectionMovie}>
          {direction === "prev" ? "<" : ">"}
        </button>
      </div>
    );
  }

  return (
    <div className="poster-item-container">
      <PageNavigator direction={"prev"} />
      <div className="show">
        {context.showingMovie && (
          <RecentMovieItem movie={context.showingMovie} />
        )}
        <RecentMoviePages />
      </div>
      <PageNavigator direction={"next"} />
    </div>
  );
}
