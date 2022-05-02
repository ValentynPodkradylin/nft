import { Box, Center, Heading, Spacer, VStack } from "@chakra-ui/react";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { FC } from "react";
import Typewriter from "typewriter-effect";
import Carousel from "../carousel/Carousel";
import { Navigation } from "./Navigation";

export const Home: FC = (props) => {
  return (
    <Box
      as={"header"}
      id="home"
      bgGradient={"linear-gradient(primary 0%, secondary-dark 100%)"}
    >
      <Navigation />
      <Center
        pt="90px"
        w="75%"
        flexDir={["column", "column", "row", "row"]}
        justifyContent={["center", "center", "space-between", "space-between"]}
        mx="auto"
        minH={"100vh"}
        gap={["20px", "20px", 0, 0]}
      >
        <VStack
          spacing={5}
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            textAlign={["center", "center", "left", "left"]}
            as="h1"
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            w={["100%", "100%", "80%", "80%"]}
          >
            Discover new area of cool
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
                    "<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;' }>NFT's.</span>"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00' }>Collectible Items.</span>"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "<span style='text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff' }>Collectible Items.</span>"
                  )
                  .deleteAll()
                  .start();
              }}
            />
          </Heading>
          <Heading as="h3" fontSize={"3xl"}>
            Lorem
          </Heading>
        </VStack>
        <Box>
          <Carousel />
        </Box>
      </Center>
    </Box>
  );
};
