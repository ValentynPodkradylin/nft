import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Flex,
  useColorMode,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface FaqProps {
  text: {
    accordionTitle: string;
    accordionText: string;
  }[];
}

export const Faq = (props: FaqProps) => {
  const { text } = props;

  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  return (
    <Box
      as="section"
      w="100vw"
      flexDirection="column"
      position={"relative"}
      p={"20px"}
      id="faq"
      bg={"my-pink"}
    >
      <Heading
        as="h2"
        mx="auto"
        width={"fit-content"}
        textShadow={textShadow}
        textTransform={"uppercase"}
        fontFamily={'"Sedgwick Ave Display", cursive'}
      >
        Faq
      </Heading>
      <Center
        flexDir={["column", "column", "row", "row"]}
        justifyContent="space-between"
        w="80%"
        h="100%"
        margin="30px auto"
      >
        <Accordion allowToggle w={["100%", "100%", "45%", "45%"]}>
          {text.slice(0, 3).map((accordionContent) => (
            <AccordionItem key={accordionContent.accordionText}>
              <h2>
                <AccordionButton _expanded={{ border: "none" }}>
                  <Box flex="1" textAlign="left">
                    {accordionContent.accordionTitle}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {accordionContent.accordionText}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion allowToggle w={["100%", "100%", "45%", "45%"]}>
          {text.slice(3, 6).map((accordionContent) => (
            <AccordionItem key={accordionContent.accordionText}>
              <h2>
                <AccordionButton _expanded={{ border: "none" }}>
                  <Box flex="1" textAlign="left">
                    {accordionContent.accordionTitle}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {accordionContent.accordionText}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Center>
    </Box>
  );
};
