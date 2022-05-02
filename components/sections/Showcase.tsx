import { Box, chakra, Image, keyframes } from "@chakra-ui/react";
import React, { FC } from "react";
import img1 from "./../../images/photo_1.jpg";
import img2 from "./../../images/photo_2.jpg";
import img3 from "./../../images/photo_3.jpg";

type NftItemProps = {
  img: string;
  number: string;
  price: string;
  name: string;
};

const NftItem: FC<NftItemProps> = ({ img, number, price, name }) => (
  <Box position={"relative"} mx="auto" w={["8rem", "10rem", "15rem", "15rem"]}>
    <Image borderRadius={"40px"} w={"100%"} h={"auto"} src={img} alt={"A"} />
    <Box
      position={"absolute"}
      fontFamily={'"Sedgwick Ave Display", cursive'}
      bottom={0}
      right={"50%"}
      fontSize={"30"}
      transform={"translateX(50%) rotate(-10deg)"}
      textShadow={
        " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 80px #ff00de, 0 0 90px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;"
      }
    >
      {name}
    </Box>
  </Box>
);

const Col = chakra(Box, {
  baseStyle: {
    width: "5rem",
    height: "5rem",
    margin: "2rem",
    bg: "yellow",
  },
});

const spinLeft = keyframes`
  from {transform: translateX(100%);}
  to {transform: translateX(-100%)}
`;
const spinRight = keyframes`
  from {transform: translateX(-100%);}
  to {transform: translateX(100%)}
`;
export const Showcase = () => {
  return (
    <Box
      as="section"
      minH={["50vh", "70vh", "100vh", "100vh"]}
      w="100%"
      maxW={"100vw"}
      position={"relative"}
      bgGradient={"linear-gradient(primary 0%, tertiary 100%)"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
    >
      <Box
        boxSizing="content-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        animation={`${spinLeft} infinite 20s linear`}
        gap={5}
      >
        <NftItem name="Lil Boy" img={img1.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img2.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img1.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img3.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img2.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img3.src} number={"0"} price={"0"} />
      </Box>
      <Box
        boxSizing="content-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        animation={`${spinRight} infinite 20s linear`}
        gap={5}
      >
        <NftItem name="Lil Boy" img={img1.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img2.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img1.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img3.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img2.src} number={"0"} price={"0"} />
        <NftItem name="Lil Boy" img={img3.src} number={"0"} price={"0"} />
      </Box>
    </Box>
  );
};
