import { createContext, useState } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const state = {};

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export { AppContext };
