import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TvDetail from "./pages/TvPage/TvDetail/index";
import TvPage from "./pages/TvPage/TvPage";
import MovieDetail from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tv" element={<TvPage />}>
          <Route path=":id" element={<TvDetail />} />
        </Route>
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
