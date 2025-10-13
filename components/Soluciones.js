// components/Soluciones.js
import { ShieldCheckIcon, DevicePhoneMobileIcon, ChartBarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Automatización Robótica (RPA)',
    description: 'Transformamos tareas manuales en procesos automáticos eficientes. Desde conciliación bancaria y procesamiento de facturas hasta la gestión de inventarios y nóminas.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Desarrollo y E-commerce',
    description: 'Creamos las herramientas que tu negocio necesita. Desde CRMs personalizados hasta potentes plataformas de e-commerce para llevar tus ventas al siguiente nivel.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Inteligencia de Negocios (BI)',
    description: 'Convertimos tus datos en decisiones estratégicas. Desarrollamos tableros de control e indicadores en tiempo real para que tengas el pulso de tu empresa.',
    icon: ChartBarIcon,
  },
  {
    name: 'Optimización de Experiencia del Cliente',
    description: 'Potenciamos tu relación con los clientes. Implementamos chatbots inteligentes y automatizamos la comunicación para un seguimiento impecable.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-100">
            Nuestras <span className="text-virtus-blue-light">Soluciones</span> Integrales
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Un ecosistema de herramientas diseñadas para potenciar cada área de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-virtus-blue-light/70 hover:-translate-y-2"
              style={{ animation: `fade-in-up 0.5s ${0.2 + index * 0.15}s both` }}
            >
              <div className="mb-6 inline-block p-3 bg-virtus-blue-light/10 border border-virtus-blue-light/20 rounded-lg">
                <service.icon className="h-8 w-8 text-virtus-blue-light" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">{service.name}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
