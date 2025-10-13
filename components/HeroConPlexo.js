import dynamic from 'next/dynamic';


const DynamicParticleComponent = dynamic(() => import('./DynamicParticles'), {
  ssr: false,
});

const HeroConPlexo = () => {
  return (
    <section className="relative flex items-center justify-center text-center text-white overflow-hidden bg-gray-900">
      <DynamicParticleComponent />
      
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Potenciamos su transformación digital
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Soluciones tecnológicas integrales para líderes de la industria.
        </p>
      </div>
    </section>
  );
};

export default HeroConPlexo;