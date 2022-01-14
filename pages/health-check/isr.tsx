import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>Incremental Static Regeneration (ISR)</title>
      </Head>

      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>
        If you have a very large amount of pages, generating them all at build time may not be feasible. Next.js allows you to create or
        update static pages after you have built your site.
      </p>
      <p>
        <a href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration">Incremental Static Regeneration</a>{' '}
        enables developers and content editors to use static generation on a per-page basis, without needing to rebuild the entire site.
        With ISR, you can retain the benefits of static while scaling to millions of pages.
      </p>
    </article>
  );
};

export default Page;
