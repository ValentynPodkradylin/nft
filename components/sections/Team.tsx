import React, { FC } from "react";
import tm1 from "./../../images/team/team1.jpg";
import tm2 from "./../../images/team/team2.jpg";
import tm3 from "./../../images/team/team3.jpg";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

type TeamMember = {
  src: string;
  name: string;
  role: string;
  textShadow: string;
};

const teamMember: TeamMember[] = [
  {
    src: tm1.src,
    name: "Massive",
    role: "CO-Founded and CMO",
    textShadow:
      "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 1px #9b82cc, 0 0 5px #9b82cc",
  },
  {
    src: tm2.src,
    name: "Sasha",
    role: "CO-Founded and CTO",
    textShadow:
      "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 1px #ff00de, 0 0 5px #ff00de",
  },
  {
    src: tm3.src,
    name: "John",
    role: "CO-Founded and COO",
    textShadow:
      "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 1px #81ccc7, 0 0 5px #81ccc7",
  },
];

type Team = {};

export const Team: FC<Team> = (props) => {
  const {} = props;
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );
  return (
    <Box
      as="section"
      w="100vw"
      // bgGradient={"linear-gradient(my-turquoise-dark 0%, primary 100%)"}
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
          gap={["50px", "50px", "20px", "20px"]}
        >
          {teamMember.map(({ name, src, role, textShadow }) => (
            <Box
              key={name}
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              boxShadow={"2xl"}
              rounded={"3xl"}
              pos={"relative"}
              bg="my-violet-dark"
              zIndex={1}
            >
              <Box
                rounded={"3xl"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${src})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"3xl"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={src}
                  alt={`avatar-${name}`}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Heading
                  fontSize="2xl"
                  textTransform={"uppercase"}
                  textShadow={textShadow}
                >
                  {name}
                </Heading>
                <Text fontWeight={500}>{role}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
