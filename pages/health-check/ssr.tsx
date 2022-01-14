import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>Server-Side Rendering (SSR)</title>
      </Head>

      <h1>Server-Side Rendering (SSR)</h1>
      <p>
        Like SSG, <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">Server-Side Rendering (SSR)</a> is
        pre-rendered, which also makes it great for SEO. Instead of being generated at build time, as in SSG, SSR&apos;s HTML is generated
        at request time. This is great for when you have pages that are very dynamic.
      </p>
    </article>
  );
};

export default Page;
