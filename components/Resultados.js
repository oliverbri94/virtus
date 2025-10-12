// components/Resultados.js
// Ya no necesitamos 'next/image', así que lo quitamos para estar seguros.
// import Image from 'next/image';

const CaseStudy = ({ title, client, challenge, solution, result, imageUrl, imageAlt, reverse = false }) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''} mb-20`}>
    <div className="md:w-1/2">
      {/* Usamos una etiqueta <img> normal. Es más directa y menos propensa a errores. */}
      <img src={imageUrl} alt={imageAlt} className="w-full h-80 object-cover rounded-lg shadow-2xl" />
    </div>
    <div className="md:w-1/2">
      <span className="text-blue-600 font-semibold">{client}</span>
      <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{title}</h3>
      <p className="text-gray-600 mb-3"><strong className="text-gray-900">Desafío:</strong> {challenge}</p>
      <p className="text-gray-600 mb-6"><strong className="text-gray-900">Solución Virtus:</strong> {solution}</p>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-lg font-bold text-blue-800">"{result}"</p>
      </div>
    </div>
  </div>
);

const Resultados = () => {
  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Resultados que Inspiran Confianza</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Historias reales de transformación y crecimiento impulsadas por nuestra tecnología.
          </p>
        </div>

        {/* IMPORTANTE: Asegúrate de tener estos archivos en tu carpeta /public */}
        <CaseStudy
          client="Empresa de Logística"
          title="Automatización de Guías de Remisión"
          challenge="La generación manual de guías consumía jornadas enteras, generando cuellos de botella."
          solution="Desarrollamos un bot de RPA que automatizó por completo el proceso de creación, validación y envío de guías."
          result="Reducción de 24 horas de trabajo manual por cada lote procesado."
          imageUrl="/case-study-1.jpg" // Asegúrate que 'case-study-1.jpg' exista en /public
          imageAlt="Automatización logística"
        />

        <CaseStudy
          client="Aromotor"
          title="E-commerce de Alto Rendimiento"
          challenge="La gestión manual del catálogo era ineficiente y la experiencia de compra online podía mejorar."
          solution="Implementamos una solución de e-commerce a medida, optimizada para una navegación intuitiva y rápida."
          result="Ahorro de 1 hora diaria en gestión de catálogo y una notable mejora en la experiencia del cliente."
          imageUrl="/case-study-2.jpg" // Asegúrate que 'case-study-2.jpg' exista en /public
          imageAlt="Catálogo web para Aromotor"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Resultados;