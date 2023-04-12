import type { NextPage } from "next";
import Head from "next/head";

import Header from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Pricing } from "~/components/Pricing";
import { PrimaryFeatures } from "~/components/PrimaryFeatures";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyCartage</title>
        <meta name="description" content="Airfreight TMS with Gps Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
      </main>
    </>
  );
};

export default Home;
