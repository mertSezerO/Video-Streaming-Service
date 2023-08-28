import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export default function RecentMovieItem({ movie }) {
  const context = useContext(AppContext);

  function showMoviePage() {}

  return (
    <div className="poster-item" onClick={showMoviePage}>
      <h1>{movie.original_title}</h1>
    </div>
  );
}
