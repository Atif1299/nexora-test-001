import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hello',
  description: 'Minimal static hello page',
};

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      <h1>Hello, World!</h1>
      <p>This is a minimal static landing page.</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  );
}