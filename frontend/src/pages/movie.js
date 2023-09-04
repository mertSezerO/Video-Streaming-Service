import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/appContext";
import WatchListButton from "../components/watchListButton";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  //const appContext = useContext(AppContext);
  //navigate will be added for watch page

  useEffect(() => {
    fetch("http://localhost:5000/movies/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((receivedMovie) => {
        receivedMovie.json().then(({ movie }) => {
          setMovie(movie);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="display-container">
      {movie && (
        <>
          <div className="display-content">
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            {/* <p>
              Leading Actors:
              {movie.credits.cast.map((actor) => actor.name).join(", ")}
            </p> */}
          </div>
          <div className="display-image">
            <img src={movie.poster} alt={movie.original_title} />
          </div>
          <div className="display-details">
            <WatchListButton movie={movie} />
          </div>
        </>
      )}
    </div>
  );
}
