import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import {
  About,
  Home,
  Showcase,
  Faq,
  Banner,
  Roadmap,
} from "./../components/sections";

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <chakra.main>
        <About />
        <Roadmap />
        <Showcase />
        <Faq />
        <Banner />
      </chakra.main>
    </>
  );
};

export default Index;
