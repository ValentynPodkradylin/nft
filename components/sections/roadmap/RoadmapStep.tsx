import { Flex, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

export const RoadmapStep = (props: RoadmapStep) => {
  const { text, title, alignSelf, bg, anim, custom } = props;
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
