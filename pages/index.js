// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo';
import Soluciones from '../components/Soluciones'; // <-- Sabemos que este es inocente
import Footer from '../components/Footer';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Base Segura - Virtus</title>
      </Head>
      <Navbar />
      <main>
        <HeroConPlexo />
        <Soluciones />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
}