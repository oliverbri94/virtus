// components/Metodologia.js

const steps = [
  {
    name: '1. Diagnóstico y Hoja de Ruta',
    description: 'Analizamos tus procesos para identificar oportunidades. Te presentamos un plan de alto impacto, cuantificable y sin costo inicial.',
  },
  {
    name: '2. Proyecto Piloto Medible',
    description: 'Implementamos una primera solución en semanas. Verás resultados tangibles con una inversión controlada, demostrando el valor rápidamente.',
  },
  {
    name: '3. Escalabilidad y Soporte Continuo',
    description: 'Nos convertimos en tu socio tecnológico para expandir la automatización y asegurar la optimización continua.',
  },
];

const Metodologia = () => {
  return (
    <section id="metodologia" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-100">
            Nuestro <span className="text-virtus-blue-light">Proceso</span>, Tu Tranquilidad
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Una metodología de 3 pasos, diseñada para entregar valor desde el primer día.
          </p>
        </div>
        <div className="relative">
          {/* Línea de conexión digital */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-virtus-blue-light/50 to-transparent" style={{ transform: 'translateY(-50%)' }}></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.name} 
                className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-virtus-blue-light/70 hover:-translate-y-2 group"
                style={{ animation: `fade-in-up 0.5s ${0.2 + index * 0.2}s both` }}
              >
                <div className="absolute -right-5 -bottom-8 text-[120px] font-bold text-gray-500/5 transition-all duration-300 group-hover:text-gray-500/10">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-4">{step.name.substring(3)}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
