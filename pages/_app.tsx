import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { Reset } from "styled-reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-h-full w-full max-w-xl bg-black">
      <Component {...pageProps} />
      <div className="flex justify-end py-2 pr-2 text-white">
        Designed by David
      </div>
    </div>
  );
}

export default MyApp;
