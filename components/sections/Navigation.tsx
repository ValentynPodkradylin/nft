import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  MenuIcon,
  Spacer,
  useColorMode,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FC, useReducer, useState } from "react";
import DarkModeSwitch, { IconColorMode } from "../DarkModeSwitch";
import Logo from "./../Logo";

type PathForSections<T> = T extends `${infer S}` ? `#${Lowercase<S>}` : never;

export type SectionsName = "Home" | "About" | "Faq" | "Roadmap";

type SectionsList<T extends SectionsName = SectionsName> = {
  section: T;
  path: PathForSections<T>;
}[];

export const sectionsList: SectionsList = [
  {
    section: "Home",
    path: "#home",
  },
  {
    section: "About",
    path: "#about",
  },
  {
    section: "Roadmap",
    path: "#roadmap",
  },
  {
    section: "Faq",
    path: "#faq",
  },
];

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle: FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export const Navigation = () => {
  const [isOpen, toggleOpen] = useReducer((isOpen) => !isOpen, false);
  const [display, changeDisplay] = useState("none");
  const { colorMode } = useColorMode();
  const iconColor: IconColorMode = {
    light: "light",
    dark: "dark",
  };

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <Flex
        zIndex={display === "none" ? "100" : 0}
        as="section"
        w="100vw"
        height={"85px"}
        pos="fixed"
        top={0}
        left={0}
      >
        <Flex
          as="nav"
          w="85%"
          mx="auto"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Logo />
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
          <Flex gap={2}>
            <DarkModeSwitch />
            <IconButton
              color={iconColor[colorMode]}
              bg="transparent"
              aria-label="asxx"
              _hover={{
                bg: "primary-dark",
              }}
              icon={<HamburgerIcon />}
              onClick={() => changeDisplay("flex")}
              display={["flex", "flex", "none", "none"]}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        display={display}
        bgColor="primary"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex alignItems="center" m="4" justifyContent={"space-between"}>
          <Logo />
          <IconButton
            aria-label="Open Menu"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
            color={iconColor[colorMode]}
            bg="transparent"
            _hover={{
              bg: "primary-dark",
            }}
          />
        </Flex>
        <Flex
          align="center"
          display={["flex", "flex", "none", "none"]}
          flexDirection="column"
          gap={10}
        >
          {sectionsList.map(({ section, path }) => (
            <Button
              onClick={() => changeDisplay("none")}
              fontSize={"x-large"}
              variant={"ghost"}
              w="100%"
              key={path}
            >
              <a href={path}>{section}</a>
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

// #fab3ff;
// #b3fffa
