import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Somos tu Socio en la Transformación Digital</h2>
            <p className="text-lg text-gray-600 mb-4">
              En Virtus Tech Consulting, nuestra misión es democratizar la automatización. Creemos que el poder de la tecnología no debe ser exclusivo de las grandes corporaciones.
            </p>
            <p className="text-gray-600">
              Ayudamos a las PYMES ecuatorianas a ser más competitivas, eficientes y rentables, implementando soluciones de RPA que ofrecen un retorno de inversión real y medible.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Nuestro equipo" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
