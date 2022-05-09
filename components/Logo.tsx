import {
  Heading,
  useColorMode,
  Image,
  keyframes,
  useColorModeValue,
  Flex,
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
    <Flex alignItems={"center"} justifyContent="center" gap={0.5}>
      <Image
        display={["flex", "flex ", "flex", "flex"]}
        src={head.src}
        alt="logo"
        h={
          size === "big"
            ? ["40px", "40px", "50px", "70px"]
            : ["30px", "30px", "40px", "50px"]
        }
        w={
          size === "big"
            ? ["40px", "40px", "50px", "70px"]
            : ["30px", "30px", "40px", "50px"]
        }
        animation={`${spinRight} infinite 5s linear`}
      />
      <Heading
        as="h1"
        zIndex={size === "big" ? 1000 : 0}
        fontSize={
          size === "big"
            ? ["2xl", "3xl", "3xl", "4xl"]
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
      </Heading>
    </Flex>
  );
};

export default Logo;
