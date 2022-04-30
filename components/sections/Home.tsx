import { Box, Center, Heading, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import Carousel from "../carousel/Carousel";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <Box
      as="section"
      minH={"calc(100vh - 85px)"}
      bgGradient={"linear-gradient(primary 0%, secondary-dark 100%)"}
    >
      <Center minH={"calc(100vh - 85px)"} w="75%" mx="auto">
        <VStack spacing={5} alignItems="flex-start">
          <Heading as="h1" fontSize={"5xl"} w="80%">
            Discover new area of cool
          </Heading>
          <Heading as="h2" fontSize={"4xl"}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-1">NFT\'s.</span>')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('<span class="text-2">Collectible Items.</span>')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('<span class="text-3">Ape Killers!</span>')
                  .deleteAll()
                  .start();
              }}
            />
          </Heading>
          <Heading as="h3" fontSize={"3xl"}>
            Lorem
          </Heading>
        </VStack>
        <Spacer />
        <Box>
          <Carousel />
        </Box>
      </Center>
    </Box>
  );
};

// export const DarkModeSwitch1 = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isDark = colorMode === "dark";
//   const [display, changeDisplay] = useState("none");
//   return (
//     <Flex>
//       <Flex position="fixed" top="1rem" right="1rem" align="center">
//         {/* Desktop */}
//         <Flex display={["none", "none", "flex", "flex"]}>
//           <NextLink href="/" passHref>
//             <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
//               Home
//             </Button>
//           </NextLink>

//           <NextLink href="/about" passHref>
//             <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
//               About
//             </Button>
//           </NextLink>

//           <NextLink href="/contact" passHref>
//             <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
//               Contact
//             </Button>
//           </NextLink>
//         </Flex>

//         {/* Mobile */}
//         <IconButton
//           aria-label="Open Menu"
//           size="lg"
//           mr={2}
//           icon={<HamburgerIcon />}
//           onClick={() => changeDisplay("flex")}
//           display={["flex", "flex", "none", "none"]}
//         />
//         <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
//       </Flex>

//       {/* Mobile Content */}
//       <Flex
//         w="100vw"
//         display={display}
//         bgColor="gray.50"
//         zIndex={20}
//         h="100vh"
//         pos="fixed"
//         top="0"
//         left="0"
//         overflowY="auto"
//         flexDir="column"
//       >
//         <Flex justify="flex-end">
//           <IconButton
//             mt={2}
//             mr={2}
//             aria-label="Open Menu"
//             size="lg"
//             icon={<CloseIcon />}
//             onClick={() => changeDisplay("none")}
//           />
//         </Flex>

//         <Flex flexDir="column" align="center">
//           <NextLink href="/" passHref>
//             <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
//               Home
//             </Button>
//           </NextLink>

//           <NextLink href="/about" passHref>
//             <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
//               About
//             </Button>
//           </NextLink>

//           <NextLink href="/contact" passHref>
//             <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
//               Contact
//             </Button>
//           </NextLink>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };
