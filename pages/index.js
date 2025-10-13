// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroConPlexo from '../components/HeroConPlexo';
import Soluciones from '../components/Soluciones';
import Resultados from '../components/Resultados';
import Metodologia from '../components/Metodologia';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Test from '../components/Test';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtus Tech Consulting - Automatización y RPA en Ecuador</title>
      </Head>
      <Navbar />
      <main>
        <HeroConPlexo />
        <Soluciones />
        <Resultados />
        <Metodologia />
        <BlogSection />
        <Contact />
        <Test />
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