import { createContext, useState } from "react";

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState();
  const [showingMovie, setShowingMovie] = useState();

  const state = {
    popularMovies,
    setPopularMovies,
    showingMovie,
    setShowingMovie,
  };

  return <HomeContext.Provider value={state}>{children}</HomeContext.Provider>;
}

export { HomeContext };
