import { type FC } from "react";
import Link from "next/link";

import { CircleBackground } from "~/components/CircleBackground";
import { Container } from "~/components/Container";

export const CallToAction: FC = () => {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 from-10% via-slate-950 via-30% to-slate-900 to-90% py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slow" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
            Sign up and look around
          </h2>
          <p className="mt-4 text-lg text-zinc-200">
            No credit card required. Create a free account and start using
            MyCartage in seconds.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://app.mycartage.com"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
            >
              Get Started Now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
