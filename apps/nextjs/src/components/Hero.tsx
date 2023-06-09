import { useRef, type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useMediaQuery } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

import { AppScreen } from "~/components/AppScreen";
import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import { PhoneFrame } from "~/components/PhoneFrame";
import MyCartageLarge from "~/images/logos/MyCartage-large.png";
import ceva_logo from "~/images/logos/ceva_logo-cropped.svg";
import dhl_logo from "~/images/logos/dhl_logo-cropped.svg";
import dsv_logo from "~/images/logos/dsv_logo-cropped.svg";
import expeditors_logo from "~/images/logos/expeditors_logo-cropped.svg";
import fedex_logo from "~/images/logos/fedex_logo-cropped.svg";
import flexport_logo from "~/images/logos/flexport_logo-cropped.svg";
import kuehne_nagel_logo from "~/images/logos/kuehne_nagel_logo-cropped.svg";
import lynden_logo from "~/images/logos/lynden_logo-cropped.svg";
import { CircleBackground } from "./CircleBackground";

type BackgroundIllustrationProps = React.HTMLAttributes<HTMLDivElement>;

const BackgroundIllustration: React.FC<BackgroundIllustrationProps> = (
  props,
) => {
  return (
    <div {...props}>
      <CircleBackground
        color="#D4D4D4"
        className="animate-spin-slow absolute inset-0 m-auto"
        height={1000}
        width={1000}
        opacity={0.5}
      />

      <CircleBackground
        color="#D4D4D4"
        className="animate-spin-slow absolute inset-0 m-auto"
        height={850}
        width={850}
        opacity={0.5}
      />

      <CircleBackground
        color="#D4D4D4"
        className="animate-spin-slow absolute inset-0 m-auto  hidden sm:block"
        height={700}
        width={700}
        opacity={0.5}
      />

      <CircleBackground
        color="#D4D4D4"
        className="animate-spin-slow absolute inset-0 m-auto hidden lg:block"
        height={550}
        width={550}
        opacity={0.5}
      />
    </div>
  );
};

const AppDemo: FC = () => {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs font-semibold leading-6 text-gray-600">
              MyCartage - GPS Tracking Solutions
            </div>
            <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <Image
              src={MyCartageLarge}
              alt="Ceva"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4 rounded-lg bg-teal-500 px-4 py-2 text-center text-sm font-semibold text-zinc-100">
              LET&apos;S BOOST AHEAD
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Profits</div>
                <div className="font-medium text-gray-900">
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                </div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Efficiency</div>
                <div className="font-medium text-gray-900">
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                </div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Culture</div>
                <div className="font-medium text-gray-900">
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                </div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Happiness</div>
                <div className="font-medium text-gray-900">
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                  <ArrowUpIcon className="inline h-4 w-4 text-teal-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  );
};

export function Hero() {
  interface Logo {
    name: string;
    logo: StaticImageData;
    height: number;
  }

  const logos: Logo[] = [
    { name: "Expeditors", logo: expeditors_logo, height: 35 },

    { name: "Kuehne & Nagel", logo: kuehne_nagel_logo, height: 35 },

    { name: "Ceva", logo: ceva_logo, height: 25 },

    { name: "Flexport", logo: flexport_logo, height: 35 },

    { name: "DSV", logo: dsv_logo, height: 27 },

    { name: "Lynden", logo: lynden_logo, height: 30 },

    { name: "Fedex", logo: fedex_logo, height: 30 },

    { name: "DHL", logo: dhl_logo, height: 25 },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1100], ["0%", "100%"]);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Airfreight TMS
            </h1>
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              GPS Focused Solutions
            </h1>
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Next Generation Trucking Software
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We have listened to you all... <br />
              <span className="font-semibold text-gray-900">
                {" "}
                Automatic onsite wait-time recording at shipper and consingnee.{" "}
              </span>{" "}
              In full realtime mode. Next generation technology to help you
              boost productivity and profits.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link href="https://app.mycartage.com">
                <Button>
                  Get Started
                  <ChevronRightIcon className="ml-2 inline h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="ghost">
                  See Features
                  <ChevronRightIcon className="ml-2 inline h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <motion.div
            style={matches ? { y } : {}}
            className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"
          >
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </motion.div>

          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Proudly serving the Top Forwarders in the World, including:
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {logos.map(({ name, logo, height }) => (
                <li key={name}>
                  <Image src={logo} alt={name} height={height} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
