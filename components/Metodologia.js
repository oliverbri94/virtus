import React, { useState } from 'react';
import { Search, Rocket, TrendingUp, ChevronRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Diagnóstico',
    description: 'Analizamos tus procesos e identificamos oportunidades de alto impacto.',
    icon: Search,
    benefits: ['Sin costo inicial', 'Plan cuantificable'],
    duration: '1-2 semanas'
  },
  {
    id: 2,
    name: 'Piloto',
    description: 'Implementamos una solución en semanas con resultados tangibles.',
    icon: Rocket,
    benefits: ['Resultados rápidos', 'ROI demostrable'],
    duration: '3-6 semanas'
  },
  {
    id: 3,
    name: 'Escalabilidad',
    description: 'Expandimos la automatización y aseguramos optimización continua.',
    icon: TrendingUp,
    benefits: ['Soporte continuo', 'Mejora constante'],
    duration: 'Semestral o anual'
  },
];

const Metodologia = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="metodologia" className="relative py-16 md:py-24 bg-transparent overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative max-w-7xl mx-auto">
          {/* Línea de conexión animada */}
          <div className="absolute top-28 left-0 right-0 h-1 bg-gray-800">
            <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  className="relative"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Icono con estilo dark */}
                  <div className="flex flex-col items-center mb-8">
                    <div 
                      className={`
                        relative w-20 h-20 rounded-xl flex items-center justify-center mb-4
                        transition-all duration-500 transform border border-gray-700/50
                        ${isActive ? 'scale-110 border-blue-500/50' : 'scale-100'}
                      `}
                      style={{
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        boxShadow: isActive 
                          ? '0 20px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                          : '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <Icon className="w-9 h-9 text-blue-400 relative z-10" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-400 font-bold text-xs">
                        {step.id}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                      {step.duration}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`
                    relative bg-gray-800/40 backdrop-blur-xl border rounded-2xl p-6
                    transition-all duration-500 transform
                    ${isActive 
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 -translate-y-2' 
                      : 'border-gray-700/50 hover:border-gray-600'
                    }
                  `}>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                        {step.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2">
                        {step.benefits.map((benefit, i) => (
                          <div 
                            key={i}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flecha conectora */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-28 -right-4 transform translate-x-1/2 z-20">
                      <ChevronRight className="w-8 h-8 text-blue-500 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={step.id}
                className="relative"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Timeline vertical */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative border border-gray-700/50"
                      style={{
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-blue-400" strokeWidth={1.5} />
                      <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-gray-900 border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-400 font-bold text-xs">
                        {step.id}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[60px] bg-gradient-to-b from-blue-500 to-transparent mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="text-xs text-gray-500 font-medium mb-2">
                      {step.duration}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {step.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-xs md:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Metodologia;