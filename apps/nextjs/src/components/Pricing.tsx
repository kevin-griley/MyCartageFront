import { type FC } from "react";
import clsx from "clsx";

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
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
      )}
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
                ? "divide-white/50 text-slate-900"
                : "divide-slate-200 text-slate-900",
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
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 lg:pb-16"
    >
      <Container>
        <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Simple, transparent pricing.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          We believe in transparency and simplicity. Get all the current
          features for a low monthly fee.
          <br />
          <b>Join now and get free migration from your current system!</b>
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="md:rounded-6xl grid bg-slate-100 sm:px-6 sm:pb-16 md:grid-cols-2 md:px-8 md:pt-16 lg:p-20">
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
    </section>
  );
}
