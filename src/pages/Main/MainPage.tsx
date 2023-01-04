import React from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingSection from "../../features/movie/nowPlaying";

function MainPage() {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <NowPlayingSection />
      <Footer />
    </div>
  );
}

export default MainPage;
