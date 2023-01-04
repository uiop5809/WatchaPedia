import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  Base,
  ImageWrapper,
  Image,
  StyledLink,
  Info,
  Keyword,
  Title,
  Average,
} from "./style";

interface Props {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
}

const Card: React.FC<Props> = ({
  linkUrl,
  title,
  year,
  posterPath,
  voteAverage,
}) => {
  return (
    <StyledLink to={linkUrl}>
      <Base>
        <ImageWrapper>
          <Image src={posterPath} alt={`${title}의 포스터`} />
        </ImageWrapper>
        <Info>
          <Title>{title}</Title>
          <Keyword>{year}</Keyword>
          <Average>
            <span>평균</span>
            <span>
              &nbsp;
              <AiFillStar />
            </span>
            <span>{voteAverage}</span>
          </Average>
        </Info>
      </Base>
    </StyledLink>
  );
};

export default Card;
