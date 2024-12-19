import type { AppProps } from "next/app";
import Head from 'next/head';
import "@/app/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Christopher Norkett</title>
        <meta name="description" content="Coding challenge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
