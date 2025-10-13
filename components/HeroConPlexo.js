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
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[75px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroConPlexo;