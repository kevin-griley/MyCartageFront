import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allAuthors,
  allPosts,
  type Author,
  type Post,
} from "contentlayer/generated";

import { Container } from "~/components/Container";
import Header from "~/components/Header";
import { Icons } from "~/components/icons";
import { Mdx } from "~/components/mdx";
import { formatDate } from "~/lib/utils";

export function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slugAsParams.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  post: Post;
  authors: (Author | undefined)[];
}> = (context) => {
  const slug = context.params?.slug as string[];
  const post = allPosts.find((post) => post.slugAsParams === slug.join("/"));
  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`),
  );

  return {
    props: { post, authors },
  };
};

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  authors,
}) => {
  return (
    <>
      <Head>
        <title>MyCartage</title>
        <meta name="description" content="Airfreight TMS with Gps Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <Header />
        <Container>
          <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
              href="/blog"
              className="absolute left-[-200px] top-14 hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all posts
            </Link>
            <div>
              {post.date && (
                <time
                  dateTime={post.date}
                  className="block text-sm text-slate-600"
                >
                  Published on {formatDate(post.date)}
                </time>
              )}
              <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                {post.title}
              </h1>
              {authors?.length ? (
                <div className="mt-4 flex space-x-4">
                  {authors.map((author) =>
                    author ? (
                      <Link
                        key={author._id}
                        href={`https://twitter.com/${author.twitter}`}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Image
                          src={author.avatar}
                          alt={author.title}
                          width={42}
                          height={42}
                          className="rounded-full"
                        />
                        <div className="flex-1 text-left leading-tight">
                          <p className="font-medium text-slate-900">
                            {author.title}
                          </p>
                          <p className="text-[12px] text-slate-600">
                            @{author.twitter}
                          </p>
                        </div>
                      </Link>
                    ) : null,
                  )}
                </div>
              ) : null}
            </div>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={720}
                height={405}
                className="my-8 rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                priority
              />
            )}
            <Mdx code={post.body.code} />
            <hr className="my-4 border-slate-200" />
            <div className="flex justify-center py-6 lg:py-10">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
              </Link>
            </div>
          </article>
        </Container>
      </main>
    </>
  );
};

export default PostPage;
