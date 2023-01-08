import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../types";
import { topRatedApi } from "../../apis/movieApi";

const useTopRate = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRateTv",
    topRatedApi
  );
};

export default useTopRate;
