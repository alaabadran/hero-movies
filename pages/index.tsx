import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { SuperHeros } from "@/types/heros";
import getHeros from "@/services/herosServices";
import Head from "next/head";
import Image from "next/image";

import { Heros } from "@/components/Heros";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const apikey = "977fd4d4";

const HomePage: NextPage<SuperHeros> = (props) => {
  return (
    <>
      <h1 className="text-4xl my-5">
        Choose your Super Hero to get a movie suggestion
      </h1>
      {props.heros ? (
        <>
          <Heros heros={props.heros} />
        </>
      ) : (
        ""
      )}
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
