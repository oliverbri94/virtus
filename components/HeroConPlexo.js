import { useTranslation } from 'next-i18next';

const HeroConPlexo = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden">
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HeroConPlexo;
