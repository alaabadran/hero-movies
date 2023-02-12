// This will display list of movies per a selected Super Hero

import { GetServerSideProps, NextPage } from "next";
import { Movie } from "@/types/movie";

type PagePropsType = {};

const MoviesPage: NextPage<PagePropsType> = (props) => {
  return <div>Movies page</div>;
};

export const getServerSideProps: GetServerSideProps<
  PagePropsType,
  { hero?: string }
> = async ({ params, req, res, locale }) => {
  try {
    // console.log(params.hero);
    if (!params?.hero?.length || !params?.hero) {
      return {
        notFound: true,
      };
    }

    // if (
    //   !params?.hero[1] ||
    //   params?.hero[1] != convertToSlug(hero.name)
    // ) {
    //   return {
    //     redirect: {
    //       statusCode: 307,
    //       destination: getMovieLink(hero.name),
    //     },
    //   };
    // }

    // setCacheHeaders(res, 10, 10);

    const movies: Array<Movie> = [];

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    throw new Error(`Artist-View.getServerSideProps: ${error}`);
  }
};

export default MoviesPage;
