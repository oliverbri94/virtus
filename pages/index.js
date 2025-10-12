// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact'; // <-- La versión simple de la "Prueba de Fuego"
import Footer from '../components/Footer';

// La función de traducción. ¡La dejamos! Es importante.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba de Aislamiento - Virtus</title>
      </Head>

      <Navbar />
      
      <main style={{ paddingTop: '100px', paddingBottom: '50px', textAlign: 'center' }}>
        <h1 className="text-5xl font-bold">Página de Prueba</h1>
        <p className="mt-4 text-xl">Si ves esto y la sección de contacto de abajo, la base funciona.</p>
        
        {/* Aquí llamamos a nuestra versión simple de Contact */}
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