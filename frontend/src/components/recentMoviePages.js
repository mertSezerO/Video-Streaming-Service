import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";

export default function RecentMoviePages() {
  const context = useContext(HomeContext);

  function Page({ index }) {
    function showMovie() {
      context.setShowingMovie(context.popularMovies[index]);
    }

    return (
      <div className="poster-page-item">
        <button className="poster-page" onClick={showMovie}></button>
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
