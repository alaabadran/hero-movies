import { axiosClient } from "@/services/axios";
import { makeURL } from "@/services/utils";
import { ApiRes, AsyncReturnType } from "@/types/global";
import { IMovieDetails, IMovieResult } from "@/types/movie";

const MOVIES_PER_PAGE = 10;
export const getRandomMovie = async (heroName: string, page: number = 1) => {
  // TODO: get apikey from env
  const movies: any = await axiosClient
    .get<ApiRes<unknown>>(
      `https://www.omdbapi.com/?s=${heroName}&apikey=977fd4d4&page=${page}`
    )
    .then((response: any) => response?.data);
  //   console.log(movies);
  const numberOfPages = Math.ceil(+movies.totalResults / MOVIES_PER_PAGE);

  let movie = movies?.Search[Math.ceil(Math.random() * MOVIES_PER_PAGE) - 1];
  //   movie.hero = name;
  return movie;
};

export const getMovieURL = async (movie: IMovieResult, heroName: string) => {
  return `${makeURL(heroName)}/${movie.imdbID}/${makeURL(movie.Title)}`;
};

export const getMovieDetails = async (hero: string, id: string) => {
  let movie: IMovieDetails = await axiosClient
    .get<any>(`https://www.omdbapi.com/?i=${id}&apikey=977fd4d4&page=`)
    .then((response) => response?.data);
  //   movie.hero = hero;
  return movie;
};
