import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { SuperHeros, Hero } from "@/types/heros";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const apikey = "977fd4d4";

const HomePage: NextPage<SuperHeros> = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
export const getStaticProps: GetStaticProps<SuperHeros> = async (_context) => {
  return {
    props: {
      heros: [],
    },
    revalidate: 60,
  };
};

export default HomePage;
