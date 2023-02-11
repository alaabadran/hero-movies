import { axiosClient } from "@/services/axios";
import { makeURL } from "@/services/utils";
import { ApiRes, AsyncReturnType } from "@/types/global";

export const getRandomMovie = (name: string, page: number = 1) => {
  return axiosClient
    .post<ApiRes<unknown>>(`url`, {
      s: name,
      page,
    })
    .then((response: unknown) => response);
};
