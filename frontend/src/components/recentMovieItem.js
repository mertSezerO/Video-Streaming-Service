// import { useContext } from "react";
// import { AppContext } from "../contexts/appContext";
import { useNavigate } from "react-router-dom";

export default function RecentMovieItem({ movie }) {
  // const context = useContext(AppContext);
  const navigate = useNavigate();

  function showMoviePage() {
    console.log(movie);
    navigate("/movies/" + movie._id);
  }

  return (
    <div className="poster-item" onClick={showMoviePage}>
      <h1>{movie.original_title}</h1>
    </div>
  );
}
