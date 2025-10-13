// components/Contact.js
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation('common');
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', serviceType: '', message: ''
  });

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const inputStyles = "block w-full px-4 py-3 rounded-md bg-gray-900/70 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-virtus-blue-light focus:ring-1 focus:ring-virtus-blue-light transition duration-300";

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-100">
            Hablemos de tu <span className="text-virtus-blue-light">Próximo Proyecto</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('contact.subtitle', '¿Listo para empezar? Contáctanos o agenda una reunión de 30 minutos.')}</p>
        </div>

        {/* Unified Contact Card */}
        <div className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            
            {/* Columna de Información (Ahora a la izquierda) */}
            <div className="md:w-2/5 lg:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Información Directa</h3>
                <div className="space-y-6">
                  <div className="flex items-start"><FaMapMarkerAlt size={20} className="text-virtus-blue-light mr-4 flex-shrink-0 mt-1" /><p>Ecuador (Servicio a Nivel Nacional)</p></div>
                  <div className="flex items-start"><FaPhone size={20} className="text-virtus-blue-light mr-4 flex-shrink-0 mt-1" /><p>+593 95 968 7438</p></div>
                  <div className="flex items-start"><FaEnvelope size={20} className="text-virtus-blue-light mr-4 flex-shrink-0 mt-1" /><p>contacto@virtusecuador.com</p></div>
                  <div className="flex items-start"><FaClock size={20} className="text-virtus-blue-light mr-4 flex-shrink-0 mt-1" /><div><p className="font-semibold">Horario de Atención</p><p className="text-gray-400">Lunes a Viernes: 09:00 - 18:00</p></div></div>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                 <h4 className="text-lg font-semibold text-white mb-3">{t('contact.cal.title', '¿Prefieres agendar?')}</h4>
                 <a
                    href="https://cal.com/oliver-briceno-nzreij/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-virtus-blue-light hover:bg-opacity-90 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {t('contact.cal.cta', 'Agendar Reunión')}
                  </a>
              </div>
            </div>

            {/* Columna del Formulario (Ahora a la derecha) */}
            <div className="md:w-3/5 lg:w-2/3">
              <form 
                name="contact-virtus-detailed" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact-virtus-detailed" />
                <p className="hidden"><label>No llenes esto si eres humano: <input name="bot-field" /></label></p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder={t('contact.form.name', 'Nombre Completo')} value={formState.name} onChange={handleChange} className={inputStyles} required />
                  <input type="email" name="email" placeholder={t('contact.form.email', 'Correo Electrónico')} value={formState.email} onChange={handleChange} className={inputStyles} required />
                </div>
                <input type="tel" name="phone" placeholder={t('contact.form.phone', 'Teléfono (Opcional)')} value={formState.phone} onChange={handleChange} className={inputStyles} />
                <select name="serviceType" value={formState.serviceType} onChange={handleChange} className={inputStyles} required>
                  <option value="">{t('contact.form.selectService', 'Selecciona un servicio de interés...')}</option>
                  <option value="rpa">RPA - Automatización Robótica</option>
                  <option value="consulting">Consultoría en Automatización</option>
                  <option value="support">Soporte y Mantenimiento</option>
                  <option value="training">Capacitación a Equipos</option>
                </select>
                <textarea name="message" placeholder={t('contact.form.message', 'Cuéntanos sobre tu proyecto...')} rows="5" value={formState.message} onChange={handleChange} className={inputStyles} required></textarea>
                
                <button type="submit" className="w-full mt-6 px-8 py-3 font-semibold border border-virtus-blue-light rounded-lg text-virtus-blue-light transition-all duration-300 hover:bg-virtus-blue-light hover:text-gray-900 hover:shadow-lg hover:shadow-virtus-blue-light/20">
                  {t('contact.form.submit', 'Enviar Mensaje')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;