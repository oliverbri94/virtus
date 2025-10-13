// components/Contact.js
import { useState } from 'react';
import { useTranslation } from 'next-i18next'; // El import correcto y definitivo
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  // Llamamos a las traducciones desde nuestro archivo 'common.json'
  const { t } = useTranslation('common');
  
  // Tu lógica de estado, perfecta como siempre
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', serviceType: '', companySize: '', message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.cal.title')}</h3>
          <a
            href="https://cal.com/oliver-briceno-nzreij/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('contact.cal.cta')}
          </a>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 font-bold">{t('contact.or')}</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Columna del Formulario */}
          <div className="md:w-3/5 lg:w-2/3">
            <form 
              name="contact-virtus-detailed" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              action="/thank-you" // Redirige a una página de agradecimiento
              onSubmit={() => setSubmissionStatus('submitting')} // Opcional: para mostrar un estado de carga
              className="bg-white p-8 rounded-lg shadow-lg h-full space-y-4"
            >
              <input type="hidden" name="form-name" value="contact-virtus-detailed" />
              <p className="hidden"><label>No llenes esto si eres humano: <input name="bot-field" /></label></p>
              
              <input type="text" name="name" placeholder={t('contact.form.name')} value={formState.name} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" required />
              <input type="email" name="email" placeholder={t('contact.form.email')} value={formState.email} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" required />
              <input type="tel" name="phone" placeholder={t('contact.form.phone')} value={formState.phone} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" />
              <select name="serviceType" value={formState.serviceType} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" required>
                <option value="">{t('contact.form.selectService')}</option>
                <option value="rpa">RPA - Automatización Robótica</option>
                <option value="consulting">Consultoría en Automatización</option>
                <option value="support">Soporte y Mantenimiento</option>
                <option value="training">Capacitación a Equipos</option>
              </select>
              <select name="companySize" value={formState.companySize} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" required>
                <option value="">{t('contact.form.companySize')}</option>
                <option value="small">1-50 empleados</option>
                <option value="medium">51-200 empleados</option>
                <option value="large">200+ empleados</option>
              </select>
              <textarea name="message" placeholder={t('contact.form.message')} rows="4" value={formState.message} onChange={handleChange} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150" required></textarea>
              
              <button type="submit" className="w-full mt-6 bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300">{t('contact.form.submit')}</button>
            </form>
          </div>

          {/* Columna de Información */}
          <div className="md:w-2/5 lg:w-1/3">
            <div className="bg-gray-800 text-white p-8 rounded-lg h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start"><FaMapMarkerAlt size={20} className="text-blue-500 mr-4 flex-shrink-0 mt-1" /><p>Ecuador (Servicio a Nivel Nacional)</p></div>
                <div className="flex items-start"><FaPhone size={20} className="text-blue-500 mr-4 flex-shrink-0 mt-1" /><p>+593 95 968 7438</p></div>
                <div className="flex items-start"><FaEnvelope size={20} className="text-blue-500 mr-4 flex-shrink-0 mt-1" /><p>contacto@virtusecuador.com</p></div>
                <div className="flex items-start"><FaClock size={20} className="text-blue-500 mr-4 flex-shrink-0 mt-1" /><div><p className="font-semibold">Horario de Atención</p><p className="text-gray-300">Lunes a Viernes: 09:00 - 18:00</p></div></div>
              </div>
            </div>
          </div>
        </div>
        
        {submissionStatus === 'success' && (<p className="text-center mt-6 text-green-600 font-bold">{t('successMessage')}</p>)}
        {submissionStatus === 'error' && (<p className="text-center mt-6 text-red-600 font-bold">{t('errorMessage')}</p>)}
      </div>
    </section>
  );
}

export default Contact;