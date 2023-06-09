import { useId, useRef, type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { Container } from "~/components/Container";
import screenshotContacts from "~/images/screenshots/Business_Home.png";
import screenshotInventory from "~/images/screenshots/Movement_Bills.png";
import screenshotProfitLoss from "~/images/screenshots/Stripe_Payments.png";

const features: {
  name: string | JSX.Element;
  summary: string;
  description: string;
  image: StaticImageData;
  icon: () => JSX.Element;
}[] = [
  {
    name: "Load Tracking",
    summary:
      "Never lose track of what your need to transport and make sure its billed.",
    description:
      "We have a full system of smart notifications to make sure you never miss a beat. We also have a full suite of reports to make sure you are getting paid for everything you haul.",
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      );
    },
  },
  {
    name: "Reporting",
    summary:
      "Deep dive BI in a box. Get the data you need to make the right decisions.",
    description:
      "We have a full suite of reports to disect every possible angle of your business. Know who is performing and who is not.",
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      const id = useId();
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    },
  },
  {
    name: "Communication",
    summary: "We makes staying in touch with your drivers and customers easy.",
    description:
      "We have a full suite of communication tools to make sure you are always in touch with your drivers and customers. Just like your phone, but better.",
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      );
    },
  },
];

interface FeatureProps {
  feature: (typeof features)[number];
  isActive: boolean;
  className?: string;
}

const Feature: FC<FeatureProps> = ({
  feature,
  isActive,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(className, !isActive && "opacity-80 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "w-9 rounded-lg",
          isActive ? "bg-teal-600" : "bg-slate-500",
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          "mt-6 text-sm font-medium",
          isActive ? "text-teal-700" : "text-slate-600",
        )}
      >
        {feature.name as string}
      </h3>
      <p className="font-display mt-2 text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
};

interface FeaturesProps {
  isInView: boolean;
}

function FeaturesMobile({ isInView }: FeaturesProps) {
  const ref = useRef(null);
  const isInView2 = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView || isInView2 ? "none" : "translateY(300px)",
        opacity: isInView || isInView2 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
    >
      {features.map((feature) => (
        <div key={feature.name as string}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl ">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
                quality={100}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop({ isInView }: FeaturesProps) {
  const ref = useRef(null);
  const isInView2 = useInView(ref, {
    once: true,
  });

  return (
    <Tab.Group
      ref={ref}
      style={{
        transform: isInView || isInView2 ? "none" : "translateY(300px)",
        opacity: isInView || isInView2 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      as="div"
      className="hidden lg:mt-20 lg:block"
    >
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name as string}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name as string}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="rounded-4xl relative mt-20 overflow-hidden bg-slate-200 px-14 py-4 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name as string}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                    featureIndex !== selectedIndex && "opacity-60",
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[70rem] overflow-hidden rounded-xl">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="70rem"
                      quality={100}
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="rounded-4xl pointer-events-none absolute inset-0 " />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}

export function SecondaryFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="relative pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Is Turnover a Problem?
          </h2>
          <p ref={ref} className="mt-4 text-lg tracking-tight text-slate-700">
            One of the main reasons for employee unhappiness is bad
            communication. We can help you fix that. With Customer Access
            Portal, Automation Dispatch Alerts, and Advanced Integration
            Features, your employees will be able to communicate with each
            other, the customers and the drivers effortlessly.
          </p>
        </div>
        <FeaturesMobile isInView={isInView} />
        <FeaturesDesktop isInView={isInView} />
      </Container>
      <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute bottom-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 rotate-180 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </section>
  );
}
