import Head from 'next/head';
import { useEffect } from 'react';

const HelloPage: React.FC = () => {
  useEffect(() => {
    // Example hook usage; can be extended for analytics, etc.
  }, []);

  return (
    <>
      <Head>
        <title>Hello Page</title>
        <meta name="description" content="Minimal static hello page" />
      </Head>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: '2rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Hello, World!
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          Welcome to the minimal static hello page.
        </p>
      </main>
    </>
  );
};

export default HelloPage;