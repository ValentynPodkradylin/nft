//
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import photo from "./../../images/DontGiveFuckBoi.jpg";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

interface AboutProps {
  text: {
    paragraphs: string[];
  };
}

export const About = (props: AboutProps) => {
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  const { text } = props;
  const { paragraphs } = text;

  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      id="about"
      py={"20px"}
    >
      <Flex w="85%" mx="auto" minH={"100vh"} flexDir="column">
        <Heading
          fontFamily={'"Sedgwick Ave Display", cursive'}
          as="h3"
          fontSize={"5xl"}
          textShadow={textShadow}
          textAlign="center"
        >
          About
        </Heading>
        <Box
          mt="25px"
          flexDir={["column", "column", "unset", "unset"]}
          display={["flex", "flex", "block", "block"]}
        >
          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={container}
            h={["100%", "80%", "40%", "40%"]}
            w={["100%", "80%", "40%", "40%"]}
            float={["none", "none", "left", "left"]}
            mr={["auto", "auto", "20px", "20px"]}
            ml={["auto", "auto", "0px", "0px"]}
            mb="20px"
            order={[2, 2, "unset", "unset"]}
          >
            <Image
              borderRadius={"20px"}
              src={photo.src}
              alt="discord"
              h="100%"
              objectFit={"cover"}
              w="100%"
            />
          </Box>

          <Box order={[1, 1, "unset", "unset"]}>
            {paragraphs.map((paragraph, index) => (
              <Text key={index.toString()} mb="15px">
                {paragraph}
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

{
  /* <Heading
  fontFamily={'"Sedgwick Ave Display", cursive'}
  as="h3"
  fontSize={"5xl"}
  textShadow={textShadow}
  textAlign="center"
>
  About
</Heading>; */
}

// {
//   paragraphs.map((paragraph, index) => (
//     <Text key={index.toString()}>{paragraph}</Text>
//   ));
// }
