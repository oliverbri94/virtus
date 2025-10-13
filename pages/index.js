// pages/index.js
// ... (imports)
import Resultados from '../components/Resultados'; // <-- Asegúrate que esté aquí

export default function Home() {
  return (
    <div>
      {/* ... Head y Navbar ... */}
      <main>
        <HeroConPlexo />
        <Soluciones />
        <Resultados /> {/* <--- ¡EL SOSPECHOSO ESTÁ EN LA SALA! */}
        {/* Podemos dejar los otros comentados por ahora para ir más rápido */}
        {/* <Metodologia /> */}
        {/* <BlogSection /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
// ... (getStaticProps)