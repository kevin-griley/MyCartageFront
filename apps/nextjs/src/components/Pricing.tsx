import { useRef, type FC } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { CheckIcon } from "~/components/CheckIcon";
import { Container } from "~/components/Container";
import { GridPattern } from "~/components/GridPattern";

interface PlanProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  featured?: boolean;
}

const Plan: FC<PlanProps> = ({
  name,
  description,
  price,
  features,
  featured,
}) => {
  return (
    <div
      className={clsx(
        "sm:rounded-5xl relative px-4 py-16 sm:px-10 md:py-12 lg:px-12",
        featured && "bg-teal-400 sm:shadow",
      )}
    >
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            "mt-7 text-lg font-semibold tracking-tight",
            featured ? "text-slate-900" : "text-slate-900",
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            "mt-2 text-lg tracking-tight",
            featured ? "text-slate-600" : "text-slate-600",
          )}
        >
          {description}
        </p>
        <p className="font-display order-first flex font-bold">
          <span
            className={clsx(
              "text-[1.75rem] leading-tight",
              featured ? "text-slate-500" : "text-slate-500",
            )}
          >
            $
          </span>
          <span
            className={clsx(
              "ml-1 mt-1 text-7xl tracking-tight",
              featured ? "text-slate-900" : "text-slate-900",
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              "-my-2 divide-y text-base tracking-tight",
              featured
                ? "divide-slate-50/10 text-slate-900"
                : "divide-slate-300 text-slate-900",
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    "h-8 w-8 flex-none",
                    featured ? "fill-slate-600" : "fill-slate-600",
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export function Pricing() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const isInView2 = useInView(ref2, {
    once: true,
  });

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 lg:pb-16"
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
        <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Simple, transparent pricing.
        </p>
        <p
          ref={ref}
          className="mt-4 max-w-xl text-lg tracking-tight text-slate-600"
        >
          We believe in transparency and simplicity. Get all the current
          features for a low monthly fee.
          <br />
          <b>Join now and get free migration from your current system!</b>
        </p>
      </Container>
      <div
        ref={ref2}
        style={{
          transform: isInView || isInView2 ? "none" : "translateY(300px)",
          opacity: isInView || isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="mx-auto mt-16 max-w-5xl lg:px-6"
      >
        <div className="md:rounded-6xl grid bg-slate-200 sm:px-6 sm:pb-16 md:grid-cols-2 md:px-8 md:pt-16 lg:p-20">
          <Plan
            featured
            name="/ Per Active User Monthly*"
            description="User count is based on the number of users who have logged in to the service in the last billing period."
            price={5}
            features={[
              "GPS wait-time tracking",
              "Wait-time notifications",
              "Dispatching and routing",
              "Invoice and payment management",
              "Customer Payment Processing",
            ]}
          />
          <Plan
            name="Monthly Base Fee"
            description="We only host this service on the most premium servers such as AWS, Azure, and Google Cloud."
            price={500}
            features={[
              "Customer Portals",
              "Customized development",
              "Continued updates",
              "Cloud infrastructure",
              "24/7 support and monitoring",
            ]}
          />
        </div>
      </div>
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
