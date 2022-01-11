import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Incremental Site Regeneration</title>
      </Head>

      <h1 className="text-6xl font-bold">SSR</h1>
      <p>Incremental Site Regeneration</p>
    </article>
  );
};

export default Page;
