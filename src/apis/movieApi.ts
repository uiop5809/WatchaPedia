import { axiosInstance as axios } from "./axiosInstance";

// 최근 상영작
export const latestAPI = () => axios.get("/movie/latest");

// 개봉 예정작
export const upcomingApi = () => axios.get("/movie/upcoming");

// 현재 상영작
export const nowPlayingApi = () => axios.get("/movie/now_playing");

// 순위권
export const topRatedApi = () => axios.get("/movie/top_rated");

// 인기 상영작
export const popularApi = () => axios.get("/movie/popular");

// 영화 상세 정보
export const datailApi = (movieId: string) => axios.get(`/movie/${movieId}`);

// 비슷한 영화 목록
export const similarApi = (movieId: string) =>
  axios.get(`/movie/${movieId}/similar`);

// 영화 검색
export const searchApi = (query: string) =>
  axios.get("/search/movie", { params: { query } });
