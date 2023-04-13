import { type FC } from "react";

import { Button } from "~/components/Button";
import { CircleBackground } from "~/components/CircleBackground";
import { Container } from "~/components/Container";

export const CallToAction: FC = () => {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Sign up and look around
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            No credit card required. Create a free account and start using
            MyCartage in seconds.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant={"light"}> Get Started Now </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
