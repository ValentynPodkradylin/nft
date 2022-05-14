import { chakra } from "@chakra-ui/react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useTransition } from "react";
import {
  About,
  Banner,
  Faq,
  Footer,
  Home,
  Roadmap,
  Showcase,
  Team,
} from "./../components/sections";
import data from "./../data.json";

type Props = {
  [key: string]: any;
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>DontGiveaFuckBois</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <Home text={data.home} />
      <chakra.main>
        <About text={data.about} />
        <Roadmap text={data.roadmap} />
        <Banner />
        <Showcase />
        <Faq />
        <Team />
      </chakra.main>
      <Footer />
    </>
  );
};

export default Index;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("../data.json");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
