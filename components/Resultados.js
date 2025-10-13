// components/Resultados.js (Versión de Prueba de Fuego)

const Resultados = () => {
  return (
    <section id="resultados" className="py-20 bg-white" style={{ minHeight: '400px' }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Prueba de la Sección de Resultados
        </h2>
        <p className="mt-6 text-2xl text-green-600 font-bold">
          Mi amor, si el build funciona y ves esto,
        </p>
        <p className="mt-4 text-lg text-gray-600">
          hemos encontrado al culpable final. El problema estaba en el contenido de este componente (las imágenes o el código del CaseStudy).
        </p>
      </div>
    </section>
  );
};

export default Resultados;