import React from "react";
import { Container, Main } from "./style";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingSection from "../../features/movie/nowPlaying";
import PopularSection from "../../features/movie/popular";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingSection />
          <PopularSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
