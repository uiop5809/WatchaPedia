import React from "react";
import ReactSlider, { Settings } from "react-slick";
import ArrowButton from "./styles";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Props {
  settings?: Settings;
  children: React.ReactNode;
}

const DEFAULT_SETTINGS: Settings = {
  dots: false, // 하단 점
  arrows: false, // 좌우 화살표
  infinite: false, // 무한 반복
  speed: 500, // 슬라이드 속도
  slidesToShow: 5, // 한 화면에 보여질 슬라이드 수
  slidesToScroll: 5, // 한 번에 넘어가는 슬라이드 수
  swipe: true, // 스와이프
  draggable: true, // 드래그
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <ReactSlider {...settings}>{children}</ReactSlider>
);

export default Slider;
