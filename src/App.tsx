import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import TvDetail from "./pages/Tv/TvDetail";
import TvPage from "./pages/Tv/TvPage";
import MovieDetail from "./pages/Movie/MovieDetail";

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
