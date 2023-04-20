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
              We are truckers, mechanics, dispatchers. Just like you, we have
              been working in the industry for years pulling overtime and
              working hard to making sure the operation runs smoothly.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We were fed up with the current TMS systems. New employess hated
              the learning curve and the old timers were frustrated with the
              lack of process automation. Everyone wanted their job to be easier
              with technology, not just give them more work. We are sharing our
              software with anyone that wants it. But we think it kicks ass!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={"/images/sd/8D748A53-8027-4355-852D-D3C4C00A05DC.png"}
                alt="people1"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={980}
                height={700}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={"/images/sd/A653D1F5-3179-45D3-84D6-2C2DCD7AC206.png"}
                  alt="people2"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={"/images/sd/0363EF24-3A04-4356-92A0-00B0C05D1F8B.png"}
                  alt="people3"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={980}
                  height={700}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={"/images/sd/693E63C9-3DBB-45FC-8637-8D3FCB232DE1.png"}
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
