import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import tm1 from "./../../../images/team/team1.jpg";
import tm2 from "./../../../images/team/team2.jpg";
import tm3 from "./../../../images/team/team3.jpg";
import TeamCard from "./TeamCard";

interface Team {
  text: {
    name: string;
    role: string;
  }[];
}

export const Team = (props: Team) => {
  const { text } = props;
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  const cardShadow1 =
    "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 1px #9b82cc, 0 0 5px #9b82cc";
  const cardShadow2 =
    "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 1px #ff00de, 0 0 5px #ff00de";
  const cardShadow3 =
    "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 1px #81ccc7, 0 0 5px #81ccc7";

  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(my-pink 0%, my-violet-dark 100%)"}
      id="team"
    >
      <Flex
        w="90%"
        mx="auto"
        alignItems={"center"}
        justifyContent={"center"}
        flexDir="column"
        minH="50vh"
        py="20px"
      >
        <Heading
          as="h2"
          mx="auto"
          width={"fit-content"}
          textShadow={textShadow}
          textTransform={"uppercase"}
          fontFamily={'"Sedgwick Ave Display", cursive'}
        >
          Team
        </Heading>
        <Flex
          alignItems={"center"}
          justifyContent={["space-between", "space-between"]}
          flexDir={["column", "column", "row", "row"]}
          mt="50px"
          gap={"50px"}
        >
          <TeamCard
            name={text[0].name}
            role={text[0].role}
            src={tm2.src}
            textShadow={cardShadow2}
            // order={[1, 1, 2, 2]}
          />
          <TeamCard
            name={text[1].name}
            role={text[1].role}
            src={tm3.src}
            textShadow={cardShadow3}
            // order={[2, 2, 3, 3]}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
