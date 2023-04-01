"use client"
import Button from '@mui/material/Button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen'>
      <div className='flex justify-center items-center h-2/3 bg-gray-50'>
        <h1 className="text-3xl font-bold underline">Home</h1>
      </div>
    </main>
  )
}
