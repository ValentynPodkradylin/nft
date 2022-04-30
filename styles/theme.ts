import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: "Sora, sans-serif",
  heading: "Sora, sans-serif",
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const semanticTokens = {
  colors: {
    primary: {
      default: "#fab3ff",
      _dark: "gray.500",
    },
    "primary-dark": "#c682cc",
    "primary-light": "#ffe6ff",
    secondary: "#b3fffa",
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
