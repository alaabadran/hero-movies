export type APIKEY = string;

interface IRatingsType {
  source: string;
  value: string;
}

/*[
  {
    Source: "Internet Movie Database";
    Value: "5.6/10";
  },
  {
    Source: "Rotten Tomatoes";
    Value: "62%";
  },
  {
    Source: "Metacritic";
    Value: "54/100";
  }
];*/

// Movie Details
export interface IMovieDetails {
  title: string;
  year: number;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Array<IRatingsType>;
  metascore: number;
  imdbRating: number; // 5.6
  imdbVotes: string | number; //"270,620"
  imdbID: string;
  type: string;
  DVD: string;
  BoxOffice: string;
  production: string;
  website: string;
  response: boolean;
}

// Movie in list of movies.
export interface IMovieResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  hero?: string;
}
