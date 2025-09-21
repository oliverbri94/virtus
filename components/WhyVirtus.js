import { FiClock, FiCheckCircle, FiTrendingUp, FiSettings, FiZap, FiShield } from 'react-icons/fi';

const WhyVirtus = () => {
  const benefits = [
    { icon: <FiClock className="w-10 h-10 mb-4 text-virtus-blue-light" />, title: "Más Horas en el Día", text: "Liberamos a tu equipo de tareas repetitivas para que se enfoquen en lo que realmente importa." },
    { icon: <FiCheckCircle className="w-10 h-10 mb-4 text-virtus-blue-light" />, title: "Precisión del 99,9%", text: "Nuestros agentes digitales eliminan el error humano en procesos críticos, garantizando datos fiables." },
    { icon: <FiTrendingUp className="w-10 h-10 mb-4 text-virtus-blue-light" />, title: "Crecimiento sin Caos", text: "Escala tus operaciones y ventas sin aumentar proporcionalmente tu carga administrativa." },
  ];

  const advantages = [
    { icon: <FiSettings className="w-8 h-8 mr-4 text-virtus-blue" />, title: "Adaptable a tu Realidad", text: "No necesitas cambiar tus sistemas actuales. Nos integramos incluso con software antiguo sin APIs." },
    { icon: <FiZap className="w-8 h-8 mr-4 text-virtus-blue" />, title: "Automatización de Punta a Punta", text: "Cubrimos procesos completos, desde la recepción de un correo hasta el registro contable." },
    { icon: <FiShield className="w-8 h-8 mr-4 text-virtus-blue" />, title: "Seguridad Garantizada", text: "Operamos en la interfaz de usuario, sin acceso directo a tus bases de datos." },
  ];

  return (
    <section id="why-virtus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-virtus-dark">No Vendemos Tecnología. Vendemos Tiempo y Tranquilidad.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {benefits.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-virtus-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
           {advantages.map((item, index) => (
            <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                {item.icon}
                <div>
                    <h4 className="text-xl font-bold text-virtus-dark">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.text}</p>
                </div>
            </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVirtus;
