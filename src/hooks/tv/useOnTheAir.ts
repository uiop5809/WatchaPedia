import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "../../apis/tvApi";
import { ListResponse, TVDetail } from "../../types";

const useOnTheAir = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAir",
    onTheAirApi
  );
};

export default useOnTheAir;
