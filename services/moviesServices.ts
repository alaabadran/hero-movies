import { axiosClient } from "@/services/axios";
import { makeURL } from "@/services/utils";
import { ApiRes, AsyncReturnType } from "@/types/global";
import { Movie, MovieObj } from "@/types/movie";

export const getRandomMovie = async (name: string, page: number = 1) => {
  // TODO: get apikey from env
  const movies: any = await axiosClient
    .get<ApiRes<unknown>>(
      `https://www.omdbapi.com/?s=${name}&apikey=977fd4d4&page=${page}`
    )
    .then((response: unknown) => response?.data?.Search);
  //   console.log(movies);

  let movie = movies[Math.ceil(Math.random() * 10) - 1];
  movie.hero = name;
  return movie;
};

export const getMovieURL = async (movie: MovieObj) => {
  return `${makeURL(movie.hero)}/${movie.imdbID}/${makeURL(movie.Title)}`;
};

export const getMovieDetails = async (hero: string, id: string) => {
  let movie: any = await axiosClient
    .get<ApiRes<unknown>>(
      `https://www.omdbapi.com/?i=${id}&apikey=977fd4d4&page=`
    )
    .then((response: unknown) => response?.data);
  movie.hero = hero;
  return movie;
};
