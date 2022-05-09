import {
  extendTheme,
  theme as chakraTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: "'Akaya Telivigala', cursive",
  heading: "'Akaya Telivigala', cursive",
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
    "my-pink": {
      default: "#fab3ff",
      _dark: "gray.500",
    },
    "my-pink-dark": "#c682cc",
    "my-pink-light": "#ffe6ff",
    "my-turquoise": {
      default: "#b3fffa",
      _dark: "gray.500",
    },
    "my-turquoise-dark": "#81ccc7",
    "my-turquoise-light": "#e7ffff",
    "my-violet": "#cdb2ff",
    "my-violet-dark": "#9b82cc",
    "my-violet-light": "#ffe4ff",
    "my-green": "#d4ffb7",
    "my-green-dark": "#a2cc87",
  },
};

const overrides = {
  ...chakraTheme,
  fonts,
  semanticTokens,
};

export const customTheme = extendTheme({
  ...overrides,
  styles: {
    global: {
      body: {
        color: "white",
        body: "'Akaya Telivigala', cursive",
        heading: "'Akaya Telivigala', cursive",
      },
    },
  },
});
