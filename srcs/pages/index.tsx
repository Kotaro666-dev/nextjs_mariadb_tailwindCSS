import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
     {process.env.NODE_ENV}
     {process.env.NEXT_PUBLIC_TEST}
    </h1>
  )
}

export default Home
