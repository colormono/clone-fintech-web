import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>Static Site Generation (SSG)</title>
      </Head>

      <h1>Static Site Generation (SSG)</h1>
      <p>
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">Static site generation</a> is where your HTML
        is generated at build time. This HTML is then used for each request. Static site generation is probably the best type of rendering
        strategy for SEO as not only do you have all the HTML on page load because it&apos;s{` `}
        <a href="https://nextjs.org/docs/basic-features/pages#pre-rendering">pre-rendered</a>, but it also helps with page performance - now
        another ranking factor when it comes to SEO.
      </p>
    </article>
  );
};

export default Page;
