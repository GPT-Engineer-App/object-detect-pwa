import Head from 'next/head';
import Link from 'next/link';

export default function Stats() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>View Stats - Object Detection PWA</title>
        <meta name="description" content="View detection statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Detection Statistics</h1>
        <p className="mb-4">This is where the detection statistics will be displayed.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}