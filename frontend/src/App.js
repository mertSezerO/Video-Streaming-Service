import "./App.css";
import AppProvider from "./contexts/appContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import HomeProvider from "./contexts/homeContext";

import SearchProvider from "./contexts/searchContext";
import SearchPage from "./pages/search";

import Layout from "./components/layout";
import MoviePage from "./pages/movie";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <HomeProvider>
                  <HomePage />
                </HomeProvider>
              }
            />
            <Route
              path="search"
              element={
                <SearchProvider>
                  <SearchPage />
                </SearchProvider>
              }
            />
          </Route>
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
