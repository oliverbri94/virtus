import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const phoneNumber = "593959687438"; // Reemplaza con tu número de teléfono
  const message = t('Hola. Quisiera más información sobre sus servicios.');
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-5 right-5 bg-virtus-blue text-white p-4 rounded-full shadow-lg hover:bg-virtus-blue-light transition duration-300 z-40 flex items-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
