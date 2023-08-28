import { createContext, useState } from "react";

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [recentlyAddedMovies, setRecentlyAddedMovies] = useState();
  const [showingMovie, setShowingMovie] = useState();

  const state = {
    recentlyAddedMovies,
    setRecentlyAddedMovies,
    showingMovie,
    setShowingMovie,
  };

  return <HomeContext.Provider value={state}>{children}</HomeContext.Provider>;
}

export { HomeContext };
