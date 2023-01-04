import React from "react";
import Card from "./../../../components/Card/index";
import { Base, Title } from "./style";
import Slider from "./../../../components/Slider/index";
import usePopularMovie from "./../../../hooks/movie/usePopularMovie";

const PopularSection: React.FC = () => {
  const { data, isLoading } = usePopularMovie();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>인기 상영작</Title>
      {isLoading || !data ? (
        <div> Loading... </div>
      ) : (
        <Slider>
          {data?.data?.results.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`/movie/${movie.id}`}
              title={movie.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
              voteAverage={movie.vote_average}
              year={getYear(movie.release_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default PopularSection;
