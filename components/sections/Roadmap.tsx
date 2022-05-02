import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

export const Roadmap = () => {
  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;"
      : " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff";

  return (
    <Box as="section" bg="primary" h="100%" id="roadmap">
      <Flex
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        minH="100vh"
        w="75%"
        margin={"0px auto"}
        py="20px"
      >
        <Heading
          as="h3"
          fontSize={"5xl"}
          display="flex"
          marginBottom={"50px"}
          justifyContent={"center"}
          fontFamily={'"Sedgwick Ave Display", cursive'}
          textShadow={textShadow}
        >
          Roadmap
        </Heading>
        <Flex
          justifyContent={"center"}
          w="100%"
          flexDirection="column"
          alignContent={"flex-start"}
          gap="20px"
        >
          <RoadmapStep
            period="Q3 2022"
            alignSelf="flex-start"
            title="dfgb first collection (2d)"
            text="We'll first launch our Social Media, then Discord and Website. Partneships &amp; Collab, announcements, contests and giveways. Mint + Listing in marketplaces. After Mints we`ll transfer the 20% of the funds earned to Ukrainian Children in need  "
          />
          <RoadmapStep
            period="Q4 2022"
            alignSelf="flex-end"
            title="dfgb$ crypto launch"
            text="This will be one of our biggest milestone in DFGB history. We`ll make a DAO followed by our own crypto-coin launch. Holders who staked our NFT will be rewarder with DGFB$ according to the duration of their stalking."
          />
          <RoadmapStep
            period="Q1 2023"
            alignSelf="flex-start"
            title="3d animated collection"
            text="We'll drop a DFGB 3D animated collection that with lots of utilities  with go from staking reward to... playing our P2P Game in the Metaverse!! More about this on Q2"
          />
          <RoadmapStep
            period="Q2 2022"
            alignSelf="flex-end"
            title="p2e game launch"
            text="Could you imagine having a great time while earning money? This is what our web3 game goes about. A game where you`ll have to use your own abilities to beat the others asses up and get rewards! (Using 3D animated NFTs from our 2nd collection)."
          />
        </Flex>
      </Flex>
    </Box>
  );
};

type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";

interface RoadmapStep {
  alignSelf: SelfPosition;
  text: string;
  title: string;
  period: string;
}

const RoadmapStep: FC<RoadmapStep> = ({ text, title, alignSelf, period }) => {
  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 1px #fff000, 0 0 10px #ffffff, 0 0 10px #ffffff, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 1px #ff00de, 0 0 1px #ff00de, 0 0 1px #ff00de;"
      : " 0 0 1px #ffffff, 0 0 10px #ffffff, 0 0 10px #ffffff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 1px #0000ff, 0 0 1px #0000ff, 0 0 1px #0000ff";

  return (
    <Flex
      p={5}
      gap="2"
      h="fit-content"
      pos="relative"
      flexDir={"column"}
      w={["100%", "100%", "50%", "50%"]}
      alignSelf={["flex-start", "flex-start", alignSelf, alignSelf]}
    >
      <Heading
        textShadow={textShadow}
        as="h6"
        fontSize={"xl"}
        textTransform="uppercase"
      >
        {title}
      </Heading>
      <Text textShadow={"2xl"}>{text}</Text>
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        fontSize="xl"
        fontFamily={'"Sedgwick Ave Display", cursive'}
        color={"tertiary"}
      >
        {period}
      </Box>
    </Flex>
  );
};
