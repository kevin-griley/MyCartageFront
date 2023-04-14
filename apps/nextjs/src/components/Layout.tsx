import { useId, type FC } from "react";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { Intro, IntroFooter } from "~/components/Intro";

function Timeline() {
  const id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
      <svg
        className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function Glow() {
  const id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
    </div>
  );
}

function FixedSidebar() {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:pt-6">
          <div className="flex flex-1 items-start justify-center pb-4 lg:justify-start lg:pb-6">
            <Link
              href="/"
              className="flex items-center space-x-2 text-lg font-medium tracking-tight text-zinc-300 hover:text-zinc-200"
            >
              <span className="sr-only">Back to</span>
              <span className="flex items-center gap-x-1 text-2xl font-bold leading-6 tracking-tighter">
                <ChevronLeftIcon className="mr-2 h-6 w-6 flex-none text-gray-400" />

                <span>
                  {" "}
                  Back to
                  <span className="font-extrabold tracking-normal text-teal-300">
                    {" "}
                    MyCartage{" "}
                  </span>
                  Home{" "}
                </span>
              </span>
              <span className="sr-only">homepage</span>
            </Link>
          </div>
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <div className="relative">
              <Intro />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            <IntroFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <FixedSidebar />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 bg-slate-950 py-20 text-zinc-300 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </>
  );
};
