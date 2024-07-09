import Head from 'next/head';
import Link from 'next/link';

export default function Detect() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Detect Objects - Object Detection PWA</title>
        <meta name="description" content="Detect objects using our PWA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Detect Objects</h1>
        <p className="mb-4">This is where the object detection functionality will be implemented.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}