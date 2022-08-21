import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto h-full w-full max-w-xl bg-black">
      <Component {...pageProps} />
      <div className="flex justify-end py-2 text-white">Designed by David</div>
    </div>
  );
}

export default MyApp;

// w-full max-w-xl mx-auto //
