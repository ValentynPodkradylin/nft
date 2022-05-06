import { Heading, useColorMode, Image, keyframes } from "@chakra-ui/react";
import React from "react";
import head from "./../images/head2.png";

const spinRight = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

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
      position={"relative"}
      zIndex={1000}
      fontSize={["2xl", "3xl", "4xl", "5xl"]}
      transition="all .1s ease"
      fontFamily={'"Akaya Telivigala", cursive'}
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
      <Image
        display={["none", "none ", "flex", "flex"]}
        position={"absolute"}
        top="-20%"
        left="-12%"
        src={head.src}
        alt="1"
        h="50px"
        w="50px"
        animation={`${spinRight} infinite 5s linear`}
      />
    </Heading>
  );
};

export default Logo;
