import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecentMovieList from "../components/recentMovieList";
import { HomeContext } from "../contexts/homeContext";
import GenreMovieList from "../components/genreMovieList";
import PopularMovieList from "../components/popularMovieList";

export default function HomePage() {
  const context = useContext(HomeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.recentlyAddedMovies) {
      fetch("http://localhost:5000/movies/find/recent", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          movies.json().then(({ movies }) => {
            context.setRecentlyAddedMovies(movies);
            context.setShowingMovie(movies[0]);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!context.popularMovies) {
      fetch("http://localhost:5000/movies/find/populars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          movies.json().then(({ movies }) => {
            context.setPopularMovies(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate, context]);

  return (
    <>
      <RecentMovieList />
      <div className="item-list-container">
        <GenreMovieList genre={"Science fiction"} />
        <GenreMovieList genre={"Fantasy"} />
        <GenreMovieList genre={"Action"} />
      </div>
      <PopularMovieList />
    </>
  );
}
