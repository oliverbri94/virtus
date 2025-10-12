// pages/index.js
// ... (imports)
import Metodologia from '../components/Metodologia'; // <-- Añadimos al sospechoso

export default function Home() {
  return (
    <div>
      {/* ... Head y Navbar ... */}
      <main>
        <HeroConPlexo />
        <Soluciones />
        <Resultados />
        <Metodologia /> {/* <--- ¡EL SIGUIENTE SOSPECHOSO! */}
      </main>
      <Footer />
    </div>
  );
}
// ... (getStaticProps)