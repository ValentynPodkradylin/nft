import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React, { FC } from "react";
import { RoadmapStep } from "./RoadmapStep";

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

const MyHeading = chakra(Heading, {
  baseStyle: {
    as: "h3",
    fontSize: "5xl",
    display: "flex",
    marginBottom: "50px",
    justifyContent: "center",
    fontFamily: '"Sedgwick Ave Display", cursive',
  },
});

interface RoadmapProps {
  text: {
    steps: {
      stepTitle: string;
      stepText: string;
    }[];
  };
}

export const Roadmap = (props: RoadmapProps) => {
  const { text } = props;
  const { steps } = text;

  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  return (
    <Box
      h="100%"
      as="section"
      id="roadmap"
      bgGradient={"linear-gradient(my-pink 50%, my-violet-dark 100%)"}
    >
      <Flex
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        minH="100vh"
        w="85%"
        margin={"0px auto"}
        py="20px"
      >
        <MyHeading textShadow={textShadow}>Roadmap</MyHeading>
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
            title={steps[0].stepTitle}
            text={steps[0].stepText}
          />
          <RoadmapStep
            custom={2}
            anim={toLeft}
            bg="purple.500"
            alignSelf="flex-end"
            title={steps[1].stepTitle}
            text={steps[1].stepText}
          />
          <RoadmapStep
            custom={3}
            anim={toRight}
            bg="pink.200"
            alignSelf="flex-start"
            title={steps[2].stepTitle}
            text={steps[2].stepText}
          />
          <RoadmapStep
            custom={4}
            anim={toLeft}
            bg="my-violet-dark"
            alignSelf="flex-end"
            title={steps[3].stepTitle}
            text={steps[3].stepText}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
