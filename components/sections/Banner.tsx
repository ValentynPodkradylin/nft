import { Button, Center, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import bg from "./../../images/bg.jpg";

export const Banner = () => {
  return (
    <Center
      overflow={"hidden"}
      as="section"
      w="100vw"
      h={["15rem", "15rem", "25rem", "25rem"]}
      bg="tertiary-dark"
      position={"relative"}
    >
      <Image
        alt="bg-image"
        src={bg.src}
        w="100%"
        h="100%"
        objectFit={"cover"}
        opacity=".3"
      />
      <Flex
        pos="absolute"
        justifyContent={["space-between", "space-between"]}
        alignItems="center"
        w="80%"
        h="80%"
        flexDir={["column", "column", "row", "row"]}
        mx={"auto"}
      >
        <Heading
          as="h4"
          textTransform={"capitalize"}
          textAlign={["center"]}
          fontSize={["4xl", "4xl", "5xl", "6xl"]}
          w={["100%", "100%", "40%", "40%"]}
        >
          Join our whitelist
        </Heading>
        <Button
          as="a"
          href="https://www.canva.com/design/DAE_K8f96lI/vVhSOm-iNZ53SqHQOeMJVg/view?utm_content=DAE_K8f96lI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          colorScheme={"facebook"}
          size="lg"
        >
          whitelist
        </Button>
      </Flex>
    </Center>
  );
};
