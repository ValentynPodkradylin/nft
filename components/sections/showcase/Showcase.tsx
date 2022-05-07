import { Box, Heading, keyframes, useColorMode } from "@chakra-ui/react";
import React, { useRef } from "react";
import { imgs } from "./imgs";
import { NftItem } from "./NftItem";

const spinLeft = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(-100%)}
`;
const spinRight = keyframes`
  from {transform: translateX(-100%);}
  to {transform: translateX(100%)}
`;

export const Showcase = () => {
  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;"
      : " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff";

  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      as="section"
      minH={["50vh", "70vh", "100vh", "100vh"]}
      w="100vw"
      position={"relative"}
      // bgGradient={"linear-gradient(my-pink 0%, my-violet 100%)"}
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
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
        Tiers
      </Heading>
      <Box
        boxSizing="border-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        animation={`${spinLeft} infinite 10s linear`}
        gap={5}
        ref={topRowRef}
      >
        {imgs.slice(0, 5).map(({ img, tiers }, index) => (
          <NftItem
            key={index.toString()}
            name={tiers}
            img={img.src}
            number={"0"}
            price={"0"}
            passRef={topRowRef}
          />
        ))}
      </Box>
      <Box
        boxSizing="content-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        animation={`${spinRight} infinite 10s linear`}
        gap={5}
        ref={bottomRowRef}
      >
        {imgs.slice(5, 10).map(({ img, tiers }, index) => (
          <NftItem
            key={index.toString()}
            name={tiers}
            img={img.src}
            number={"0"}
            price={"0"}
            passRef={bottomRowRef}
          />
        ))}
      </Box>
    </Box>
  );
};
