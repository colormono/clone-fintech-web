import type { AppProps } from 'next/app';
import PageWithLayoutType from '@/types/pageWithLayout';
import DefaultPageLayout from '@/components/layouts/main';
import { ThemeUI } from '@/ui/Theme';
import '@/styles/globals.css';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const PageLayout = Component.layout || DefaultPageLayout;

  return (
    <ThemeUI>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeUI>
  );
}

export default MyApp;
