import React from "react";
import { Base, Title } from "./style";
import Card from "../../../components/Card/index";
import Slider from "../../../components/Slider/index";
import usePopularTv from "../../../hooks/tv/usePopularTv";

const PopularSection: React.FC = () => {
  const { data, isLoading } = usePopularTv();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>인기 프로그램</Title>
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

export default PopularSection;
