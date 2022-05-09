import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React, { FC } from "react";

const toRight: Variants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      times: 20,
    },
  }),
};
const toLeft: Variants = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      times: 20,
    },
  }),
};

export const Roadmap = () => {
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  return (
    <Box
      as="section"
      h="100%"
      id="roadmap"
      bgGradient={"linear-gradient(my-pink 50%, my-violet-dark 100%)"}
    >
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
            custom={1}
            anim={toRight}
            bg="my-turquoise-dark"
            alignSelf="flex-start"
            title="dfgb first collection (2d)"
            text="We'll first launch our Social Media, then Discord and Website. Partneships &amp; Collab, announcements, contests and giveways. Mint + Listing in marketplaces. After Mints we`ll transfer the 20% of the funds earned to Ukrainian Children in need  "
          />
          <RoadmapStep
            custom={2}
            anim={toLeft}
            bg="purple.500"
            alignSelf="flex-end"
            title="dfgb$ crypto launch"
            text="This will be one of our biggest milestone in DFGB history. We`ll make a DAO followed by our own crypto-coin launch. Holders who staked our NFT will be rewarder with DGFB$ according to the duration of their stalking."
          />
          <RoadmapStep
            custom={3}
            anim={toRight}
            bg="pink.200"
            alignSelf="flex-start"
            title="3d animated collection"
            text="We'll drop a DFGB 3D animated collection that with lots of utilities  with go from staking reward to... playing our P2P Game in the Metaverse!! More about this on Q2"
          />
          <RoadmapStep
            custom={4}
            anim={toLeft}
            bg="my-violet-dark"
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
  bg: string;
  anim?: any;
  custom: number;
}

const RoadmapStep: FC<RoadmapStep> = ({
  text,
  title,
  alignSelf,
  bg,
  anim,
  custom,
}) => {
  const textShadow = useColorModeValue(
    " 0 0 1px #fff000, 0 0 10px #ffffff, 0 0 10px #ffffff, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 1px #ff00de, 0 0 1px #ff00de, 0 0 1px #ff00de;",
    " 0 0 1px #ffffff, 0 0 10px #ffffff, 0 0 10px #ffffff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 1px #0000ff, 0 0 1px #0000ff, 0 0 1px #0000ff"
  );

  return (
    <Flex
      viewport={{ amount: 0.1 }}
      initial="hidden"
      whileInView="visible"
      as={motion.div}
      variants={anim}
      custom={custom}
      p={5}
      gap="2"
      bg={bg}
      h="fit-content"
      pos="relative"
      flexDir={"column"}
      w={["100%", "100%", "50%", "50%"]}
      borderRadius="2xl"
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
    </Flex>
  );
};
