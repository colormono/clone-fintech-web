import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Env vars</title>
      </Head>

      <h1 className="text-6xl font-bold">ENV</h1>
      <p>Env vars</p>
    </article>
  );
};

export default Page;
