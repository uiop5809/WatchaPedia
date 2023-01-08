import React from "react";
import { Base, Title } from "./style";
import Card from "../../../components/Card/index";
import Slider from "../../../components/Slider/index";
import useTopRate from "./../../../hooks/tv/useTopRate";

const TopRateSection: React.FC = () => {
  const { data, isLoading } = useTopRate();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>인기 상영작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data.data.results.map((tv) => (
            <Card
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}${tv.poster_path}`}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default TopRateSection;
