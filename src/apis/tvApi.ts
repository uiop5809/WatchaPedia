import { axiosInstance as axios } from "./axiosInstance";

// 최신작
export const latestApi = () => axios.get("/tv/latest");

// 오늘 상영한
export const airingTodayApi = () => axios.get("/tv/airing_today");

// 상영중인
export const onTheAirApi = () => axios.get("/tv/on_the_air");

// 인기작
export const topRatedApi = () => axios.get("/tv/top_rated");

// 디테일
export const detailApi = (tvId: string) => axios.get(`/tv/${tvId}`);

// 비슷한 작품
export const similarApi = (tvId: string) => axios.get(`/tv/${tvId}/similar`);

// 검색
export const searchApi = (query: string) =>
  axios.get("/search/tv", { params: { query } });
