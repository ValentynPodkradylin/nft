import { Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Logo = () => {
  // const bgGradient = useColorModeValue(
  //   "linear(to-l, primary-dark, orange)",
  //   "linear(to-l, primary-dark, orange.400)"
  // );

  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;"
      : " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff";
  return (
    <Heading
      as="h1"
      zIndex={1000}
      fontSize={["2xl", "3xl", "4xl", "5xl"]}
      transition="all .1s ease"
      fontFamily={'"Akaya Telivigala", cursive'}
      // bgGradient={bgGradient}
      // bgClip="text"
      display={"flex"}
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
      }}
      textShadow={textShadow}
      onClick={() => {
        let element = document.getElementById("home");

        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
    >
      DontGiveFuckBoi
    </Heading>
  );
};

export default Logo;
