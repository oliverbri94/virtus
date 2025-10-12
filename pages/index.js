import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo';
import Soluciones from '../components/Soluciones';
import Resultados from '../components/Resultados';
import Metodologia from '../components/Metodologia';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const siteTitle = "Virtus Tech Consulting - Potenciamos su transformación digital";


  const siteUrl = "https://www.virtusecuador.com"; 
  const siteDescription = "Ayudamos a empresas en Ecuador a transformar sus procesos manuales en ventajas competitivas a través de la Automatización Robótica de Procesos (RPA) e IA."; // Puedes ajustar esto si quieres.
  const siteImage = `${siteUrl}/og-image.png`; 


  return (
    <div className="bg-white">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
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

        {/* ... tus links de fuentes ... */}
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