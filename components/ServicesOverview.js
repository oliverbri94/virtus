import { FiCpu, FiMessageCircle, FiBriefcase } from 'react-icons/fi';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FiCpu className="w-12 h-12 text-virtus-blue" />,
      title: "Agentes RPA con IA",
      description: "Desarrollamos 'trabajadores digitales' inteligentes que no solo ejecutan tareas, sino que aprenden y se adaptan a procesos complejos."
    },
    {
      icon: <FiMessageCircle className="w-12 h-12 text-virtus-blue" />,
      title: "Consultoría Estratégica",
      description: "Analizamos tus operaciones para diseñar una hoja de ruta de automatización que genere el máximo retorno de inversión."
    },
    {
      icon: <FiBriefcase className="w-12 h-12 text-virtus-blue" />,
      title: "Transformación de Procesos",
      description: "Vamos más allá de la tarea. Rediseñamos flujos de trabajo completos para construir una operación más ágil y resiliente."
    }
  ];

  return (
    <section id="services-overview" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-virtus-dark">Un Ecosistema de Soluciones Inteligentes</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Más que bots, construimos el motor de eficiencia para tu empresa.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-virtus-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
