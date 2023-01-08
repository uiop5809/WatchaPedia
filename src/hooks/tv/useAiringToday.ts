import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { airingTodayApi } from "../../apis/tvApi";
import { ListResponse, TVDetail } from "../../types";

const useAiringToday = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airing",
    airingTodayApi
  );
};

export default useAiringToday;
