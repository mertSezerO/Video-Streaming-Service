import { createContext, useState } from "react";

const appContext = createContext();

export default function AppProvider({ children }) {
  const state = {};

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
}

export { appContext };
