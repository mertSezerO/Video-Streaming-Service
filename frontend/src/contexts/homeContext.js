import { createContext, useState } from "react";

const homeContext = createContext();

export default function HomeProvider({ children }) {
  const state = {};

  return <homeContext.Provider value={state}>{children}</homeContext.Provider>;
}

export { homeContext };
