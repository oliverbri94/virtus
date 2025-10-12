// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Soluciones from '../components/Soluciones'; // <-- El primer componente real
import Footer from '../components/Footer';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'; // <-- Importante: usar este import

export default function Home() {
  const { t } = useTranslation('common'); // <-- Llamamos al hook aquí

  return (
    <div>
      <Head>
        <title>Página de Reconstrucción</title>
      </Head>

      <Navbar />
      
      <main>
        {/* Usamos el título del hook para probar que funciona */}
        <h1 className="text-5xl font-bold text-center pt-32">
          {t('hero.title')} 
        </h1>

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