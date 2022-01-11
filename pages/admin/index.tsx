// import type { NextPage } from 'next';
import type { PageWithLayoutType } from "@/types/pageWithLayout";
import Layout from "@/layouts/admin";

const Page: PageWithLayoutType = () => {
  return (
    <article>
      <h1>Admin Layout</h1>
      <p>For Authentication you can try: https://next-auth.js.org/</p>
    </article>
  );
};

Page.layout = Layout;

export default Page;
