import React from "react";
import { Base, Title } from "./style";
import Card from "../../../components/Card/index";
import Slider from "../../../components/Slider/index";
import useOnTheAir from "./../../../hooks/tv/useOnTheAir";

const OnTheAirSection: React.FC = () => {
  const { data, isLoading } = useOnTheAir();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>실시간</Title>
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

export default OnTheAirSection;
