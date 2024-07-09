import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Object Detection PWA</title>
        <meta name="description" content="Object Detection Progressive Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Object Detection PWA
        </h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/detect" className="text-blue-500 hover:underline">
                Detect Objects
              </Link>
            </li>
            <li>
              <Link href="/stats" className="text-blue-500 hover:underline">
                View Stats
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}