// pages/index.js
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
import DynamicParticles from '../components/DynamicParticles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtus Tech Consulting - Automatización y RPA en Ecuador</title>
      </Head>
      <Navbar />
      <main>
        <div className="relative">
          <DynamicParticles />
          <div className="hero-background-container" />
          <HeroConPlexo />
        </div>
        <Soluciones />
        <Resultados />
        <Metodologia />
        {/* <BlogSection /> */}
        <Contact />
        <WhatsAppButton />
        <Footer />
      </main>
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