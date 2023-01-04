import React from "react";
import { Base, Title } from "./style";
import useLatestMovie from "./../../../hooks/movie/useLatestMovie";
import Card from "./../../../components/Card/index";

const LatestMovieSection: React.FC = () => {
  const { data, isLoading } = useLatestMovie();

  // 2021-01-01 -> 2021
  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div> Loading... </div>
      ) : (
        <div>
          <Card
            linkUrl={`/movie/${data.data.id}`}
            title={data.data.title}
            posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
            voteAverage={data.data.vote_average}
            year={getYear(data.data.release_date)}
          />
        </div>
      )}
    </Base>
  );
};

export default LatestMovieSection;
