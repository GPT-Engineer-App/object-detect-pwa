import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Object Detection PWA</title>
        <meta name="description" content="Object Detection Progressive Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to Object Detection PWA</h1>
        <div className="flex space-x-4">
          <Link href="/detect">
            <Button>Go to Detect</Button>
          </Link>
          <Link href="/stats">
            <Button>View Stats</Button>
          </Link>
        </div>
      </main>
    </>
  )
}