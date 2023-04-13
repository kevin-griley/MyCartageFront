import type { NextPage } from "next";
import Head from "next/head";

import { CallToAction } from "~/components/CallToAction";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Pricing } from "~/components/Pricing";
import { PrimaryFeatures } from "~/components/PrimaryFeatures";
import { SecondaryFeatures } from "~/components/SecondaryFeatures";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyCartage</title>
        <meta name="description" content="Airfreight TMS with Gps Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
