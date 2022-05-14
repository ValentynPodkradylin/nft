import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { sectionsList } from "./navigation";
import Logo from "../Logo";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Box bg="my-violet-dark">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo size="small" />
        <Wrap spacing={10} display={["none", "none", "flex", "flex"]}>
          {sectionsList.map(({ section, path }) => (
            <WrapItem
              display={"block"}
              key={path}
              cursor={"pointer"}
              onClick={() => scrollTo(path.replace("#", ""))}
            >
              {section}
            </WrapItem>
          ))}
        </Wrap>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 DontGiveFuckBoi. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/dontgivefuckboi"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/dontgivefuckboii/"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Tiktok"}
              href={"https://www.tiktok.com/@dontgivefuckboi?lang=es"}
            >
              <FaTiktok />
            </SocialButton>
            <SocialButton
              label={"Discord"}
              href={"https://discord.com/invite/vjgXecqsVF"}
            >
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
