import type { NextPage } from "next";
import Head from "next/head";
import { Alert } from "@/components/ui";

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Page Example</title>
      </Head>

      <h1 className="text-6xl font-bold">Page Example</h1>

      <h2>Alert</h2>
      <Alert
        type="primary"
        title="Title"
        message="Message"
        actionLabel="Go"
        onAction={() => alert("Hello, world!")}
        onClose={() => alert("Close this modal with useState")}
      />
      <h2>Type</h2>
      <Alert type="primary">MateUI-React Library documentation</Alert>
      <Alert type="secondary">MateUI-React Library documentation</Alert>
      <Alert type="success">MateUI-React Library documentation</Alert>
      <Alert type="error">MateUI-React Library documentation</Alert>
      <Alert type="warning">MateUI-React Library documentation</Alert>
      <Alert type="info">MateUI-React Library documentation</Alert>
      <Alert type="neutral">MateUI-React Library documentation</Alert>
      <h2>Size</h2>
      <Alert size="sm" showIcon={false}>
        Small size (sm)
      </Alert>
      <Alert size="md" showIcon={false}>
        Default size (md)
      </Alert>
      <Alert size="lg" showIcon={false}>
        Large size (lg)
      </Alert>
    </article>
  );
};

export default Page;
