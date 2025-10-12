// components/Contact.js
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Iniciemos una Conversación</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            ¿Listo para potenciar su transformación digital? Agende un diagnóstico inicial sin costo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Columna del Formulario */}
          <div className="md:w-3/5 lg:w-2/3">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700">Nombre Completo</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Corporativo</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                    placeholder="juan.perez@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">¿Cómo podemos ayudarle?</label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                    placeholder="Cuéntenos brevemente sobre su desafío o el proceso que le gustaría automatizar."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full justify-center py-3 px-6 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  Agendar Diagnóstico
                </button>
              </div>
            </form>
          </div>

          {/* Columna de Información */}
          <div className="md:w-2/5 lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">
                      <a href="tel:+593999999999" className="hover:text-blue-600">+593 99 999 9999</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:contacto@virtusecuador.com" className="hover:text-blue-600">contacto@virtusecuador.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BuildingOffice2Icon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Oficina</h4>
                    <p className="text-gray-600">
                      Quito, Ecuador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;