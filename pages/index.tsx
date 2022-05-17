import { chakra } from "@chakra-ui/react";
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

const Index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" />
        <meta
          name="description"
          content="DontGiveaFuckBois is an authentic project with a unique style and background story. We don't repeat anyone and remain who we are, bringing our own mentality and culture with us. Our community has a certain message and is the most motivated team that supports each of its members and will soon reach the top."
        />
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="rtutii" />
        <meta
          name="keywords"
          content="NFT, DontGiveFuckBoi, web3.0 Next React Html Landing"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
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
