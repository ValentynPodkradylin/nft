import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useTransition } from "react";
import {
  About,
  Faq,
  Footer,
  Home,
  Roadmap,
  Showcase,
  Team,
  Banner,
} from "./../components/sections";

const Index: NextPage = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Head>
        <title>DontGiveFuckBoi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
      <chakra.main>
        <About />
        <Roadmap />
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
