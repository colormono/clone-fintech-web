import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Client Side Rendering</title>
      </Head>

      <h1 className="text-6xl font-bold">CSR</h1>
      <p>Client Side Rendering</p>
    </article>
  );
};

export default Page;
