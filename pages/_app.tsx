import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((response) => response.json()),
      }}
    >
      <div className="mx-auto w-full max-w-lg">
        <Component {...pageProps} />
      </div>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
    </SWRConfig>
  );
}

export default MyApp;
