import { useEffect, useState } from "react";
import MovieItem from "./movieItem";
import PageNavigator from "./pageNavigator";

export default function MovieList({ genre }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (!movies) {
      fetch(
        "http://localhost:5000/movies/find/genres?genre=" + genre + "&page=1",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((movies) => {
        movies.json().then(({ movies }) => {
          setMovies(movies);
        });
      });
    }
  });

  return (
    <>
      <h3>{genre}</h3>
      <div className="item-list">
        <PageNavigator direction={"prev"} setMovies={setMovies} />
        {movies?.map((movie, index) => (
          <MovieItem movie={movie} key={index} />
        ))}
        <PageNavigator direction={"next"} setMovies={setMovies} />
      </div>
    </>
  );
}
