import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen'>
      <div>
        <h1 className="text-3xl font-bold underline">Home</h1>
      </div>
    </main>
  )
}
