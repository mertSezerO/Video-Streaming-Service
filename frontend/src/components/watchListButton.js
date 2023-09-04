import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export default function WatchListButton({ movie }) {
  const appContext = useContext(AppContext);

  function addToWatchList() {
    if (!appContext.watchList.includes(movie)) {
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
