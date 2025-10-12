// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo'; // <-- ¡El sospechoso entra en escena!
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba de Aislamiento - Virtus</title>
      </Head>

      <Navbar />
      
      <main>
        {/* Aquí llamamos a nuestro sospechoso */}
        <HeroConPlexo />

        {/* Y aquí a nuestra sección de prueba que sabemos que funciona */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}