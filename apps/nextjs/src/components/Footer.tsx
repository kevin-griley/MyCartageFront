import Image from "next/image";
import Link from "next/link";

import { Container } from "~/components/Container";
import { NavLinks } from "~/components/NavLinks";
import MyCartageLarge from "~/images/logos/MyCartage-large.png";
import MyCartageLogo from "~/images/logos/MyCartage-slogan.png";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image
                src={MyCartageLogo}
                alt="MyCartage Logo"
                width={320}
                height={80}
              />
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <Image src={MyCartageLarge} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Get Started Today
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Click here to get started with MyCartage. We offer a 30 day free
                trial.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
