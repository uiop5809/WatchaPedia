import axios from "axios";

// axios 인스턴스 생성
export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/3`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
});
