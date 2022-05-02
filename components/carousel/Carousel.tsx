import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper";
import img from "./../../images/photo_1.jpg";
import img1 from "./../../images/photo_3.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { Box, chakra, Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Box
      w={["60vw", "50vw", "25vw", "25vw"]}
      h={["40vh", "60vh", "75vh", "75vh"]}
    >
      <ChakraSwiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        observer={true}
        observeParents={true}
        // observer: true,
        // observeParents: true,
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        scrollbar={{
          draggable: true,
        }}
      >
        <SwiperSlide>
          <Image w="100%" h="100%" src={img.src} alt="image" boxShadow={"md"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            w="100%"
            h="100%"
            src={img1.src}
            alt="image"
            boxShadow={"md"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img.src} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img1.src} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img.src} alt="image" />
        </SwiperSlide>
      </ChakraSwiper>
    </Box>
  );
};

const ChakraSwiper = chakra(Swiper, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

export default Carousel;
