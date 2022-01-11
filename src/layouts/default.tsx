import Head from 'next/head';
import type { LayoutProps } from '@/types/pageWithLayout';
import { Container } from '@/components/ui';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <Container className="flex flex-col min-h-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </Container>
  );
};

export default MainLayout;
