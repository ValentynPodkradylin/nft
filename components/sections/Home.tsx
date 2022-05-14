import { Box, Center, Heading, Stack, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import Typewriter from "typewriter-effect";
import Carousel from "../carousel/Carousel";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";
import { SocialButton } from "../SocialButton";
import { FaTwitter, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

interface HomeProps {
  text: {
    mainTitle: string;
    typewritter: {
      fLine: string;
      sLine: string;
      tLine: string;
    };
  };
}

export const Home = (props: HomeProps) => {
  const { text } = props;
  const title = text?.mainTitle;
  const { fLine, sLine, tLine } = text?.typewritter;
  return (
    <Box
      w="100vw"
      as={"header"}
      id="home"
      bgGradient={"linear-gradient(my-pink 0%, my-turquoise-dark 100%)"}
    >
      <Navigation />
      <Center
        pt="90px"
        w="85%"
        flexDir={["column", "column", "row", "row"]}
        justifyContent={["center", "center", "space-between", "space-between"]}
        mx="auto"
        minH={"100vh"}
        gap={["20px", "20px", 0, 0]}
      >
        <VStack
          w={["100%", "100%", "40%", "50%"]}
          spacing={5}
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            textAlign={["center", "center", "left", "left"]}
            as="h1"
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            w={["100%", "100%", "80%", "80%"]}
          >
            {title}
          </Heading>
          <Heading as="h2" fontSize={"4xl"}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                wrapperClassName: "aaaaaa",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;' }>${fLine}</span>`
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    `<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00' }>${sLine}</span>`
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    `<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff' }>${tLine}</span>`
                  )
                  .deleteAll()
                  .start();
              }}
            />
          </Heading>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/dontgivefuckboi"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/dontgivefuckboii/"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Tiktok"}
              href={"https://www.tiktok.com/@dontgivefuckboi?lang=es"}
            >
              <FaTiktok />
            </SocialButton>
            <SocialButton
              label={"Discord"}
              href={"https://discord.com/invite/vjgXecqsVF"}
            >
              <FaDiscord />
            </SocialButton>
          </Stack>
        </VStack>
        <Box>
          <Carousel />
        </Box>
      </Center>
    </Box>
  );
};
