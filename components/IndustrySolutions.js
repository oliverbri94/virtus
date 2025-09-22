import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

const IndustrySolutions = () => {
  const { t } = useTranslation();
  // Obtiene los nombres de las pestañas desde el archivo de traducción
  const tabs = t('industrySolutions.tabs', { returnObjects: true });
  // Estado para saber qué pestaña está activa
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('industrySolutions.title')} subtitle={t('industrySolutions.subtitle')} />
        
        <div className="mb-8">
          {/* Contenedor que permite el scroll horizontal en pantallas pequeñas */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <nav className="flex space-x-2 md:space-x-4 justify-center" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'bg-virtus-blue text-white' // Estilo de la pestaña activa
                      : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800' // Estilo de las inactivas
                  } px-4 py-2 font-medium text-sm md:text-base rounded-full whitespace-nowrap transition-colors duration-300 focus:outline-none`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenedor del contenido de las pestañas */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl">
            {tabs.map((tab) => (
                <div key={tab} className={`${activeTab === tab ? 'block' : 'hidden'}`}>
                    <h3 className="text-2xl font-bold text-virtus-dark mb-4">{t(`industrySolutions.content.${tab}.title`)}</h3>
                    <ul className="space-y-3">
                        {/* Mapea y muestra las soluciones para la pestaña activa */}
                        {t(`industrySolutions.content.${tab}.solutions`, { returnObjects: true }).map((solution, index) => (
                             <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-virtus-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-gray-700">{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Sección de Agentes con IA */}
        <div className="max-w-4xl mx-auto mt-12 bg-virtus-dark text-white p-6 md:p-8 rounded-lg">
             <h4 className="text-xl md:text-2xl font-bold mb-3">{t('industrySolutions.iaSection.title')}</h4>
             <p className="text-gray-300">{t('industrySolutions.iaSection.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;

