import "@fontsource/sora";
import "./../styles/global.css";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/theme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
