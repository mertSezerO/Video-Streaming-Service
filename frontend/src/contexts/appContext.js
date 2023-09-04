import { createContext, useState } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [watchList, setWatchList] = useState([]);

  const state = { watchList, setWatchList };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export { AppContext };
