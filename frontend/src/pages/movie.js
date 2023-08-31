import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
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
  });

  return <div>{movie?.original_title}</div>;
}
