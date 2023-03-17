import Head from 'next/head';
import ProjectOverview from '../../components/ProjectOverview';
import Navbar_Projects from '../../components/Navbar_Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>SOS Woning - Renovatiewerken</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar_Projects />
      <ProjectOverview />
    </>
  )
}