// This will display list of movies per a selected Super Hero

import { GetServerSideProps, NextPage } from "next";
import { Movie } from "@/types/movie";
import { getRandomMovie, getMovieURL } from "@/services/moviesServices";
import { AsyncReturnType } from "@/types/global";

type PagePropsType = any;

const MoviesPage: NextPage<PagePropsType> = (props) => {
  return <div>Movies page</div>;
};

export const getServerSideProps: GetServerSideProps<
  PagePropsType,
  { hero?: string }
> = async ({ params, req, res, locale }) => {
  // console.log(params.hero);
  if (!params?.hero?.length || !params?.hero) {
    return {
      notFound: true,
    };
  }

  // console.log(await getRandomMovie(params?.hero));
  const movie = await getRandomMovie(params?.hero);
  // console.log(await getMovieURL(movie));

  // redirects to a random movie
  return {
    props: {},
    redirect: {
      permanent: false,
      destination: await getMovieURL(movie),
    },
  };
};

export default MoviesPage;
