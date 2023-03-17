import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>SOS Woning - Renovatiewerken</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Layotn Berth"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </>
  )
}
