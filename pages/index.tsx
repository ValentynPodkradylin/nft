import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Favicon from "../components/Favicon";
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

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>DontGiveaFuckBois</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <Favicon />
      </Head>
      <Home text={data.home} />
      <chakra.main>
        <About text={data.about} />
        <Roadmap text={data.roadmap} />
        <Banner />
        <Showcase />
        <Faq text={data.faq} />
        <Team text={data.team} />
      </chakra.main>
      <Footer />
    </>
  );
};

export default Index;
