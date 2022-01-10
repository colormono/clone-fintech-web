import Head from 'next/head';
import type { LayoutProps } from '@/types/pageWithLayout';
import { Footer } from '@/components/footer';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen py-12 px-16">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
