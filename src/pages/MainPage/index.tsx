import React from "react";
import { Container, Main } from "./style";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingSection from "../../features/movie/nowPlaying";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
