import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, chakra, Image } from "@chakra-ui/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { imgsJPG, imgsWEBP } from "./images";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Carousel = () => {
  return (
    <motion.div initial="hidden" whileInView="visible">
      <Box
        as={motion.div}
        variants={anim}
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
        </ChakraSwiper>
      </Box>
    </motion.div>
  );
};

const ChakraSwiper = chakra(Swiper, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

export default Carousel;
