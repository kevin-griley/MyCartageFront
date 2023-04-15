import { type FC, type ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "~/components/Container";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ImageSpread } from "~/components/ImageSpread";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "~/components/SocialIcons";
import LargeLogo from "~/images/logos/MyCartage-large.png";

interface SocialLinkProps {
  className?: string;
  href: string;
  children: ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const SocialLink: FC<SocialLinkProps> = ({
  className,
  href,
  children,
  icon: Icon,
}) => {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
};

function MailIcon(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function CheckIcon({ className }: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-6 w-6 flex-none fill-current stroke-current",
        className,
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - MyCartage TMS</title>
        <meta name="description" content="Airfreight TMS with Gps Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex min-h-screen flex-col">
        <Container className="mt-6 sm:my-12">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={LargeLogo}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-50 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Our Story
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  At MyCartage, we believe that the trucking industry has been
                  underserved by technology for far too long. Our founders, who
                  have decades of experience in the transportation and logistics
                  industries, saw firsthand the inefficiencies and limitations
                  of outdated software and decided to take matters into their
                  own hands. They set out to create a modern, cloud-based
                  platform that would simplify and streamline every aspect of
                  trucking operations.
                </p>
                <p>
                  Today, MyCartage is proud to offer a comprehensive suite of
                  tools for trucking companies, carriers, shippers, and drivers.
                  Our platform is built on the latest technology, using
                  serverless components and infinitely scalable infrastructure.
                  We&apos;ve designed every feature with the needs of our users
                  in mind, from our intuitive GPS Tracking features to our easy
                  to use mobile applications.
                </p>
              </div>

              <h1 className="mt-6  text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Our Mission
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Our mission at MyCartage is simple: to revolutionize the
                  trucking industry. We&apos;re committed to providing our
                  customers with the most advanced, reliable, and user-friendly
                  software on the market. We believe that technology can help
                  trucking companies of all sizes and types operate more
                  efficiently, save money, and ultimately grow their businesses.
                </p>
              </div>

              <h1 className="mt-6  text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Our Values
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  At MyCartage, we&apos;re more than just a software company.
                  We&apos;re a team of passionate professionals who are
                  dedicated to making a difference in the world. Our core values
                  guide everything we do, from the way we design our products to
                  the way we interact with our customers:
                </p>

                <ul
                  role="list"
                  className={clsx(
                    "order-last mt-10 flex flex-col gap-y-3 text-sm text-zinc-600",
                  )}
                >
                  <li className="flex">
                    <CheckIcon className={"text-zinc-600"} />
                    <span className="ml-4">
                      <b>Innovation:</b> We&apos;re always pushing the
                      boundaries of what&apos;s possible, using the latest
                      technology to create better solutions.
                    </span>
                  </li>
                  <li className="flex">
                    <CheckIcon className={"text-zinc-600"} />
                    <span className="ml-4">
                      <b>Simplicity:</b> We believe that software should be easy
                      to use and understand, even for people without technical
                      backgrounds.
                    </span>
                  </li>
                  <li className="flex">
                    <CheckIcon className={"text-zinc-600"} />
                    <span className="ml-4">
                      <b>Quality:</b> We&apos;re obsessed with quality, from the
                      code we write to the support we provide.
                    </span>
                  </li>
                  <li className="flex">
                    <CheckIcon className={"text-zinc-600"} />
                    <span className="ml-4">
                      <b>Customer Focus:</b> Our customers are at the heart of
                      everything we do. We listen to their feedback, anticipate
                      their needs, and go above and beyond to make them happy.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <SocialLink href="#" icon={TwitterIcon}>
                  Follow on Twitter
                </SocialLink>
                <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                  Follow on Instagram
                </SocialLink>
                <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                  Follow on GitHub
                </SocialLink>
                <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                  Follow on LinkedIn
                </SocialLink>
                <SocialLink
                  href="mailto:kevin@griley.app"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                >
                  Kevin@Griley.app
                </SocialLink>
              </ul>
            </div>
          </div>
        </Container>
        <ImageSpread />
      </main>
      <Footer />
    </>
  );
}
