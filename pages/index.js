import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo'; // Nuevo componente
import Soluciones from '../components/Soluciones'; // Nuevo componente
import Resultados from '../components/Resultados'; // Nuevo componente
import Metodologia from '../components/Metodologia'; // Componente simplificado
import BlogSection from '../components/BlogSection'; // <--- ¡Añádelo de nuevo!
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const siteTitle = "Virtus Tech Consulting - Potenciamos su transformación digital";
  // ... (puedes mantener el resto de tu configuración de Head)

  return (
    <div className="bg-white">
      <Head>
        <title>Virtus Tech Consulting - Automatización y RPA en Ecuador</title>
        <meta name="description" content="Ayudamos a empresas en Ecuador a transformar sus procesos manuales en ventajas competitivas a través de la Automatización Robótica de Procesos (RPA) e IA." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={siteImage} />

        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <HeroConPlexo />
        <Soluciones />
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