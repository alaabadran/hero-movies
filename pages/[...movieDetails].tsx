import Link from "next/link";
import Animator from "@/components/Animator";
import { getMovieDetails } from "@/services/moviesServices";
import { GetServerSideProps, NextPage } from "next";
import { Rating } from "@/components/Ratings";
import { makeURL } from "@/services/utils";
import { IMovieDetails } from "@/types/movie";

type PagePropsType = any;
type ratingType = { Source: string; Value: string };

const MoviePage: NextPage<PagePropsType> = (props) => {
  const movie = props.movie;
  return (
    <>
      <Animator>
        <h1 className="text-4xl my-5">Movie Details page</h1>
        <div className="flex">
          <div className="w-1/4 border border-white mr-4">
            <img src={movie.Poster} alt="" />
          </div>
          <div className="w-3/4">
            <div className="flex">
              <h2 className="text-2xl my-2 w-3/4">{movie.Title}</h2>
              <Link
                className="h-fit border border-lime-600	bg-lime-900	rounded py-2 px-4"
                href={`${makeURL(props.heroName)}`}
              >
                Pick another movie
              </Link>
            </div>
            <p>{movie.Plot}</p>
            <div className="my-2 text-xl">
              <u>
                <b>More info:</b>
              </u>
            </div>
            <div className="my-2 flex">
              <b className="mr-2 w-1/5">Released on:</b>
              <span>{movie.Released}</span>
            </div>
            <div className="my-2 flex">
              <b className="mr-2 w-1/5">Awards:</b>
              <span>{movie.Awards}</span>
            </div>
            <div className="my-2 flex">
              <b className="mr-2 w-1/5">Genre:</b>
              <span>{movie.Genre}</span>
            </div>
            <div className="my-2 flex">
              <b className="mr-2 w-1/5">Actors:</b>
              <span>{movie.Actors}</span>
            </div>
            {movie.Director !== "N/A" ? (
              <div className="my-2 flex">
                <b className="mr-2 w-1/5">Director:</b>
                <span>{movie.Director}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-8 py-2 border-t border-white text-xl">
          <u>
            <b>Ratings:</b>
          </u>{" "}
          (total {movie.imdbRating})
        </div>
        <div className="flex mt-1">
          <div className="w-1/6">Rating</div>
          <div>Source</div>
        </div>
        {movie.Ratings.map((item: ratingType, i: number) => (
          <Rating key={i} {...item} />
        ))}
      </Animator>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  {
    heroName: string;
    movie: IMovieDetails;
  },
  { movieDetails: string[] }
> = async ({ params, req, res, locale }) => {
  if (!params?.movieDetails?.length || !params?.movieDetails) {
    return {
      notFound: true,
    };
  }
  // console.log(params.movieDetails[0]);
  // params.movieDetails[0] => hero
  // params.movieDetails[1] => imdbID
  // params.movieDetails[2] => movie title

  return {
    props: {
      heroName: params.movieDetails[0],
      movie: await getMovieDetails(
        params.movieDetails[0],
        params.movieDetails[1]
      ),
    },
  };
};

export default MoviePage;
