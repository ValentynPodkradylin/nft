import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" />
          <meta name="description" content="..." />
          <meta name="robots" content="all" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="author" content="rtutii" />
          <meta
            name="keywords"
            content="NFT, DontGiveFuckBoi, web3.0 Next React Html Landing"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
