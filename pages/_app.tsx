import type { AppProps } from 'next/app';
import PageWithLayoutType from '@/types/pageWithLayout';
import DefaultPageLayout from '@/layouts/default';
import ThemeUI from '@/components/ui/theme/ThemeUI';
import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('@/mocks');
}

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
