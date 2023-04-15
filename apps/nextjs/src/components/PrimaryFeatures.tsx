import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "~/components/Container";
import screenshotVatReturns from "~/images/screenshots/photoFour.png";
import screenshotExpenses from "~/images/screenshots/photoOne.png";
import screenshotReporting from "~/images/screenshots/photoThree.png";
import screenshotPayroll from "~/images/screenshots/photoTwo.png";

const features = [
  {
    title: "GPS Wait Time Tracking",
    description:
      "Our software will track how long your vehicles are at the shipper and the consignee and give you clear and concise methods for charging wait time or showing proof of time detention.",
    image: screenshotPayroll,
  },
  {
    title: "Modern Web Dispatching",
    description:
      "Get secure access to your dispatching software from any device with a modern web browser. No need to install anything.",
    image: screenshotExpenses,
  },
  {
    title: "Invite Everyone + Customers",
    description:
      "Invite your drivers, dispatchers, and office staff to access the software. We have different roles for each user type. You can even invite your customers to view their invoices and track their shipments.",
    image: screenshotVatReturns,
  },
  {
    title: "Integrations & Backups",
    description:
      "Let all your customers integrate with your software. We have a full API and can integrate with any system. We also backup your data every day so you never have to worry about losing your data.",
    image: screenshotReporting,
  },
];

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState("horizontal");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your trucking operation"
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 from-10% via-slate-950 via-30% to-slate-900 to-90% pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display mt-8 text-5xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl">
            GPS Check... Only what you need
          </h2>
          <p className="mt-6 text-lg tracking-tight text-zinc-200">
            We are just building the features you want. This is a full fledged
            TMS for trucking companies. We cover everything from dispatching to
            invoicing. We even have a mobile app for drivers.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:mx-6 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-hidden sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-xl lg:p-6",
                        selectedIndex === featureIndex &&
                          "bg-zinc-50/10 lg:bg-zinc-50/10 lg:ring-1 lg:ring-inset lg:ring-white/10",
                      )}
                      onMouseEnter={() => setHoveredIndex(featureIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <AnimatePresence>
                        {selectedIndex !== featureIndex &&
                          hoveredIndex === featureIndex && (
                            <motion.span
                              className="absolute inset-0 -z-10 rounded-lg bg-zinc-50/5"
                              layoutId="hoverBackground"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: 1,
                                transition: { duration: 0.15 },
                              }}
                              exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                              }}
                            />
                          )}
                      </AnimatePresence>

                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-slate-600 lg:text-zinc-100"
                              : "text-zinc-200 hover:text-zinc-100 lg:text-zinc-100",
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-zinc-100"
                            : "text-zinc-200 group-hover:text-zinc-100",
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-zinc-50/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-zinc-100 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl sm:-mx-14 sm:w-screen lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        quality={100}
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
