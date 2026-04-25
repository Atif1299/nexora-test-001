import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Minimal Hello Page</title>
        <meta name="description" content="A minimal static hello page" />
      </Head>
      <main>
        <h1>Hello, World!</h1>
      </main>
    </>
  );
};

export default Home;