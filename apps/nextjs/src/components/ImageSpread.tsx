import Image from "next/image";

export function ImageSpread() {
  return (
    <div className="overflow-hidden bg-gray-50 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="mt-6  text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Our People
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={"/images/people1.jpeg"}
                alt="people1"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={980}
                height={700}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={"/images/people2.jpeg"}
                  alt="people2"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={"/images/people3.jpeg"}
                  alt="people3"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={980}
                  height={700}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={"/images/people4.jpeg"}
                  alt="people4"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
