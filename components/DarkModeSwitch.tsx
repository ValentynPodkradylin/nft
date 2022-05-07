import React from "react";
import { useColorMode, IconButton, ColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export type IconColorMode<T extends ColorMode = ColorMode> = { [K in T]: K };

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode);

  const iconColor: IconColorMode = {
    light: "light",
    dark: "dark",
  };

  return (
    <IconButton
      zIndex={1000}
      aria-label="Toggle dark home"
      bg="transparent"
      icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      _hover={{
        bg: "my-pink-dark",
      }}
    />
  );
};

export default DarkModeSwitch;
