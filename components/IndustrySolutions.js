import { useState } from 'react';
import { FiDollarSign, FiTruck, FiHeart, FiShoppingCart, FiUsers } from 'react-icons/fi';

const industriesData = {
  Finanzas: {
    icon: <FiDollarSign className="w-8 h-8 mr-3" />,
    solutions: [
      "Conciliación bancaria y contable 100% automática.",
      "Procesamiento de facturas y documentos del SRI sin intervención manual.",
      "Gestión inteligente de cuentas por pagar y cobrar con recordatorios automáticos.",
      "Generación de reportes financieros y de flujo de caja en minutos, no en días."
    ]
  },
  Logística: {
    icon: <FiTruck className="w-8 h-8 mr-3" />,
    solutions: [
      "Procesamiento masivo de órdenes de compra y venta.",
      "Monitoreo de inventarios en tiempo real con alertas de stock bajo.",
      "Integración con portales de proveedores y seguimiento de despachos.",
      "Automatización de la creación de guías de remisión y manifiestos de carga."
    ]
  },
  Retail: {
    icon: <FiShoppingCart className="w-8 h-8 mr-3" />,
    solutions: [
      "Actualización automática de precios y catálogos en E-commerce y ERP.",
      "Registro automático de leads y clientes desde campañas digitales.",
      "Chatbots con IA para atención al cliente 24/7 y gestión de pedidos.",
      "Análisis de patrones de compra y comportamiento del consumidor."
    ]
  },
  Salud: {
    icon: <FiHeart className="w-8 h-8 mr-3" />,
    solutions: [
      "Agendamiento y recordatorio automático de citas a pacientes por WhatsApp.",
      "Procesamiento y digitalización de reclamos a aseguradoras (IESS, privados).",
      "Gestión de inventario de insumos médicos y farmacéuticos.",
      "Generación de reportes de cumplimiento y para entidades de control."
    ]
  },
  "Recursos Humanos": {
    icon: <FiUsers className="w-8 h-8 mr-3" />,
    solutions: [
        "Procesos de onboarding y offboarding de personal completamente digitales.",
        "Validación y cálculo automático de nómina, roles de pago y décimos.",
        "Actualización masiva de datos y documentos de empleados en el sistema.",
        "Publicación de vacantes y primer filtro de candidatos con IA."
    ]
  }
};

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState('Finanzas');

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-virtus-dark">Soluciones Estratégicas para tu Sector</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">No ofrecemos soluciones genéricas. Hablamos el idioma de tu negocio y resolvemos tus desafíos específicos.</p>
        </div>
        <div className="flex flex-wrap justify-center mb-8 border-b-2 border-gray-200">
          {Object.keys(industriesData).map(industry => (
            <button
              key={industry}
              onClick={() => setActiveTab(industry)}
              className={`flex items-center px-6 py-3 text-lg font-semibold transition-colors duration-300 focus:outline-none ${activeTab === industry ? 'border-b-4 border-virtus-blue text-virtus-blue' : 'text-gray-500 hover:text-virtus-blue-light'}`}
            >
              {industriesData[industry].icon}
              {industry}
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8">
            <ul className="space-y-4">
                {industriesData[activeTab].solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-lg">{solution}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
