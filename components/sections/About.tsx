import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import photo from "./../../images/DontGiveFuckBoi.jpg";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const About = () => {
  const { colorMode } = useColorMode();

  const textShadow =
    colorMode === "light"
      ? " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;"
      : " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff";

  return (
    <Box
      as="section"
      w="100vw"
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      id="about"
      py={"20px"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={["center", "center", "space-between", "space-between"]}
        minH={"100vh"}
        w="85%"
        mx="auto"
        gap="25px"
        flexDir={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Center
          flexDirection={"column"}
          gap="20px"
          h="75%"
          w={["80%", "80%", "30%", "30%"]}
        >
          <motion.div initial="hidden" animate="visible" variants={container}>
            <Image
              borderRadius={"20px"}
              src={photo.src}
              alt="discord"
              h="100%"
            />
          </motion.div>
        </Center>
        <VStack
          alignItems={["center", "center"]}
          w={["80%", "80%", "70%", "70%"]}
          spacing={5}
        >
          <Heading
            fontFamily={'"Sedgwick Ave Display", cursive'}
            as="h3"
            fontSize={"5xl"}
            textShadow={textShadow}
            textAlign="center"
          >
            Lorem
          </Heading>
          <Text>
            Our project began with a funny children's photo of our COO John, who
            comes from the faraway country of Uzbekistan. This colorful photo,
            in spite of its simplicity, took on a very deep meaning for us.
          </Text>
          <Text>
            The fact is that John unfortunately had a difficult childhood. His
            tyrant father sent him to a religious school where he was beaten and
            harassed by a teacher. Telling or complaining to his parents was not
            possible, as little John faced a wall of incomprehension on their
            part. By the way, a total lack of understanding haunted him later in
            life because of the mismatch between his liberal, progressive views
            and the religious, conservative beliefs of his environment and
            society.
          </Text>
          <Text>
            As we can see in the photo, already at such a young age John didn't
            give a fuck about judgment and demotivation from others. This is
            exactly the attitude we spread in our project and try to put it into
            the souls of the members of our community, because it gave John a
            lot.
          </Text>
          <Text>
            Contrary to the opinion of his parents and friends, he did what he
            wanted to do for a long time, he moved to Germany to study and he is
            doing what he really likes, namely the DGFB project, in which he
            sees himself as an expression. We want to help people in need of
            support and motivation.
          </Text>
          <Spacer />
          {/* <Button
            as="a"
            display={["none", "none", "flex", "flex"]}
            zIndex={1}
            colorScheme={"facebook"}
            leftIcon={<FaDiscord />}
            href="https://discord.com/invite/vjgXecqsVF"
            target="_blank"
          >
            Our Discord
          </Button> */}
        </VStack>
      </Flex>
    </Box>
  );
};
{
  /* <Image src={discord.src} alt="discord" />; */
}
