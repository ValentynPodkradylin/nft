import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import page10 from "./../../images/whitelist/10.png";
import page11 from "./../../images/whitelist/11.png";
import page12 from "./../../images/whitelist/12.png";
import page13 from "./../../images/whitelist/13.png";
import page14 from "./../../images/whitelist/14.png";
import page3 from "./../../images/whitelist/3.png";
import page4 from "./../../images/whitelist/4.png";
import page5 from "./../../images/whitelist/5.png";
import page6 from "./../../images/whitelist/6.png";
import page7 from "./../../images/whitelist/7.png";
import page8 from "./../../images/whitelist/8.png";
import page9 from "./../../images/whitelist/9.png";
import bg from "./../../images/bg.jpg";

const pagesImg = [
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
];

const anim = keyframes`
  0%, 100% {
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

`;

export const Banner = () => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 760px)");
  return (
    <Box id="whitepaper">
      {isLargerThanLg ? (
        <Box
          minH="100vh"
          bgGradient="linear-gradient(my-violet-dark 0%, my-turquoise-dark 100%)"
        >
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiperWhitpaper"
          >
            {pagesImg.map((pageImg, index) => (
              <SwiperSlide key={pageImg.src}>
                <Image
                  objectFit={"cover"}
                  src={pageImg.src}
                  alt={`whitepaper-page-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Center
          overflow={"hidden"}
          as="section"
          w="100vw"
          h={["15rem", "15rem", "25rem", "25rem"]}
          bg="my-violet-dark"
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
            justifyContent={"center"}
            alignItems="center"
            w="80%"
            h="80%"
            mx={"auto"}
          >
            <Button
              as="a"
              size="lg"
              py="30px"
              px="50px"
              target={"_blank"}
              colorScheme={"telegram"}
              textTransform={"uppercase"}
              animation={`${anim} 2s infinite`}
              href="https://www.canva.com/design/DAE_K8f96lI/vVhSOm-iNZ53SqHQOeMJVg/view?utm_content=DAE_K8f96lI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            >
              whitepaper
            </Button>
          </Flex>
        </Center>
      )}
    </Box>
  );
};
