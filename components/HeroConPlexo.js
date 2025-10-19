import { useTranslation } from 'next-i18next';

const HeroConPlexo = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-normal pb-4 mb-4 bg-gradient-to-br from-virtus-blue-light via-white to-virtus-blue bg-clip-text text-transparent" style={{ animation: 'fade-in-up 0.5s 0.2s both', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
          {t('hero.title')}
        </h1>
        <p className="break-words text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto tracking-wide" style={{ animation: 'fade-in-up 0.5s 0.4s both', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
          {t('hero.subtitle')}
        </p>
        <div className="mt-8" style={{ animation: 'fade-in-up 0.5s 0.6s both' }}>
          <a href="#soluciones" className="px-8 py-3 font-semibold border border-virtus-blue-light rounded-lg text-virtus-blue-light transition-all duration-300 hover:bg-virtus-blue-light hover:text-gray-900 hover:shadow-lg hover:shadow-virtus-blue-light/20 no-underline">
            {t('hero.cta', 'Descubre Cómo')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroConPlexo;
