import { FiTrendingUp, FiClock, FiDollarSign } from 'react-icons/fi';

const CaseStudies = () => {
  // Ejemplo de un caso de éxito. A futuro, esto vendrá de una base de datos o un CMS.
  const study = {
    industry: "Sector Automotriz",
    title: "Empresa Importadora Nacional Reduce en 99% el Tiempo de un proceso de auditoría",
    challenge: "El equipo de contabilidad dedicaba más de 24 horas al mes a revisar manualmente reportes contables, de logística y de inventario, resultando en retrasos y errores costosos.",
    solution: "Implementamos un Agente RPA que automatiza el proceso de auditoría. El bot revisa sistemáticamente los reportes contables, logísticos y de inventario, identifica discrepancias según reglas predefinidas, y genera un reporte detallado de casos que requieren atención humana, todo esto sin intervención manual.",
    results: [
      { icon: <FiClock className="w-8 h-8 text-white" />, value: "24+ Horas", metric: "Ahorradas al Mes" },
      { icon: <FiTrendingUp className="w-8 h-8 text-white" />, value: "99.9%", metric: "Precisión en Datos" },
      { icon: <FiDollarSign className="w-8 h-8 text-white" />, value: "3 Meses", metric: "Retorno de Inversión" },
    ]
  };

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-virtus-dark">Resultados, no Promesas</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Transformamos los desafíos de nuestros clientes en historias de éxito medibles.</p>
        </div>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-virtus-blue font-semibold mb-2">{study.industry}</p>
                <h3 className="text-3xl font-bold text-virtus-dark mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-4"><strong>El Desafío:</strong> {study.challenge}</p>
                <p className="text-gray-600"><strong>Nuestra Solución:</strong> {study.solution}</p>
            </div>
            <div className="md:w-1/2 bg-virtus-blue text-white p-8 lg:p-12">
                <h4 className="text-2xl font-bold mb-6 text-center">Impacto Cuantificable</h4>
                <div className="space-y-6">
                    {study.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                            <div className="bg-virtus-blue-light p-4 rounded-full mr-4">
                                {result.icon}
                            </div>
                            <div>
                                <p className="text-3xl font-bold">{result.value}</p>
                                <p className="text-lg opacity-90">{result.metric}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

