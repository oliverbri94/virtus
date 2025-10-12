// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo';
import Soluciones from '../components/Soluciones'; // <-- Sigue aquí
import Resultados from '../components/Resultados';
import Metodologia from '../components/Metodologia';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact'; // <-- La versión completa con traducciones
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// ... (El resto de tus imports)

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtus Tech Consulting</title>
        {/* ... El resto de tu Head ... */}
      </Head>

      <Navbar />
      
      <main>
        <HeroConPlexo />

        {/* --- PRUEBA DE FUEGO #2: VAMOS A COMENTAR ESTA LÍNEA --- */}
        {/* <Soluciones /> */} 
        
        <Resultados />
        <Metodologia />
        <BlogSection />
        <Contact /> 
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

// ... (Tu función getStaticProps se queda igual)
export async function getStaticProps({ locale }) { /* ... */ }