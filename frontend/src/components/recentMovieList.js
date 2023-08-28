import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";
import RecentMovieItem from "./recentMovieItem";
import RecentMoviePages from "./recentMoviePages";

export default function RecentMovieList() {
  const context = useContext(HomeContext);

  function PageNavigator({ direction }) {
    function showDirectionMovie() {
      if (direction === "prev") {
        const index = context.popularMovies.indexOf(context.showingMovie);
        index === 0
          ? context.setShowingMovie(context.popularMovies[9])
          : context.setShowingMovie(context.popularMovies[index - 1]);
      } else {
        const index = context.popularMovies.indexOf(context.showingMovie);
        index === 9
          ? context.setShowingMovie(context.popularMovies[0])
          : context.setShowingMovie(context.popularMovies[index + 1]);
      }
    }
    return (
      <button onClick={showDirectionMovie}>
        {direction === "prev" ? "<-" : "->"}
      </button>
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
