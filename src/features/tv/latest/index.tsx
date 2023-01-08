import React from "react";
import useLatestTv from "../../../hooks/tv/useLatestTv";
import { Base, Title } from "./style";
import Card from "./../../../components/Card/index";

const LatestTvSection: React.FC = () => {
  const { data, isLoading } = useLatestTv();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`/tv/${data.data.id}`}
          title={data.data.name}
          posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}${data.data.poster_path}`}
          voteAverage={data.data.vote_average}
          year={getYear(data.data.first_air_date)}
        />
      )}
    </Base>
  );
};

export default LatestTvSection;
