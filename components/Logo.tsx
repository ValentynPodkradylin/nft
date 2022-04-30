import { Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Logo = () => {
  const bgGradient = useColorModeValue(
    "linear(to-l, primary-dark, orange)",
    "linear(to-l, primary-dark, orange.400)"
  );
  return (
    <Heading
      as="h1"
      fontSize={["2xl", "3xl", "4xl", "5xl"]}
      transition="all .1s ease"
      fontFamily={'"Akaya Telivigala", cursive'}
      bgGradient={bgGradient}
      bgClip="text"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Link href={"/"}>DGFUKBOI</Link>
    </Heading>
  );
};

export default Logo;
