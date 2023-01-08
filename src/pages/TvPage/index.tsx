import React from "react";
import Footer from "../../components/Footer";
import TopRateSection from "../../features/movie/topRate";
import AiringTodaySection from "../../features/tv/airingToday";
import LatestTvSection from "../../features/tv/latest";
import OnTheAirSection from "../../features/tv/onTheAir";
import Header from "../../components/Header/index";
import { Container, Main } from "./style";

export default function TvPage() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <LatestTvSection />
          <AiringTodaySection />
          <OnTheAirSection />
          <TopRateSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
