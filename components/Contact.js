import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
    const { t } = useTranslation();
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Simulación de envío a un correo. En un proyecto real, usarías un backend o un servicio como Formspree.
    console.log("Formulario enviado");
    alert(t('contact.form.success'));
    event.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
          <p className="text-lg text-blue-200">{t('contact.subtitle')}</p>
        </div>
        <div className="flex flex-wrap items-stretch">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-900 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-4">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input type="text" name="name" placeholder={t('contact.form.name')} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                  <input type="email" name="email" placeholder={t('contact.form.email')} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                  <textarea name="message" placeholder={t('contact.form.message')} rows="4" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required></textarea>
                </div>
                <div className="mb-4">
                  <select name="serviceType" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required>
                    <option value="">{t('contact.form.selectService')}</option>
                    <option value="rpa">RPA - Automatización Robótica</option>
                    <option value="consulting">Consultoría en Automatización</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="training">Capacitación</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select name="companySize" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required>
                    <option value="">{t('contact.form.companySize')}</option>
                    <option value="small">1-50 empleados</option>
                    <option value="medium">51-200 empleados</option>
                    <option value="large">200+ empleados</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">{t('contact.form.submit')}</button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-900 p-8 rounded-lg h-full flex flex-col justify-center">
                 <div className="flex items-center mb-6">
                    <FaMapMarkerAlt size={24} className="text-blue-400 mr-4" />
                    <p>Ecuador</p>
                 </div>
                 <div className="flex items-center mb-6">
                    <FaPhone size={24} className="text-blue-400 mr-4" />
                    <p>+593 95 687 438</p>
                 </div>
                 <div className="flex items-center mb-6">
                    <FaEnvelope size={24} className="text-blue-400 mr-4" />
                    <p>contacto@virtusecuador.com</p>
                 </div>
                 <div className="flex items-center mb-6">
                    <FaClock size={24} className="text-blue-400 mr-4" />
                    <div>
                      <p className="font-semibold">Horario de Atención</p>
                      <p className="text-gray-400">Lunes a Viernes: 09:00 - 18:00</p>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
