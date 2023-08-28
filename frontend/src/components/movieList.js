import { useEffect, useState } from "react";
import MovieItem from "./movieItem";
import PageNavigator from "./pageNavigator";

export default function MovieList({ genre }) {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

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
        <PageNavigator
          direction={"prev"}
          genre={genre}
          setMovies={setMovies}
          page={page}
          setPage={setPage}
        />
        {movies?.map((movie, index) => (
          <MovieItem movie={movie} key={index} />
        ))}
        <PageNavigator
          direction={"next"}
          genre={genre}
          setMovies={setMovies}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}
