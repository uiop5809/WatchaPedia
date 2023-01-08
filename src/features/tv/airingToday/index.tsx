import React from "react";
import { Base, Title } from "./style";
import Card from "../../../components/Card/index";
import useAiringToday from "./../../../hooks/tv/useAiringToday";
import Slider from "../../../components/Slider/index";

const AiringTodaySection: React.FC = () => {
  const { data, isLoading } = useAiringToday();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>AiringToday</Title>
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

export default AiringTodaySection;
