import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: "Akaya Telivigala, cursive",
  heading: "Akaya Telivigala, cursive",
  color: "#ffffff",
};

const breakpoints = createBreakpoints({
  // [sm, md, lg, xl, 2xl]
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

const semanticTokens = {
  colors: {
    primary: {
      default: "#fab3ff",
      _dark: "gray.500",
    },
    "primary-dark": "#c682cc",
    "primary-light": "#ffe6ff",
    secondary: {
      default: "#b3fffa",
      _dark: "gray.500",
    },
    "secondary-dark": "#81ccc7",
    "secondary-light": "#e7ffff",
    tertiary: "#cdb2ff",
    "tertiary-dark": "#9b82cc",
    "tertiary-light": "#ffe4ff",
  },
};

const overrides = {
  ...chakraTheme,
  fonts,
  semanticTokens,
};

export const customTheme = extendTheme(overrides);
