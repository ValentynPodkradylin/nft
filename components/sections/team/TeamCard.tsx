import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";

interface TeamCardPops {
  name: string;
  role: string;
  order: number[];
  src: string;
  textShadow: string;
}

const TeamCard = (props: TeamCardPops) => {
  const { name, order, role, src, textShadow } = props;
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"3xl"}
      pos={"relative"}
      bg="my-violet-dark"
      zIndex={1}
      order={order}
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
  );
};

export default TeamCard;
