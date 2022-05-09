import {
  Box,
  Center,
  Flex,
  Spacer,
  Image,
  VStack,
  Text,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import discord from "./../../images/discord.jpg";
import { FaDiscord } from "react-icons/fa";

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

export const About = () => {
  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;"
      : " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff";

  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      id="about"
      py={"20px"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={["center", "center", "space-between", "space-between"]}
        minH={"100vh"}
        w="85%"
        mx="auto"
        gap="20px"
        flexDir={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Center
          flexDirection={"column"}
          gap="20px"
          h="75%"
          w={["80%", "80%", "40%", "40%"]}
        >
          <motion.div initial="hidden" animate="visible" variants={container}>
            <Image
              borderRadius={"20px"}
              src={discord.src}
              alt="discord"
              h="100%"
            />
          </motion.div>
          <Button
            as="a"
            href="https://discord.gg/vjgXecqsVF"
            target="_blank"
            display={["flex", "flex", "none", "none"]}
            zIndex={1}
            colorScheme={"facebook"}
            leftIcon={<FaDiscord />}
          >
            Our Discord
          </Button>
        </Center>
        <VStack
          alignItems={["center", "center", "flex-start", "flex-start"]}
          w={["80%", "80%", "50%", "50%"]}
          spacing={5}
        >
          <Heading
            fontFamily={'"Sedgwick Ave Display", cursive'}
            as="h3"
            fontSize={"5xl"}
            textShadow={textShadow}
          >
            Lorem
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            accusamus. Adipisci itaque accusantium saepe possimus sapiente in
            dolorum nesciunt, exercitationem odio soluta quaerat quod blanditiis
            asperiores nam commodi rem odit?
          </Text>
          <Spacer />
          <Button
            as="a"
            display={["none", "none", "flex", "flex"]}
            zIndex={1}
            colorScheme={"facebook"}
            leftIcon={<FaDiscord />}
            href="https://discord.com/invite/vjgXecqsVF"
            target="_blank"
          >
            Our Discord
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};
{
  /* <Image src={discord.src} alt="discord" />; */
}
