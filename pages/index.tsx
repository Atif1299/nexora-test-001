import type { NextPage } from 'next';
import Head from 'next/head';

const HelloPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Page</title>
        <meta name="description" content="Minimal static hello page" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Hello, World!</h1>
        <p>Welcome to the minimal static hello page.</p>
      </main>
    </>
  );
};

export default HelloPage;