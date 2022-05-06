import "@fontsource/sora";
import "@fontsource/sedgwick-ave-display";
import "./../styles/global.css";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/theme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
