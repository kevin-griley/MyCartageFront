import Image from "next/image";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import screenshotInventory from "~/images/screenshots/photoTwo.png";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Collaboration made simple
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Work together, not harder
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                Our goal is to bring your teams together to work more
                efficiently. Its a simple solution to a complex problem. By
                using our platform, you can collaborate with your team and your
                customers, together. Which add more trust and transparency to
                your business.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
            src={screenshotInventory}
            alt="Collaboration"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                It&apos;s so simple its like using google sheets. A shared view
                of data, with designed workflows to help you get the job done.
                We make it easy to learn and use, so you can focus on what
                matters. But you get the power of a full featured TMS, with all
                the features you need to grow your business. We beleive its
                truly the best of both worlds.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Cloud Access.
                    </strong>{" "}
                    Everyone has access to the same data, at the same time. Get
                    your customers and your dispachers and your drivers all on
                    the same page. Working together, not harder.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Secured Access.
                    </strong>{" "}
                    Control who has access to what. We use the latest security.
                    Sessions are managed by Azure Active Directory. No one can
                    access your data without your permission.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Database Integration.
                    </strong>{" "}
                    A globally served API. Not only can you access everything,
                    But so can your customers. Its truly a collaboration
                    platform. From order entry, to delivery details, to
                    receiving payments. You are working together, not harder.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">
                With the countless other TMS solutions out there, why choose
                MyCartage?
              </h2>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                We&apos;re glad you asked. We&apos;ve been in the transportation
                industry for over 50 years. We have learned that good service
                matters. We beleive that our methods open up the door to a
                better way of doing business. Sharing your data, and working
                together, not harder. We&apos;ve built a platform that is
                purpose built to improve communication and collaboration for the
                trucking industry. Getting your customers and your drivers on
                the same page is the simplest way to solve daily problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
