import type { NextPage } from 'next';
import Layout from '@/components/layouts/admin';

const Page: NextPage = () => {
  return (
    <article>
      <h1>Admin Layout</h1>
      <p>For Authentication you can try: https://next-auth.js.org/</p>
    </article>
  );
};

Page.layout = Layout;

export default Page;
