import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/appContext";

export default function MovieItem({ movie }) {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  function showMoviePage() {
    navigate("/movies/" + movie._id);
  }

  return (
    <div className="item" onClick={showMoviePage}>
      <img src={movie.poster} alt="" />
      <h3>{movie.original_title}</h3>
    </div>
  );
}
