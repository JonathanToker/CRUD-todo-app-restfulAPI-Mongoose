import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from "flowbite-react";
import { Flowbite } from 'flowbite-react';
import MainNavbar from '@/ui/navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack App',
  description: 'A full stack app with MongoDB and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} dark:bg-gray-700 dark:text-white`}>
        <Flowbite>
          <MainNavbar />
          <div className="max-w-4xl mx-auto p-4">{children}</div>
        </Flowbite>
      </body>
    </html>
  )
}
