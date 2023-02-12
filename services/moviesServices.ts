import { axiosClient } from "@/services/axios";
import { makeURL } from "@/services/utils";
import { ApiRes, AsyncReturnType } from "@/types/global";

export const getRandomMovie = (name: string, page: number = 1) => {
  // TODO: get apikey from env
  return axiosClient
    .get<ApiRes<unknown>>(
      `https://www.omdbapi.com/?s=${name}&apikey=977fd4d4&page=${page}`
    )
    .then((response: unknown) => response);
};
