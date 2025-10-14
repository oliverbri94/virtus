import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Search, Rocket, TrendingUp, CheckCircle } from 'lucide-react'; // Assuming lucide-react is installed

const steps = [
  {
    id: 1,
    name: 'Diagnóstico',
    description: 'Analizamos tus procesos e identificamos oportunidades de alto impacto.',
    icon: Search,
    benefits: ['Sin costo inicial', 'Plan cuantificable'],
    duration: '1 semana'
  },
  {
    id: 2,
    name: 'Piloto',
    description: 'Implementamos una solución en semanas con resultados tangibles.',
    icon: Rocket,
    benefits: ['Resultados rápidos', 'ROI demostrable'],
    duration: '1-4 semanas'
  },
  {
    id: 3,
    name: 'Escalabilidad',
    description: 'Expandimos la automatización y aseguramos optimización continua.',
    icon: TrendingUp,
    benefits: ['Soporte continuo', 'Mejora constante'],
    duration: 'Permanente'
  },
];

const Metodologia = () => {
  const { t } = useTranslation('common');
  const [activeStep, setActiveStep] = useState(null);

  const StepCard = ({ step, isActive }) => (
    <div className={`w-full bg-gray-800/40 backdrop-blur-lg border rounded-xl p-6 transition-all duration-300 ${isActive ? 'border-virtus-blue-light/60' : 'border-gray-700'}`}>
      <h3 className="text-xl font-semibold text-gray-100 mb-3">{step.name}</h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">{step.description}</p>
      <div className="space-y-2">
        {step.benefits.map((benefit, i) => (
          <div key={i} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-virtus-blue-light mr-2 flex-shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const StepIcon = ({ step, isActive }) => {
    const Icon = step.icon;
    return (
      <div className="flex flex-col items-center">
        <div className={`relative w-20 h-20 p-4 mb-3 flex items-center justify-center bg-virtus-blue-light/10 border border-virtus-blue-light/20 rounded-xl transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          <Icon className="w-9 h-9 text-virtus-blue-light" strokeWidth={1.5} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 border-2 border-virtus-blue-light rounded-full flex items-center justify-center text-virtus-blue-light font-bold text-xs">
            {step.id}
          </div>
        </div>
        <div className="text-xs text-gray-400 font-medium px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
          {step.duration}
        </div>
      </div>
    );
  };

  return (
    <section id="metodologia" className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-100">
            Nuestro <span className="text-virtus-blue-light">Proceso</span>, Tu Tranquilidad
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Una metodología de 3 pasos, diseñada para entregar valor desde el primer día.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-7xl mx-auto" onMouseLeave={() => setActiveStep(null)}>
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative flex flex-col items-center space-y-6 transition-all duration-300"
              onMouseEnter={() => setActiveStep(step.id)}
              style={{ animation: `fade-in-up 0.5s ${0.2 + index * 0.2}s both` }}
            >
              <StepIcon step={step} isActive={activeStep === step.id} />
              <StepCard step={step} isActive={activeStep === step.id} />
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8 max-w-lg mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id}
                className="flex gap-6"
                style={{ animation: `fade-in-up 0.5s ${0.2 + index * 0.2}s both` }}
              >
                <div className="flex-shrink-0 flex flex-col items-center space-y-2">
                   <div className="relative w-16 h-16 p-3 flex items-center justify-center bg-virtus-blue-light/10 border border-virtus-blue-light/20 rounded-xl">
                    <Icon className="w-8 h-8 text-virtus-blue-light" strokeWidth={1.5} />
                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 border-2 border-virtus-blue-light rounded-full flex items-center justify-center text-virtus-blue-light font-bold text-xs">
                       {step.id}
                     </div>
                   </div>
                   <div className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                      {step.duration}
                    </div>
                </div>
                <div className="flex-1 pt-1">
                   <h3 className="text-xl font-semibold text-gray-100 mb-2">{step.name}</h3>
                   <p className="text-gray-400 leading-relaxed mb-3 text-sm">{step.description}</p>
                   <div className="space-y-1.5">
                    {step.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-virtus-blue-light mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
