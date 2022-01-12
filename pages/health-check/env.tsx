import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>Environment Variables with Next.js</title>
      </Head>

      <h1>Environment Variables with Next.js</h1>
      <p>
        In the table below you&apos;ll see how{' '}
        <a href="https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser">
          environment variables can be exposed to the browser
        </a>{' '}
        with Next.js.
      </p>
      <p>
        In general only <code>.env.local</code> or <code>.env</code> are needed for this, but the table also features the usage of{' '}
        <code>.env.development</code> and <code>.env.production</code>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
            <th>Added By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEXT_PUBLIC_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
            <td>
              <code>.env</code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}</td>
            <td>
              <code>.env.local</code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}</td>
            <td>
              <code>.env.development</code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
            <td>
              <code>.env.production</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <code>.env.local</code> is not added by the example, because it must be ignored by git, but you can add it manually:
      </p>
      <pre>
        <code>cp .env.local.example .env.local</code>
      </pre>
      <p>
        Variables in <code>.env.production</code> won&apos;t be available if the app is running in development:
      </p>
      <pre>
        <code>npm run dev</code>
      </pre>
      <p>
        Similarly, variables in <code>.env.development</code> won&apos;t be available if the app is running on production:
      </p>
      <pre>
        <code>npm run build && npm run start</code>
      </pre>
      <p>Once you run the app, you&apos;ll see logs like these in the terminal:</p>
      <pre>
        <code>
          info - Loaded env from /home/user/../.env.local{'\n'}
          info - Loaded env from /home/user/../.env.development{'\n'}
          info - Loaded env from /home/user/../.env{'\n'}
        </code>
      </pre>
      <p>The order is important, the first loaded env will have a higher priority.</p>
      <p>
        <code>.env</code> will not overwrite any variables defined in <code>.env.local</code> or <code>.env.development</code>.
      </p>

      <h2>Use next.config.js to set parameters at build time</h2>
      <p>
        This example demonstrates setting parameters that will be used by your application and set at{' '}
        <strong>build time (not run time)</strong>. More specifically, what that means, is that environmental variables are programmed into
        the special configuration file <code>next.config.js</code> and then returned to your react components when the program is built with{' '}
        <code>next build</code>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
            <th>Added By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RESTURL_BACKEND</td>
            <td>{process.env.RESTURL_BACKEND}</td>
            <td>
              <code>next.config.js</code>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE);
  console.log('[Node.js only] ENV_LOCAL_VARIABLE:', process.env.ENV_LOCAL_VARIABLE);

  return { props: {} };
}

export default Page;
