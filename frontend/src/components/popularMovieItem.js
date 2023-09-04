import { useNavigate } from "react-router-dom";

export default function PopularMovieItem({ movie, index }) {
  const navigate = useNavigate();

  function showMoviePage() {
    navigate("/movies/" + movie._id);
  }

  return (
    <div className="foreground-item">
      <section>
        <h1>{index}</h1>
      </section>
      <div className="foreground-item-content" onClick={showMoviePage}>
        <img src={movie.poster} alt="" />
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
}
