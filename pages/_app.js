import Head from "next/head";
import { SocialMedia } from "../components/SocialMedia";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <SocialMedia />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
