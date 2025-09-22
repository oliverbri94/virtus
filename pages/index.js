import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import ServicesOverview from '../components/ServicesOverview';
import WhyVirtus from '../components/WhyVirtus';
import IndustrySolutions from '../components/IndustrySolutions';
import CaseStudies from '../components/CaseStudies';
import Methodology from '../components/Methodology';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const { t } = useTranslation();

  const siteTitle = "Virtus Tech Consulting - Automatización y RPA en Ecuador";
  const siteDescription = t('hero.subtitle');
  const siteUrl = "https://www.virtusecuador.com"; // Reemplaza con tu dominio final
  const siteImage = `${siteUrl}/og-image.png`;


  return (
    <div className="bg-white">
      <Head>
        <title>Virtus Tech Consulting - Automatización y RPA en Ecuador</title>
        <meta name="description" content="Ayudamos a empresas en Ecuador a transformar sus procesos manuales en ventajas competitivas a través de la Automatización Robótica de Procesos (RPA)." />
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
        <Hero />
        <Clients />
        <ServicesOverview />
        <WhyVirtus />
        <IndustrySolutions />
        <CaseStudies />
        <Methodology />
        <BlogSection />
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}

