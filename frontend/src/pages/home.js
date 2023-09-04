import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecentMovieList from "../components/recentMovieList";
import { HomeContext } from "../contexts/homeContext";
import GenreMovieList from "../components/genreMovieList";
import PopularMovieList from "../components/popularMovieList";
import { AppContext } from "../contexts/appContext";

export default function HomePage() {
  const homeContext = useContext(HomeContext);
  //const appContext = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!homeContext.recentlyAddedMovies) {
      fetch("http://localhost:5000/movies/find/recent", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          movies.json().then(({ movies }) => {
            homeContext.setRecentlyAddedMovies(movies);
            homeContext.setShowingMovie(movies[0]);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!homeContext.popularMovies) {
      fetch("http://localhost:5000/movies/find/populars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          movies.json().then(({ movies }) => {
            homeContext.setPopularMovies(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate, homeContext]);

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
