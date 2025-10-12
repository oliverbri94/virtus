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
    <section id="soluciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Nuestras Soluciones Integrales</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Un ecosistema de herramientas diseñadas para potenciar cada área de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <service.icon className="h-12 w-12 text-blue-600 mb-6" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;