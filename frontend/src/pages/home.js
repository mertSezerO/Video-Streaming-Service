import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecentMovieList from "../components/recentMovieList";
import { HomeContext } from "../contexts/homeContext";

export default function HomePage() {
  const context = useContext(HomeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.popularMovies) {
      fetch("http://localhost:5000/movies/find/populars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          movies.json().then(({ movies }) => {
            context.setPopularMovies(movies);
            context.setShowingMovie(movies[0]);
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
      <div className="item-list-container"></div>
    </>
  );
}
