import Head from "next/head";

import CallToAction2 from "~/components/CallToAction2";
import { Content } from "~/components/Content";
import { FAQ } from "~/components/FAQ";
import { FeaturesOne } from "~/components/FeaturesOne";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ImageSpread } from "~/components/ImageSpread";

export default function Featues() {
  return (
    <>
      <Head>
        <title>About - MyCartage TMS</title>
        <meta name="description" content="Airfreight TMS with Gps Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex min-h-screen flex-col">
        <FeaturesOne />
        <CallToAction2 />
        <Content />

        <FAQ />
        <ImageSpread />
      </main>
      <Footer />
    </>
  );
}
