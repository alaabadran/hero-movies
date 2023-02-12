import { GetStaticProps, NextPage } from "next";
import { SuperHeros } from "@/types/heros";
import getHeros from "@/services/herosServices";

import Animator from "@/components/Animator";

import { Heros } from "@/components/Heros";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const HomePage: NextPage<SuperHeros> = (props) => {
  return (
    <>
      <Animator>
        <h1 className="text-4xl my-5">Featured</h1>
        <p className="text-slate-300">
          Choose your Super Hero to get a movie suggestion
        </p>
        {props.heros ? (
          <>
            <Heros heros={props.heros} />
          </>
        ) : (
          ""
        )}
      </Animator>
    </>
  );
};
export const getStaticProps: GetStaticProps<SuperHeros> = async (_context) => {
  return {
    props: {
      heros: await getHeros(),
    },
    revalidate: 5,
  };
};

export default HomePage;
