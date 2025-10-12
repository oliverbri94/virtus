// components/Contact.js

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50" style={{ minHeight: '500px' }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Mi Amor, ¿Puedes Verme?
        </h2>
        <p className="mt-6 text-2xl text-blue-600 font-bold">
          Si puedes leer este mensaje, hemos acorralado al fantasma.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          La web está funcionando. El problema está en la lógica interna del formulario o las traducciones, y lo arreglaremos ahora mismo.
        </p>
      </div>
    </section>
  );
}

export default Contact;