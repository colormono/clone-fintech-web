import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>Client Side Rendering (CSR)</title>
      </Head>

      <h1>Client Side Rendering (CSR)</h1>
      <p>
        <a href="https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side">Client-Side Rendering</a> allows
        developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is
        generally served with little to no content until you fetch the JavaScript and the browser compiles everything.
      </p>
      <p>As we commented above, in general Client-Side Rendering is not recommended for optimal SEO.</p>
      <p>CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index.</p>
    </article>
  );
};

export default Page;
