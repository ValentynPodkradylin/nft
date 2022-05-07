import "@fontsource/sora";
import "@fontsource/sedgwick-ave-display";
import "./../styles/global.css";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/theme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  }
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
