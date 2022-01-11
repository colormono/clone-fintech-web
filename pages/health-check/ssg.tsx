import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Static Site Generation</title>
      </Head>

      <h1 className="text-6xl font-bold">SSG</h1>
      <p>Static Site Generation</p>
    </article>
  );
};

export default Page;
