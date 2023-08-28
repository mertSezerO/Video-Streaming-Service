import { useContext, useNavigate } from "react";
import { AppContext } from "../contexts/appContext";

export default function MovieItem({ movie }) {
  const context = useContext(AppContext);

  function showMoviePage() {}

  return (
    <div className="item" onClick={showMoviePage}>
      <img src={movie.poster} alt="" />
      <h3>{movie.original_title}</h3>
    </div>
  );
}
