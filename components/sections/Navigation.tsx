import { Flex, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import DarkModeSwitch from "../DarkModeSwitch";
import Logo from "./../Logo";

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 85%;
//   height: ${(props) => props.theme.navHeight};
//   margin: 0 auto;
// `;

type PathForSections<T> = T extends `${infer S}` ? `#${Lowercase<S>}` : never;

export type SectionsName = "Home" | "About" | "Team" | "Roadmap";

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
    section: "Team",
    path: "#team",
  },
];

export const Navigation = () => {
  return (
    <Flex as="section" w="100vw" bg="primary" height={"85px"}>
      <Flex as="nav" w="85%" mx="auto" alignItems={"center"}>
        <Logo />
        <Spacer />
        <Wrap spacing={20}>
          {sectionsList.map(({ section, path }) => (
            <WrapItem display={"block"} key={path}>
              <a href={path}>{section}</a>
            </WrapItem>
          ))}
        </Wrap>
        <Spacer />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};

// #fab3ff;
// #b3fffa
