import Image from "next/image";
import Link from "next/link";
import { Coins, Factory, HelpCircle } from "lucide-react";

import { IconLink } from "~/components/IconLink";
import Logo from "~/images/logos/MyCartage-slogan.png";

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  );
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Image src={Logo} alt="MyCartage-logo" width={400} height={100} />
        </Link>
      </div>
      <h1 className="font-display mt-14 text-4xl/tight font-light text-white">
        Airfreight Trucking TMS
      </h1>
      <h1 className="font-display text-4xl/tight font-light text-teal-300">
        GPS Focused Solutions
      </h1>
      <h1 className="font-display text-3xl/tight font-light text-white">
        Next Generation Technology
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        MyCartage is a cloud-based TMS that provides a complete solution for
        airfreight trucking companies. We provide a GPS focused solution to
        manage your fleet, drivers, and shipments. Our technology is designed to
        help you run your business more efficiently and profitably.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="/docs" icon={BookIcon} className="flex-none">
          Docs
        </IconLink>
        <IconLink href="/#pricing" icon={Coins} className="flex-none">
          Pricing
        </IconLink>
        <IconLink href="/about" icon={Factory} className="flex-none">
          About
        </IconLink>
        <IconLink href="/#FAQ" icon={HelpCircle} className="flex-none">
          FAQs
        </IconLink>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="https://app.mycartage.com"
          className="rounded-md bg-zinc-100 px-20 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get started
        </Link>
      </div>
    </>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      &copy; Copyright {new Date().getFullYear()}. All rights reserved.{" "}
      <IconLink href="/" icon={"/favicon.ico"} compact large>
        MyCartage
      </IconLink>
    </p>
  );
}
