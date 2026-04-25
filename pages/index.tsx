import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    console.log('Home page mounted');
  }, []);

  return (
    <>
      <Head>
        <title>Minimal Hello Page</title>
        <meta name="description" content="A minimal static hello page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Hello, World!</h1>
        <p>Welcome to the minimal static landing page.</p>
      </main>
    </>
  );
};

export default Home;