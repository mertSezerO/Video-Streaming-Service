import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";

export default function RecentMoviePages() {
  const context = useContext(HomeContext);

  function Page({ index }) {
    function showMovie() {
      context.setShowingMovie(context.recentlyAddedMovies[index]);
    }

    return (
      <div className="poster-page-item">
        <button
          className={
            context.showingMovie?.original_title ===
            context.recentlyAddedMovies[index]?.original_title
              ? "highlight"
              : "poster-page"
          }
          onClick={showMovie}
        ></button>
      </div>
    );
  }

  return (
    <div className="poster-page-list">
      <Page index={0} />
      <Page index={1} />
      <Page index={2} />
      <Page index={3} />
      <Page index={4} />
      <Page index={5} />
      <Page index={6} />
      <Page index={7} />
      <Page index={8} />
      <Page index={9} />
    </div>
  );
}
