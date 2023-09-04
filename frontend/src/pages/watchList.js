import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import MovieItem from "../components/movieItem";

export default function WatchList() {
  const appContext = useContext(AppContext);
  return (
    <div className="search-item-container">
      {appContext.watchList &&
        appContext.watchList.map((movie) => <MovieItem movie={movie} />)}
    </div>
  );
}
