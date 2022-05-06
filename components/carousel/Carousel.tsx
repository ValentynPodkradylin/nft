import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, chakra, Image } from "@chakra-ui/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { imgsJPG, imgsWEBP } from "./images";

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
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        scrollbar={{
          draggable: true,
        }}
      >
        {imgsJPG.map((img, index) => (
          <SwiperSlide key={`swiper-img-${index}`}>
            <chakra.picture w="100%" h="100%">
              <source srcSet={imgsWEBP[index].src} type="image/webp" />
              <Image
                w="100%"
                h="100%"
                src={img.src}
                alt={`swiper-img-${index}`}
              />
            </chakra.picture>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Image
            w="100%"
            h="100%"
            src={img1.src}
            alt="image"
            boxShadow={"md"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            w="100%"
            h="100%"
            src={img5.src}
            alt="image"
            boxShadow={"md"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img4.src} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img1.src} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h="100%" src={img3.src} alt="image" />
        </SwiperSlide> */}
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
