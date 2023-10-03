import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './page.module.css'
import Head from 'next/head'
import Header from './components/header'

export default function Home(){
  return (
    <>
    <Head>
      <title>Accueil</title>
    </Head>
    <Header/>
    <h1>Accueil</h1>
    </>
  )
}