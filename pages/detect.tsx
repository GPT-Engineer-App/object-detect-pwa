import Head from 'next/head'
import Link from 'next/link'

export default function Detect() {
  return (
    <>
      <Head>
        <title>Detect Objects - Object Detection PWA</title>
        <meta name="description" content="Detect objects using our PWA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Detect Objects</h1>
        <p className="mb-4">Object detection functionality will be implemented here.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>
    </>
  )
}