import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    companySize: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-virtus-detailed", ...formState })
    })
      .then(() => {
        setSubmissionStatus('success');
        setFormState({ name: '', email: '', phone: '', serviceType: '', companySize: '', message: '' });
      })
      .catch(error => {
        setSubmissionStatus('error');
        console.error(error)
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        {/* --- INICIO DE LA MEJORA CON CAL.COM --- */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-virtus-dark mb-4">{t('contact.cal.title')}</h3>
          <a
            href="https://cal.com/oliver-briceno-nzreij/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-4 px-10 rounded-full text-xl transition-transform duration-300 transform hover:scale-105"
          >
            {t('contact.cal.cta')}
          </a>
        </div>

        <div className="text-center mb-12">
            <p className="text-gray-600 font-bold">{t('contact.or')}</p>
        </div>

        <div className="flex flex-wrap-reverse lg:flex-wrap items-stretch max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 p-4">
            <form 
              name="contact-virtus-detailed" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg h-full"
            >
              <input type="hidden" name="form-name" value="contact-virtus-detailed" />
              <p className="hidden">
                <label>No llenes esto si eres humano: <input name="bot-field" /></label>
              </p>

              <div className="space-y-4">
                <input type="text" name="name" placeholder={t('contact.form.name')} value={formState.name} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" required />
                <input type="email" name="email" placeholder={t('contact.form.email')} value={formState.email} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" required />
                <input type="tel" name="phone" placeholder={t('contact.form.phone')} value={formState.phone} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" />
                <select name="serviceType" value={formState.serviceType} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" required>
                  <option value="">{t('contact.form.selectService', 'Selecciona un servicio...')}</option>
                  <option value="rpa">RPA - Automatización Robótica</option>
                  <option value="consulting">Consultoría en Automatización</option>
                  <option value="support">Soporte y Mantenimiento</option>
                  <option value="training">Capacitación a Equipos</option>
                </select>
                <select name="companySize" value={formState.companySize} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" required>
                  <option value="">{t('contact.form.companySize', 'Tamaño de tu empresa...')}</option>
                  <option value="small">1-50 empleados</option>
                  <option value="medium">51-200 empleados</option>
                  <option value="large">200+ empleados</option>
                </select>
                <textarea name="message" placeholder={t('contact.form.message')} rows="4" value={formState.message} onChange={handleChange} className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-virtus-blue" required></textarea>
              </div>
              
              <button type="submit" className="w-full mt-6 bg-virtus-dark text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300">{t('contact.form.submit')}</button>
            </form>
          </div>

          {/* Columna de Información de Contacto */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-virtus-dark text-white p-8 rounded-lg h-full flex flex-col justify-center">
                 <div className="flex items-center mb-6">
                    <FaMapMarkerAlt size={20} className="text-virtus-blue-light mr-4 flex-shrink-0" />
                    <p>Ecuador (Servicio a Nivel Nacional)</p>
                 </div>
                 <div className="flex items-center mb-6">
                    <FaPhone size={20} className="text-virtus-blue-light mr-4 flex-shrink-0" />
                    <p>+593 95 968 7438</p>
                 </div>
                 <div className="flex items-center mb-6">
                    <FaEnvelope size={20} className="text-virtus-blue-light mr-4 flex-shrink-0" />
                    <p>contacto@virtusecuador.com</p>
                 </div>
                 <div className="flex items-center">
                    <FaClock size={20} className="text-virtus-blue-light mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Horario de Atención</p>
                      <p className="text-gray-300">Lunes a Viernes: 09:00 - 18:00</p>
                    </div>
                 </div>
            </div>
          </div>
        </div>
        
        {submissionStatus === 'success' && (
            <p className="text-center mt-6 text-green-600 font-bold">¡Gracias por tu mensaje! Te contactaremos pronto.</p>
        )}
        {submissionStatus === 'error' && (
            <p className="text-center mt-6 text-red-600 font-bold">Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.</p>
        )}
      </div>
    </section>
  );
}

export default Contact;

