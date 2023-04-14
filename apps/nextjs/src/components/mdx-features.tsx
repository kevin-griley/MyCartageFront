import { useEffect, useRef, useState, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export const a = Link;

export const wrapper = function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
};

export const h2 = function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="mt-6  text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
      {...props}
    />
  );
};

export const h3 = function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="text-2xl tracking-tight text-zinc-200 sm:text-2xl"
      {...props}
    />
  );
};

export const p = function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="my-6 text-zinc-300" {...props} />;
};

export const li = function LI(props: React.HTMLAttributes<HTMLLIElement>) {
  return <li className="my-3 text-zinc-300" {...props} />;
};

export const ol = function OL(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className="my-6 list-decimal text-zinc-300" {...props} />;
};

export const ul = function UL(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="my-6 list-disc text-zinc-300" {...props} />;
};

interface ImageProps {
  src: string;
}

export const img = function Img(props: ImageProps) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8">
      <Image
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
    </div>
  );
};

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={clsx(
            "mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface ArticleHeaderProps {
  id: string;
  feat: string;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ id, feat }) => {
  return (
    <header className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
        <Link href={`#${id}`} className="inline-flex">
          <p className="xl:text-2xs/4 hidden xl:pointer-events-auto xl:block xl:font-medium xl:text-white/50">
            {" "}
            {feat}{" "}
          </p>
        </Link>
        <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>
      <ContentWrapper>
        <div className="flex">
          <Link href={`#${id}`} className="inline-flex">
            <p className="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
              {id}
            </p>
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
};

interface ArticleProps {
  id: string;
  title: string;
  feat: string;
  children: React.ReactNode;
}

export const article = function Article({ id, feat, children }: ArticleProps) {
  const heightRef = useRef<HTMLDivElement>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    const observer = new window.ResizeObserver(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { height } = heightRef.current!.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    observer.observe(heightRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader id={id} feat={feat} />
        <ContentWrapper className="typography">{children}</ContentWrapper>
      </div>
    </article>
  );
};

interface CodeProps {
  highlightedCode?: string;
}

export const code = function Code({ highlightedCode, ...props }: CodeProps) {
  if (highlightedCode) {
    return (
      <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    );
  }

  return <code {...props} />;
};
