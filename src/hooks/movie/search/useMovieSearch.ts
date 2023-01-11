import { useQuery } from "react-query";
import { searchApi } from "../../../apis/movieApi";
import { ListResponse, Movie } from "../../../types";
import { AxiosError, AxiosResponse } from "axios";

// 검색 결과를 가져오는 useQuery
const useMovieSearch = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ["searchMovie", query], // query가 바뀔 때마다 새로운 쿼리가 생성
    () => searchApi(query),
    { enabled: Boolean(query) } // query가 없으면 쿼리를 실행하지 않음
  );
};

export default useMovieSearch;
