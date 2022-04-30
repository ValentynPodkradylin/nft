import { Box, chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import { About, Home, Navigation, Showcase } from "./../components/sections";

const Index: NextPage = () => {
  return (
    <Box>
      {/* @ts-ignore */}
      <Navigation />
      <Home />
      <chakra.main>
        <About />
        <Showcase />
      </chakra.main>
    </Box>
  );
};

export default Index;
