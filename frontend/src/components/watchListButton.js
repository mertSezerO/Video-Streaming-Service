import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export default function WatchListButton({ movie }) {
  const appContext = useContext(AppContext);

  function addToWatchList() {
    if (
      appContext.watchList.filter((aMovie) => aMovie.id === movie.id).length ===
      0
    ) {
      const newList = [...appContext.watchList, movie];
      appContext.setWatchList(newList);
    }
  }

  return (
    <>
      <button onClick={addToWatchList}>Add to WatchList</button>
    </>
  );
}
