import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-virtus-dark text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-between items-center text-center md:text-left">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        {/* --- ¡AQUÍ ESTÁ LA MAGIA! El logo original con su propio fondo blanco --- */}
                        <div className="inline-block bg-white p-2 rounded-md shadow-sm mx-auto md:mx-0">
                            <img src="/logo.png" alt="Virtus Tech Consulting Logo" className="h-12 w-auto" />
                        </div>
                        <p className="mt-4 text-gray-400">{t('footer.slogan')}</p>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="font-bold mb-2">Contacto Directo</h4>
                        <a href="tel:+593959687438" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white mb-2">
                            <FaPhone className="mr-2" /> +593 95 968 7438
                        </a>
                        <a href="mailto:contacto@virtusecuador.com" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white">
                            <FaEnvelope className="mr-2" /> contacto@virtusecuador.com
                        </a>
                    </div>
                    
                    <div className="w-full md:w-1/3">
                       <p className="text-lg italic text-gray-300">"{t('footer.quote')}"</p>
                    </div>
                </div>
                <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Virtus Tech Consulting. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

