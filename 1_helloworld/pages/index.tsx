import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Roupas, Calçados e Etc"></meta>
    </Head>
    <div>
    <h1>Hello world!</h1>
    <Image src="/images/cidade.jpeg" width="200" height="300" alt="" />
    </div>
    </>
  )
}
