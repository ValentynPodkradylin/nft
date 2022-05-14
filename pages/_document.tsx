import NextDocument, { Head, Html, Main, NextScript } from "next/document";

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={""}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
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
