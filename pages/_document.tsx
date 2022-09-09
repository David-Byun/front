import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    console.log("Document is running");
    return (
      <Html lang="ko">
        <Head>
          <link />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
