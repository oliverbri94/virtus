// components/Resultados.js
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// Data for the case studies
const caseStudies = [
  {
    client: 'Aromotor Cia. Ltda.',
    titleKey: 'resultados.case1.title',
    challengeKey: 'resultados.case1.challenge',
    solutionKey: 'resultados.case1.solution',
    resultKey: 'resultados.case1.result',
    imageUrl: '/case-study-1.png',
    imageAlt: 'Automatización logística',
  },
  {
    client: 'Aromotor Cia. Ltda.',
    titleKey: 'resultados.case2.title',
    challengeKey: 'resultados.case2.challenge',
    solutionKey: 'resultados.case2.solution',
    resultKey: 'resultados.case2.result',
    imageUrl: '/case-study-2.png',
    imageAlt: 'Catálogo web para Aromotor',
  },
  // Add more case studies here if needed
];

// The individual slide component remains largely the same but without the 'reverse' logic
const CaseStudySlide = ({ client, titleKey, challengeKey, solutionKey, resultKey, imageUrl, imageAlt }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex-shrink-0 w-full px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image src={imageUrl} alt={imageAlt} width={500} height={320} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
        </div>
        <div className="md:w-1/2">
          <span className="font-semibold text-virtus-blue-light">{client}</span>
          <h3 className="text-3xl font-semibold text-gray-100 mt-2 mb-4">{t(titleKey)}</h3>
          <p className="text-gray-400 mb-3"><strong className="text-gray-200">{t('resultados.challengeLabel', 'Reto')}:</strong> {t(challengeKey)}</p>
          <p className="text-gray-400 mb-6"><strong className="text-gray-200">{t('resultados.solutionLabel', 'Solución')}:</strong> {t(solutionKey)}</p>
          <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-virtus-blue-light">
            <p className="text-lg font-semibold text-gray-200">{t(resultKey)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Resultados = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="resultados" className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-100">
            <span className="text-virtus-blue-light">Resultados</span> que inspiran confianza
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            {t('resultados.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <CaseStudySlide key={study.client} {...study} />
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-virtus-blue-light transition-colors z-20"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-virtus-blue-light transition-colors z-20"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Dots Navigation */}
        <div className="flex justify-center mt-8">
            {caseStudies.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full mx-1.5 transition-all duration-300 ${currentIndex === index ? 'w-5 bg-virtus-blue-light' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Resultados;