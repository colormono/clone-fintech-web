import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Alert } from '@/ui/Alert';

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Welcome</title>
      </Head>

      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://mate-ui.truenorth.co">
          Mate-UI
        </a>
      </h1>

      <p className="mt-3 text-2xl">A ready to use Figma, Next.js and TailwindCSS template built for Sprint-0.5</p>

      <Alert type="warning" className="my-12">
        <strong>Heads up!</strong> This is a{' '}
        <a className="underline" href="https://github.com/truenorth-tech/template-nextjs">
          template
        </a>
        .
      </Alert>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <Link href="/docs/sprint-zero">
          <a className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">👋 Sprint Zero</h3>
            <p className="mt-4 text-xl">Getting started templates and playbook.</p>
          </a>
        </Link>

        <div className="p-6 text-left border rounded-xl ">
          <h3 className="text-2xl font-bold">🩺 Health-check</h3>
          <p className="mt-4 text-xl">
            <Link href="#">
              <a className="hover:text-blue-600 focus:text-blue-600">Env</a>
            </Link>
            ,{' '}
            <Link href="#">
              <a className="hover:text-blue-600 focus:text-blue-600">SSG</a>
            </Link>
            ,{' '}
            <Link href="#">
              <a className="hover:text-blue-600 focus:text-blue-600">ISR</a>
            </Link>
            ,{' '}
            <Link href="#">
              <a className="hover:text-blue-600 focus:text-blue-600">SSR</a>
            </Link>
            ,{' '}
            <Link href="#">
              <a className="hover:text-blue-600 focus:text-blue-600">CSR</a>
            </Link>
            ,{' '}
            <a href="/api/health-check" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 focus:text-blue-600">
              API
            </a>
            ...
          </p>
        </div>

        <Link href="/docs/basic-components">
          <a className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">🧩 Basic Components</h3>
            <p className="mt-4 text-xl">Alert, Avatar, Badge, Button, Dropdown, Input, Select, Table, Toggle, ToggleMode, Theme....</p>
          </a>
        </Link>

        <Link href="/docs/custom-components">
          <a className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">🦄 Custom Components</h3>
            <p className="mt-4 text-xl">What if the client &quot;needs a Unicorn&quot; in the middle of a table...</p>
          </a>
        </Link>

        <a href="https://nextjs.org/docs" className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">📓 Next.js &rarr;</h3>
          <p className="mt-4 text-xl">Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://tailwindcss.com/docs/utility-first"
          className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">📓 TailwindCSS &rarr;</h3>
          <p className="mt-4 text-xl">A utility-first CSS framework to build any design, directly in your markup.</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">🤓 Examples &rarr;</h3>
          <p className="mt-4 text-xl">Learn by example with this Next.js community projects.</p>
        </a>

        <a
          href="https://github.com/truenorth-tech/template-nextjs/issues"
          className="p-6 text-left border border-dashed rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">💬 Collaborate &rarr;</h3>
          <p className="mt-4 text-xl">Report Issues, Request Features.</p>
        </a>
      </div>
    </article>
  );
};

export default Page;
