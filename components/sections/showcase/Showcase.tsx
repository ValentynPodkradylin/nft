import { Box, Heading, keyframes, useColorModeValue } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Autoplay, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgs } from "./imgs";
import { NftItem } from "./NftItem";

const spinLeft = keyframes`
  0% {transform: translateX(0%);}
  100% {transform: translateX(-100%)}
`;

const spinRight = keyframes`
  from {transform: translateX(-100%);}
  to {transform: translateX(100%)}
`;

export const Showcase = () => {
  const textShadow = useColorModeValue(
    " 0 0 5px #fff000, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de",
    " 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff, 0 0 10px #0000ff"
  );

  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      as="section"
      minH={["50vh", "70vh", "100vh", "100vh"]}
      w="100vw"
      // bgGradient={"linear-gradient(my-pink 0%, my-violet 100%)"}
      bgGradient={"linear-gradient(my-turquoise-dark 0%, my-pink 100%)"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
      py="20px"
      position="relative"
    >
      <Heading
        as="h3"
        fontSize={"5xl"}
        display="flex"
        marginBottom={"50px"}
        justifyContent={"center"}
        fontFamily={'"Sedgwick Ave Display", cursive'}
        textShadow={textShadow}
      >
        Tiers
      </Heading>
      {/* <Box
        boxSizing="border-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        animation={`${spinLeft} infinite 10s linear`}
        gap={5}
        ref={topRowRef}
      >
        {[...imgs, ...imgs].map(({ img, tiers }, index) => (
          <NftItem
            key={index.toString()}
            name={tiers}
            img={img.src}
            number={"0"}
            price={"0"}
            passRef={topRowRef}
          />
        ))}
      </Box> */}
      <Swiper
        loop={true}
        speed={5000}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiperShowcase"
      >
        {imgs.slice(0, 5).map(({ img, tiers }, index) => (
          <SwiperSlide key={index.toString()}>
            <NftItem
              name={tiers}
              img={img.src}
              number={"0"}
              price={"0"}
              passRef={topRowRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        speed={5000}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        initialSlide={2}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiperShowcaseRowTwo"
      >
        {imgs.slice(5, 10).map(({ img, tiers }, index) => (
          <SwiperSlide key={index.toString()}>
            <NftItem
              name={tiers}
              img={img.src}
              number={"0"}
              price={"0"}
              passRef={topRowRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        loop={true}
        speed={5000}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiperShowcase1"
      >
        {imgs.slice(5, 10).map(({ img, tiers }, index) => (
          <SwiperSlide key={index.toString()}>
            <NftItem
              name={tiers}
              img={img.src}
              number={"0"}
              price={"0"}
              passRef={topRowRef}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      {/* <Box
        boxSizing="content-box"
        my="2rem"
        whiteSpace={"nowrap"}
        display={"flex"}
        gap={5}
        ref={bottomRowRef}
      >
        {imgs.slice(5, 10).map(({ img, tiers }, index) => (
          <NftItem
            key={index.toString()}
            name={tiers}
            img={img.src}
            number={"0"}
            price={"0"}
            passRef={bottomRowRef}
          />
        ))}
      </Box> */}
    </Box>
  );
};
