import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
