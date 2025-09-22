import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
      {/* Overlay semitransparente para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-virtus-dark bg-opacity-70"></div>
      
      {/* Contenido del Hero */}
      <div className="relative container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up">
            {t('hero.subtitle')}
          </p>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80} spy={true}>
            <button className="bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105">
              {t('hero.cta')}
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;

