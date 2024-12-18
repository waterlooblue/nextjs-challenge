import type { AppProps } from "next/app";
import "@/app/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
