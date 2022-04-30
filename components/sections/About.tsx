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
  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(secondary-dark 0%, primary 100%)"}
    >
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        minH={"100vh"}
        w="75%"
        mx="auto"
        gap="20px"
      >
        <Center h="75%" w="40%">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <Image
              borderRadius={"20px"}
              src={discord.src}
              alt="discord"
              h="100%"
            />
          </motion.div>
        </Center>
        <VStack alignItems={"flex-start"} w="50%" spacing={5}>
          <Heading as="h3" fontSize={"5xl"}>
            lorem
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            accusamus. Adipisci itaque accusantium saepe possimus sapiente in
            dolorum nesciunt, exercitationem odio soluta quaerat quod blanditiis
            asperiores nam commodi rem odit?
          </Text>
          <Spacer />
          <Button colorScheme={"facebook"} leftIcon={<FaDiscord />}>
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
