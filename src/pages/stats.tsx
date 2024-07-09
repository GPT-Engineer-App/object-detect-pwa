import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Stats() {
  return (
    <>
      <Head>
        <title>Stats - Object Detection PWA</title>
        <meta name="description" content="View stats for object detection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Detection Stats</h1>
        <p className="mb-8">This is where the detection statistics will be displayed.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </main>
    </>
  )
}