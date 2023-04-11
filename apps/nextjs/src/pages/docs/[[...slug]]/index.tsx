import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import { allDocs, type Doc } from "contentlayer/generated";

import { Container } from "~/components/Container";
import Header from "~/components/Header";
import { Mdx } from "~/components/mdx";
import { DocsPageHeader } from "~/components/page-header";
import { DocsPager } from "~/components/pager";
import { DocsSidebarNav } from "~/components/sidebar-nav";
import { DashboardTableOfContents } from "~/components/toc";
import { docsConfig } from "~/config/docs";
import { getTableOfContents, type Items } from "~/lib/toc";

export function getStaticPaths() {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.slugAsParams.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  doc: Doc;
  toc: Items;
}> = async (context) => {
  const slug = context.params?.slug as string[] | undefined;

  const doc = allDocs.find((doc) => {
    if (slug) {
      return doc.slugAsParams === slug.join("/");
    }
    return doc.slugAsParams === "";
  });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return {
    props: { doc, toc },
  };
};

const DocsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  doc,
  toc,
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
          <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 py-6 pr-2 md:sticky md:block lg:py-10">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </aside>

            <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
              <div className="mx-auto w-full min-w-0">
                <DocsPageHeader heading={doc.title} text={doc.description} />
                <Mdx code={doc.body.code} />
                <hr className="my-4 border-slate-200 md:my-6" />
                <DocsPager doc={doc} />
              </div>
              <div className="hidden text-sm xl:block">
                <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
                  <DashboardTableOfContents toc={toc} />
                </div>
              </div>
            </main>
          </div>
        </Container>
      </main>
    </>
  );
};

export default DocsPage;
