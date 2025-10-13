// components/Resultados.js
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const CaseStudy = ({ client, titleKey, challengeKey, solutionKey, resultKey, imageUrl, imageAlt, reverse = false }) => {
  const { t } = useTranslation('common');

  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''} mb-20`}>
      {/* Columna de la Imagen: Usamos <Image> de Next.js para optimización */}
      <div className="md:w-1/2">
        <Image src={imageUrl} alt={imageAlt} width={500} height={320} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
      </div>

      {/* Columna del Texto */}
      <div className="md:w-1/2">
        <span className="text-blue-400 font-semibold">{client}</span>
        <h3 className="text-3xl font-bold text-white mt-2 mb-4">{t(titleKey)}</h3>
        <p className="text-gray-300 mb-3"><strong className="text-gray-100">{t('resultados.challengeLabel')}:</strong> {t(challengeKey)}</p>
        <p className="text-gray-300 mb-6"><strong className="text-gray-100">{t('resultados.solutionLabel')}:</strong> {t(solutionKey)}</p>
        
        {/* El resultado destacado */}
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg font-bold text-blue-300">{t(resultKey)}</p>
        </div>
      </div>
    </div>
  );
};


const Resultados = () => {
  const { t } = useTranslation('common');

  return (
    <section id="resultados" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">{t('resultados.title')}</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            {t('resultados.subtitle')}
          </p>
        </div>

        {/* --- Aquí llamamos a nuestros Casos de Éxito --- */}
        <CaseStudy
          client="Empresa de Logística"
          titleKey="resultados.case1.title"
          challengeKey="resultados.case1.challenge"
          solutionKey="resultados.case1.solution"
          resultKey="resultados.case1.result"
          imageUrl="/case-study-1.png"
          imageAlt="Automatización logística"
        />

        <CaseStudy
          client="Aromotor"
          titleKey="resultados.case2.title"
          challengeKey="resultados.case2.challenge"
          solutionKey="resultados.case2.solution"
          resultKey="resultados.case2.result"
          imageUrl="/case-study-2.png"
          imageAlt="Catálogo web para Aromotor"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Resultados;
