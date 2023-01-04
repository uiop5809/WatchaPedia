import React from "react";
import { Container, Main } from "./style";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingSection from "../../features/movie/nowPlaying";
import PopularSection from "../../features/movie/popular";
import TopRateSection from "../../features/movie/topRate";
import UpcomingSection from "./../../features/movie/upcoming/index";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingSection />
          <PopularSection />
          <TopRateSection />
          <UpcomingSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
