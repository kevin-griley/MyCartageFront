import "../styles/globals.css";
import "../styles/mdx.css";
import type { AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
