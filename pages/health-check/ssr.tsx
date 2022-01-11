import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Server Side Rendering</title>
      </Head>

      <h1 className="text-6xl font-bold">SSR</h1>
      <p>Server Side Rendering</p>
    </article>
  );
};

export default Page;
