export type APIKEY = string;

interface RatingsType {
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

export interface Movie {
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
  ratings: Array<RatingsType>;
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

export interface MovieObj {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  hero?: string;
}
