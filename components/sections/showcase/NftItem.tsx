import { Box, Image } from "@chakra-ui/react";
import {
  RefObject,
  FC,
  MouseEvent,
  useRef,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useHover } from "../../../hooks";
import { Tiers } from "./imgs";

type NftItemProps = {
  img: string;
  number: string;
  price: string;
  name: Tiers;
  passRef: RefObject<HTMLDivElement>;
};

export const NftItem: FC<NftItemProps> = (props) => {
  const { img, name, passRef } = props;

  const textShadow = useMemo(() => {
    switch (name) {
      case "big boi":
        return "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 2px #81ccc7, 0 0 5px #81ccc7, 0 0 15px #81ccc7";
      case "half boi":
        return " 0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 2px #ff00de, 0 0 5px #ff00de, 0 0 15px #ff00de";
      case "lil boi":
        return "0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 2px #9b82cc, 0 0 5px #9b82cc, 0 0 15px #9b82cc";
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const isHover = useHover(ref);

  const play = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (passRef.current) {
      passRef.current.style.animationPlayState = "running";
    }
  };
  const pause = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (passRef.current) {
      passRef.current.style.animationPlayState = "paused";
    }
  };

  return (
    <Box
      ref={ref}
      onMouseOver={pause}
      onMouseOut={play}
      position={"relative"}
      mx="auto"
      transform={isHover ? "scale(1.1)" : "scale(1)"}
      transition="all .1s ease"
      w={["8rem", "10rem", "15rem", "15rem"]}
    >
      <Image
        borderRadius={"40px"}
        w={"100%"}
        h={"auto"}
        src={img}
        alt={`tiers-img-${img}`}
      />
      <Box
        position={"absolute"}
        fontFamily={"Sedgwick Ave Display, cursive"}
        bottom={0}
        right={"50%"}
        fontSize={["20", "25", "30", "30"]}
        textTransform="uppercase"
        transform={"translateX(50%) rotate(-10deg)"}
        textShadow={textShadow}
      >
        {name}
      </Box>
    </Box>
  );
};
