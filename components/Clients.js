// components/Clients.js

const Clients = () => {
  // En lugar de logos reales, usamos placeholders que representan los sectores a los que apuntamos.
  // Esto muestra nuestro enfoque y llena el espacio de forma elegante.
  const targetIndustries = [
    'Retail & Consumo',
    'Logística',
    'Finanzas',
    'Salud',
    'Manufactura',
    'Sector Público',
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-virtus-dark mb-4">
          Construyendo Alianzas para el Futuro de Ecuador
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Nos asociamos con empresas visionarias, listas para liderar sus industrias a través de la eficiencia y la innovación.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {targetIndustries.map((industry, index) => (
            <div key={index} className="h-16 flex items-center">
              <span className="text-xl font-semibold text-gray-400 italic">{industry}</span>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a href="#contact" className="bg-virtus-blue-light text-white font-bold py-3 px-8 rounded-full hover:bg-virtus-blue transition duration-300 shadow-lg text-lg">
            Sé Nuestro Próximo Caso de Éxito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;

