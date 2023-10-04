import Image from 'next/image'

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

config.autoAddCss = false;

import styles from './page.module.css'
import Head from 'next/head'
import Header from './components/header'



export default function Home(){

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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