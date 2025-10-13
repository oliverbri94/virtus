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
    <section id="metodologia" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Nuestro Proceso, Tu Tranquilidad</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Una metodología de 3 pasos, diseñada para entregar valor desde el primer día.
          </p>
        </div>
        <div className="relative">
          {/* Línea de conexión para escritorio */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" style={{ transform: 'translateY(-50%)' }}></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={step.name} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-blue-600 text-white font-bold text-2xl mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.name.substring(3)}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
