import {
  Heading,
  useColorMode,
  Image,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";
import head from "./../images/head2.png";

const spinRight = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

type LogoProps = {
  size?: "big" | "small";
};

const Logo: FC<LogoProps> = (props) => {
  const { size = "big" } = props;
  const textShadow = useColorModeValue(
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  return (
    <Heading
      as="h1"
      position={"relative"}
      zIndex={size === "big" ? 1000 : 0}
      fontSize={
        size === "big"
          ? ["2xl", "3xl", "4xl", "5xl"]
          : ["xl", "xl", "2xl", "2xl"]
      }
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
        top={size === "big" ? "-20%" : "-15%"}
        left={size === "big" ? "-12%" : "-25%"}
        src={head.src}
        transform={"translateY(-50%)"}
        alt="1"
        h="50px"
        w="50px"
        animation={`${spinRight} infinite 5s linear`}
      />
    </Heading>
  );
};

export default Logo;
