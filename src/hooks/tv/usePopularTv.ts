import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../types";
import { popularApi } from "../../apis/movieApi";

const usePopularTv = () => {
  type NewType = AxiosResponse<ListResponse<TVDetail>>;

  return useQuery<NewType, AxiosError>("popularTv", popularApi);
};

export default usePopularTv;
