import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  FingerPrintIcon,
  MapIcon,
  SquaresPlusIcon,
  TableCellsIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

import MyCartageLogo from "~/images/logos/MyCartage-logo.png";

const products = [
  {
    name: "GPS Tracking",
    description: "Track your shipments in real-time",
    href: "/features#gps-tracking",
    icon: MapIcon,
  },
  {
    name: "Mobile Applications",
    description: "Smart phone apps for drivers and dispatchers",
    href: "/features#mobile-applications",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Security",
    description: "Auth managed by Azure Active Directory",
    href: "/features#advanced-security",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with Customers & 3rd Party Systems",
    href: "/features#integrations",
    icon: SquaresPlusIcon,
  },
  {
    name: "Modern Dispatching",
    description: "Dispatching for the Modern Age",
    href: "/features#modern-dispatching",
    icon: TableCellsIcon,
  },
  {
    name: "Custom Invoicing",
    description: "Custom Invoicing for your Customers",
    href: "/features#custom-invoicing",
    icon: BuildingLibraryIcon,
  },
];
const callsToAction = [
  { name: "Contact sales", href: "https://app.mycartage.com", icon: PhoneIcon },
];
const company = [
  {
    name: "About us",
    href: "/about",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Documentation",
    href: "/docs",
    description:
      "Get help with all of our products and services, including our API",
  },
  {
    name: "Blog",
    href: "/blog",
    description:
      "Read our latest announcements and get perspectives from our team",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndexFeatures, setHoveredIndexFeatures] = useState<
    number | null
  >(null);
  const [hoveredIndexCompany, setHoveredIndexCompany] = useState<number | null>(
    null,
  );

  return (
    <header className="bg-gray-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MyCartage</span>
            <Image
              src={MyCartageLogo}
              alt="MyCartage-Logo"
              height={45}
              width={240}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="z-20 hidden lg:flex lg:gap-x-8">
          <Popover
            className="relative"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === 0 && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-slate-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Popover.Button className="relative flex items-center gap-x-1 px-3 py-2 leading-6 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
              Features
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item, index) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6"
                      onMouseEnter={() => setHoveredIndexFeatures(index)}
                      onMouseLeave={() => setHoveredIndexFeatures(null)}
                    >
                      <AnimatePresence>
                        {hoveredIndexFeatures === index && (
                          <motion.span
                            className="absolute inset-0 -z-10 rounded-lg bg-slate-100 "
                            layoutId="hoverBackground2"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0, delay: 0 },
                            }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-100 ">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-teal-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-slate-100">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-200"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover
            className="relative"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === 1 && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-slate-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Popover.Button className="relative flex items-center gap-x-1 px-3 py-2 leading-6 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
              Company
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4"
                    onMouseEnter={() => setHoveredIndexCompany(index)}
                    onMouseLeave={() => setHoveredIndexCompany(null)}
                  >
                    <AnimatePresence>
                      {hoveredIndexCompany === index && (
                        <motion.span
                          className="absolute inset-0 -z-10 rounded-lg bg-slate-100 "
                          layoutId="hoverBackground3"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0 },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0, delay: 0 },
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <Link
                      href={item.href}
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/#pricing"
            className="relative px-3 py-2 leading-6 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === 2 && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-slate-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">Pricing</span>
          </Link>

          <Link
            href="/#FAQ"
            className="relative px-3 py-2 leading-6 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === 3 && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-slate-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">FAQs</span>
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://app.mycartage.com"
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={MyCartageLogo}
                  alt="MyCartage-Logo"
                  height={45}
                  width={240}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-100"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-100">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-teal-600"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    href="/#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-100"
                  >
                    Industry
                  </Link>
                  <Link
                    href="/#pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-100"
                  >
                    Pricing
                  </Link>

                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="https://app.mycartage.com"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-100"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-1 divide-x divide-gray-900/5 bg-slate-100 text-center">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
