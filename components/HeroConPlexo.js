import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

const DynamicParticleComponent = dynamic(() => import('./DynamicParticles'), {
  ssr: false,
});

const HeroConPlexo = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden bg-gray-900">
      <DynamicParticleComponent />
      
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Divisor de sección con forma SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M0,60 C200,150 350,0 600,60 C850,120 1000,-20 1200,60 L1200,120 L0,120 Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroConPlexo;